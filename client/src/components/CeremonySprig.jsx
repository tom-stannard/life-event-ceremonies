// The logo's sprig (stem, alternating gum leaves and a blush bud) drawn around a
// ceremony circle. Hidden at rest; on hover the stem draws along the ring, the
// leaves unfurl one by one and the bud appears (styles: .circle-sprig).
// Geometry follows mark() in scripts/build-logo.mjs, in a 100×100 box whose
// ring (radius 49) sits on the circle's hover ring.
const C = 50;
const R = 49;
const pt = (deg) => {
  const a = (deg * Math.PI) / 180;
  return [C + R * Math.cos(a), C + R * Math.sin(a)];
};
const f = (n) => +n.toFixed(2);
const leafPath = (len, wid) =>
  `M0 0C${f(len * 0.3)} ${f(-wid)} ${f(len * 0.75)} ${f(-wid * 0.8)} ${len} 0` +
  `C${f(len * 0.75)} ${f(wid * 0.8)} ${f(len * 0.3)} ${f(wid)} 0 0Z`;

const SCALE = 1.1; // leaf size relative to the logo's proportions
const leaves = [
  { at: 108, side: 1, len: 17, wid: 5.2 },
  { at: 122, side: -1, len: 15, wid: 4.8 },
  { at: 137, side: 1, len: 18, wid: 5.4 },
  { at: 152, side: -1, len: 14, wid: 4.6 },
  { at: 167, side: 1, len: 15, wid: 4.8 },
  { at: 183, side: -1, len: 11, wid: 3.8 },
].map(({ at, side, len, wid }) => {
  const [x, y] = pt(at);
  return { x: f(x), y: f(y), rot: f(at + 90 + side * 48), d: leafPath(f(len * SCALE), f(wid * SCALE)) };
});

const [s1x, s1y] = pt(95);
const [s2x, s2y] = pt(205);
const stem = `M${f(s1x)} ${f(s1y)}A${R} ${R} 0 0 1 ${f(s2x)} ${f(s2y)}`;

export default function CeremonySprig() {
  return (
    <svg className="circle-sprig" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path className="sprig-stem" d={stem} pathLength="1" />
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.rot})`}>
          <path className="sprig-leaf" d={l.d} style={{ '--d': `${200 + i * 70}ms` }} />
        </g>
      ))}
      <g transform={`translate(${f(s1x)} ${f(s1y)})`}>
        <circle className="sprig-bud" r="4.2" />
      </g>
    </svg>
  );
}
