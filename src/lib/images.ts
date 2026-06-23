const imageOverrides: Record<string, string> = {
  "trail-master-250": "/images/products/trail-master-250.png",
};

export function productImage(slug: string): string {
  return imageOverrides[slug] ?? `/images/products/${slug}.jpg`;
}

export const siteImages = {
  logo: "/images/logo.png",
  favicon: "/images/favicon.png",
  heroBanner: "/images/hero-banner.webp",
  about: "/images/about.png",
  trustLogos: "/images/logos-full.png",
  cyberRoamerFeature: "/images/cyber-roamer-feature.webp",
  categories: {
    atv: "/images/category-atv.png",
    utv: "/images/products/ares-endurance.jpg",
    "dirt-bike": "/images/category-dirt-bike.png",
    "go-kart": "/images/category-go-kart.jpg",
    scooter: "/images/category-scooter.png",
    electric: "/images/products/sx-e2.jpg",
  } as const,
};
