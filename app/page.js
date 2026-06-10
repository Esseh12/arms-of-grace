import HeroSection from "@/components/home/HeroSection";
import CausesGrid from "@/components/home/CausesGrid";
import StatsSection from "@/components/home/StatsSection";
import MissionBanner from "@/components/home/MissionBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CausesGrid />
      <StatsSection />
      <MissionBanner />
      <TestimonialsSection />
      <GetInvolvedSection />
      <BlogPreview />
    </>
  );
}
