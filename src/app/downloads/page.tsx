import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Downloads",
  description: "Downloadable CV, speaker kit, and press kit for Dr. Masud Sadiq Chaudhary.",
  path: "/downloads",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Downloads"}
      title={"CV, speaker kit, press kit, and briefing assets."}
      description={"Professional packaging for organisers, media, partners, and institutional counterparts."}
      primaryCta={{ href: "/contact", label: "Request files" }}
      secondaryCta={{ href: "/media", label: "Media centre" }}
    >
      <ContentGrid
        items={[
    {
      meta: "CV",
      title: "Executive curriculum vitae",
      body: "Professional chronology, mandates, and selected credentials.",
    },
    {
      meta: "Speaker kit",
      title: "Keynote packaging",
      body: "Topics, bio variants, technical requirements, and headshots.",
    },
    {
      meta: "Press kit",
      title: "Media assets",
      body: "Approved narrative, photos, and organisational facts.",
    }
        ]}
      />
    </SimplePage>
  );
}
