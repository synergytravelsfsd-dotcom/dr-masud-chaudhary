export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  location: string;
  summary: string;
  category: "career" | "leadership" | "international" | "innovation";
};

export const careerTimeline: TimelineEvent[] = [
  {
    id: "veterinary-foundation",
    year: "2004+",
    title: "Veterinary & Poultry Foundation",
    location: "Pakistan",
    summary:
      "Built foundational expertise across commercial poultry systems, veterinary clinical practice, and production economics.",
    category: "career",
  },
  {
    id: "pharma-leadership",
    year: "2010+",
    title: "Veterinary Pharmaceutical Leadership",
    location: "Pakistan",
    summary:
      "Scaled technical and commercial operations across veterinary medicines, feed additives, and distribution networks.",
    category: "career",
  },
  {
    id: "europe-expansion",
    year: "2015+",
    title: "European Market Development",
    location: "Portugal · France · Netherlands · UK",
    summary:
      "Established cross-border agribusiness partnerships and European market pathways for animal health collaboration.",
    category: "international",
  },
  {
    id: "elenco",
    year: "2018+",
    title: "Managing Partner, Elenco Louvavel LDA",
    location: "Portugal",
    summary:
      "Led international business development connecting European and South Asian agribusiness and veterinary ecosystems.",
    category: "leadership",
  },
  {
    id: "synergy",
    year: "2020+",
    title: "CEO, Synergy Pharma",
    location: "Pakistan",
    summary:
      "Directed strategy for veterinary pharmaceuticals, market access, and industry partnerships across poultry value chains.",
    category: "leadership",
  },
  {
    id: "pvpa",
    year: "2022+",
    title: "Senior Vice Chairman, PVPA",
    location: "Pakistan",
    summary:
      "Advanced association-level advocacy for veterinary pharmaceutical standards, industry coordination, and policy dialogue.",
    category: "leadership",
  },
  {
    id: "ivp",
    year: "2023+",
    title: "Chief Organiser, IVP Expo",
    location: "International",
    summary:
      "Convened global veterinary pharmaceutical stakeholders around innovation, trade, and One Health priorities.",
    category: "international",
  },
  {
    id: "ai-ag",
    year: "2024+",
    title: "AI Agriculture & Poultry Intelligence",
    location: "Global",
    summary:
      "Championing AI-enabled livestock systems, digital decision support, and next-generation poultry intelligence platforms.",
    category: "innovation",
  },
];
