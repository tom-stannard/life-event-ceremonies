// A few gum leaves that drift down the page background now and then.
// Purely decorative: CSS-only animation, behind the content, ignored by
// screen readers, and switched off for people who prefer reduced motion.
const leaves = [
  { left: '12%', size: 22, duration: 38, delay: 3, colour: 'var(--sage)' },
  { left: '78%', size: 17, duration: 44, delay: 17, colour: 'var(--bud)' },
  { left: '46%', size: 19, duration: 41, delay: 31, colour: 'var(--sage)' },
];

export default function FallingLeaves() {
  return (
    <div className="falling-leaves" aria-hidden="true">
      {leaves.map((l) => (
        <span
          key={l.left}
          className="leaf"
          style={{ left: l.left, animationDuration: `${l.duration}s`, animationDelay: `${l.delay}s` }}
        >
          <svg viewBox="0 0 24 10" width={l.size} height={(l.size * 10) / 24}>
            <path d="M0 5C5 0.2 13 0 24 5C13 10 5 9.8 0 5Z" fill={l.colour} />
            <path d="M1.5 5H21" stroke="var(--mist)" strokeWidth="0.6" opacity="0.7" />
          </svg>
        </span>
      ))}
    </div>
  );
}
