import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { ceremonies } from '../content/ceremonies.js';
import { regions, regionBySlug, suburbsOf } from '../content/locations.js';
import { featuredTestimonials } from '../content/testimonials.js';

// Renders both region pages (Camden, Wollondilly) and suburb pages.
export default function LocationPage({ area }) {
  const region = area.region ? regionBySlug[area.region] : area;
  const isSuburb = Boolean(area.region);
  const siblings = suburbsOf(region).filter((s) => s.slug !== area.slug);
  const otherRegions = regions.filter((r) => r.slug !== region.slug);

  return (
    <>
      <PageHero heading={area.heading} lead={area.lead} image={area.image}>
        <div className="hero-actions">
          <a href="#contact" className="button">
            Check my availability
          </a>
        </div>
      </PageHero>

      <section className="section prose" aria-label={`About ${area.name}`}>
        {area.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
        <p>
          In {area.name} I create{' '}
          {ceremonies.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && (i === ceremonies.length - 1 ? ' and ' : ', ')}
              <Link to={c.path}>{c.name.toLowerCase()}</Link>
            </span>
          ))}
          .
        </p>
        {isSuburb && (
          <p>
            <Link to={region.path}>More about ceremonies across the {region.name} area</Link>
          </p>
        )}
      </section>

      <section className="section" aria-labelledby="suburbs-heading">
        <h2 id="suburbs-heading">{isSuburb ? `Nearby in the ${region.name} area` : `Suburbs I cover around ${region.name}`}</h2>
        <ul className="area-list">
          {isSuburb && (
            <li>
              <Link to={region.path}>{region.name}</Link>
            </li>
          )}
          {siblings.map((s) => (
            <li key={s.slug}>
              <Link to={s.path}>{s.name}</Link>
            </li>
          ))}
        </ul>
        <p className="muted">
          Don’t see your suburb? I travel right across the Camden area and Wollondilly, so just ask.
        </p>
      </section>

      <section className="section" aria-labelledby="words-heading">
        <h2 id="words-heading">Kind words</h2>
        <Testimonials items={featuredTestimonials.slice(0, 3)} />
        <p className="section-more">
          <Link to="/testimonials">Read more kind words</Link>
        </p>
      </section>

      <section className="section areas" aria-labelledby="nearby-heading">
        <h2 id="nearby-heading">Also covering</h2>
        <ul className="area-list">
          {otherRegions.map((r) => (
            <li key={r.slug}>
              <Link to={r.path}>{r.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactSection />
    </>
  );
}
