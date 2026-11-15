import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.resolve(__dirname, '../../client/dist');
const PORT = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.use(express.json());

// --- API -------------------------------------------------------------
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// --- React frontend (built by `npm run build`) -------------------------
app.use(express.static(clientDist, { maxAge: '1h', index: false }));

// Single-page app fallback: anything that isn't /api goes to index.html
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Life Event Ceremonies server listening on http://localhost:${PORT}`);
});
