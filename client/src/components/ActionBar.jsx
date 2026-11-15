import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { site, phoneHref } from '../siteConfig.js';

// Phones only: a slim bar fixed to the bottom of the screen with Call and
// Enquire. It steps aside while the contact section is on screen, so it never
// covers the form.
export default function ActionBar() {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Measuring one element on scroll is cheap; React skips the re-render
    // when the hidden state hasn't changed.
    const check = () => {
      const contact = document.getElementById('contact');
      setHidden(Boolean(contact) && contact.getBoundingClientRect().top < window.innerHeight - 80);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [pathname]);

  return (
    <nav className={`action-bar${hidden ? ' is-hidden' : ''}`} aria-label="Quick contact">
      <a href={phoneHref} className="button button-quiet">
        Call {site.name.split(' ')[0]}
      </a>
      <a href="#contact" className="button">
        Enquire
      </a>
    </nav>
  );
}
