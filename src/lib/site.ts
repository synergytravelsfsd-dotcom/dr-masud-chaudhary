export const siteConfig = {
  name: "Dr. Masud Sadiq Chaudhary",
  shortName: "Dr. Masud Chaudhary",
  title: "Dr. Masud Sadiq Chaudhary | Global Animal Health & Agribusiness Executive",
  description:
    "International veterinarian, animal health executive, and agribusiness strategist advancing poultry innovation, veterinary pharmaceuticals, One Health, and AI-driven agriculture across Pakistan, Europe, and the Middle East.",
  url: "https://drmasudchaudhary.com",
  locale: "en_US",
  ogImage: "/images/masud-sadiq-chaudhary-square.jpg",
  portrait: "/images/masud-sadiq-chaudhary.jpg",
  email: "drmasud128@hotmail.co.uk",
  phone: "+92 300 0000000",
  experienceYears: 20,
  locations: [
    "Pakistan",
    "Portugal",
    "France",
    "Netherlands",
    "United Kingdom",
    "Middle East",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/drmasudchaudhary",
    x: "https://x.com/drmasudchaudhary",
    youtube: "https://www.youtube.com/@drmasudchaudhary",
  },
  keywords: [
    "Dr Masud Sadiq Chaudhary",
    "Veterinary Expert Pakistan",
    "Poultry Consultant Pakistan",
    "Animal Health Consultant",
    "Veterinary Pharmaceutical Consultant",
    "One Health Pakistan",
    "AI Poultry",
    "Veterinary Speaker",
    "International Poultry Consultant",
  ],
} as const;

export const roles = [
  "International Veterinarian",
  "Animal Health Executive",
  "Agribusiness Strategist",
  "Veterinary Pharmaceutical Expert",
  "Poultry Industry Advisor",
  "International Business Developer",
  "One Health Advocate",
  "AI Agriculture Evangelist",
] as const;

export const leadership = [
  {
    title: "Senior Vice Chairman",
    org: "Pakistan Veterinary Pharmaceuticals Association (PVPA)",
    href: "/pvpa",
    body: "Association governance, standards advocacy, and sector coordination across Pakistan’s veterinary pharmaceutical industry.",
  },
  {
    title: "Chief Organiser",
    org: "International Veterinary Pharmaceuticals Expo (IVP)",
    href: "/ivp",
    body: "Convening manufacturers, regulators, clinicians, and international partners around veterinary pharmaceutical innovation and trade.",
  },
  {
    title: "CEO",
    org: "Synergy Pharma",
    href: "/companies#synergy-pharma",
    body: "Commercial and strategic leadership for veterinary pharmaceuticals, market access, and poultry value-chain partnerships.",
  },
  {
    title: "Managing Partner",
    org: "Elenco Louvavel LDA, Portugal",
    href: "/companies#elenco-louvavel",
    body: "European–South Asian agribusiness and animal health collaboration pathways through Portugal-based partnership development.",
  },
  {
    title: "Consultant / Representative",
    org: "Animal Health Concepts, Netherlands",
    href: "/partners",
    body: "Representation and advisory engagement with Animal Health Concepts across European animal health markets and technical collaboration.",
  },
  {
    title: "Consultant / Representative",
    org: "Optifarm, United Kingdom",
    href: "/partners",
    body: "UK-based consultancy and representation supporting Optifarm’s animal health, farm performance, and international market programmes.",
  },
  {
    title: "Member",
    org: "Pakistan Poultry Association (PPA)",
    href: "/leadership",
    body: "Active member contributing to national poultry industry dialogue, producer coordination, and sector development priorities.",
  },
  {
    title: "Former Central Executive Member (2022–2024)",
    org: "Pakistan Poultry Association (PPA)",
    href: "/leadership",
    body: "Served on the Central Executive of the Pakistan Poultry Association from 2022 to 2024, supporting national industry governance and policy engagement.",
  },
  {
    title: "Former President, Faisalabad Region",
    org: "Pakistan Poultry Association (PPA)",
    href: "/leadership",
    body: "Led the Faisalabad Region of the Pakistan Poultry Association, advancing regional producer coordination and industry representation.",
  },
] as const;

