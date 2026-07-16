import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout-primitives";
import { publications } from "@/content/publications";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pub = publications.find((p) => p.slug === slug);
  if (!pub) return {};
  return buildMetadata({
    title: pub.title,
    description: pub.summary,
    path: `/publications/${pub.slug}`,
    type: "article",
  });
}

export default async function PublicationDetailPage({ params }: Props) {
  const { slug } = await params;
  const pub = publications.find((p) => p.slug === slug);
  if (!pub) notFound();

  return (
    <Section className="pt-24 sm:pt-28">
      <Container className="max-w-3xl">
        <Eyebrow>
          {pub.type} · {new Date(pub.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
        </Eyebrow>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">{pub.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{pub.summary}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {pub.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <article className="prose-exec mt-12 space-y-5 text-base leading-relaxed text-muted">
          <p>
            This publication is presented in executive summary form as part of the digital headquarters
            knowledge platform. Full manuscripts, annexes, and downloadable PDFs will be connected
            through the research repository and CMS once content ingestion is completed.
          </p>
          <p>
            For briefing packs, citation requests, republication, or speaking enquiries related to this
            topic, please use the contact channel.
          </p>
        </article>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Request full briefing</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/publications">Back to library</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
