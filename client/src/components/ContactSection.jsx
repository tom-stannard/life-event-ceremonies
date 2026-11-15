import EnquiryForm from './EnquiryForm.jsx';
import Photo from './Photo.jsx';
import { site, phoneHref } from '../siteConfig.js';

export default function ContactSection({ defaultType, gentle = false }) {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <div className="contact-intro">
          <div className="contact-person">
            <span className="contact-person-photo">
              <Photo name="michelle-headshot" box={1} sizes="4.5rem" />
            </span>
            <p>You’ll be talking to me, Michelle.</p>
          </div>
          <h2 id="contact-heading">{gentle ? 'Get in touch' : 'Let’s talk about your ceremony'}</h2>
          <p>
            {gentle
              ? 'Send me a message or call whenever you’re ready. I’ll get back to you as soon as I can.'
              : 'Tell me a little about what you’re planning and I’ll be in touch. Prefer to talk? Call or email me any time.'}
          </p>
          <ul className="contact-details">
            <li>
              <span>Phone</span>
              <a href={phoneHref}>{site.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>Based in</span>
              {site.location}
            </li>
          </ul>
        </div>
        <EnquiryForm defaultType={defaultType} gentle={gentle} />
      </div>
    </section>
  );
}
