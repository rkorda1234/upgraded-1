import { GoogleGenAI } from "@google/genai";

// Gemini client, created on first use so the key is read at request time.
let ai: GoogleGenAI | null = null;

function getAi(): GoogleGenAI | null {
  if (!ai && process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
}

// ---------------------------------------------------------------------------
// Abuse protection. This endpoint spends money on every call, so it only
// accepts requests from this site's own pages and caps how much any one
// visitor (and any one server instance) can use.
// ---------------------------------------------------------------------------

const MAX_MESSAGES = 20;          // conversation turns sent to Gemini (older ones are dropped)
const MAX_MESSAGE_CHARS = 2000;   // longest single message accepted
const MAX_TOTAL_CHARS = 12000;    // whole conversation size accepted
const MAX_OUTPUT_TOKENS = 1024;   // longest reply Gemini may generate

const PER_VISITOR_PER_MINUTE = 6;
const PER_VISITOR_PER_HOUR = 40;
const PER_INSTANCE_PER_HOUR = 400; // backstop if many addresses are used at once

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;

// In-memory counters. Each server instance keeps its own, so this is a
// best-effort limit, but it stops a single script from looping freely.
const visitorHits = new Map<string, number[]>();
let instanceHits: number[] = [];

function headerValue(value: unknown): string {
  if (Array.isArray(value)) return String(value[0] ?? "");
  return typeof value === "string" ? value : "";
}

function hostOf(url: string): string {
  try {
    return new URL(url).host.toLowerCase();
  } catch {
    return "";
  }
}

/** True when the request comes from a page on the same site that served it. */
function isSameSite(req: any): boolean {
  const host = (headerValue(req.headers["x-forwarded-host"]) || headerValue(req.headers.host))
    .split(",")[0].trim().toLowerCase();
  if (!host) return false;

  const origin = headerValue(req.headers.origin);
  if (origin) return hostOf(origin) === host;

  // Some browsers omit Origin on same-origin requests; fall back to Referer.
  const referer = headerValue(req.headers.referer);
  return referer !== "" && hostOf(referer) === host;
}

function visitorId(req: any): string {
  const forwarded = headerValue(req.headers["x-forwarded-for"]).split(",")[0].trim();
  return forwarded || headerValue(req.headers["x-real-ip"]) || req.socket?.remoteAddress || "unknown";
}

/** Records a hit and returns true if the caller is over a limit. */
function isRateLimited(id: string, now: number): boolean {
  instanceHits = instanceHits.filter((t) => now - t < HOUR);
  if (instanceHits.length >= PER_INSTANCE_PER_HOUR) return true;

  const hits = (visitorHits.get(id) ?? []).filter((t) => now - t < HOUR);
  const lastMinute = hits.filter((t) => now - t < MINUTE).length;
  if (lastMinute >= PER_VISITOR_PER_MINUTE || hits.length >= PER_VISITOR_PER_HOUR) {
    visitorHits.set(id, hits);
    return true;
  }

  hits.push(now);
  visitorHits.set(id, hits);
  instanceHits.push(now);

  // Keep the map from growing without bound.
  if (visitorHits.size > 5000) {
    for (const [key, times] of visitorHits) {
      if (times.every((t) => now - t >= HOUR)) visitorHits.delete(key);
    }
  }
  return false;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  if (!isSameSite(req)) {
    return res.status(403).json({ error: "Forbidden." });
  }

  if (isRateLimited(visitorId(req), Date.now())) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({ error: "Too many messages. Please wait a minute and try again." });
  }

  try {
    const { messages } = req.body ?? {};

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid request. 'messages' array is required." });
    }

    const recent = messages.slice(-MAX_MESSAGES);
    let totalChars = 0;
    for (const m of recent) {
      if (!m || typeof m.content !== "string") {
        return res.status(400).json({ error: "Invalid message format." });
      }
      if (m.content.length > MAX_MESSAGE_CHARS) {
        return res.status(413).json({ error: "Message is too long." });
      }
      totalChars += m.content.length;
    }
    if (totalChars > MAX_TOTAL_CHARS) {
      return res.status(413).json({ error: "Conversation is too long." });
    }

    const ai = getAi();
    if (!ai) {
      return res.status(503).json({
        error: "AI Service is not configured. Please set GEMINI_API_KEY in Vercel environment variables."
      });
    }

    // Format chat history for @google/genai generateContent API
    const contents = recent.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    const systemInstruction =
      "You are Upgraded AI, an elegant digital concierge for Upgraded Real Estate. " +
      "Upgraded is a modern technology company transforming professional real estate education, not a traditional real estate school. " +
      "Our brand tagline is 'Where Modern Agents Upgrade Themselves.' " +
      "We offer premium Florida Licensing Education (63-Hour Sales Associate Pre-License, 14-Hour Continuing Education, 45-Hour Post-License) " +
      "and cutting-edge Professional Development (AI for Real Estate Professionals, Marketing & Business Growth, Business Planning). " +
      "Your tone must be highly premium, minimalist, elegant, future-focused, trustworthy, and intelligent. " +
      "Keep responses relatively short, highly structured, clean, and inspiring. Guide the user to explore our learning paths, licensing education, or professional development programs. " +
      "Only discuss Upgraded, real estate licensing, and real estate careers; politely decline unrelated requests.";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: MAX_OUTPUT_TOKENS,
      }
    });

    return res.status(200).json({
      content: response.text || "I'm sorry, I couldn't generate a response."
    });
  } catch (error: any) {
    console.error("Gemini API Error in Vercel handler:", error);
    return res.status(500).json({ error: "An error occurred during generation." });
  }
}
