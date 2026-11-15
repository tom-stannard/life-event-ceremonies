// FAQs as native <details>, so they open and close without JavaScript.
export default function FaqList({ groups, showHeadings = true }) {
  return (
    <div className="faq-groups">
      {groups.map((g) => (
        <section key={g.id} className="faq-group" aria-labelledby={showHeadings ? `faq-${g.id}` : undefined}>
          {showHeadings && <h3 id={`faq-${g.id}`}>{g.heading}</h3>}
          {g.items.map((item) => (
            <details key={item.q} className="faq">
              <summary>{item.q}</summary>
              {item.a.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </details>
          ))}
        </section>
      ))}
    </div>
  );
}
