import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero, Container, Section, Eyebrow } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Dr. Masud Sadiq Chaudhary for consulting, speaking, partnerships, media, and investor engagement.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin a precise conversation."
        description="For consulting mandates, keynote invitations, institutional partnerships, media, and investor dialogue."
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-8">
            <div>
              <Eyebrow>Direct</Eyebrow>
              <p className="font-display text-2xl tracking-tight">{siteConfig.email}</p>
              <p className="mt-2 text-sm text-muted">Primary channel for executive enquiries</p>
            </div>
            <div>
              <Eyebrow>Regions</Eyebrow>
              <p className="text-sm leading-relaxed text-muted">
                {siteConfig.locations.join(" · ")}
              </p>
            </div>
            <div>
              <Eyebrow>Appointment booking</Eyebrow>
              <p className="text-sm leading-relaxed text-muted">
                Structured briefing slots can be enabled via calendar integration in production. For
                now, use the enquiry form with preferred windows.
              </p>
            </div>
          </aside>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
