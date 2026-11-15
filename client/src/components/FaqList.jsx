// FAQs as native <details>, so they open and close without JavaScript.
// headingLevel: 2 when the groups sit directly under the page h1 (FAQ page),
// 3 when they sit under a section h2 (ceremony pages).
export default function FaqList({ groups, showHeadings = true, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <div className="faq-groups">
      {groups.map((g) => (
        <section key={g.id} className="faq-group" aria-labelledby={showHeadings ? `faq-${g.id}` : undefined}>
          {showHeadings && (
            <Heading id={`faq-${g.id}`} className="faq-group-heading">
              {g.heading}
            </Heading>
          )}
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
