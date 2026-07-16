import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "Photo gallery from the professional engagements of Dr. Masud Sadiq Chaudhary.",
  path: "/gallery",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Gallery"}
      title={"Field, forum, and institutional moments."}
      description={"A visual archive of convenings, industry engagements, and international collaboration."}
      primaryCta={{ href: "/events", label: "Events" }}
      secondaryCta={{ href: "/media", label: "Media" }}
    >
      <ContentGrid
        items={[
    {
      meta: "IVP",
      title: "Expo floor & plenary",
      body: "Moments from the International Veterinary Pharmaceuticals Expo.",
    },
    {
      meta: "PVPA",
      title: "Association leadership",
      body: "Governance, dialogue, and industry coordination.",
    },
    {
      meta: "Field",
      title: "Producer & partner engagements",
      body: "Operational contexts across poultry and animal health value chains.",
    }
        ]}
      />
    </SimplePage>
  );
}
