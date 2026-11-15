# Project context

What we know about the business, the site and how it's run. This file is the
single source of truth for project facts and decisions: when the owner gives new
context, record it here (or update the line it changes) in the same session.

## Business

- **Michelle Anne – Life Event Ceremonies**: a celebrant who lives in Spring Farm, NSW (Australia). Her full name is Michelle Stannard, and the surname can appear on the site (e.g. in testimonials).
- **Use Camden, NSW as the public location** ("Based in Camden", structured data, copy). Owner's direction, 2026-11-16; this replaces the earlier Spring Farm decision. Ignore other addresses in third-party listings, such as Menangle Rd, Camden.
- Domain: <https://lifeeventceremonies.com.au/>. The server redirects `www.` to the bare domain (added 2026-11-15).
- Tone of the old site: warm, personal, first-person ("I"), sign-off line _"Your ceremony – your way."_
- Use Australian English spelling (e.g. "organise", "colour").

### Contact details

| | |
|---|---|
| Location | Camden, NSW |
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
3. **Area pages** for local SEO (restructured 2026-11-16). Two regions, each with its own page and a page for each suburb under it, shown as a nested list under Areas in the menu:
   - **Camden**: Spring Farm, Narellan, Mount Annan, Elderslie, Harrington Park, Oran Park, Gregory Hills, Currans Hill, Cobbitty, Catherine Field, Kirkham.
   - **Wollondilly**: Picton, Thirlmere, The Oaks, Oakdale, Menangle, Wilton, Appin (the owner's selection).
   - Campbelltown and South West Sydney were removed; their old URLs redirect to `/locations/camden`. URLs are flat (`/locations/<suburb>`), and every page needs copy specific to its place (`client/src/content/locations.js`).
4. **FAQs**, covering all ceremony types.
5. **Testimonials**: 22 so far (6 from the old site, 16 from Google). See [`testimonials.md`](testimonials.md). Everywhere on the site they're shown on white tiles in the body font for readability (owner's direction, 2026-11-16).

