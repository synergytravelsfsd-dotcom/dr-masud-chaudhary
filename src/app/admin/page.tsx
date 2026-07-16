import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Container, Section } from "@/components/ui/layout-primitives";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admin",
  description: "Executive CMS and operations console scaffold.",
  path: "/admin",
  noIndex: true,
});

const modules = [
  { title: "Blog CMS", href: "#", body: "MDX articles, drafts, scheduling, SEO fields." },
  { title: "Media Library", href: "#", body: "Images, press assets, video, and kit files." },
  { title: "Contact Inbox", href: "#", body: "Enquiry triage, tags, and response status." },
  { title: "Newsletter", href: "#", body: "Subscriber segments and campaign hooks." },
  { title: "Publications", href: "#", body: "Research repository metadata and PDFs." },
  { title: "Analytics", href: "#", body: "Traffic, conversion, and engagement dashboard." },
];

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Admin"
        title="Executive operations console."
        description="Authentication-gated CMS scaffold for content, media, contacts, newsletter, and analytics. Wire Supabase Auth before production use."
      />
      <Section>
        <Container>
          <div className="mb-8 rounded-2xl border border-gold/30 bg-gold/10 px-5 py-4 text-sm text-foreground">
            Stub console — enable Supabase Auth + RLS, then connect each module to PostgreSQL tables
            defined in <code className="font-mono text-xs">supabase/migrations</code>.
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className="rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-gold/40"
              >
                <h2 className="font-display text-xl tracking-tight">{mod.title}</h2>
                <p className="mt-2 text-sm text-muted">{mod.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
