import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "public", "images");

const images = [
  { file: "logo.png", url: "http://www.apolloatv.com/wp-content/uploads/2025/10/apollo_logo_HID_high_gloss.png" },
  { file: "favicon.png", url: "http://www.apolloatv.com/wp-content/uploads/2025/10/apollo_logo_wordpress_icon-300x300.png" },
  { file: "hero-banner.webp", url: "http://www.apolloatv.com/wp-content/uploads/2025/12/main-banner.webp" },
  { file: "about.png", url: "http://www.apolloatv.com/wp-content/uploads/2023/10/aboutus-img-new3.png" },
  { file: "trust-logos.png", url: "http://www.apolloatv.com/wp-content/uploads/2025/10/LOGOS-1024x286.png" },
  { file: "cyber-roamer-feature.webp", url: "http://www.apolloatv.com/wp-content/uploads/2025/12/CYBER-ROAMER.webp" },
  { file: "category-dirt-bike.png", url: "http://www.apolloatv.com/wp-content/uploads/2023/09/new-dirt-bike-img.png" },
  { file: "category-scooter.png", url: "http://www.apolloatv.com/wp-content/uploads/2023/09/scooter-new-gray-img.png" },
  { file: "category-atv.png", url: "http://www.apolloatv.com/wp-content/uploads/2023/07/bike1-img.jpg" },
  { file: "category-go-kart.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2023/09/pro-new-img19.jpg" },
  { file: "products/gt-s-2000.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2026/06/gt-s__0004_%E5%A4%A9%E8%93%9D%E8%89%B2-6.jpg-1024x768.jpg" },
  { file: "products/vtr-x200-sport.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2026/03/MAIN_VTR-1024x822.jpg" },
  { file: "products/cyber-roamer-300-efi.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2026/03/CYBER300__0014_IMG_9470.JPG-1024x683.jpg" },
  { file: "products/ares-endurance.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2026/02/ENDORANCE__0004_IMG_4627.JPG-1024x683.jpg" },
  { file: "products/ares-rally.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2026/02/8R9A6858-1024x741.jpg" },
  { file: "products/sx-e2.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2026/02/SX-E2__0016_IMG_8789.JPG-1024x683.jpg" },
  { file: "products/apollo-blitz-125.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2023/07/L1061220.jpg" },
  { file: "products/trail-master-250.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2023/09/new-dirt-bike-img.png" },
  { file: "products/youth-explorer-110.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2024/10/HP-115E_BLUE__0007_BLUE-8.jpg-1024x684.jpg" },
  { file: "products/velocity-gt-kart.jpg", url: "http://www.apolloatv.com/wp-content/uploads/2023/09/pro-new-img19.jpg" },
];

fs.mkdirSync(path.join(imagesDir, "products"), { recursive: true });

for (const { file, url } of images) {
  const dest = path.join(imagesDir, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`OK ${file} (${buf.length} bytes)`);
  } catch (err) {
    console.error(`FAIL ${file}:`, err.message);
  }
}

console.log("Done.");
