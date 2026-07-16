import type { Metadata } from "next";
import { ContentGrid, SimplePage } from "@/components/pages/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description: "Events and conference timeline featuring Dr. Masud Sadiq Chaudhary.",
  path: "/events",
});

export default function Page() {
  return (
    <SimplePage
      eyebrow={"Events"}
      title={"A conference timeline for industry and policy audiences."}
      description={"Upcoming and past engagements spanning expos, forums, technical seminars, and executive briefings."}
      primaryCta={{ href: "/speaking", label: "Booking" }}
      secondaryCta={{ href: "/ivp", label: "IVP" }}
    >
      <ContentGrid
        items={[
    {
      meta: "Upcoming",
      title: "IVP programme track",
      body: "Veterinary pharmaceutical innovation, trade corridors, and One Health panels.",
    },
    {
      meta: "Briefings",
      title: "Executive roundtables",
      body: "Closed-door sessions for investors, associations, and institutional partners.",
    },
    {
      meta: "Academic",
      title: "University & research forums",
      body: "Dialogues with students, clinicians, and research groups.",
    }
        ]}
      />
    </SimplePage>
  );
}
