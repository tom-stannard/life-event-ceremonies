import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';
import Photo from '../components/Photo.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FaqList from '../components/FaqList.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { testimonialsByTags } from '../content/testimonials.js';
import { faqsByTag } from '../content/faqs.js';
import { site } from '../siteConfig.js';

export default function CeremonyPage({ ceremony: c }) {
  const words = testimonialsByTags(c.testimonialTags);
  const faqs = faqsByTag(c.faqTags);

  return (
    <div className={c.gentle ? 'is-gentle' : undefined}>
      <PageHero heading={c.heading} lead={c.lead} image={c.image}>
        <div className="hero-actions">
          <a href="#contact" className="button">
            {c.gentle ? 'Get in touch' : 'Start planning'}
          </a>
        </div>
      </PageHero>

      <section className="section split">
        <div className="prose">
          {c.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          {!c.gentle && <p className="signoff">{site.signOff}</p>}
        </div>
        <div className="offers">
          <h2>{c.offerHeading}</h2>
          <ul className="offer-list">
            {c.offers.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      {c.styles && (
        <section className="section">
          {c.styles.heading && <h2>{c.styles.heading}</h2>}
          <ul className="style-list">
            {c.styles.items.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {c.extra && (
        <section className="section callout">
          <h2>{c.extra.heading}</h2>
          {c.extra.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p>
            <Link to="/faqs">More answers in the FAQs</Link>
          </p>
        </section>
      )}

      {c.gallery?.length > 0 && (
        <section className="section" aria-label="Photos">
          <ul className={`gallery gallery-${Math.min(c.gallery.length, 3)}`}>
            {c.gallery.map((name) => (
              <li key={name}>
                <Photo name={name} sizes="(min-width: 860px) 30vw, 46vw" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {words.length > 0 && (
        <section className="section" aria-labelledby="words-heading">
          <h2 id="words-heading">Kind words</h2>
          <Testimonials items={words} columns />
          <p className="section-more">
            <Link to="/testimonials">Read more kind words</Link>
          </p>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Questions you might have</h2>
          <FaqList groups={faqs} showHeadings={faqs.length > 1} />
        </section>
      )}

      <ContactSection defaultType={c.enquiry} gentle={c.gentle} />
    </div>
  );
}
