import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout-primitives";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <Section className="pt-24 sm:pt-28">
      <Container className="max-w-3xl">
        <Eyebrow>
          {study.sector} · {study.region}
        </Eyebrow>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">{study.title}</h1>
        <p className="mt-6 text-lg text-muted">{study.summary}</p>
        <p className="mt-6 rounded-2xl border border-border bg-surface px-5 py-4 text-sm font-medium text-foreground">
          Outcome: {study.outcome}
        </p>
        <div className="mt-10 space-y-4 text-base leading-relaxed text-muted">
          <p>
            This case study is presented in executive summary form. Expanded narratives, metrics, and
            confidential annexes are available for qualified partners under appropriate sharing terms.
          </p>
          <p>
            Related practice areas include consulting, international partnership development, and
            industry platform leadership.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Discuss a similar mandate</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/case-studies">All case studies</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
