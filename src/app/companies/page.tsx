import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Companies",
  description: "Companies led by Dr. Masud Sadiq Chaudhary: Synergy Pharma and Elenco Louvavel LDA.",
  path: "/companies",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Companies"}
      title={"Commercial platforms spanning Pakistan and Europe."}
      description={"Synergy Pharma and Elenco Louvavel LDA — vehicles for veterinary pharmaceuticals, market development, and international collaboration."}
      primaryCta={{ href: "/partners", label: "Partners" }}
      secondaryCta={{ href: "/contact", label: "Business enquiry" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Synergy Pharma",
      title: "CEO",
      body: "Veterinary pharmaceutical strategy, distribution excellence, and industry partnerships across poultry value chains.",
    },
    {
      meta: "Elenco Louvavel LDA",
      title: "Managing Partner · Portugal",
      body: "European–South Asian agribusiness and animal health collaboration pathways.",
    },
    {
      meta: "Focus",
      title: "Commercial + institutional",
      body: "Where enterprise execution meets association and expo leadership.",
    }
        ]}
      />
    </SimplePage>
  );
}
