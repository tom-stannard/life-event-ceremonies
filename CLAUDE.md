# CLAUDE.md

Website for Michelle Anne – Life Event Ceremonies, a celebrant business. It's an Express server serving a React (Vite) frontend. `README.md` covers the structure and commands.

## Project knowledge

- **Project facts, requirements and decisions** (business details, pages the site needs, hosting and deployment, assets): `docs/project-context.md`. Read it before any feature, content or deployment work.
- **Old site copy** (page text, testimonials): `docs/legacy-site-copy.md`. Read it when writing or editing page content.
- **Testimonials** (Google reviews, how to display them, recurring themes): `docs/testimonials.md`. Read it when building testimonial sections or writing copy about Michelle.
- **Unconfirmed copy** (claims Michelle still needs to sign off): `docs/content-to-confirm.md`. Add to it whenever you write copy that goes beyond what she has told us; remove items as she confirms them.
- **Voice and content model** (agreed voice, plus the reference sites for page structure and tone): `docs/reference-sites.md`. Read it when planning pages or writing any copy.

## Recording context

When the owner tells you something new about the business, the site, hosting or how they want to work, record it in `docs/project-context.md` in the same session. Edit the line it changes so the file stays current, convert relative dates to absolute ones, and mention the update in your reply. Rules about how agents should work go in this file.

## Working rules

- `main` is what the owner publishes to the live site (manual Publish in GoDaddy). Before committing to `main`, make sure `npm run build` passes and the server starts.
- npm scripts must run on both Windows and Linux. See the Development section of `docs/project-context.md`.
- Build mobile-first: lay out and check every page at phone width (~375px) before desktop.
- Site text belongs in `client/src/content/*.js` and business details in `client/src/siteConfig.js`, not hard-coded in components. A new page also needs an entry in `client/src/routes.js` (title, description) so it's prerendered and added to the sitemap.
- Write copy in Michelle's voice (`docs/reference-sites.md`) and only state facts we have from her, the old site or reviews. Never invent anecdotes, credentials or prices.
- In JSX text and attributes, type real characters (’ – …); `’`-style escapes only work inside JS strings.
- To check layout, run `npm run build && npm start` and screenshot pages at 375px and desktop width. Headless Edge/Chrome won't go below ~500px wide, so render the page inside a 375px iframe.
- Original photos stay in `local assets/` (gitignored). Add photos through `scripts/images.json` + `npm run images`, which commits only resized WebP versions under `client/public/images/`.
