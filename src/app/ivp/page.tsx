import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IVP",
  description: "International Veterinary Pharmaceuticals Expo (IVP) organised under the leadership of Dr. Masud Sadiq Chaudhary.",
  path: "/ivp",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"IVP"}
      title={"International Veterinary Pharmaceuticals Expo."}
      description={"A convening platform connecting manufacturers, regulators, clinicians, distributors, and international partners around animal health innovation."}
      primaryCta={{ href: "/events", label: "Event timeline" }}
      secondaryCta={{ href: "/contact", label: "Partner with IVP" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Mandate",
      title: "Chief Organiser",
      body: "Programme architecture, stakeholder density, and international partnership development.",
    },
    {
      meta: "Themes",
      title: "Pharma · Trade · One Health",
      body: "Markets, regulation, stewardship, and technology pathways for veterinary systems.",
    },
    {
      meta: "Outcome",
      title: "Institutional visibility",
      body: "A multi-year platform for industry dialogue and commercial discovery.",
    }
        ]}
      />
    </SimplePage>
  );
}
