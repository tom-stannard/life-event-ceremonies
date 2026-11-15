import fs from 'node:fs';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { enquiriesRouter } from './enquiries.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load server/.env or the repo-root .env in local development. In production
// (GoDaddy cPanel) set environment variables in the Node.js app settings instead.
for (const envFile of [path.resolve(__dirname, '../.env'), path.resolve(__dirname, '../../.env')]) {
  if (fs.existsSync(envFile) && typeof process.loadEnvFile === 'function') process.loadEnvFile(envFile);
}

const clientDist = path.resolve(__dirname, '../../client/dist');
const PORT = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true); // behind cPanel's proxy: real client IP + protocol

// One canonical address: send www.lifeeventceremonies.com.au to the bare domain.
app.use((req, res, next) => {
  if (req.hostname?.startsWith('www.')) {
    return res.redirect(301, `https://${req.hostname.slice(4)}${req.originalUrl}`);
  }
  next();
});

// --- API -------------------------------------------------------------
app.use('/api', express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/api/enquiries', enquiriesRouter);

app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

// API errors (e.g. malformed JSON) as JSON, without stack traces.
app.use('/api', (err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  if (status >= 500) console.error(err);
  res.status(status).json({ error: status < 500 ? 'Invalid request.' : 'Something went wrong.' });
});

// --- Website (prerendered by `npm run build`) ---------------------------
// Hashed assets can be cached for a long time; pages are revalidated.
app.use(
  '/assets',
  express.static(path.join(clientDist, 'assets'), { maxAge: '1y', immutable: true, fallthrough: false }),
);
app.use(
  express.static(clientDist, {
    extensions: ['html'], // /weddings → weddings.html
    maxAge: '1h',
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache');
    },
  }),
);

// Trailing slashes: /weddings/ → /weddings
app.get(/.+\/$/, (req, res) => res.redirect(301, req.path.replace(/\/+$/, '') + req.url.slice(req.path.length)));

// Anything else is a 404 page.
app.use((_req, res) => {
  const notFound = path.join(clientDist, '404.html');
  if (fs.existsSync(notFound)) res.status(404).sendFile(notFound);
  else res.status(404).send('Not found. Run `npm run build` to build the website.');
});

app.listen(PORT, () => {
  console.log(`Life Event Ceremonies server listening on http://localhost:${PORT}`);
});
