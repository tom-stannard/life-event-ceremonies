// Every page on the site, with its <title> and meta description.
// Used by the router, the prerender step (one HTML file per route) and the sitemap.
import { home } from './content/home.js';
import { ceremonies } from './content/ceremonies.js';
import { locations } from './content/locations.js';

const brand = 'Life Event Ceremonies';
const withBrand = (title) => (title.includes(brand) ? title : `${title} | ${brand}`);

export const routes = [
  { path: '/', page: 'home', title: home.title, description: home.description },
  ...ceremonies.map((c) => ({ path: c.path, page: 'ceremony', slug: c.slug, title: withBrand(c.title), description: c.description, image: c.image })),
  ...locations.map((l) => ({ path: l.path, page: 'location', slug: l.slug, title: withBrand(l.title), description: l.description, image: l.image })),
  {
    path: '/faqs',
    page: 'faqs',
    title: withBrand('Celebrant FAQs: Weddings, Namings & Funerals'),
    description:
      'Answers to common questions about getting married in NSW, planning your ceremony, naming ceremonies and funerals, from celebrant Michelle Anne.',
  },
  {
    path: '/testimonials',
    page: 'testimonials',
    title: withBrand('Kind Words from Couples & Families'),
    description: 'Reviews and testimonials from couples and families who chose Michelle Anne as their celebrant.',
  },
];

export const notFound = {
  path: '/404',
  page: 'notfound',
  title: withBrand('Page not found'),
  description: 'This page could not be found.',
};

export const routeFor = (pathname) => routes.find((r) => r.path === pathname.replace(/\/+$/, '') || (r.path === '/' && pathname === '/')) ?? notFound;
