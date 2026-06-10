import PageHero from "@/components/ui/PageHero";
import MissionVision from "@/components/about/MissionVision";
import TeamGrid from "@/components/about/TeamGrid";
import ImpactTimeline from "@/components/about/ImpactTimeline";
import StatsSection from "@/components/home/StatsSection";

export const metadata = {
  title: "About Us | Arms of Grace",
  description: "Learn about our story, mission, team, and the 15-year journey of Arms of Grace Child Placing Agency.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Arms of Grace"
        subtitle="For 15 years, we have walked alongside children and families through some of life's most profound moments — with grace, expertise, and love."
        breadcrumb={[{ label: "About Us" }]}
      />
      <MissionVision />
      <StatsSection />
      <TeamGrid />
      <ImpactTimeline />
    </>
  );
}
