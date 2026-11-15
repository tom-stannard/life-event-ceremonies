# Project context

What we know about the business, the site and how it's run. This file is the
single source of truth for project facts and decisions: when the owner gives new
context, record it here (or update the line it changes) in the same session.

## Business

- **Michelle Anne – Life Event Ceremonies**: a celebrant based in Spring Farm, NSW (Australia).
- Domain: <https://lifeeventceremonies.com.au/> (www also serves the site; no redirect to the main address yet).
- Tone of the old site: warm, personal, first-person ("I"), sign-off line _"Your ceremony – your way."_
- Use Australian English spelling (e.g. "organise", "colour").

### Contact details

| | |
|---|---|
| Location | Spring Farm, NSW |
| Email | hello@lifeeventceremonies.com.au |
| Phone | 0412 235 472 |
| Facebook | https://www.facebook.com/people/Michelle-Anne-Celebrant-Life-Event-Ceremonies/100085498419318/ |
| Instagram | https://www.instagram.com/michelleannecelebrant |

On the site these details come from `client/src/siteConfig.js` (added 2026-11-15). Update both places together.

## Site requirements

The old site has been decommissioned. Its copy and testimonials are in [`legacy-site-copy.md`](legacy-site-copy.md). Treat it as a reference: the copy may be revised, but every page it had stays, with written content.

The owner likes two reference sites (content only, not design): cindycheriechilds.au is the model for **structure**, and marrymenicky.com.au is the model for **written voice and vibe**. The surveys and our agreed voice are in [`reference-sites.md`](reference-sites.md).

### Pages (agreed 2026-11-15)

1. **Home**: includes the About section (no separate About page for now) and testimonials.
2. **Ceremony pages**, one per type, all using the same template:
   - Weddings
   - Vow Renewals
   - Baby Naming Ceremonies
   - Funerals
   - Other Ceremonies (new). Base the content on cindycheriechilds.au's page for now: commitment ceremonies, home blessings, blended family rituals, personal milestones, symbolic rituals. Write it in our own words.
3. **Location pages** for local SEO, one per service area: Camden, Campbelltown, Wollondilly, South West Sydney. Each needs copy specific to its area, and they should be linked from the footer and the ceremony pages.
4. **FAQs**, covering all ceremony types.
5. **Testimonials**: 22 so far (6 from the old site, 16 from Google). See [`testimonials.md`](testimonials.md).

**No pricing or packages are shown** for now (owner's decision, 2026-11-15).

### Build requirements (owner's direction, 2026-11-15)

- **Mobile first:** many visitors will browse on phones. Design and test every page at phone width first.
- **New logo** for Life Event Ceremonies: simple, elegant, wholesome, and includes the business name.
- **Contact form → email:** submissions must reach the business email (hello@lifeeventceremonies.com.au). Required for the MVP.
- **Admin view (after the MVP, nice to have):** Michelle logs in to view and manage enquiries: reply, schedule, delete. See "Enquiries and email" below.

### On every page

- **Contact details** (the table above).
- **Contact form** capturing first name, last name, email, contact number, the service being enquired about (wedding / vow renewal / baby naming / funeral / other), and a free-text message (what, when, where).

## Hosting and deployment

- Hosted on a **GoDaddy Economy** plan (cPanel), running as a cPanel **Node.js app** that tracks the `main` branch of `github.com/tom-stannard/life-event-ceremonies`.
- **Deploying is manual:** pushing to `main` does not update the live site. The owner deploys by clicking **Publish** in the GoDaddy control panel. After pushing, tell the owner the push is ready to publish.
- `main` is what goes live when published, so keep it deployable.
- The app currently shows the coming soon page. Production confirmed working 2026-11-15 (`/api/health` returns ok).
- **Build step (inferred, unconfirmed):** `client/dist` is gitignored, yet the live site serves the built React app, so Publish probably runs `npm install` and `npm run build` on the server. Don't commit build output. If a deploy ever serves a stale or missing frontend, check this first.

## Enquiries and email

- **Mailbox:** hello@lifeeventceremonies.com.au is a **Microsoft 365** mailbox. DNS is at GoDaddy (`ns49/ns50.domaincontrol.com`).
- **DNS fix in progress (2026-11-15):** the domain had no MX records, so incoming mail was bouncing. The owner has started the fix in GoDaddy. In the latest check the `autodiscover` CNAME was in place, but the MX record and SPF TXT record weren't visible yet. When the fix is complete, expect an MX pointing to `*.mail.protection.outlook.com` and an SPF record including `spf.protection.outlook.com`. Confirm with `nslookup -type=mx lifeeventceremonies.com.au 8.8.8.8` before the email link goes live.
- **Planned approach:** the Express server receives the form at `POST /api/enquiries`, validates it, saves it to MySQL, then emails a notification to the business address with Reply-To set to the enquirer. Saving every enquiry from the MVP onwards means none are lost if an email fails, and the admin view can be built on top later.
- **Sending mail from the site:** use a transactional email API over HTTPS (e.g. Resend, Postmark). Sending through Microsoft 365 SMTP (`smtp.office365.com:587`) is a poor fit for two reasons: GoDaddy shared hosting usually restricts outbound SMTP, and Microsoft 365 disables SMTP AUTH by default. The chosen email service will need its own DNS records (SPF include and DKIM) added in GoDaddy. Test on the live host.
- **Admin view feasibility:** a cPanel Node.js app with MySQL can support it: password-protected `/admin` routes and a React screen for listing, viewing, replying to (sent by email), scheduling (date/status fields, optional calendar export) and deleting enquiries. Shared-hosting limits to plan around: modest CPU/RAM and process limits, the app may sleep when idle (slow first request), long-running background jobs need cPanel cron, and HTTPS must be in place before login is enabled.

## Assets

- `local assets/` (gitignored) holds the owner's original photos: full-size phone images up to ~6 MB.
- When a photo is used on the site, resize/compress it and put the web version in `client/public/` (or import it from `client/src/`). Keep the originals out of git.
- Choosing images (owner's direction, 2026-11-15): use the real photos in `local assets/` where they fit. Where they leave gaps, use stock photos chosen by the agent. A stock photo must be licensed for free commercial use (e.g. Unsplash, Pexels). Record its source URL and licence next to the file, e.g. in `client/public/images/CREDITS.md`.

## Development

- Development is done mainly by AI agents. See `CLAUDE.md` for the working rules.
- The owner develops on Windows (PowerShell), so npm scripts must work on Windows as well as Linux (the GoDaddy server). Use `cross-env` / `concurrently` rather than shell syntax like `VAR=x cmd` or `a & b`.
