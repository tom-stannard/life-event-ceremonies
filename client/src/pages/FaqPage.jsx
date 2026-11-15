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
        <FaqList groups={faqGroups} />
      </section>
      <ContactSection />
    </>
  );
}
