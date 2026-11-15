import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import '@fontsource-variable/fraunces/soft.css';
import '@fontsource-variable/fraunces/soft-italic.css';
import '@fontsource/nunito-sans/latin-400.css';
import '@fontsource/nunito-sans/latin-600.css';
import '@fontsource/nunito-sans/latin-700.css';
import './styles.css';
import App from './App.jsx';

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are prerendered (see scripts/prerender.mjs), so hydrate them;
// the Vite dev server serves an empty shell, so render from scratch there.
const container = document.getElementById('root');
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
