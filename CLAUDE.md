# Upgraded RE Academy website

Marketing site for Upgraded, a real estate licensing and professional
development academy. Originally generated in Google AI Studio; now maintained
from this GitHub repo and deployed by Vercel.

## How changes go live

Vercel watches this repo. A push to `main` deploys to the live site; a push to
any other branch gets its own preview URL. Make changes on a branch, check the
preview, then merge to `main`.

## Workflow for the people editing this site

The people asking for changes are not developers and don't use git or GitHub
themselves. Handle every step for them:

1. Make the requested change on a branch, run `npm run lint`, and push.
2. Open a pull request into `main` and wait for Vercel to post its preview
   link on it. Give the user that preview link in plain language and tell
   them nothing is live yet.
3. When the user says to publish, go live, merge or similar, merge the pull
   request into `main` yourself. The user asking is the approval. Before
   merging, check that the Vercel build passed and that the pull request has
   no merge conflicts. If either fails, fix it first or explain the problem
   in plain language.
4. After merging, tell the user the change will be live on the site in a
   minute or two.

Never merge without the user asking in that session. If a merge conflict
appears because someone else changed the same part of the site, merge `main`
into the branch, resolve the conflict, and push again before merging.

## Commands

- `npm install` — install dependencies
- `npm run dev` — local dev server on port 3000 (Express + Vite, `server.ts`)
- `npm run build` — production build into `dist/`
- `npm run lint` — type-check (`tsc --noEmit`); run before pushing

## Layout

- `src/App.tsx` — the whole site shell: header, footer, home page, and view
  switching. There is no router; `activeView` state picks which view renders
  (`home`, `courses`, `licensing`, `pro_dev`, `leadership`, `contact`,
  `policy`, `thank_you`, `waiting_list_thank_you`).
- `src/components/*View.tsx` — one file per page.
- `src/data/courses.ts` — course catalogue (names, prices, hours, badges).
  `src/data/coursesSpanish.ts` holds the Spanish versions. Edit both when a
  course changes.
- `src/i18n/translations.ts` + `src/context/LanguageContext.tsx` — English /
  Spanish UI text. Any new visible text needs both languages.
- `api/*.ts` — Vercel serverless functions used in production:
  `chat.ts` (AI chat assistant, Google Gemini), `google-reviews.ts` (Google
  Places reviews), `health.ts`.
- `server.ts` — the same API routes as an Express server, used only for local
  dev. Keep it in sync with `api/` when changing an endpoint.
- `public/` and `src/assets/images/` — images. Leadership headshots and the
  favicon are loaded from remote URLs, not from these folders.

## External services

- **Vercel** — hosting. Environment variables are set in the Vercel project
  settings, never in the repo: `GEMINI_API_KEY` (chat) and
  `GOOGLE_MAPS_PLATFORM_KEY` (reviews). Without them the chat and reviews
  widgets fail but the rest of the site works.
- **GoHighLevel / LeadConnector** — the contact form
  (`ContactView.tsx`), waiting-list form (`GHLWaitingListModal.tsx`) and the
  chat bubble (`index.html`) are embeds identified by form/widget IDs. The
  forms themselves are edited in GoHighLevel, not here.

## Conventions

- Styling is Tailwind CSS v4 utility classes inline in the components.
- Animations use `motion`; icons use `lucide-react`.
- Never commit API keys or `.env` files.
