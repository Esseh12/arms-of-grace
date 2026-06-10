import PageHero from "@/components/ui/PageHero";
import CauseContent from "@/components/causes/CauseContent";
import RelatedCauses from "@/components/causes/RelatedCauses";
import { causes } from "@/data/causes";

export const metadata = {
  title: "Bridging the Gap | Arms of Grace",
  description: "Empowering youth aging out of foster care with life skills, housing support, education assistance, and community connections.",
};

export default function BridgingTheGapPage() {
  const cause = causes.find((c) => c.slug === "bridging-the-gap");
  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={cause.summary}
        breadcrumb={[{ label: "Bridging the Gap" }]}
      />
      <CauseContent cause={cause} />
      <RelatedCauses currentSlug="bridging-the-gap" />
    </>
  );
}
