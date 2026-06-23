import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = path.join(root, "public/images/logos-full.png");
const outDir = path.join(root, "public/images/brands");

const brands = [
  "apollo",
  "linhai",
  "jonway",
  "fangpower",
  "vitacci",
  "odes",
  "suncart",
  "mikilon",
  "jiajue",
  "bashan",
];

fs.mkdirSync(outDir, { recursive: true });

const meta = await sharp(source).metadata();
const width = meta.width ?? 2560;
const height = meta.height ?? 716;
const cols = 5;
const rows = 2;
const cellW = Math.floor(width / cols);
const cellH = Math.floor(height / rows);

for (let i = 0; i < brands.length; i++) {
  const col = i % cols;
  const row = Math.floor(i / cols);
  const left = col * cellW;
  const top = row * cellH;
  const extractW = col === cols - 1 ? width - left : cellW;
  const extractH = row === rows - 1 ? height - top : cellH;

  await sharp(source)
    .extract({ left, top, width: extractW, height: extractH })
    .resize({
      width: 280,
      height: 140,
      fit: "contain",
      background: { r: 255, g: 252, b: 248, alpha: 1 },
    })
    .png()
    .toFile(path.join(outDir, `${brands[i]}.png`));

  console.log(`Created ${brands[i]}.png`);
}

console.log("Done slicing brand logos.");
