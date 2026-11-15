import { site } from './siteConfig.js';

function Rings() {
  return (
    <svg className="rings" viewBox="0 0 120 64" aria-hidden="true">
      <circle cx="46" cy="32" r="24" />
      <circle cx="74" cy="32" r="24" />
    </svg>
  );
}

export default function App() {
  const contacts = [
    site.email && { label: site.email, href: `mailto:${site.email}` },
    site.phone && { label: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
    site.facebook && { label: 'Facebook', href: site.facebook },
    site.instagram && { label: 'Instagram', href: site.instagram },
  ].filter(Boolean);

  return (
    <main className="page">
      <div className="card">
        <Rings />
        <h1 className="name">{site.name}</h1>
        <p className="tagline">{site.tagline}</p>

        <div className="divider" aria-hidden="true">
          <span />
        </div>

        <p className="lede">
          Heartfelt, personal ceremonies for life&rsquo;s most meaningful moments.
        </p>

        <ul className="ceremonies">
          {site.ceremonies.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <p className="soon">Our new website is coming soon</p>

        {contacts.length > 0 && (
          <nav className="contact" aria-label="Contact">
            {contacts.map((c) => (
              <a
                key={c.href}
                href={c.href}
                {...(c.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {c.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} {site.name} &ndash; {site.tagline}
        {site.location && <> &middot; {site.location}</>}
      </footer>
    </main>
  );
}
