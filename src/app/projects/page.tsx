import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/pages/simple-page";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Selected international projects and strategic engagements led by Dr. Masud Sadiq Chaudhary.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <SimplePage
      eyebrow="Projects"
      title="Selected engagements across markets and mandates."
      description="A curated view of strategic, technical, and platform-building work — with measurable institutional outcomes."
      primaryCta={{ href: "/case-studies", label: "Case studies" }}
      secondaryCta={{ href: "/contact", label: "Propose a project" }}
    >
      <div className="grid gap-4">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-gold/40"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              {study.sector} · {study.region}
            </p>
            <h2 className="mt-3 font-display text-2xl tracking-tight">{study.title}</h2>
            <p className="mt-3 text-sm text-muted">{study.summary}</p>
            <p className="mt-4 text-sm font-medium text-gold">{study.outcome}</p>
          </Link>
        ))}
      </div>
    </SimplePage>
  );
}