**No pricing or packages are shown** for now (owner's decision, 2026-11-15).

### Build status (2026-11-15)

The full site was built on branch `site-build`: all pages above, the new logo, the contact form and the enquiry API. Copy that goes beyond what Michelle has confirmed is listed in [`content-to-confirm.md`](content-to-confirm.md).

### Build requirements (owner's direction, 2026-11-15)

- **Mobile first:** many visitors will browse on phones. Design and test every page at phone width first.
- **New logo** for Life Event Ceremonies: simple, elegant, wholesome, and includes the business name.
- **Contact form → email:** submissions must reach the business email (hello@lifeeventceremonies.com.au). Required for the MVP.
- **Admin view (after the MVP, nice to have):** Michelle logs in to view and manage enquiries: reply, schedule, delete. See "Enquiries and email" below.

### On every page

- **Contact details** (the table above).
- **Contact form** capturing first name, last name, email, contact number, the service being enquired about (wedding / vow renewal / baby naming / funeral / other), and a free-text message (what, when, where).

### Branches (2026-11-16)

- `main`: what gets published. Bug fixes go straight here.
- `staging`: design uplifts from the 2026-11-16 design review, for the owner to try before merging into `main`: hero entrance animation, trust line, "Moments from real ceremonies" photo strip, featured quote, signature, plain suburb links, contact photo, tap-to-enlarge galleries, real funeral photo, gentler funeral form wording, Notice of Intended Marriage link, simpler area pages, FAQ closing prompt, Google reviews button, phone action bar (Call and Enquire), no past dates in the form, and a compact header logo on phones.

## Hosting and deployment

- Hosted on a **GoDaddy Economy** plan (cPanel), running as a cPanel **Node.js app** that tracks the `main` branch of `github.com/tom-stannard/life-event-ceremonies`.
- **Deploying is manual:** pushing to `main` does not update the live site. The owner deploys by clicking **Publish** in the GoDaddy control panel. After pushing, tell the owner the push is ready to publish.
- `main` is what goes live when published, so keep it deployable.
- Production confirmed working 2026-11-15 (`/api/health` returns ok), showing the coming soon page until the `site-build` work is merged and published.
- **Build step (inferred, unconfirmed):** `client/dist` is gitignored, yet the live site serves the built React app, so Publish probably runs `npm install` and `npm run build` on the server. Don't commit build output. If a deploy ever serves a stale or missing frontend, check this first.
- `npm run build` now also prerenders every page to static HTML (`client/scripts/prerender.mjs`) and writes `sitemap.xml` and `robots.txt`. Express serves `/weddings` from `weddings.html` and returns `404.html` for unknown paths.
- **Production environment variables** (set in the cPanel Node.js app settings; see `.env.example`): `RESEND_API_KEY`, `ENQUIRY_FROM`, `ENQUIRY_TO`, and `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`. **Until at least one of email or database is configured, the live contact form shows an error** asking people to email or call instead.

## Enquiries and email

- **Mailbox:** hello@lifeeventceremonies.com.au is a **Microsoft 365** mailbox. DNS is at GoDaddy (`ns49/ns50.domaincontrol.com`).
- **DNS fix in progress (2026-11-15):** the domain had no MX records, so incoming mail was bouncing. The owner has started the fix in GoDaddy. In the latest check the `autodiscover` CNAME was in place, but the MX record and SPF TXT record weren't visible yet. When the fix is complete, expect an MX pointing to `*.mail.protection.outlook.com` and an SPF record including `spf.protection.outlook.com`. Confirm with `nslookup -type=mx lifeeventceremonies.com.au 8.8.8.8` before the email link goes live.
- **How enquiries work (built 2026-11-15):** `POST /api/enquiries` (`server/src/enquiries.js`) validates the form (with a honeypot field and a rate limit of 5 per IP per 10 minutes), saves it to the MySQL `enquiries` table if `DB_*` is set (the table is created automatically, `server/src/db.js`), and emails it through Resend if `RESEND_API_KEY` is set (`server/src/mailer.js`), with Reply-To set to the enquirer. It succeeds if either step works. In local development with neither configured, it just logs the enquiry.
- **To switch it on:** (1) create a Resend account, add the domain `lifeeventceremonies.com.au`, and add the DNS records Resend gives you (SPF/DKIM) in GoDaddy; (2) create a MySQL database and user in cPanel; (3) set the environment variables above in the cPanel Node.js app and restart it; (4) send a test enquiry.
- **Sending mail from the site:** use a transactional email API over HTTPS (e.g. Resend, Postmark). Sending through Microsoft 365 SMTP (`smtp.office365.com:587`) is a poor fit for two reasons: GoDaddy shared hosting usually restricts outbound SMTP, and Microsoft 365 disables SMTP AUTH by default. The chosen email service will need its own DNS records (SPF include and DKIM) added in GoDaddy. Test on the live host.
- **Admin view feasibility:** a cPanel Node.js app with MySQL can support it: password-protected `/admin` routes and a React screen for listing, viewing, replying to (sent by email), scheduling (date/status fields, optional calendar export) and deleting enquiries. Shared-hosting limits to plan around: modest CPU/RAM and process limits, the app may sleep when idle (slow first request), long-running background jobs need cPanel cron, and HTTPS must be in place before login is enabled.

## Assets

- `local assets/` (gitignored) holds the owner's original photos: full-size phone images up to ~6 MB.
- Originals are in `local assets/Photos/`, sorted by the owner into `Weddings & Vow Renewals/`, `Baby Naming/`, `Funerals/`, `Profiles/` and `Stock/` (2026-11-16). Files the owner has named for a spot (e.g. `Profiles/Landing Page Hero.jpg`, `Profiles/Hi, I'm Michelle.jpg`, `Weddings & Vow Renewals/Wedding Hero.png`, `Vow Renewals.jpg`) are their picks for that spot.
- Photo direction (2026-11-16): the naming page uses only Michelle's own photos from `Baby Naming/` (no stock), and never shows a child's full name (e.g. on a certificate); blur it or leave the photo out. Reusing photos across pages is fine. There's also `local assets/Documents/notice-of-intended-marriage.DOCX`.
- To add or swap a photo: list it in `scripts/images.json` (source file, alt text, optional `focus` and `credit`), then run `npm run images`. Web versions go to `client/public/images/` (committed) and their sizes to `client/src/content/images.generated.json`. Use it in a page with `<Photo name="…" />`.
- Choosing images (owner's direction, 2026-11-15): use the real photos in `local assets/` where they fit. Where they leave gaps, use stock photos chosen by the agent. A stock photo must be licensed for free commercial use (e.g. Unsplash, Pexels). Record its source URL and licence next to the file, e.g. in `client/public/images/CREDITS.md`.

## Development

- Development is done mainly by AI agents. See `CLAUDE.md` for the working rules.

## Brand (created 2026-11-15; the owner may adjust it)

- **Logo:** a ring that grows into a gum-leaf sprig with a blush bud (a wedding ring and new growth in one), beside "Life Event Ceremonies" with "Michelle Anne, Celebrant" underneath. Generated by `scripts/build-logo.mjs` (`npm run logo`) into `client/public/brand/`: horizontal and stacked versions, reversed versions, PNGs, and a 512px profile picture for social media. The text is converted to outlines, so the files work anywhere.
- **Palette:** eucalyptus `#2f4f42`, sage `#7f9a84`, mist `#f3f5f0` (background), blush `#f1ddd5`, bud `#c98f7e`. Tokens are in `client/src/styles.css`.
- **Type:** Fraunces (soft serif, headings and quotes) and Nunito Sans (body), self-hosted via Fontsource.
- **Heading font decided (2026-11-16): Fraunces stays.** The owner previewed Lora, Cormorant Garamond, Quicksand, Young Serif, Gilda Display and Dancing Script and rejected them all; the preview switcher and those fonts have been removed. (`@fontsource/dancing-script` remains a dev dependency only, used by `scripts/build-logo.mjs` to draw the "Michelle x" signature.)
- **Signature element:** hero photos framed in an arch shape, echoing the ceremony arbours in Michelle's photos. The About photo is also an arch. The home page's ceremony list shows four ceremonies as circles; Other Ceremonies is left out so they have room. The circles have a hover animation: the photo zooms, a sage ring blooms out and a blush bud travels round it, like the logo (owner's direction, 2026-11-16). Funeral pages use quieter styling (`is-gentle`).
- **Other details:** "How it works" is a numbered timeline, vertical on phones and horizontal on desktop. A few gum leaves drift down the page background now and then (`client/src/components/FallingLeaves.jsx`); they're hidden for people who prefer reduced motion.
- The owner develops on Windows (PowerShell), so npm scripts must work on Windows as well as Linux (the GoDaddy server). Use `cross-env` / `concurrently` rather than shell syntax like `VAR=x cmd` or `a & b`.
