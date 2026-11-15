// Runs after `vite build` + the SSR build. Writes one static HTML file per route
// (dist/weddings.html, dist/locations/camden.html, …) with its own title,
// description, canonical URL, social tags and structured data, so search
// engines and link previews see real content. Also writes sitemap.xml,
// robots.txt and 404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const clientDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(clientDir, 'dist');
const ssr = await import(pathToFileURL(path.join(clientDir, 'dist-ssr/entry-server.js')).href);
const { render, routes, notFound, faqGroups, site, locations } = ssr;

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const abs = (p) => site.url + (p === '/' ? '/' : p);

const business = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#business`,
  name: `${site.name}, ${site.business}`,
  description: 'Celebrant for weddings, vow renewals, naming ceremonies, funerals and other life events.',
  url: `${site.url}/`,
  telephone: site.phone.replace(/\s/g, '').replace(/^0/, '+61'),
  email: site.email,
  image: `${site.url}/images/michelle-headshot-960.webp`,
  logo: `${site.url}/brand/logo-stacked.png`,
  address: { '@type': 'PostalAddress', addressLocality: 'Spring Farm', addressRegion: 'NSW', postalCode: '2570', addressCountry: 'AU' },
  areaServed: locations.map((l) => ({ '@type': 'Place', name: `${l.name}, NSW` })),
  sameAs: [site.facebook, site.instagram].filter(Boolean),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a.join(' ') } })),
  ),
};

function page(route, { indexable = true } = {}) {
  const url = abs(route.path);
  const ogImage = route.image ? `${site.url}/images/${route.image}-960.webp` : `${site.url}/og-image.png`;
  const schemas = [business, ...(route.page === 'faqs' ? [faqSchema] : [])];
  const head = [
    indexable ? `<link rel="canonical" href="${url}" />` : '<meta name="robots" content="noindex" />',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.business)}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`),
  ].join('\n    ');

  return template
    .replace(/<title>.*?<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(route.description)}"`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', render(route.path));
}

for (const route of routes) {
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(route));
  console.log(`prerendered ${route.path} → ${file}`);
}
fs.writeFileSync(path.join(dist, '404.html'), page(notFound, { indexable: false }));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${abs(r.path)}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
fs.rmSync(path.join(clientDir, 'dist-ssr'), { recursive: true, force: true });
console.log('sitemap.xml, robots.txt and 404.html written');
