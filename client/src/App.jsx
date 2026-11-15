import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import CeremonyPage from './pages/CeremonyPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { ceremonies } from './content/ceremonies.js';
import { allAreas } from './content/locations.js';
import { routeFor } from './routes.js';

// Keep <title> and description in step with client-side navigation, and
// scroll to the top (or to #contact) when the page changes.
function usePageChange() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const route = routeFor(pathname);
    document.title = route.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description);
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function App() {
  usePageChange();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {ceremonies.map((c) => (
            <Route key={c.path} path={c.path} element={<CeremonyPage ceremony={c} />} />
          ))}
          {allAreas.map((l) => (
            <Route key={l.path} path={l.path} element={<LocationPage area={l} />} />
          ))}
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
