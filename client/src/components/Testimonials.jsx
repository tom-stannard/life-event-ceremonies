// Testimonials on tiles. With `highlightFirst`, the first one becomes a
// full-width feature tile above the others.
export default function Testimonials({ items, highlightFirst = false }) {
  return (
    <ul className="testimonials">
      {items.map((t, i) => (
        <li key={t.name} className={highlightFirst && i === 0 ? 'is-highlight' : undefined}>
          <figure>
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption>
              {t.name}
              {t.year && <span className="testimonial-year"> • {t.year}</span>}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
