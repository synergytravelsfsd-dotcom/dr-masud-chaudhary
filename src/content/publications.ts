export type Publication = {
  slug: string;
  title: string;
  type: "article" | "research" | "policy" | "whitepaper" | "interview";
  date: string;
  summary: string;
  tags: string[];
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    slug: "ai-driven-poultry-intelligence",
    title: "AI-Driven Poultry Intelligence: From Farm Signals to Executive Decisions",
    type: "whitepaper",
    date: "2025-11-12",
    summary:
      "A strategic framework for deploying artificial intelligence across commercial poultry operations, spanning production analytics, disease early warning, and commercial forecasting.",
    tags: ["AI Poultry", "Digital Agriculture", "Decision Intelligence"],
    featured: true,
  },
  {
    slug: "one-health-veterinary-pharma",
    title: "One Health and the Veterinary Pharmaceutical Value Chain",
    type: "policy",
    date: "2025-06-04",
    summary:
      "Policy considerations for aligning animal health markets, antimicrobial stewardship, and public health outcomes across emerging economies.",
    tags: ["One Health", "Policy", "Veterinary Pharmaceuticals"],
    featured: true,
  },
  {
    slug: "pakistan-poultry-competitiveness",
    title: "Pakistan Poultry Competitiveness in a Multipolar Trade Landscape",
    type: "article",
    date: "2025-02-18",
    summary:
      "An executive briefing on production efficiency, feed economics, and export-ready quality systems for Pakistan’s poultry sector.",
    tags: ["Poultry", "Trade", "Pakistan"],
  },
  {
    slug: "regulatory-pathways-animal-health",
    title: "Regulatory Pathways for Animal Health Market Access",
    type: "research",
    date: "2024-09-30",
    summary:
      "Comparative observations on registration, distribution, and compliance frameworks shaping veterinary product commercialization.",
    tags: ["Regulatory Affairs", "Market Access"],
  },
  {
    slug: "feed-additives-performance",
    title: "Feed Additives and Performance Resilience in Commercial Layers",
    type: "research",
    date: "2024-04-11",
    summary:
      "Technical notes on nutrition strategies supporting flock resilience, egg production consistency, and cost control.",
    tags: ["Animal Nutrition", "Layer Production"],
  },
  {
    slug: "interview-global-agribusiness",
    title: "Conversation: International Agribusiness and Veterinary Diplomacy",
    type: "interview",
    date: "2024-01-22",
    summary:
      "A dialogue on partnership building between South Asian producers and European animal health ecosystems.",
    tags: ["International Partnerships", "Agribusiness"],
  },
];
