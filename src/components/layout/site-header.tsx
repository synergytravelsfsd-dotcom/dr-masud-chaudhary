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
  const inverted = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        inverted
          ? "border-brand-ivory/10 bg-brand-navy/95 backdrop-blur-xl"
          : "border-border/60 bg-background/80 backdrop-blur-xl"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "block truncate font-display text-[1.15rem] leading-none tracking-tight transition-colors",
              inverted
                ? "text-brand-ivory"
                : "text-foreground group-hover:text-navy-soft dark:group-hover:text-ivory-muted"
            )}
          >
            {siteConfig.shortName}
          </span>
          <span
            className={cn(
              "mt-1 block text-[10px] font-medium uppercase tracking-[0.18em]",
              inverted ? "text-brand-ivory/55" : "text-muted"
            )}
          >
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
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  inverted
                    ? "text-brand-ivory/70 hover:text-brand-ivory"
                    : "text-muted hover:text-foreground",
                  !inverted && pathname.startsWith(item.href) && "text-foreground"
                )}
              >
                {item.title}
              </Link>
              {item.children && activeMenu === item.title ? (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[22rem] overflow-hidden rounded-2xl border border-border bg-surface/95 p-2 shadow-elevated backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-foreground/[0.04]"
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
            className={cn(
              "hidden h-10 w-10 items-center justify-center rounded-full transition-colors md:inline-flex",
              inverted
                ? "text-brand-ivory/70 hover:bg-brand-ivory/10 hover:text-brand-ivory"
                : "text-muted hover:bg-foreground/5 hover:text-foreground"
            )}
            aria-label="Search knowledge"
          >
            <Search className="h-4 w-4" />
          </Link>
          <div className={cn(inverted && "[&_button]:text-brand-ivory [&_button:hover]:bg-brand-ivory/10")}>
            <ThemeToggle />
          </div>
          <Button
            asChild
            variant={inverted ? "gold" : "primary"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/contact">Engage</Link>
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              inverted ? "text-brand-ivory" : "text-foreground"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          className={cn(
            "border-t lg:hidden",
            inverted ? "border-brand-ivory/10 bg-brand-navy text-brand-ivory" : "border-border bg-background"
          )}
        >
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
                    className={cn(
                      "block py-2 text-base",
                      inverted ? "text-brand-ivory" : "text-foreground"
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            ))}
            <Button asChild className="w-full" variant={inverted ? "gold" : "primary"}>
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
