export type TimelineEvent = {
  id: string;
  year: string;
  title: string;
  location: string;
  summary: string;
  category: "career" | "leadership" | "international" | "innovation" | "education";
};

/** Chronological professional path — formation through enterprise and scholarship. */
export const careerJourney: TimelineEvent[] = [
  {
    id: "dvm",
    year: "1995",
    title: "Doctor of Veterinary Medicine",
    location: "Pakistan",
    summary:
      "Completed the DVM — the clinical and scientific foundation for three decades of animal health practice.",
    category: "education",
  },
  {
    id: "tech-pk-start",
    year: "1995–1996",
    title: "Technical Services, Poultry Industry",
    location: "Pakistan",
    summary:
      "Entered commercial poultry with field technical services — bridging veterinary science and production realities.",
    category: "career",
  },
  {
    id: "tech-saudi",
    year: "1996–1999",
    title: "Technical Service, Poultry Sector",
    location: "Saudi Arabia",
    summary:
      "Delivered technical service across Gulf poultry operations, building early international field experience.",
    category: "international",
  },
  {
    id: "tech-pk-return",
    year: "1999–2002",
    title: "Technical Services to Poultry Industry",
    location: "Pakistan",
    summary:
      "Returned to strengthen poultry technical programmes across commercial flocks and production systems.",
    category: "career",
  },
  {
    id: "uk-mba",
    year: "2002–2008",
    title: "MBA & Customer Services Leadership",
    location: "United Kingdom",
    summary:
      "Relocated to the UK, completed an MBA, and served as Customer Services Manager — pairing commercial discipline with veterinary depth.",
    category: "education",
  },
  {
    id: "enterprise-farming",
    year: "2008–2016",
    title: "Feed Additive Imports & Integrated Farming",
    location: "Pakistan",
    summary:
      "Founded an imports business in feed additives and launched production across broiler, layer, and breeder farming.",
    category: "career",
  },
  {
    id: "manufacturing",
    year: "2016–Present",
    title: "Imports & Local Veterinary Manufacturing",
    location: "Pakistan",
    summary:
      "Expanded into local manufacturing of veterinary products — antibiotics, feed supplements, additives, and biosecurity solutions — alongside continued imports.",
    category: "career",
  },
  {
    id: "msc-austria",
    year: "2026",
    title: "MSc, Precision in Animal Health",
    location: "Austria",
    summary:
      "Continuing postgraduate study in precision animal health — advancing data-driven livestock systems and next-generation veterinary practice.",
    category: "education",
  },
];

/** Leadership and influence milestones. */
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

/** Curated arc for the homepage — spans formation to present influence. */
export const careerHighlights: TimelineEvent[] = [
  careerJourney[0],
  careerJourney[2],
  careerJourney[4],
  careerJourney[6],
  careerTimeline[4],
];
