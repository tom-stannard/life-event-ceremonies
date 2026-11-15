import { useRef } from 'react';
import Photo from './Photo.jsx';
import { useLightbox } from './Lightbox.jsx';

// A swipeable row of Michelle's real ceremony photos. Swipe or scroll on
// touch screens; arrow buttons on wider screens; tap a photo to see it larger.
export default function PhotoStrip({ heading, names }) {
  const scroller = useRef(null);
  const lightbox = useLightbox(names);

  const scrollBy = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const item = el.querySelector('li');
    el.scrollBy({ left: dir * (item ? item.offsetWidth + 16 : el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section className="section photo-strip" aria-labelledby="strip-heading">
      <div className="photo-strip-head">
        <h2 id="strip-heading">{heading}</h2>
        <div className="photo-strip-controls">
          <button type="button" className="round-button" onClick={() => scrollBy(-1)} aria-label="Previous photos">
            ‹
          </button>
          <button type="button" className="round-button" onClick={() => scrollBy(1)} aria-label="More photos">
            ›
          </button>
        </div>
      </div>
      <ul className="photo-strip-row" ref={scroller} tabIndex={0} aria-label={heading}>
        {names.map((name, i) => (
          <li key={name}>
            <button type="button" className="photo-open" onClick={() => lightbox.open(i)}>
              <Photo name={name} box={0.8} sizes="(min-width: 860px) 18rem, 68vw" />
            </button>
          </li>
        ))}
      </ul>
      {lightbox.dialog}
    </section>
  );
}
