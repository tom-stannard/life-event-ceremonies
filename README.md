# Michelle Anne – Life Event Ceremonies

Website for Michelle's celebrancy business: <https://lifeeventceremonies.com.au/>

A Node.js (Express) server that serves a React (Vite) site, prerendered to static HTML for search engines, plus a small JSON API for the contact form.

## Structure

```
.
├── client/                 React site (Vite)
│   ├── public/             Static files: brand/ (logo files), images/ (web photos), favicon
│   ├── scripts/prerender.mjs  Writes one HTML file per page + sitemap after the build
│   └── src/
│       ├── content/        All site copy: ceremonies, locations, FAQs, testimonials, home
│       ├── components/     Header, footer, contact form, photo, etc.
│       ├── pages/          Home, ceremony, location, FAQ, testimonials, 404
│       ├── siteConfig.js   Business name, contact details, links
│       ├── routes.js       Every page's URL, title and description
│       └── styles.css      All styles (mobile first)
├── server/src/             Express: static site, /api/enquiries, MySQL + email
├── scripts/                Logo generator and photo optimiser
├── docs/                   Project context and reference material
└── local assets/           Original photos and documents (gitignored)
```

## Getting started

Requires Node.js 20+ (see `.nvmrc`).

```bash
npm install        # installs client + server dependencies
npm run dev        # server on :3000, React dev server on :5173 (open this one)
```

## Production

```bash
npm run build      # builds and prerenders the site into client/dist
npm start          # Express serves the site + /api on $PORT (default 3000)
```

Health check: `GET /api/health`. The contact form needs email and/or database settings; see `.env.example` and "Enquiries and email" in `docs/project-context.md`.

## Editing content

- Words: `client/src/content/*.js` and `client/src/siteConfig.js`.
- Photos: add to `scripts/images.json`, then `npm run images`.
- Logo: `npm run logo` regenerates the files in `client/public/brand/`.

## Hosting

GoDaddy Economy plan, running as a cPanel Node.js app that tracks `main`. Publishing is manual from the GoDaddy panel.
See [`docs/project-context.md`](docs/project-context.md) for details.

## Project docs

- [`CLAUDE.md`](CLAUDE.md): working rules for AI agents
- [`docs/project-context.md`](docs/project-context.md): business details, site requirements, hosting, brand, decisions
- [`docs/content-to-confirm.md`](docs/content-to-confirm.md): copy that still needs Michelle's sign-off
- [`docs/reference-sites.md`](docs/reference-sites.md): voice and content model
- [`docs/testimonials.md`](docs/testimonials.md): all reviews and how to use them
- [`docs/legacy-site-copy.md`](docs/legacy-site-copy.md): text from the old site, kept for reference
