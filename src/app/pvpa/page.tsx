import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "PVPA",
  description: "PVPA leadership profile of Dr. Masud Sadiq Chaudhary, Senior Vice Chairman.",
  path: "/pvpa",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"PVPA"}
      title={"Pakistan Veterinary Pharmaceuticals Association."}
      description={"Association-level leadership advancing standards, coordination, and policy dialogue for Pakistan’s veterinary pharmaceutical sector."}
      primaryCta={{ href: "/leadership", label: "Leadership" }}
      secondaryCta={{ href: "/contact", label: "Association enquiry" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Role",
      title: "Senior Vice Chairman",
      body: "Governance, advocacy, and sector coordination across veterinary pharmaceuticals.",
    },
    {
      meta: "Priorities",
      title: "Standards & stewardship",
      body: "Aligning commercial practice with quality systems and responsible use.",
    },
    {
      meta: "Reach",
      title: "National platform",
      body: "Connecting industry voices with regulators, clinicians, and international counterparts.",
    }
        ]}
      />
    </SimplePage>
  );
}
