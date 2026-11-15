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
        <p>
          <a href={site.googleReviews} target="_blank" rel="noopener noreferrer">
            Read my reviews on Google
          </a>
        </p>
      </section>
      <section className="section">
        <Testimonials items={testimonials} columns />
      </section>
      <ContactSection />
    </>
  );
}
