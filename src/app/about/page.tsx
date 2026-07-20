import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/brand/portrait";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import {
  Container,
  Eyebrow,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui/layout-primitives";
import { careerTimeline } from "@/content/timeline";
import { leadership, roles, siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Biography of Dr. Masud Sadiq Chaudhary — international veterinarian, animal health executive, and agribusiness strategist.",
  path: "/about",
  image: siteConfig.portrait,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A practitioner of animal health with global institutional reach."
        description={`${siteConfig.name} brings more than two decades of veterinary, pharmaceutical, and agribusiness leadership across Pakistan, Europe, and the Middle East.`}
        actions={
          <>
            <Button asChild>
              <Link href="/leadership">Leadership roles</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/downloads">Download CV</Link>
            </Button>
          </>
        }
      />

      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[3/4] overflow-hidden bg-brand-navy/5">
            <Portrait
              priority
              className="object-[center_14%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Profile"
              title="Executive credibility. Technical fluency. International posture."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Dr. Chaudhary operates at the intersection of veterinary medicine, commercial poultry,
                veterinary pharmaceuticals, and international business development. His work spans
                technical consultancy, regulatory strategy, industry association leadership, and
                cross-border partnership building.
              </p>
              <p>
                As Senior Vice Chairman of PVPA and Chief Organiser of IVP, he convenes industry,
                policy, and science stakeholders around animal health systems that strengthen food
                security and One Health outcomes.
              </p>
              <p>
                Through Synergy Pharma and Elenco Louvavel LDA, he connects market realities in South
                Asia with European and Middle Eastern collaboration pathways — while advocating for
                AI-enabled agriculture and poultry intelligence.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Practice" title="Where science meets markets and policy." />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                The Digital Headquarters presents a durable public record of mandates, publications,
                and collaborations — designed for governments, industry partners, investors, and
                conference organisers seeking an authoritative counterpart in animal health.
              </p>
            </div>
          </div>
          <aside className="rounded-[1.75rem] border border-border bg-background p-8">
            <Eyebrow>Professional identities</Eyebrow>
            <ul className="mt-4 space-y-3">
              {roles.map((role) => (
                <li
                  key={role}
                  className="border-b border-border/70 pb-3 text-sm text-foreground last:border-0"
                >
                  {role}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Timeline" title="Career milestones" />
          <div className="mt-12 grid gap-4">
            {careerTimeline.map((event, i) => (
              <FadeIn key={event.id} delay={i * 0.04}>
                <article className="grid gap-3 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-[7rem_1fr]">
                  <p className="text-sm font-semibold text-gold">{event.year}</p>
                  <div>
                    <h3 className="font-display text-xl tracking-tight">{event.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                      {event.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{event.summary}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeading eyebrow="Current seats" title="Where influence is exercised." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {leadership.map((item) => (
              <Link
                key={item.org}
                href={item.href}
                className="rounded-3xl border border-border bg-background p-7 transition-colors hover:border-gold/40"
              >
                <Eyebrow>{item.title}</Eyebrow>
                <p className="font-display text-2xl tracking-tight">{item.org}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
