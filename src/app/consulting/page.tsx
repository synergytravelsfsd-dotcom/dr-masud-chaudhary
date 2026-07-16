import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Consulting",
  description:
    "Executive consulting in animal health, poultry systems, veterinary pharmaceuticals, regulatory strategy, and international agribusiness.",
  path: "/consulting",
});

const offerings = [
  {
    meta: "Strategy",
    title: "Animal health & agribusiness strategy",
    body: "Board-level advisory on market positioning, portfolio architecture, and growth pathways for veterinary and poultry enterprises.",
  },
  {
    meta: "Technical",
    title: "Commercial poultry & nutrition advisory",
    body: "Layer and broiler production systems, feed additives, performance diagnostics, and field technical programmes.",
  },
  {
    meta: "Pharma",
    title: "Veterinary pharmaceutical commercialisation",
    body: "Distribution design, partner selection, go-to-market execution, and channel governance across complex markets.",
  },
  {
    meta: "Policy",
    title: "Regulatory & One Health guidance",
    body: "Registration pathways, stewardship dialogue, and institutional engagement with associations and public bodies.",
  },
  {
    meta: "International",
    title: "Cross-border partnership development",
    body: "Europe–South Asia–Middle East collaboration frameworks for trade, technology transfer, and joint ventures.",
  },
  {
    meta: "Digital",
    title: "AI agriculture & poultry intelligence",
    body: "Decision-support strategy for livestock systems adopting data, sensors, and AI-enabled operational models.",
  },
];

export default function ConsultingPage() {
  return (
    <SimplePage
      eyebrow="Consulting"
      title="Advisory for institutions that need both science and scale."
      description="Engagements for governments, producers, veterinary companies, investors, and associations seeking rigorous animal health leadership."
      primaryCta={{ href: "/contact", label: "Request a briefing" }}
      secondaryCta={{ href: "/case-studies", label: "View case studies" }}
    >
      <ContentGrid items={offerings} />
    </SimplePage>
  );
}
