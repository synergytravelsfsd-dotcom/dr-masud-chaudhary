import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Media",
  description: "Media centre for Dr. Masud Sadiq Chaudhary including press, interviews, and brand assets.",
  path: "/media",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Media"}
      title={"Press, interviews, and public-facing narrative."}
      description={"Media centre for journalists, conference organisers, and partners seeking accurate biographical and thematic assets."}
      primaryCta={{ href: "/downloads", label: "Open media kit" }}
      secondaryCta={{ href: "/contact", label: "Media enquiry" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Press",
      title: "Media enquiries",
      body: "For interviews, quotes, and briefing requests related to animal health and agribusiness.",
    },
    {
      meta: "Assets",
      title: "Press kit",
      body: "Approved biography, headshots, brand marks, and talking points via Downloads.",
    },
    {
      meta: "Appearances",
      title: "Conference & broadcast",
      body: "Selected public appearances and institutional convenings.",
    }
        ]}
      />
    </SimplePage>
  );
}
