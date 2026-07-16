export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  region: string;
  outcome: string;
  summary: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "distribution-network-redesign",
    title: "Veterinary Distribution Network Redesign",
    sector: "Veterinary Pharmaceuticals",
    region: "Pakistan",
    outcome: "Stronger regional coverage and partner accountability",
    summary:
      "Re-architected regional distribution partnerships to improve product availability, technical support density, and commercial governance.",
  },
  {
    slug: "european-market-bridge",
    title: "Europe–South Asia Animal Health Bridge",
    sector: "International Trade",
    region: "Portugal · Pakistan",
    outcome: "Active cross-border collaboration pipeline",
    summary:
      "Established a structured pathway for technology transfer, trade exploration, and agribusiness partnership development.",
  },
  {
    slug: "ivp-platform-build",
    title: "IVP as a Convening Platform",
    sector: "Industry Platforms",
    region: "International",
    outcome: "Elevated stakeholder density and institutional visibility",
    summary:
      "Positioned IVP as a multi-stakeholder forum connecting manufacturers, regulators, clinicians, and international partners.",
  },
];
