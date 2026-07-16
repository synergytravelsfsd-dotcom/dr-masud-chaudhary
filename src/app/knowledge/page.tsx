import type { Metadata } from "next";
import Link from "next/link";
import { KnowledgeAssistant } from "@/components/ai/knowledge-assistant";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Knowledge Hub",
  description:
    "Knowledge Hub for Dr. Masud Sadiq Chaudhary covering publications, research, insights, and AI-assisted exploration.",
  path: "/knowledge",
});

export default function KnowledgePage() {
  return (
    <SimplePage
      eyebrow="Knowledge Hub"
      title="One doorway into research, commentary, and tools."
      description="Unified access to publications, articles, research, media, and an AI assistant trained on published materials."
      primaryCta={{ href: "/publications", label: "Open library" }}
      secondaryCta={{ href: "/newsletter", label: "Newsletter" }}
    >
      <ContentGrid
        items={[
          {
            meta: "Library",
            title: "Publications & research",
            body: "Browse the executive and technical knowledge base.",
          },
          {
            meta: "Signals",
            title: "Articles & interviews",
            body: "Ongoing commentary for industry and policy audiences.",
          },
          {
            meta: "Assistant",
            title: "Ask the knowledge layer",
            body: "Semantic exploration of published material with citation-oriented answers.",
          },
        ]}
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="secondary">
          <Link href="/articles">Articles</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/research">Research</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/api/search?q=poultry">Search API</Link>
        </Button>
      </div>
      <div className="mt-12">
        <KnowledgeAssistant />
      </div>
    </SimplePage>
  );
}
