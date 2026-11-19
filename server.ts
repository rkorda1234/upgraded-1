import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import chatHandler from "./api/chat";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// API Google Reviews proxy endpoint
app.get("/api/google-reviews", async (req: express.Request, res: express.Response) => {
  try {
    const { placeId } = req.query;

    if (!placeId || typeof placeId !== "string") {
      res.status(400).json({ error: "placeId query parameter is required." });
      return;
    }

    const mapsApiKey = process.env.GOOGLE_MAPS_PLATFORM_KEY || process.env.GOOGLE_MAPS_API_KEY;

    if (!mapsApiKey) {
      res.status(400).json({ 
        error: "Google Maps API Key is not configured on the server. Please define GOOGLE_MAPS_PLATFORM_KEY in your environment variables." 
      });
      return;
    }

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?key=${mapsApiKey}`,
      {
        headers: {
          "X-Goog-FieldMask": "reviews,rating,userRatingCount,displayName,formattedAddress",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      res.status(response.status).json({ 
        error: `Google Places API returned an error: ${response.statusText}`, 
        details: errText 
      });
      return;
    }

    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.error("Error fetching Google Reviews:", error);
    res.status(500).json({ error: error.message || "An error occurred while fetching reviews from Google." });
  }
});

// API chat endpoint: same handler (and abuse limits) as the Vercel function
app.post("/api/chat", chatHandler);

// Set up Vite middleware or serve static files
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
