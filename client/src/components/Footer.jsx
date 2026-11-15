import { Link } from 'react-router';
import { site, phoneHref } from '../siteConfig.js';
import { ceremonies } from '../content/ceremonies.js';
import { locations } from '../content/locations.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/brand/logo-stacked-reversed.svg" alt="Life Event Ceremonies, Michelle Anne, Celebrant" width="420" height="210" loading="lazy" />
          <p className="footer-signoff">{site.signOff}</p>
        </div>
        <nav className="footer-links" aria-label="Ceremonies">
          <h2>Ceremonies</h2>
          <ul>
            {ceremonies.map((c) => (
              <li key={c.path}>
                <Link to={c.path}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="footer-links" aria-label="Areas">
          <h2>Areas I cover</h2>
          <ul>
            {locations.map((l) => (
              <li key={l.path}>
                <Link to={l.path}>{l.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/testimonials">Kind words</Link>
            </li>
          </ul>
        </nav>
        <div className="footer-links">
          <h2>Say hello</h2>
          <ul>
            <li>
              <a href={phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.location}</li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              {' and '}
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-legal">
        &copy; {new Date().getFullYear()} {site.name}, {site.business}
      </p>
    </footer>
  );
}
