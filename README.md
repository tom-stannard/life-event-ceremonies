# Michelle Anne – Life Event Ceremonies

Website for Michelle's celebrancy business: <https://www.lifeeventceremonies.com.au/>

A Node.js (Express) server that serves a React (Vite) frontend and a small JSON API.
Currently shows a **coming soon** page.

## Structure

```
.
├── client/            React frontend (Vite)
│   ├── public/        Static files copied as-is (favicon, images)
│   └── src/
│       ├── App.jsx        Coming soon page
│       ├── App.css        Styles
│       └── siteConfig.js  Business name, contact details, ceremony list
├── server/            Express server
│   └── src/index.js   API routes + serves client/dist in production
└── package.json       npm workspaces + top-level scripts
```

## Getting started

Requires Node.js 20+ (see `.nvmrc`).

```bash
npm install        # installs client + server dependencies
npm run dev        # server on :3000, React dev server on :5173 (open this one)
```

## Production

```bash
npm run build      # builds React into client/dist
npm start          # Express serves the site + /api on $PORT (default 3000)
```

Health check: `GET /api/health`

## Editing content

Contact details (email, phone, socials) live in `client/src/siteConfig.js`.
Anything left as `null` is hidden on the page.

## Hosting

Domain and hosting are with GoDaddy. Deployment steps to be added once the hosting
plan is confirmed (cPanel "Setup Node.js App" vs. a VPS).
