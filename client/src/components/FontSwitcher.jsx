import { useEffect, useState } from 'react';

// TEMPORARY: lets the owner preview heading fonts on the live site.
// Remove this component (and the extra @fontsource packages and the
// [data-heading-font] rules in styles.css) once a font is chosen.
export const headingFonts = [
  { id: 'fraunces', label: 'Fraunces (current)' },
  { id: 'lora', label: 'Lora', load: () => Promise.all([import('@fontsource-variable/lora'), import('@fontsource-variable/lora/wght-italic.css')]) },
  {
    id: 'cormorant',
    label: 'Cormorant Garamond',
    load: () => Promise.all([import('@fontsource-variable/cormorant-garamond'), import('@fontsource-variable/cormorant-garamond/wght-italic.css')]),
  },
  { id: 'quicksand', label: 'Quicksand', load: () => import('@fontsource-variable/quicksand') },
];

const KEY = 'lec-heading-font';

function apply(id) {
  const font = headingFonts.find((f) => f.id === id) ?? headingFonts[0];
  font.load?.();
  if (font.id === 'fraunces') delete document.documentElement.dataset.headingFont;
  else document.documentElement.dataset.headingFont = font.id;
}

export default function FontSwitcher() {
  const [font, setFont] = useState('fraunces');

  // Restore the last choice after hydration (the prerendered page uses the default).
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch {}
    if (saved && headingFonts.some((f) => f.id === saved)) {
      setFont(saved);
      apply(saved);
    }
  }, []);

  function change(e) {
    const id = e.target.value;
    setFont(id);
    apply(id);
    try {
      localStorage.setItem(KEY, id);
    } catch {}
  }

  return (
    <div className="font-switcher">
      <label>
        Heading font preview
        <select value={font} onChange={change}>
          {headingFonts.map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
