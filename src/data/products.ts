export type ProductCategory =
  | "atv"
  | "utv"
  | "dirt-bike"
  | "go-kart"
  | "scooter"
  | "electric";

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  engineSize: string;
  tagline: string;
  description: string;
  featured: boolean;
  colors: string[];
  specs: ProductSpec[];
  highlights: string[];
};

export const categoryLabels: Record<ProductCategory, string> = {
  atv: "ATVs",
  utv: "UTVs",
  "dirt-bike": "Dirt Bikes",
  "go-kart": "Go-Karts",
  scooter: "Scooters",
  electric: "Electric",
};

export const engineSizes = ["50cc", "110cc", "125cc", "200cc", "250cc", "300cc", "500cc"];

export const products: Product[] = [
  {
    slug: "gt-s-2000",
    name: "GT-S 2000",
    category: "atv",
    engineSize: "200cc",
    tagline: "Sport performance for every trail",
    description:
      "The GT-S 2000 delivers spirited performance with rugged construction. Built for dealers who want a reliable sport ATV that appeals to recreational and utility riders alike.",
    featured: true,
    colors: ["Racing Red", "Matte Black", "Camo Green"],
    highlights: ["Automatic transmission", "Hydraulic disc brakes", "LED lighting", "Heavy-duty suspension"],
    specs: [
      { label: "Engine", value: "200cc 4-Stroke Air-Cooled" },
      { label: "Transmission", value: "Automatic CVT" },
      { label: "Drive", value: "2WD / 4WD Selectable" },
      { label: "Suspension", value: "Independent Front / Swing Arm Rear" },
      { label: "Brakes", value: "Hydraulic Disc Front & Rear" },
      { label: "Tires", value: "25×8-12 Front / 25×10-12 Rear" },
      { label: "Fuel Capacity", value: "4.2 Gallons" },
      { label: "Max Load", value: "330 lbs" },
    ],
  },
  {
    slug: "vtr-x200-sport",
    name: "VTR X200 Sport",
    category: "atv",
    engineSize: "200cc",
    tagline: "Aggressive styling meets trail-ready capability",
    description:
      "The VTR X200 Sport stands out on any showroom floor. Sport-tuned suspension and bold graphics make it a top seller for performance-minded customers.",
    featured: true,
    colors: ["Electric Blue", "Stealth Black", "White Lightning"],
    highlights: ["Sport-tuned suspension", "Aggressive bodywork", "Digital gauge cluster", "Rack & tow hitch"],
    specs: [
      { label: "Engine", value: "200cc 4-Stroke" },
      { label: "Transmission", value: "Automatic CVT" },
      { label: "Drive", value: "2WD / 4WD" },
      { label: "Suspension", value: "Sport-Tuned Independent" },
      { label: "Brakes", value: "Dual Hydraulic Disc" },
      { label: "Wheelbase", value: "49.2 in" },
      { label: "Ground Clearance", value: "9.8 in" },
      { label: "Warranty", value: "6 Month Limited" },
    ],
  },
  {
    slug: "cyber-roamer-300-efi",
    name: "Cyber Roamer 300 EFI",
    category: "atv",
    engineSize: "300cc",
    tagline: "EFI power for demanding terrain",
    description:
      "Electronic fuel injection delivers consistent power across elevation changes. The Cyber Roamer 300 EFI is engineered for dealers serving mountain and trail markets.",
    featured: true,
    colors: ["Cyber Orange", "Graphite", "Forest Camo"],
    highlights: ["EFI fuel system", "300cc power", "Premium shocks", "Winch-ready front bumper"],
    specs: [
      { label: "Engine", value: "300cc 4-Stroke EFI" },
      { label: "Transmission", value: "Automatic CVT" },
      { label: "Drive", value: "2WD / 4WD Lock" },
      { label: "Fuel System", value: "Electronic Fuel Injection" },
      { label: "Suspension", value: "Adjustable Preload Shocks" },
      { label: "Brakes", value: "Hydraulic Disc All Around" },
      { label: "Towing Capacity", value: "1,100 lbs" },
      { label: "Rack Capacity", value: "Front 66 lbs / Rear 132 lbs" },
    ],
  },
  {
    slug: "ares-endurance",
    name: "Ares Endurance",
    category: "utv",
    engineSize: "500cc",
    tagline: "Built for workdays and weekend adventures",
    description:
      "The Ares Endurance UTV combines cargo capacity with comfortable seating for two. A versatile side-by-side for farm, ranch, and recreational dealers.",
    featured: true,
    colors: ["Desert Tan", "Industrial Gray", "Patriot Red"],
    highlights: ["2-passenger cabin", "1,000 lb bed capacity", "Roll cage protection", "Power steering"],
    specs: [
      { label: "Engine", value: "500cc 4-Stroke" },
      { label: "Transmission", value: "CVT with High/Low/Reverse" },
      { label: "Drive", value: "4WD with Locking Differential" },
      { label: "Seating", value: "2-Passenger Bucket Seats" },
      { label: "Bed Capacity", value: "1,000 lbs" },
      { label: "Towing", value: "1,200 lbs" },
      { label: "Steering", value: "Electronic Power Steering" },
      { label: "Top Speed", value: "45 mph" },
    ],
  },
  {
    slug: "ares-rally",
    name: "Ares Rally",
    category: "utv",
    engineSize: "500cc",
    tagline: "Rally-inspired performance UTV",
    description:
      "Inspired by desert racing, the Ares Rally delivers aggressive handling and head-turning design. Perfect for dealers targeting the sport UTV segment.",
    featured: true,
    colors: ["Rally Yellow", "Matte Black", "Racing Red"],
    highlights: ["Long-travel suspension", "Rally graphics package", "Sport seats with harness", "LED light bar ready"],
    specs: [
      { label: "Engine", value: "500cc 4-Stroke High-Output" },
      { label: "Transmission", value: "CVT Sport Mode" },
      { label: "Suspension", value: "Long-Travel Independent" },
      { label: "Wheel Travel", value: "10 in Front / 10 in Rear" },
      { label: "Brakes", value: "4-Wheel Hydraulic Disc" },
      { label: "Ground Clearance", value: "12.5 in" },
      { label: "Fuel Capacity", value: "7.5 Gallons" },
      { label: "Warranty", value: "6 Month Limited" },
    ],
  },
  {
    slug: "sx-e2",
    name: "SX-E2",
    category: "electric",
    engineSize: "Electric",
    tagline: "Silent power for the next generation",
    description:
      "The SX-E2 electric dirt bike introduces young riders to powersports with adjustable power modes and zero emissions. A growing category for forward-thinking dealers.",
    featured: true,
    colors: ["Apollo Red", "Electric Blue", "Stealth Black"],
    highlights: ["Adjustable power modes", "Removable battery", "Lightweight frame", "Youth-friendly ergonomics"],
    specs: [
      { label: "Motor", value: "Brushless Electric" },
      { label: "Battery", value: "Removable Lithium-Ion" },
      { label: "Run Time", value: "Up to 2 Hours" },
      { label: "Charge Time", value: "2.5 Hours" },
      { label: "Power Modes", value: "3 Adjustable Levels" },
      { label: "Frame", value: "Lightweight Aluminum" },
      { label: "Brakes", value: "Hydraulic Disc" },
      { label: "Age Range", value: "Ages 8–14" },
    ],
  },
  {
    slug: "apollo-blitz-125",
    name: "Apollo Blitz 125",
    category: "dirt-bike",
    engineSize: "125cc",
    tagline: "Entry-level dirt bike excellence",
    description:
      "The Apollo Blitz 125 is the ideal gateway dirt bike for new riders. Reliable, affordable, and backed by Apollo's dealer support network.",
    featured: false,
    colors: ["Apollo Red", "Black", "White"],
    highlights: ["Kick & electric start", "Adjustable suspension", "Knobby tires", "Lightweight chassis"],
    specs: [
      { label: "Engine", value: "125cc 4-Stroke" },
      { label: "Start", value: "Electric & Kick Start" },
      { label: "Transmission", value: "4-Speed Manual" },
      { label: "Suspension", value: "Inverted Front Fork" },
      { label: "Brakes", value: "Hydraulic Disc" },
      { label: "Seat Height", value: "33.5 in" },
      { label: "Weight", value: "187 lbs" },
      { label: "Warranty", value: "6 Month Limited" },
    ],
  },
  {
    slug: "trail-master-250",
    name: "Trail Master 250",
    category: "dirt-bike",
    engineSize: "250cc",
    tagline: "Trail dominance in a 250 package",
    description:
      "For riders ready to step up, the Trail Master 250 offers more displacement and premium components without breaking the dealer's margin.",
    featured: false,
    colors: ["Racing Red", "Black", "Blue"],
    highlights: ["250cc power", "Upside-down forks", "Racing exhaust", "Aggressive geometry"],
    specs: [
      { label: "Engine", value: "250cc 4-Stroke" },
      { label: "Transmission", value: "5-Speed Manual" },
      { label: "Suspension", value: "USD Front / Monoshock Rear" },
      { label: "Brakes", value: "Hydraulic Disc" },
      { label: "Seat Height", value: "36 in" },
      { label: "Wheel Size", value: "21 Front / 18 Rear" },
      { label: "Weight", value: "231 lbs" },
      { label: "Fuel Capacity", value: "1.8 Gallons" },
    ],
  },
  {
    slug: "youth-explorer-110",
    name: "Youth Explorer 110",
    category: "atv",
    engineSize: "110cc",
    tagline: "Safe, fun riding for young adventurers",
    description:
      "Parent-approved safety features meet kid-approved fun. The Youth Explorer 110 includes speed limiters and remote shutoff for peace of mind.",
    featured: false,
    colors: ["Camo Green", "Pink", "Blue"],
    highlights: ["Parental speed limiter", "Remote engine shutoff", "Automatic transmission", "Safety tether"],
    specs: [
      { label: "Engine", value: "110cc 4-Stroke Air-Cooled" },
      { label: "Transmission", value: "Automatic" },
      { label: "Speed Limiter", value: "Adjustable 5–25 mph" },
      { label: "Remote Shutoff", value: "Included" },
      { label: "Brakes", value: "Foot & Hand Brake" },
      { label: "Age Range", value: "Ages 10+" },
      { label: "Weight Limit", value: "150 lbs" },
      { label: "Warranty", value: "6 Month Limited" },
    ],
  },
  {
    slug: "velocity-gt-kart",
    name: "Velocity GT Kart",
    category: "go-kart",
    engineSize: "200cc",
    tagline: "Track-ready fun for the whole family",
    description:
      "The Velocity GT Kart brings go-kart excitement to your dealership floor. Roll cage, seat belts, and responsive handling for recreational buyers.",
    featured: false,
    colors: ["Racing Red", "Yellow", "Black"],
    highlights: ["Roll cage", "Seat belts", "Racing seat", "Responsive steering"],
    specs: [
      { label: "Engine", value: "200cc 4-Stroke" },
      { label: "Transmission", value: "Automatic CVT" },
      { label: "Drive", value: "Rear Wheel Drive" },
      { label: "Brakes", value: "Hydraulic Disc" },
      { label: "Seating", value: "1-Passenger" },
      { label: "Top Speed", value: "35 mph" },
      { label: "Fuel Capacity", value: "1.5 Gallons" },
      { label: "Warranty", value: "6 Month Limited" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByEngineSize(size: string): Product[] {
  return products.filter((p) => p.engineSize === size);
}
