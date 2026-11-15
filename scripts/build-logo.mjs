// Generates the Life Event Ceremonies logo files into client/public/brand/
// and the favicon / touch icon / social share image into client/public/.
//
//   node scripts/build-logo.mjs
//
// The mark is a ring that grows into a gum-leaf sprig: a wedding ring and new
// growth in one, drawn in eucalyptus greens. Wordmark text is converted to
// outlines (paths) so the SVGs render identically without the fonts installed.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import opentype from 'opentype.js';
import sharp from 'sharp';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const pub = path.join(root, 'client/public');
const brand = path.join(pub, 'brand');
fs.mkdirSync(brand, { recursive: true });

export const colours = {
  gum: '#2f4f42', // deep eucalyptus: ring + wordmark
  leaf: '#7f9a84', // gum-leaf sage: leaves
  blush: '#d9a99a', // blossom accent
  mist: '#f3f5f0', // background
};

const font = (pkg, file) =>
  opentype.parse(fs.readFileSync(require.resolve(`${pkg}/files/${file}`)).buffer);
const serif = font('@fontsource/fraunces', 'fraunces-latin-500-normal.woff');
const serifItalic = font('@fontsource/fraunces', 'fraunces-latin-400-italic.woff');
const sans = font('@fontsource/nunito-sans', 'nunito-sans-latin-600-normal.woff');
const script = font('@fontsource/dancing-script', 'dancing-script-latin-600-normal.woff');

