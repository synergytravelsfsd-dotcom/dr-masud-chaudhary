import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Partners",
  description: "Partnership network of Dr. Masud Sadiq Chaudhary across animal health and agribusiness.",
  path: "/partners",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Partners"}
      title={"A network built for durable collaboration."}
      description={"Manufacturers, associations, producers, research groups, and international counterparts across active markets."}
      primaryCta={{ href: "/contact", label: "Propose a partnership" }}
      secondaryCta={{ href: "/projects", label: "Projects" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Industry",
      title: "Veterinary & feed companies",
      body: "Commercial and technical collaborations across product and market programmes.",
    },
    {
      meta: "Institutions",
      title: "Associations & forums",
      body: "Joint initiatives in convening, standards, and policy dialogue.",
    },
    {
      meta: "Knowledge",
      title: "Universities & research",
      body: "Opportunities for applied research, talent pipelines, and knowledge exchange.",
    }
        ]}
      />
    </SimplePage>
  );
}
