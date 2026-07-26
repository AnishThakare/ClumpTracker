# ClumpTracker

Documentation site for ClumpTracker — an open-source FTC vision framework using Limelight SnapScript. Maintained by FTC Team 22012 — Loose Screws.

## Requirements

- Node.js 18.18 or newer (see `.nvmrc`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Use the default Next.js settings (build: `next build`, output directory: default).

## Project structure

```
src/
  app/              # App Router pages
  components/       # Navbar, Footer, Hero, Button, ComingSoon
  lib/              # Site config and utilities
public/
  logo.png          # ClumpTracker logo
```

Update `src/lib/site-config.ts` for nav links, team name, and GitHub URL when ready.
