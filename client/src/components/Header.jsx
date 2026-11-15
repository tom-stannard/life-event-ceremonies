import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { ceremonies } from '../content/ceremonies.js';
import { locations } from '../content/locations.js';

function Menu({ label, items }) {
  return (
    <li className="nav-group">
      <span className="nav-group-label">{label}</span>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="header-bar">
        <Link to="/" className="header-logo" aria-label="Life Event Ceremonies, home">
          <img src="/brand/logo-horizontal.svg" alt="" width="560" height="100" />
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-icon" aria-hidden="true" />
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav id="site-nav" className="site-nav" aria-label="Main">
        <ul className="nav-list">
          <Menu label="Ceremonies" items={ceremonies} />
          <Menu label="Areas" items={locations} />
          <li>
            <NavLink to="/faqs">FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials">Kind words</NavLink>
          </li>
          <li>
            <a href="#contact" className="button button-small" onClick={() => setOpen(false)}>
              Enquire
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
