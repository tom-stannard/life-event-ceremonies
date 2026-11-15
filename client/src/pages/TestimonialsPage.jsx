import Testimonials from '../components/Testimonials.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { testimonials } from '../content/testimonials.js';
import { site } from '../siteConfig.js';

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-intro">
        <h1>Kind words</h1>
        <p className="lead">
          From couples I’ve married, families I’ve welcomed little ones with, and families I’ve helped say goodbye. Thank you all for letting me be part of your day.
        </p>
        <p className="reviews-cta">
          <a href={site.googleReviews} target="_blank" rel="noopener noreferrer" className="button">
            <span className="stars" aria-hidden="true">
              ★★★★★
            </span>
            Read my Google reviews
          </a>
          <span>Rated 5 stars on Google</span>
        </p>
      </section>
      <section className="section">
        <Testimonials items={testimonials} highlightFirst />
      </section>
      <ContactSection />
    </>
  );
}
