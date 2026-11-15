import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { ceremonies } from '../content/ceremonies.js';
import { locations } from '../content/locations.js';
import { featuredTestimonials } from '../content/testimonials.js';

export default function LocationPage({ location: l }) {
  const others = locations.filter((o) => o.slug !== l.slug);
  return (
    <>
      <PageHero heading={l.heading} lead={l.lead} image={l.image}>
        <div className="hero-actions">
          <a href="#contact" className="button">
            Check my availability
          </a>
        </div>
      </PageHero>

      <section className="section split">
        <div className="prose">
          {l.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="offers">
          <h2>Ceremonies in {l.name}</h2>
          <ul className="link-list">
            {ceremonies.map((c) => (
              <li key={c.slug}>
                <Link to={c.path}>{c.name}</Link>
                <span>{c.card}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="suburbs-heading">
        <h2 id="suburbs-heading">Suburbs I cover around {l.name}</h2>
        <ul className="suburbs">
          {l.suburbs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="muted">
          Don’t see your suburb? I travel across Macarthur and South West Sydney, so just ask.
        </p>
      </section>

      <section className="section" aria-labelledby="words-heading">
        <h2 id="words-heading">Kind words</h2>
        <Testimonials items={featuredTestimonials.slice(0, 3)} columns />
        <p className="section-more">
          <Link to="/testimonials">Read more kind words</Link>
        </p>
      </section>

      <section className="section areas" aria-labelledby="nearby-heading">
        <h2 id="nearby-heading">Nearby areas</h2>
        <ul className="area-links">
          {others.map((o) => (
            <li key={o.slug}>
              <Link to={o.path}>{o.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactSection />
    </>
  );
}
