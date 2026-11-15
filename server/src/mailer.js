// Sends enquiry notifications through Resend's HTTPS API (https://resend.com).
// GoDaddy shared hosting restricts outbound SMTP and Microsoft 365 disables
// SMTP AUTH by default, so an HTTPS email API is the reliable route.
// Optional: only used when RESEND_API_KEY is set.
import { ENQUIRY_TYPES } from './enquiries.js';

export const emailConfigured = () => Boolean(process.env.RESEND_API_KEY);

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function formatDate(iso) {
  if (!iso) return 'Not set';
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export async function sendEnquiryEmail(e) {
  const type = ENQUIRY_TYPES[e.ceremonyType] || e.ceremonyType;
  const rows = [
    ['Name', `${e.firstName} ${e.lastName}`],
    ['Email', e.email],
    ['Phone', e.phone],
    ['Ceremony', type],
    ['Date', formatDate(e.date)],
    ['Where', e.location || 'Not set'],
    ['Heard about you', e.heardFrom || 'Not set'],
  ];
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#22302a;line-height:1.5">
      <h2 style="color:#2f4f42;margin:0 0 12px">New ${esc(type.toLowerCase())} enquiry from ${esc(e.firstName)}</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows.map(([k, v]) => `<tr><td style="color:#5d6b63;vertical-align:top"><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('')}
      </table>
      <h3 style="color:#2f4f42;margin:18px 0 6px">Their message</h3>
      <p style="white-space:pre-wrap;margin:0">${esc(e.message)}</p>
      <p style="color:#5d6b63;font-size:13px;margin-top:24px">Reply to this email to answer ${esc(e.firstName)} directly.</p>
    </div>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMessage:\n${e.message}`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM || 'Life Event Ceremonies website <enquiries@lifeeventceremonies.com.au>',
      to: (process.env.ENQUIRY_TO || 'hello@lifeeventceremonies.com.au').split(',').map((s) => s.trim()),
      reply_to: `${e.firstName} ${e.lastName} <${e.email}>`,
      subject: `New enquiry: ${type}, ${e.firstName} ${e.lastName}${e.date ? `, ${formatDate(e.date)}` : ''}`,
      html,
      text,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}