// ---------------------------------------------------------------- the mark
// Drawn in a 100×100 box. Angles are SVG-style degrees (0 = right, 90 = down).
const C = 50, R = 33;
const pt = (deg, r = R) => {
  const a = (deg * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
};
const f = (n) => +n.toFixed(2);

// A lanceolate gum leaf, base at origin, pointing along +x.
const leafPath = (len, wid) =>
  `M0 0C${f(len * 0.3)} ${f(-wid)} ${f(len * 0.75)} ${f(-wid * 0.8)} ${len} 0` +
  `C${f(len * 0.75)} ${f(wid * 0.8)} ${f(len * 0.3)} ${f(wid)} 0 0Z`;

function mark({ gum = colours.gum, leaf = colours.leaf, blush = colours.blush } = {}) {
  // The ring runs most of the way round; the open section (lower left)
  // becomes the sprig, so the ring "grows" leaves.
  const ringFrom = 205, ringTo = 95 + 360; // clockwise, leaving 95°→205° for the sprig
  const [x1, y1] = pt(ringFrom), [x2, y2] = pt(ringTo);
  const ring = `<path d="M${f(x1)} ${f(y1)}A${R} ${R} 0 1 1 ${f(x2)} ${f(y2)}" fill="none" stroke="${gum}" stroke-width="3.4" stroke-linecap="round"/>`;

  // Stem continues the arc through the gap, tapering slightly.
  const [s1x, s1y] = pt(95), [s2x, s2y] = pt(205);
  const stem = `<path d="M${f(s1x)} ${f(s1y)}A${R} ${R} 0 0 1 ${f(s2x)} ${f(s2y)}" fill="none" stroke="${gum}" stroke-width="2.2" stroke-linecap="round"/>`;

  // Leaves alternate outside / inside the ring along the stem.
  const leaves = [
    { at: 108, side: 1, len: 17, wid: 5.2 },
    { at: 122, side: -1, len: 15, wid: 4.8 },
    { at: 137, side: 1, len: 18, wid: 5.4 },
    { at: 152, side: -1, len: 14, wid: 4.6 },
    { at: 167, side: 1, len: 15, wid: 4.8 },
    { at: 183, side: -1, len: 11, wid: 3.8 },
  ]
    .map(({ at, side, len, wid }) => {
      const [x, y] = pt(at);
      // tangent direction (clockwise travel) is at+90; tilt leaves outward/inward
      const rot = at + 90 + side * 48;
      return `<path d="${leafPath(len, wid)}" transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)})" fill="${leaf}"/>`;
    })
    .join('');

  // A single blossom bud where ring meets sprig.
  const [bx, by] = pt(95, R);
  const bud = `<circle cx="${f(bx)}" cy="${f(by)}" r="3.6" fill="${blush}"/>`;

  return `<g>${ring}${stem}${leaves}${bud}</g>`;
}

// ---------------------------------------------------------------- text → path
function text(fontObj, str, x, y, size, { fill, tracking = 0, anchor = 'start' } = {}) {
  const glyphs = fontObj.stringToGlyphs(str);
  const scale = size / fontObj.unitsPerEm;
  let width = 0;
  glyphs.forEach((g, i) => {
    width += g.advanceWidth * scale + (i < glyphs.length - 1 ? tracking : 0);
    if (i < glyphs.length - 1) width += fontObj.getKerningValue(g, glyphs[i + 1]) * scale;
  });
  let cx = anchor === 'middle' ? x - width / 2 : x;
  let d = '';
  glyphs.forEach((g, i) => {
    d += g.getPath(cx, y, size).toPathData(2);
    cx += g.advanceWidth * scale + tracking;
    if (i < glyphs.length - 1) cx += fontObj.getKerningValue(g, glyphs[i + 1]) * scale;
  });
  return { svg: `<path d="${d}" fill="${fill}"/>`, width };
}

const svgDoc = (w, h, body, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f(w)} ${f(h)}" width="${f(w)}" height="${f(h)}" role="img" aria-label="Life Event Ceremonies – Michelle Anne, Celebrant">` +
  (bg ? `<rect width="100%" height="100%" fill="${bg}"/>` : '') +
  body +
  `</svg>\n`;

// Phones: mark and name only (the byline is unreadable at header size).
function compact({ gum = colours.gum, leaf = colours.leaf, blush = colours.blush } = {}) {
  const tx = 110;
  const title = text(serif, 'Life Event Ceremonies', tx, 64, 44, { fill: gum });
  return svgDoc(tx + title.width + 4, 100, `<g>${mark({ gum, leaf, blush })}</g>${title.svg}`);
}

// Michelle's sign-off for the About section, set in a handwritten script.
function signature() {
  const sig = text(script, 'Michelle x', 4, 52, 54, { fill: colours.gum });
  return svgDoc(sig.width + 12, 70, sig.svg).replace('aria-label="Life Event Ceremonies – Michelle Anne, Celebrant"', 'aria-label="Michelle"');
}

function horizontal({ gum = colours.gum, leaf = colours.leaf, blush = colours.blush, sub = colours.leaf } = {}) {
  const markSize = 100;
  const tx = markSize + 10;
  const title = text(serif, 'Life Event Ceremonies', tx, 56, 40, { fill: gum });
  const byline = text(sans, 'Michelle Anne, Celebrant', tx + 1, 84, 15.5, { fill: sub, tracking: 1.6 });
  const w = tx + Math.max(title.width, byline.width) + 4;
  return svgDoc(w, 100, `<g>${mark({ gum, leaf, blush })}</g>${title.svg}${byline.svg}`);
}

function stacked({ gum = colours.gum, leaf = colours.leaf, blush = colours.blush, sub = colours.leaf } = {}) {
  const w = text(serif, 'Life Event Ceremonies', 0, 0, 34).width + 24;
  const title = text(serif, 'Life Event Ceremonies', w / 2, 168, 34, { fill: gum, anchor: 'middle' });
  const byline = text(sans, 'Michelle Anne, Celebrant', w / 2, 196, 14, { fill: sub, tracking: 1.4, anchor: 'middle' });
  return svgDoc(w, 210, `<g transform="translate(${f(w / 2 - 65)} 0) scale(1.3)">${mark({ gum, leaf, blush })}</g>${title.svg}${byline.svg}`);
}

const markOnly = (opts) => svgDoc(100, 100, mark(opts));
const favicon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="${colours.mist}"/><g transform="translate(4 4) scale(.92)">${mark()}</g></svg>\n`;

const reversed = { gum: '#f3f5f0', leaf: '#b9cbb9', blush: '#e8c2b6', sub: '#cfdccf' };

const files = {
  'brand/logo-horizontal.svg': horizontal(),
  'brand/logo-horizontal-reversed.svg': horizontal(reversed),
  'brand/logo-stacked.svg': stacked(),
  'brand/logo-stacked-reversed.svg': stacked(reversed),
  'brand/mark.svg': markOnly(),
  'brand/logo-compact.svg': compact(),
  'brand/signature.svg': signature(),
  'favicon.svg': favicon(),
};
for (const [name, svg] of Object.entries(files)) fs.writeFileSync(path.join(pub, name), svg);

// PNG versions for social media, email signatures and print proofs.
await sharp(Buffer.from(files['brand/logo-stacked.svg']), { density: 400 }).resize({ width: 1200 }).png().toFile(path.join(brand, 'logo-stacked.png'));
await sharp(Buffer.from(files['brand/logo-horizontal.svg']), { density: 400 }).resize({ width: 1600 }).png().toFile(path.join(brand, 'logo-horizontal.png'));
await sharp(Buffer.from(files['favicon.svg']), { density: 300 }).resize(180, 180).png().toFile(path.join(pub, 'apple-touch-icon.png'));
await sharp(Buffer.from(files['favicon.svg']), { density: 300 }).resize(512, 512).png().toFile(path.join(brand, 'profile-picture.png'));

// Social share image (1200×630): stacked logo centred on mist.
const ogLogo = await sharp(Buffer.from(files['brand/logo-stacked.svg']), { density: 400 }).resize({ width: 760 }).png().toBuffer();
const { height: ogH } = await sharp(ogLogo).metadata();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: colours.mist } })
  .composite([{ input: ogLogo, left: 220, top: Math.round((630 - ogH) / 2) }])
  .png()
  .toFile(path.join(pub, 'og-image.png'));

console.log('Logo files written to client/public/brand and client/public');
