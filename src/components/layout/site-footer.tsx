import Link from "next/link";
import { Container } from "@/components/ui/layout-primitives";
import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white text-foreground dark:bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-tight text-brand-navy dark:text-foreground">
              {siteConfig.shortName}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Global headquarters for animal health leadership, poultry innovation, veterinary
              pharmaceuticals, and AI-driven agriculture.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">
              {siteConfig.locations.slice(0, 4).join(" · ")}
            </p>
          </div>

          {(
            [
              ["Platform", footerNav.platform],
              ["Services", footerNav.services],
              ["Knowledge", footerNav.knowledge],
              ["Initiatives", footerNav.initiatives],
            ] as const
          ).map(([label, items]) => (
            <div key={label}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                {label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-brand-navy dark:hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted">
            <Link href="/newsletter" className="hover:text-brand-navy">
              Newsletter
            </Link>
            <Link href="/downloads" className="hover:text-brand-navy">
              Media Kit
            </Link>
            <Link href="/contact" className="hover:text-brand-navy">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
