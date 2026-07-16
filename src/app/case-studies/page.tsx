import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "Case studies from the advisory and leadership work of Dr. Masud Sadiq Chaudhary.",
  path: "/case-studies",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Case Studies"}
      title={"Outcomes you can brief a board with."}
      description={"Selected engagements demonstrating distribution redesign, international market bridging, and platform building."}
      primaryCta={{ href: "/projects", label: "Projects" }}
      secondaryCta={{ href: "/consulting", label: "Consulting" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Distribution",
      title: "Veterinary Distribution Network Redesign",
      body: "Stronger regional coverage and partner accountability across pharmaceutical channels.",
    },
    {
      meta: "International",
      title: "Europe–South Asia Animal Health Bridge",
      body: "Active collaboration pipelines through Elenco Louvavel and partner networks.",
    },
    {
      meta: "Platform",
      title: "IVP as a Convening Platform",
      body: "Elevated stakeholder density and institutional visibility for veterinary pharmaceuticals.",
    }
        ]}
      />
    </SimplePage>
  );
}
