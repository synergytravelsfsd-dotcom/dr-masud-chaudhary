import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/pages/simple-page";
import { publications } from "@/content/publications";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Publications",
  description:
    "Publication library of articles, research, policy briefs, and white papers by Dr. Masud Sadiq Chaudhary.",
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <SimplePage
      eyebrow="Publications"
      title="A living library for industry, policy, and practice."
      description="White papers, research notes, policy briefs, and executive commentary spanning animal health and agribusiness."
      primaryCta={{ href: "/research", label: "Research repository" }}
      secondaryCta={{ href: "/newsletter", label: "Subscribe" }}
    >
      <div className="grid gap-4">
        {publications.map((pub) => (
          <Link
            key={pub.slug}
            href={`/publications/${pub.slug}`}
            className="rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-gold/40"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {pub.type} · {new Date(pub.date).toLocaleDateString("en-GB", { year: "numeric", month: "short" })}
            </p>
            <h2 className="mt-3 font-display text-2xl tracking-tight">{pub.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pub.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pub.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </SimplePage>
  );
}
