// Server-side entry used only at build time by scripts/prerender.mjs.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';

export { routes, notFound } from './routes.js';
export { faqGroups } from './content/faqs.js';
export { site } from './siteConfig.js';
export { locations } from './content/locations.js';

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
