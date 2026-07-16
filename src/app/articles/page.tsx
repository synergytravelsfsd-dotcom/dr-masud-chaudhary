import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Articles",
  description: "Articles and executive commentary by Dr. Masud Sadiq Chaudhary on animal health and agribusiness.",
  path: "/articles",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Articles"}
      title={"Executive commentary for industry decision-makers."}
      description={"Analysis and perspective on poultry markets, veterinary pharmaceuticals, digital agriculture, and One Health."}
      primaryCta={{ href: "/publications", label: "Browse publications" }}
      secondaryCta={{ href: "/newsletter", label: "Subscribe" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Market lens",
      title: "Poultry economics under feed volatility",
      body: "How producers and policymakers can protect margins without compromising flock health programmes.",
    },
    {
      meta: "Pharma lens",
      title: "Distribution quality as competitive advantage",
      body: "Why technical service density and channel discipline determine veterinary product performance.",
    },
    {
      meta: "Future lens",
      title: "AI will not replace veterinary judgment",
      body: "It will demand better questions, cleaner data, and clearer operating models.",
    }
        ]}
      />
    </SimplePage>
  );
}
