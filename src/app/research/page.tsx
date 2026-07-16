import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Research",
  description: "Research repository of Dr. Masud Sadiq Chaudhary covering animal health, poultry, and digital agriculture.",
  path: "/research",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Research"}
      title={"A repository built for citation, briefing, and collaboration."}
      description={"Research notes and working papers spanning production systems, regulatory pathways, and digital livestock intelligence."}
      primaryCta={{ href: "/publications", label: "Publication library" }}
      secondaryCta={{ href: "/contact", label: "Collaborate" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Working paper",
      title: "Regulatory Pathways for Animal Health Market Access",
      body: "Comparative notes for teams navigating registration and commercialisation sequences.",
    },
    {
      meta: "Field synthesis",
      title: "Feed Additives and Layer Performance Resilience",
      body: "Practical synthesis for nutrition and production teams managing flock consistency.",
    },
    {
      meta: "Systems note",
      title: "One Health Value Chain Interventions",
      body: "Where veterinary pharmaceuticals intersect stewardship and public outcomes.",
    }
        ]}
      />
    </SimplePage>
  );
}
