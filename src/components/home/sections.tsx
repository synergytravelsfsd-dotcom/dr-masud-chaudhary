"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Portrait } from "@/components/brand/portrait";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/layout-primitives";
import { careerHighlights } from "@/content/timeline";
import { caseStudies } from "@/content/case-studies";
import { publications } from "@/content/publications";
import { expertise, leadership, roles, siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative min-h-[min(88vh,54rem)] overflow-hidden border-b border-border bg-[#f7fbff]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(11,92,171,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(13,138,150,0.1),transparent_45%)]" />

      <div className="relative grid min-h-[min(88vh,54rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex flex-col justify-center px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20 lg:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] lg:pt-28">
          <FadeIn immediate>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Digital headquarters
            </p>
            <h1 className="max-w-xl font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-[3.65rem] lg:leading-[1.05]">
              {siteConfig.name}
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.08}>
            <p className="mt-6 max-w-xl text-xl font-medium leading-snug text-brand-navy sm:text-2xl lg:text-[1.5rem]">
              Global leadership in animal health, poultry innovation, and veterinary pharmaceuticals.
            </p>
          </FadeIn>
          <FadeIn immediate delay={0.14}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.experienceYears}+ years advising governments, producers, and industry
              partners across {siteConfig.locations.slice(0, 3).join(", ")}, and beyond — advancing
              One Health and AI-enabled agriculture.
            </p>
          </FadeIn>
          <FadeIn immediate delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="/consulting">
                  Explore consulting
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/speaking">Invite to speak</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.28}>
            <div className="mt-14 grid max-w-xl gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {[
                ["20+", "Years of executive & technical leadership"],
                ["6+", "Regions of active international engagement"],
                ["7", "Current leadership & representation mandates"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-display text-3xl text-brand-navy sm:text-4xl">{stat}</p>
                  <p className="mt-2 text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn immediate delay={0.1} className="relative min-h-[26rem] bg-white lg:min-h-full">
          <Portrait
            variant="hero"
            priority
            className="object-[center_16%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeRoles() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Mandate"
          title="An executive practice spanning medicine, markets, and policy."
          description="Positioned at the intersection of veterinary science, pharmaceutical strategy, and international agribusiness."
        />
        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <StaggerItem
              key={role}
              className="rounded-2xl border border-border bg-background px-5 py-6 text-sm font-medium leading-snug text-foreground"
            >
              {role}
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export function HomeLeadership() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Current leadership"
            title="Institutional roles with industry-wide influence."
          />
          <p className="max-w-xl text-muted">
            Active mandates across association governance, international convening, commercial
            leadership, and European partnership development.
          </p>
        </div>
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {leadership.map((item) => (
            <StaggerItem key={item.org}>
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:border-brand-navy/30 hover:shadow-elevated"
              >
                <Eyebrow>{item.title}</Eyebrow>
                <p className="font-display text-2xl tracking-tight text-foreground transition-colors group-hover:text-brand-navy">
                  {item.org}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-foreground">
                  View mandate
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export function HomeExpertise() {
  return (
    <Section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(11,92,171,0.08),transparent_42%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Core expertise"
          title="Technical depth. Strategic range."
          description="A practice designed for institutions that need credibility in both the laboratory and the boardroom."
        />
        <div className="mt-12 flex flex-wrap gap-2.5">
          {expertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand-navy/15 bg-brand-navy/[0.04] px-4 py-2 text-sm text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HomeTimeline() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Career arc"
          title="Three decades of international practice."
          description="From the DVM and Gulf technical service to UK leadership, veterinary manufacturing, and AI agriculture advocacy."
        />
        <div className="mt-14 space-y-0 border-l border-border pl-6 sm:pl-8">
          {careerHighlights.map((event, index) => (
            <FadeIn key={event.id} delay={index * 0.05} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-gold sm:-left-[2.15rem]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                {event.year} · {event.location}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-tight">{event.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {event.summary}
              </p>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="secondary">
            <Link href="/about">Full biography</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export function HomeInsights() {
  const featured = publications.filter((p) => p.featured).slice(0, 2);
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Knowledge"
            title="Insights for decision-makers."
          />
          <Button asChild variant="secondary">
            <Link href="/publications">Publication library</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featured.map((pub) => (
            <Link
              key={pub.slug}
              href={`/publications/${pub.slug}`}
              className="group rounded-3xl border border-border bg-surface p-8 transition-all hover:border-gold/40"
            >
              <Eyebrow>
                {pub.type} · {new Date(pub.date).getFullYear()}
              </Eyebrow>
              <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-brand-navy">
                {pub.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{pub.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HomeImpact() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading eyebrow="Selected impact" title="Evidence over ornament." />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="block h-full rounded-3xl border border-border bg-background p-6 transition-colors hover:border-gold/40"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {study.sector} · {study.region}
                </p>
                <h3 className="mt-3 font-display text-xl tracking-tight">{study.title}</h3>
                <p className="mt-3 text-sm text-muted">{study.outcome}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

export function HomeCTA() {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(135deg,#0b5cab,#1a74c7)] px-8 py-14 text-brand-ivory sm:px-12 sm:py-16">
          <Eyebrow className="text-white/90">Next engagement</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
            Engage for consulting, keynotes, partnerships, or investment dialogue.
          </h2>
          <p className="mt-4 max-w-xl text-brand-ivory/80">
            Built for governments, industry associations, veterinary companies, conference organizers,
            and institutional partners seeking global animal health leadership.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link href="/contact">Request a briefing</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="border-brand-ivory/35 text-brand-ivory hover:bg-brand-ivory/10"
            >
              <Link href="/downloads">Download speaker kit</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