export const expertise = [
  "Veterinary Medicine",
  "Commercial Poultry",
  "Layer Production",
  "Broiler Production",
  "Animal Nutrition",
  "Feed Additives",
  "Veterinary Pharmaceuticals",
  "Technical Consultancy",
  "Regulatory Affairs",
  "International Trade",
  "Business Strategy",
  "Distribution Networks",
  "Digital Agriculture",
  "AI in Livestock",
  "Poultry Intelligence",
  "One Health",
  "Food Security",
  "Public Policy",
  "International Partnerships",
] as const;

export const audiences = [
  "Government",
  "International NGOs",
  "FAO",
  "WOAH",
  "Investors",
  "Agribusiness Leaders",
  "Veterinary Companies",
  "Universities",
  "Researchers",
  "Media",
  "Conference Organizers",
  "Trade Associations",
  "Poultry Producers",
  "Feed Companies",
  "Students",
  "Young Veterinarians",
] as const;

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  {
    title: "About",
    href: "/about",
    children: [
      { title: "Biography", href: "/about", description: "Career, vision, and global footprint" },
      { title: "Leadership", href: "/leadership", description: "Board roles and institutional mandates" },
      { title: "Companies", href: "/companies", description: "Synergy Pharma & Elenco Louvavel" },
    ],
  },
  {
    title: "Engage",
    href: "/consulting",
    children: [
      { title: "Consulting", href: "/consulting", description: "Strategy, technical, and market advisory" },
      { title: "Speaking", href: "/speaking", description: "Keynotes, panels, and briefings" },
      { title: "Projects", href: "/projects", description: "Selected engagements and outcomes" },
      { title: "Case Studies", href: "/case-studies", description: "Evidence of industry impact" },
    ],
  },
  {
    title: "Knowledge",
    href: "/knowledge",
    children: [
      { title: "Knowledge Hub", href: "/knowledge", description: "Insights across animal health" },
      { title: "Publications", href: "/publications", description: "Papers, briefs, and white papers" },
      { title: "Articles", href: "/articles", description: "Executive commentary and analysis" },
      { title: "Research", href: "/research", description: "Research repository" },
      { title: "Downloads", href: "/downloads", description: "CV, media kits, and resources" },
    ],
  },
  {
    title: "Presence",
    href: "/media",
    children: [
      { title: "Media", href: "/media", description: "Press, interviews, and coverage" },
      { title: "Events", href: "/events", description: "Conferences and industry forums" },
      { title: "Gallery", href: "/gallery", description: "Moments from the field and stage" },
      { title: "Interviews", href: "/interviews", description: "Conversations and profiles" },
      { title: "Podcast", href: "/podcast", description: "Audio briefings and dialogues" },
    ],
  },
  {
    title: "Platforms",
    href: "/ivp",
    children: [
      { title: "IVP", href: "/ivp", description: "International Veterinary Pharmaceuticals Expo" },
      { title: "PVPA", href: "/pvpa", description: "Pakistan Veterinary Pharmaceuticals Association" },
      { title: "Partners", href: "/partners", description: "Global collaboration network" },
    ],
  },
];

export const footerNav = {
  platform: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Leadership", href: "/leadership" },
    { title: "Contact", href: "/contact" },
  ],
  services: [
    { title: "Consulting", href: "/consulting" },
    { title: "Speaking", href: "/speaking" },
    { title: "Projects", href: "/projects" },
    { title: "Newsletter", href: "/newsletter" },
  ],
  knowledge: [
    { title: "Publications", href: "/publications" },
    { title: "Articles", href: "/articles" },
    { title: "Research", href: "/research" },
    { title: "Knowledge Hub", href: "/knowledge" },
  ],
  initiatives: [
    { title: "IVP", href: "/ivp" },
    { title: "PVPA", href: "/pvpa" },
    { title: "Companies", href: "/companies" },
    { title: "Partners", href: "/partners" },
  ],
} as const;
