import {
  HomeCTA,
  HomeExpertise,
  HomeHero,
  HomeImpact,
  HomeInsights,
  HomeLeadership,
  HomeRoles,
  HomeTimeline,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeRoles />
      <HomeLeadership />
      <HomeExpertise />
      <HomeTimeline />
      <HomeInsights />
      <HomeImpact />
      <HomeCTA />
    </>
  );
}
