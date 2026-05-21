# Deploying Scuba Adventures

The default setup uses **Node standalone** (`astro.config.mjs` + `@astrojs/node`), which is best for SQLite, file uploads, and VPS/Docker hosting.

## Quick start (Docker — recommended)

```bash
cp .env.example .env
npm run seed
docker compose up --build
```

Open http://localhost:4321

Persisted volumes: `local.db`, `public/uploads/`

## Node / VPS (no Docker)

```bash
npm install --legacy-peer-deps
npm run seed
npm run build
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs
```

Set in `.env`:

- `PUBLIC_SITE_URL` — your public URL (used after reservations)
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — for `npm run seed`

Bookings are **reservation-only** (no online payment). Users sign in and reserve a seat; admins are notified.

## Vercel

1. Install adapter: `npm install @astrojs/vercel --save-dev --legacy-peer-deps`
2. Build with: `npm run build:vercel` (uses `astro.config.vercel.mjs`)
3. Connect repo in Vercel; use `vercel.json` settings

**Note:** SQLite on serverless is ephemeral unless you attach external storage (Turso, Neon, etc.). Prefer Docker/VPS for production with the current schema.

## Netlify

1. Install adapter: `npm install @astrojs/netlify --save-dev --legacy-peer-deps`
2. Build with: `npm run build:netlify` (uses `astro.config.netlify.mjs`)
3. Deploy via Netlify CLI or Git integration; `netlify.toml` is included

Same SQLite caveat as Vercel — use external DB for persistent production data.

## Admin

After seed: sign in as `admin@scubaadventures.com` / `AdminPass123` (or your `.env` values) → Admin panel for CRUD and image uploads.
