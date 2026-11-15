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

The old site has been decommissioned. The new one must keep these pages, each with written copy:

1. Home: about Michelle, testimonials
2. Weddings
3. Vow Renewals
4. Baby Naming Ceremonies
5. Funerals

Every page also needs:

- **Contact details** (the table above).
- **Contact form** capturing first name, last name, email, contact number, the service being enquired about (wedding / vow renewal / baby naming / funeral), and a free-text message (what, when, where).

The old site's copy and testimonials are in [`legacy-site-copy.md`](legacy-site-copy.md). Treat it as a reference: the copy may be revised, but each page above keeps its content.

## Hosting and deployment

- Hosted on a **GoDaddy Economy** plan (cPanel), running as a cPanel **Node.js app** that tracks the `main` branch of `github.com/tom-stannard/life-event-ceremonies`.
- `main` is what goes live, so keep it deployable.
- The app currently shows the coming soon page. Production confirmed working 2026-11-15 (`/api/health` returns ok).
- Not yet recorded: whether a push to `main` deploys automatically or needs a manual pull in cPanel, and where `npm run build` runs (on the server, or built locally and committed). Ask the owner before relying on either.

## Assets

- `local assets/` (gitignored) holds the owner's original photos: full-size phone images up to ~6 MB.
- When a photo is used on the site, resize/compress it and put the web version in `client/public/` (or import it from `client/src/`). Keep the originals out of git.

## Development

- Development is done mainly by AI agents. See `CLAUDE.md` for the working rules.
- The owner develops on Windows (PowerShell), so npm scripts must work on Windows as well as Linux (the GoDaddy server). Use `cross-env` / `concurrently` rather than shell syntax like `VAR=x cmd` or `a & b`.
