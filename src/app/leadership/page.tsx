import type { Metadata } from "next";
import Link from "next/link";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { Button } from "@/components/ui/button";
import { leadership } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leadership",
  description:
    "Leadership and representative roles of Dr. Masud Sadiq Chaudhary across PVPA, IVP, Synergy Pharma, Elenco Louvavel, Animal Health Concepts, Optifarm, and Pakistan Poultry Association.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <SimplePage
      eyebrow="Leadership"
      title="Institutional mandates that shape markets and dialogue."
      description="Association governance, international convening, commercial leadership, and European partnership development."
      primaryCta={{ href: "/contact", label: "Partner on an initiative" }}
      secondaryCta={{ href: "/ivp", label: "Explore IVP" }}
    >
      <ContentGrid
        items={leadership.map((item) => ({
          meta: item.title,
          title: item.org,
          body: item.body,
        }))}
      />
      <div className="mt-10 flex flex-wrap gap-3">
        {[...new Map(leadership.map((item) => [item.org.split(",")[0].split("(")[0].trim(), item.href])).entries()].map(
          ([label, href]) => (
            <Button key={label} asChild variant="secondary" size="sm">
              <Link href={href}>{label}</Link>
            </Button>
          )
        )}
      </div>
    </SimplePage>
  );
}
