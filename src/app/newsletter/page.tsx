import type { Metadata } from "next";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { KnowledgeAssistant } from "@/components/ai/knowledge-assistant";
import { SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Newsletter",
  description:
    "Subscribe for executive briefings from Dr. Masud Sadiq Chaudhary on animal health, poultry innovation, and AI agriculture.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <SimplePage
      eyebrow="Newsletter"
      title="Briefings for leaders who read for decisions."
      description="Periodic notes on poultry systems, veterinary pharmaceuticals, One Health, and AI-driven agriculture."
    >
      <NewsletterForm />
      <div className="mt-12">
        <KnowledgeAssistant />
      </div>
    </SimplePage>
  );
}
