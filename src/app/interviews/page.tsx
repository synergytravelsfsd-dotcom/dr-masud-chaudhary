import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interviews",
  description: "Interviews featuring Dr. Masud Sadiq Chaudhary on animal health and international agribusiness.",
  path: "/interviews",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Interviews"}
      title={"Conversations on veterinary futures and market realities."}
      description={"Selected interviews exploring international agribusiness, association leadership, and AI agriculture."}
      primaryCta={{ href: "/media", label: "Media centre" }}
      secondaryCta={{ href: "/podcast", label: "Podcast" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Feature",
      title: "International Agribusiness and Veterinary Diplomacy",
      body: "On partnership building between South Asian producers and European ecosystems.",
    },
    {
      meta: "Dialogue",
      title: "Why association leadership matters now",
      body: "Industry coordination as a competitive and public-health instrument.",
    },
    {
      meta: "Brief",
      title: "Poultry intelligence after the hype cycle",
      body: "Where AI creates durable operational advantage.",
    }
        ]}
      />
    </SimplePage>
  );
}
