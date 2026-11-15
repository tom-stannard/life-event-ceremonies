import { Link } from 'react-router';
import PageHero from '../components/PageHero.jsx';
import Photo from '../components/Photo.jsx';
import PhotoStrip from '../components/PhotoStrip.jsx';
import CeremonySprig from '../components/CeremonySprig.jsx';
import PinIcon from '../components/PinIcon.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { home } from '../content/home.js';
import { ceremonies } from '../content/ceremonies.js';
import { regions, suburbsOf } from '../content/locations.js';
import { featuredTestimonials, testimonials } from '../content/testimonials.js';
import { site } from '../siteConfig.js';

export default function Home() {
  return (
    <>
      <PageHero heading={home.heading} lead={home.lead} image="michelle-reading">
        <div className="hero-actions">
          <a href="#contact" className="button">
            Enquire about your date
          </a>
          <a href="#ceremonies" className="button button-quiet">
            See ceremonies
          </a>
        </div>
        <p className="hero-trust">
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>{' '}
          {home.trust} <Link to="/testimonials">Read all {testimonials.length} kind words</Link>
        </p>
      </PageHero>

      <section id="ceremonies" className="section" aria-labelledby="ceremonies-heading">
        <h2 id="ceremonies-heading">Ceremonies for every chapter</h2>
        <ul className="ceremony-tiles">
          {ceremonies
            .filter((c) => c.slug !== 'other-ceremonies')
            .map((c) => (
              <li key={c.slug}>
                <Link to={c.path} className="ceremony-tile">
                  <div className="circle">
                    <span className="circle-clip">
                      <Photo name={c.image} box={1} sizes="(min-width: 860px) 14rem, 6rem" />
                    </span>
                    <CeremonySprig />
                  </div>
                  <div>
                    <h3>{c.name}</h3>
                    <p>{c.card}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="section about" aria-labelledby="about-heading">
        <div className="about-photo">
          <div className="arch">
            <Photo name="michelle-about" box={0.8} sizes="(min-width: 860px) 26rem, 70vw" />
          </div>
        </div>
        <div className="about-text">
          <h2 id="about-heading">{home.about.heading}</h2>
          {home.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <img className="signature" src="/brand/signature.svg" alt="Michelle" width="260" height="70" loading="lazy" />
          <p className="signoff">{site.signOff}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="steps-heading">
        <h2 id="steps-heading">How it works</h2>
        <ol className="steps timeline">
          {home.steps.map((s) => (
            <li key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <PhotoStrip heading={home.moments.heading} names={home.moments.photos} />

      <section className="section" aria-labelledby="words-heading">
        <h2 id="words-heading">Kind words</h2>
        <Testimonials items={featuredTestimonials} highlightFirst />
        <p className="section-more">
          <Link to="/testimonials">Read more from couples and families</Link>
        </p>
      </section>

      <section className="section areas" aria-labelledby="areas-heading">
        <h2 id="areas-heading">Where I celebrate</h2>
        <p>I’m based in Camden and look after couples and families right across the Camden area and Wollondilly.</p>
        <div className="area-groups">
          {regions.map((r) => (
            <div key={r.slug}>
              <h3>
                <Link to={r.path}>{r.name}</Link>
              </h3>
              <ul className="area-list area-chips">
                {suburbsOf(r).map((s) => (
                  <li key={s.slug}>
                    <Link to={s.path}>
                      <PinIcon />
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
