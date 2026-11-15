// POST /api/enquiries: the contact form.
// Each enquiry is validated, saved to MySQL (when configured) and emailed to
// the business (when configured). It succeeds if at least one of those worked,
// so no enquiry is silently lost. See docs/project-context.md "Enquiries and email".
import { Router } from 'express';
import { saveEnquiry, dbConfigured } from './db.js';
import { sendEnquiryEmail, emailConfigured } from './mailer.js';

export const ENQUIRY_TYPES = {
  wedding: 'Wedding',
  'vow-renewal': 'Vow renewal',
  naming: 'Naming ceremony',
  funeral: 'Funeral or memorial',
  other: 'Something else',
};

const limits = { firstName: 80, lastName: 80, email: 200, phone: 40, location: 200, message: 5000, heardFrom: 200 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(body) {
  const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
  const e = {
    firstName: clean(body.firstName, limits.firstName),
    lastName: clean(body.lastName, limits.lastName),
    email: clean(body.email, limits.email),
    phone: clean(body.phone, limits.phone),
    ceremonyType: clean(body.ceremonyType, 40),
    date: clean(body.date, 10),
    location: clean(body.location, limits.location),
    message: clean(body.message, limits.message),
    heardFrom: clean(body.heardFrom, limits.heardFrom),
  };
  const missing = ['firstName', 'lastName', 'email', 'phone', 'ceremonyType', 'message'].filter((k) => !e[k]);
  if (missing.length) return { error: 'Please fill in all the required fields.' };
  if (!EMAIL_RE.test(e.email)) return { error: 'Please check your email address.' };
  if (!/\d{6,}/.test(e.phone.replace(/\D/g, ''))) return { error: 'Please check your phone number.' };
  if (!ENQUIRY_TYPES[e.ceremonyType]) return { error: 'Please choose a ceremony type.' };
  if (e.date && !/^\d{4}-\d{2}-\d{2}$/.test(e.date)) e.date = '';
  return { enquiry: e };
}

// Simple in-memory rate limit: 5 enquiries per IP per 10 minutes.
const recent = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < 10 * 60_000);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > 5;
}

export const enquiriesRouter = Router();

enquiriesRouter.post('/', async (req, res) => {
  const body = req.body || {};
  // Honeypot: bots fill every field. Pretend it worked.
  if (body.website) return res.json({ ok: true });
  if (rateLimited(req.ip)) return res.status(429).json({ error: 'Too many enquiries in a short time.' });

  const { enquiry, error } = validate(body);
  if (error) return res.status(400).json({ error });

  let saved = false;
  let emailed = false;

  if (dbConfigured()) {
    try {
      await saveEnquiry(enquiry);
      saved = true;
    } catch (err) {
      console.error('Enquiry: database save failed', err.message);
    }
  }
  if (emailConfigured()) {
    try {
      await sendEnquiryEmail(enquiry);
      emailed = true;
    } catch (err) {
      console.error('Enquiry: email failed', err.message);
    }
  }

  if (saved || emailed) return res.json({ ok: true });

  if (!dbConfigured() && !emailConfigured() && process.env.NODE_ENV !== 'production') {
    console.log('Enquiry (dev, not stored or sent):', enquiry);
    return res.json({ ok: true, dev: true });
  }

  console.error('Enquiry LOST: no storage or email succeeded', JSON.stringify(enquiry));
  return res.status(503).json({ error: 'Your enquiry didn’t send.' });
});
