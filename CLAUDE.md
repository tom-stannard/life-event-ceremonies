# CLAUDE.md

Website for Michelle Anne – Life Event Ceremonies, a celebrant business. It's an Express server serving a React (Vite) frontend. `README.md` covers the structure and commands.

## Project knowledge

- **Project facts, requirements and decisions** (business details, pages the site needs, hosting and deployment, assets): `docs/project-context.md`. Read it before any feature, content or deployment work.
- **Old site copy** (page text, testimonials): `docs/legacy-site-copy.md`. Read it when writing or editing page content.
- **Testimonials** (Google reviews, how to display them, recurring themes): `docs/testimonials.md`. Read it when building testimonial sections or writing copy about Michelle.
- **Voice and content model** (agreed voice, plus the reference sites for page structure and tone): `docs/reference-sites.md`. Read it when planning pages or writing any copy.

## Recording context

When the owner tells you something new about the business, the site, hosting or how they want to work, record it in `docs/project-context.md` in the same session. Edit the line it changes so the file stays current, convert relative dates to absolute ones, and mention the update in your reply. Rules about how agents should work go in this file.

## Working rules

- `main` is what the owner publishes to the live site (manual Publish in GoDaddy). Before committing to `main`, make sure `npm run build` passes and the server starts.
- npm scripts must run on both Windows and Linux. See the Development section of `docs/project-context.md`.
- Build mobile-first: lay out and check every page at phone width (~375px) before desktop.
- Site text and business details belong in `client/src/siteConfig.js` (or content modules next to it), not hard-coded in components.
- Original photos stay in `local assets/` (gitignored). Commit only resized web versions under `client/`.
