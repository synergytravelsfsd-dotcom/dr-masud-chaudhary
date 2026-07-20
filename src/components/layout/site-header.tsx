"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Container } from "@/components/ui/layout-primitives";
import { primaryNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-xl dark:bg-surface/90">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-display text-[1.15rem] leading-none tracking-tight text-foreground transition-colors group-hover:text-brand-navy">
            {siteConfig.shortName}
          </span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
            Animal Health · Agribusiness · One Health
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-foreground",
                  pathname.startsWith(item.href) && "text-brand-navy"
                )}
              >
                {item.title}
              </Link>
              {item.children && activeMenu === item.title ? (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[22rem] overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-elevated dark:bg-surface">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-brand-navy/[0.04]"
                      >
                        <span className="block text-sm font-medium text-foreground">{child.title}</span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/knowledge"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-brand-navy/5 hover:text-foreground md:inline-flex"
            aria-label="Search knowledge"
          >
            <Search className="h-4 w-4" />
          </Link>
          <ThemeToggle />
          <Button asChild variant="primary" size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Engage</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-white dark:bg-surface lg:hidden">
          <Container className="max-h-[80vh] space-y-4 overflow-y-auto py-5">
            {primaryNav.map((item) => (
              <div key={item.title} className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.title}
                </p>
                {(item.children ?? [{ title: item.title, href: item.href }]).map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-base text-foreground"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            ))}
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
