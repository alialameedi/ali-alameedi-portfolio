# Ali Alameedi Portfolio

A clean, modern portfolio website for Ali Alameedi, highlighting expertise in HPC, AI-augmented engineering, distributed systems, and platform engineering.

## What’s included

- Lightweight Next.js app using the `app` router
- Tab-style navigation with separate pages for Home, About, Focus, Projects, Experience, and Contact
- Refreshed light visual design with a welcoming hero, profile image, and concise messaging
- Contact system that reveals the email address with a copy icon and a success/failure toast
- Clear portfolio sections for focus areas, featured projects, experience, and education
- Clean repository structure with source files under `src/` and static assets in `public/`

## Highlights

- `src/app` contains the Next.js application entrypoints
- `src/components` contains shared UI pieces and section components
- `public/images/ali-alameedi.jpeg` serves the profile photo
- `package.json` includes build and development scripts for Next.js

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm start
```

## Deploy to Cloudflare Workers

This project is configured for OpenNext Cloudflare deployment with `@opennextjs/cloudflare` using the simplest possible setup.

Follow these cleanup and deployment steps:

1. Ignore generated Cloudflare/OpenNext files and directories: `/.open-next/`, `/.next/`, `/dist/`, `/build/`, `/.wrangler/`, `node_modules/`.
2. Keep `wrangler.toml` minimal with only `name` and `compatibility_date`.
3. Keep `open-next.config.ts` minimal or remove it entirely; if present, it should only export `defineCloudflareConfig({})`.
4. Build the app locally with:

```bash
npm run build
```

5. Deploy using the OpenNext Cloudflare CLI:

```bash
npm run deploy
```

6. Do not add custom worker entrypoints, R2 caching, durable objects, `build.upload`, or service-worker mode configuration.

This repo should contain only the Next.js source, `package.json`, `next.config.ts`, `wrangler.toml`, and optionally a minimal OpenNext config.

## Contact

Email: `alialameedi@outlook.com`

If you want to update the site, edit the section files in `src/components/sections` or the global styles in `src/app/globals.css`.
