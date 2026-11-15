import FaqList from '../components/FaqList.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { faqGroups } from '../content/faqs.js';

export default function FaqPage() {
  return (
    <>
      <section className="page-intro">
        <h1>Frequently asked questions</h1>
        <p className="lead">
          The legal bits, the planning bits and everything in between. If your question isn’t here, just ask me.
        </p>
      </section>
      <section className="section">
        <FaqList groups={faqGroups} headingLevel={2} />
      </section>
      <section className="section faq-more" aria-labelledby="faq-more-heading">
        <h2 id="faq-more-heading">Still wondering about something?</h2>
        <p>There’s no such thing as a silly question. Send me yours and I’ll get back to you.</p>
        <a href="#contact" className="button">
          Ask me a question
        </a>
      </section>
      <ContactSection />
    </>
  );
}
