// data/products.ts
// Central product data used by ProductsSection, ShopPage, ProductPage, and ProductDetailPage

export type Product = {
  id: string;
  name: string;
  category: string;          // "Biomass Pellets" | "Biomass Briquettes"
  price: string;             // display string e.g. "₹9,500"
  calorieVal: number;        // numeric kcal/kg for sorting
  minOrder: string;          // e.g. "5 tonnes"
  badge?: string;
  badgeColor?: string;
  tags: string[];            // short spec pills
  shortDesc: string;         // 1–2 sentence card description
  fullDesc: string;          // full paragraph for detail page
  images: string[];          // [main, thumb1, thumb2, ...]
  specs: [string, string][]; // [label, value] rows for specs table
};

export const products: Product[] = [
  {
    id: "pellets-pine",
    name: "Pine Wood Pellets",
    category: "Biomass Pellets",
    price: "₹9,500",
    calorieVal: 4800,
    minOrder: "5 tonnes",
    badge: "Bestseller",
    badgeColor: "#c4763a",
    tags: ["6mm dia", "4800 kcal/kg", "<1% ash", "≤8% moisture"],
    shortDesc:
      "Premium 6mm ENplus A1 grade pellets from pure pine sawdust. Ultra-low ash content, ideal for pellet boilers and stoves.",
    fullDesc:
      "Premium 6mm ENplus A1 grade pellets manufactured from pure pine sawdust. Ultra-low ash content and exceptional calorific value make these the ideal choice for residential pellet stoves, commercial boilers, and industrial heating systems. Each batch is lab-tested for moisture, ash, calorific value, and bulk density before dispatch.",
    images: [
      "https://images.unsplash.com/photo-1567461175522-f79d7027bd98?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    ],
    specs: [
      ["Diameter",         "6 mm"],
      ["Calorific Value",  "4,800 kcal/kg"],
      ["Moisture Content", "≤ 8%"],
      ["Ash Content",      "< 1%"],
      ["Bulk Density",     "650 kg/m³"],
      ["Certification",    "ENplus A1, ISO 17225"],
      ["Min. Order",       "5 tonnes"],
      ["Packaging",        "15 kg moisture-proof bags"],
    ],
  },
  {
    id: "briquettes-rice",
    name: "Rice Husk Briquettes",
    category: "Biomass Briquettes",
    price: "₹5,200",
    calorieVal: 3800,
    minOrder: "10 tonnes",
    badge: "Eco Choice",
    badgeColor: "#3e7a42",
    tags: ["90mm hex", "3800 kcal/kg", "<12% ash", "≤10% moisture"],
    shortDesc:
      "High-density hexagonal briquettes from paddy rice husk. Longer burn time, perfect for industrial boilers and kilns.",
    fullDesc:
      "High-density hexagonal briquettes produced from paddy rice husk — one of India's most abundant agricultural residues. Longer burn time and high ash fusion temperature make them perfect for industrial boilers, kilns, and foundry applications. Sourced from rice mills in Punjab, Haryana, and Uttar Pradesh.",
    images: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1601984840798-44da97571475?w=800&q=80",
    ],
    specs: [
      ["Shape",            "90mm Hexagonal"],
      ["Calorific Value",  "3,800 kcal/kg"],
      ["Moisture Content", "≤ 10%"],
      ["Ash Content",      "< 12%"],
      ["Density",          "1,100 kg/m³"],
      ["Certification",    "BIS, ISO 17225"],
      ["Min. Order",       "10 tonnes"],
      ["Packaging",        "Loose / Bulk Bags"],
    ],
  },
  {
    id: "pellets-agri",
    name: "Agri-Residue Pellets",
    category: "Biomass Pellets",
    price: "₹7,800",
    calorieVal: 4200,
    minOrder: "20 tonnes",
    badge: "Industrial",
    badgeColor: "#2d5c30",
    tags: ["8mm dia", "4200 kcal/kg", "<5% ash", "≤9% moisture"],
    shortDesc:
      "8mm pellets from sugarcane bagasse & mustard straw blend. High bulk density for co-firing in power plants.",
    fullDesc:
      "8mm industrial pellets blended from sugarcane bagasse and mustard straw. High bulk density and consistent quality make them ideal for large-scale co-firing in power plants, captive power units, and cement kilns. Available in custom blends based on calorific value requirements.",
    images: [
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
      "https://images.unsplash.com/photo-1567461175522-f79d7027bd98?w=800&q=80",
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80",
    ],
    specs: [
      ["Diameter",         "8 mm"],
      ["Calorific Value",  "4,200 kcal/kg"],
      ["Moisture Content", "≤ 9%"],
      ["Ash Content",      "< 5%"],
      ["Bulk Density",     "680 kg/m³"],
      ["Certification",    "ISO 17225"],
      ["Min. Order",       "20 tonnes"],
      ["Packaging",        "25 kg bags / bulk"],
    ],
  },
  {
    id: "briquettes-sawdust",
    name: "Sawdust Briquettes",
    category: "Biomass Briquettes",
    price: "₹6,800",
    calorieVal: 4500,
    minOrder: "5 tonnes",
    tags: ["60mm cyl", "4500 kcal/kg", "<2% ash", "≤8% moisture"],
    shortDesc:
      "Compressed sawdust cylinders, binder-free. Slow combustion, high calorific output for foundries and brick kilns.",
    fullDesc:
      "Binder-free compressed sawdust cylinders with an extraordinarily clean burn profile. Very low ash and sulfur content make them a premium choice for foundries, ceramic studios, and brick kilns requiring precise heat control. No binder used — 100% compressed sawdust from furniture and timber industries.",
    images: [
      "https://images.unsplash.com/photo-1601984840798-44da97571475?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1567461175522-f79d7027bd98?w=800&q=80",
    ],
    specs: [
      ["Shape",            "60mm Cylinder"],
      ["Calorific Value",  "4,500 kcal/kg"],
      ["Moisture Content", "≤ 8%"],
      ["Ash Content",      "< 2%"],
      ["Density",          "1,050 kg/m³"],
      ["Binder",           "Binder-Free"],
      ["Min. Order",       "5 tonnes"],
      ["Packaging",        "25 kg PP bags"],
    ],
  },
  {
    id: "pellets-bamboo",
    name: "Bamboo Pellets",
    category: "Biomass Pellets",
    price: "₹11,200",
    calorieVal: 5100,
    minOrder: "3 tonnes",
    badge: "Premium",
    badgeColor: "#c4763a",
    tags: ["6mm dia", "5100 kcal/kg", "<1.5% ash", "≤7% moisture"],
    shortDesc:
      "Ultra-premium densified bamboo pellets with the highest calorific value. Preferred by pharmaceutical and textile boilers.",
    fullDesc:
      "Ultra-premium densified bamboo pellets with the highest calorific value in our range. Sourced from managed bamboo plantations in Assam and Tripura. These pellets are the first choice for pharmaceutical, chemical, and precision textile boilers that demand consistent, clean, high-temperature heat. ENplus B certified.",
    images: [
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80",
      "https://images.unsplash.com/photo-1567461175522-f79d7027bd98?w=800&q=80",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
    ],
    specs: [
      ["Diameter",         "6 mm"],
      ["Calorific Value",  "5,100 kcal/kg"],
      ["Moisture Content", "≤ 7%"],
      ["Ash Content",      "< 1.5%"],
      ["Bulk Density",     "700 kg/m³"],
      ["Certification",    "ENplus B, ISO 17225"],
      ["Min. Order",       "3 tonnes"],
      ["Packaging",        "15 kg premium bags"],
    ],
  },
  {
    id: "briquettes-cotton",
    name: "Cotton Stalk Briquettes",
    category: "Biomass Briquettes",
    price: "₹4,500",
    calorieVal: 3600,
    minOrder: "10 tonnes",
    tags: ["75mm cyl", "3600 kcal/kg", "<8% ash", "≤12% moisture"],
    shortDesc:
      "Made from cotton stalk waste. Cost-effective industrial fuel with consistent density and burn rate.",
    fullDesc:
      "Economical briquettes compressed from cotton stalk waste, widely available across Maharashtra, Gujarat, and Andhra Pradesh. A cost-effective industrial boiler fuel that dramatically reduces dependency on coal and firewood. Ideal for dyeing houses, small-scale boilers, and agro-processing units.",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      "https://images.unsplash.com/photo-1601984840798-44da97571475?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    specs: [
      ["Shape",            "75mm Cylinder"],
      ["Calorific Value",  "3,600 kcal/kg"],
      ["Moisture Content", "≤ 12%"],
      ["Ash Content",      "< 8%"],
      ["Density",          "900 kg/m³"],
      ["Certification",    "BIS"],
      ["Min. Order",       "10 tonnes"],
      ["Packaging",        "Loose / Jumbo Bags"],
    ],
  },
];