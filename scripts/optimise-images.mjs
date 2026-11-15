// Resizes the photos listed in scripts/images.json into web-ready WebP files.
//
//   npm run images
//
// Reads originals from "local assets/Photos" (gitignored), writes
// client/public/images/<name>-<width>.webp, client/src/content/images.generated.json
// (sizes + alt text for the <Photo> component) and client/public/images/CREDITS.md.
// Existing outputs are skipped, so delete a file to regenerate it.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1')), '..');
const srcDir = path.join(root, 'local assets/Photos');
const outDir = path.join(root, 'client/public/images');
const WIDTHS = [480, 960, 1600];

const { images } = JSON.parse(fs.readFileSync(path.join(root, 'scripts/images.json'), 'utf8'));
fs.mkdirSync(outDir, { recursive: true });

const generated = {};
const credits = [];

for (const [name, spec] of Object.entries(images)) {
  const src = path.join(srcDir, spec.src);
  if (!fs.existsSync(src)) {
    console.warn(`! missing original for ${name}: ${spec.src}`);
    continue;
  }
  let pipeline = sharp(src).rotate();
  const meta = await sharp(await pipeline.clone().toBuffer()).metadata();
  let { width, height } = meta;
  if (spec.trimTop) {
    const top = Math.round(height * spec.trimTop);
    pipeline = sharp(await pipeline.toBuffer()).extract({ left: 0, top, width, height: height - top });
    height -= top;
  }
  const base = await pipeline.toBuffer();
  const widths = WIDTHS.filter((w) => w <= width);
  if (!widths.length || widths.at(-1) < Math.min(width, WIDTHS.at(-1))) widths.push(Math.min(width, WIDTHS.at(-1)));
  for (const w of widths) {
    const file = path.join(outDir, `${name}-${w}.webp`);
    if (fs.existsSync(file)) continue;
    await sharp(base).resize({ width: w }).webp({ quality: 76 }).toFile(file);
  }
  generated[name] = {
    alt: spec.alt,
    width,
    height,
    widths,
    ...(spec.focus && { focus: spec.focus }),
  };
  if (spec.credit) credits.push(`| ${name} | ${spec.credit.photographer} | [Pexels](${spec.credit.url}) | Pexels License (free for commercial use) |`);
  console.log(`✓ ${name} (${width}×${height}) → ${widths.join(', ')}`);
}

fs.writeFileSync(path.join(root, 'client/src/content/images.generated.json'), JSON.stringify(generated, null, 2) + '\n');
fs.writeFileSync(
  path.join(outDir, 'CREDITS.md'),
  `# Image credits\n\nAll other photos are Michelle's own, from her ceremonies.\n\n| Image | Photographer | Source | Licence |\n|---|---|---|---|\n${credits.join('\n')}\n`,
);
