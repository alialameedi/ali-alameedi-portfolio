# Ali Alameedi Portfolio

A source-of-truth portfolio website for Ali Alameedi, designed to reinforce a unified engineering identity across SEO, GitHub, LinkedIn, and recruiter-facing channels. The portfolio emphasizes Java, Spring Boot, cloud platforms (Azure/AWS), distributed systems, backend architecture, platform engineering, AI tooling, prompt engineering, and multi-agent synchronization.

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

## Deploy

This project is configured as a static Next.js export for Cloudflare Pages.

Build the app locally with:

```bash
npm run build
```

The generated static site will be output to `out/`.

Cloudflare Pages can deploy the `out/` directory directly with the following flow:

1. `npm install`
2. `npm run build`
3. deploy `out/`

This repo contains only the Next.js source, package files, and standard config.

## Contact

Email: `alialameedi@outlook.com`

If you want to update the site, edit the section files in `src/components/sections` or the global styles in `src/app/globals.css`.
