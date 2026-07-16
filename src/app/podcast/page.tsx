import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Podcast",
  description: "Podcast series featuring Dr. Masud Sadiq Chaudhary on animal health and agribusiness.",
  path: "/podcast",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Podcast"}
      title={"Audio briefings from the animal health frontier."}
      description={"Dialogues on poultry systems, veterinary markets, One Health, and AI agriculture — coming as a recurring series."}
      primaryCta={{ href: "/newsletter", label: "Get episode alerts" }}
      secondaryCta={{ href: "/interviews", label: "Interviews" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Format",
      title: "Executive briefings",
      body: "Short, high-signal conversations for busy industry leaders.",
    },
    {
      meta: "Guests",
      title: "Practitioners & policymakers",
      body: "Voices from production, pharma, research, and institutional leadership.",
    },
    {
      meta: "Access",
      title: "Subscribe early",
      body: "Join the newsletter for episode releases and transcripts.",
    }
        ]}
      />
    </SimplePage>
  );
}
