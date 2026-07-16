import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/layout-primitives";
import { Container, Section } from "@/components/ui/layout-primitives";

export function SimplePage({
  eyebrow,
  title,
  description,
  children,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={
          <>
            {primaryCta ? (
              <Button asChild>
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button asChild variant="secondary">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </>
        }
      />
      {children ? (
        <Section>
          <Container>{children}</Container>
        </Section>
      ) : null}
    </>
  );
}

export function ContentGrid({
  items,
}: {
  items: { title: string; body: string; meta?: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-border bg-surface p-7"
        >
          {item.meta ? (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {item.meta}
            </p>
          ) : null}
          <h2 className="font-display text-2xl tracking-tight">{item.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
