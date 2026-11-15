export default function Testimonials({ items, columns = false }) {
  return (
    <ul className={`testimonials${columns ? ' testimonials-columns' : ''}`}>
      {items.map((t) => (
        <li key={t.name}>
          <figure>
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption>{t.name}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
