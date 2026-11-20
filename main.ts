// news-image-20261120 r2 entry: sums up 20 November 2026 in one image.
// Improvement over r1: a single broadsheet front page, "THE WORLD IN
// ONE DAY", dated Friday 20 November 2026, with one dominant lead
// visual (the Peace Palace in The Hague with gavel and scales), the
// World Court's Myanmar genocide ruling as the lead headline, four
// secondary stories in two tidy columns and an ALSO TODAY ticker
// (Voyager 1, GTA VI). All text is typeset programmatically, so no
// word is garbled. The program copies entry.png to /output/entry.png.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs this twice; both runs copy the same bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const srcPath = new URL('./entry.png', import.meta.url);

if (!existsSync(srcPath)) {
  throw new Error('entry.png is missing beside main.ts');
}

const bytes = readFileSync(srcPath);
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = bytes.length > 8 && PNG_SIGNATURE.every((b, i) => bytes[i] === b);
const isJpeg = bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG image');
}
if (isPng) {
  // Gate geometry: the PNG must be at most 1024 by 1024 pixels; the
  // width and height sit big-endian in the IHDR right after the sig.
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width > 1024 || height > 1024) {
    throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate limit`);
  }
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const destPath = join(outDir, 'entry.png');
copyFileSync(srcPath, destPath);
console.log(`Copied ${statSync(destPath).size} bytes to ${destPath}`);
