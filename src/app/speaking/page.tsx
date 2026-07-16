import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Speaking",
  description:
    "Keynote speaking and executive briefings on poultry innovation, veterinary pharmaceuticals, One Health, and AI in agriculture.",
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <SimplePage
      eyebrow="Speaking"
      title="Keynotes that move rooms toward clearer action."
      description="Designed for conferences, ministerial briefings, investor forums, universities, and industry associations."
      primaryCta={{ href: "/contact", label: "Invite to speak" }}
      secondaryCta={{ href: "/downloads", label: "Speaker kit" }}
    >
      <ContentGrid
        items={[
          {
            meta: "Signature themes",
            title: "Poultry systems & food security",
            body: "How production economics, health programmes, and trade readiness determine competitiveness.",
          },
          {
            meta: "Signature themes",
            title: "Veterinary pharmaceuticals & markets",
            body: "What manufacturers, distributors, and policymakers must align to serve animal health systems.",
          },
          {
            meta: "Signature themes",
            title: "One Health in practice",
            body: "Executable bridges between veterinary markets, antimicrobial stewardship, and public health priorities.",
          },
          {
            meta: "Signature themes",
            title: "AI-driven agriculture",
            body: "Where intelligence systems create measurable value for livestock enterprises and national programmes.",
          },
        ]}
      />
    </SimplePage>
  );
}
