import { NextResponse } from "next/server";
import { publications } from "@/content/publications";
import { caseStudies } from "@/content/case-studies";
import { careerTimeline } from "@/content/timeline";
import { expertise, leadership } from "@/lib/site";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").toLowerCase().trim();

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  const results = [
    ...publications.map((p) => ({
      type: "publication" as const,
      title: p.title,
      href: `/publications/${p.slug}`,
      excerpt: p.summary,
      haystack: `${p.title} ${p.summary} ${p.tags.join(" ")}`,
    })),
    ...caseStudies.map((c) => ({
      type: "case-study" as const,
      title: c.title,
      href: `/case-studies/${c.slug}`,
      excerpt: c.summary,
      haystack: `${c.title} ${c.summary} ${c.sector} ${c.region}`,
    })),
    ...careerTimeline.map((t) => ({
      type: "timeline" as const,
      title: t.title,
      href: "/about",
      excerpt: t.summary,
      haystack: `${t.title} ${t.summary} ${t.location}`,
    })),
    ...leadership.map((l) => ({
      type: "leadership" as const,
      title: `${l.title} — ${l.org}`,
      href: l.href,
      excerpt: l.org,
      haystack: `${l.title} ${l.org}`,
    })),
    ...expertise.map((e) => ({
      type: "expertise" as const,
      title: e,
      href: "/consulting",
      excerpt: "Core expertise domain",
      haystack: e,
    })),
  ]
    .filter((item) => item.haystack.toLowerCase().includes(q))
    .slice(0, 12)
    .map(({ type, title, href, excerpt }) => ({ type, title, href, excerpt }));

  return NextResponse.json({ results, mode: "lexical" });
}
