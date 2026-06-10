import PageHero from "@/components/ui/PageHero";
import CauseContent from "@/components/causes/CauseContent";
import RelatedCauses from "@/components/causes/RelatedCauses";
import { causes } from "@/data/causes";

export const metadata = {
  title: "Foster Adoption | Arms of Grace",
  description: "Helping foster families who feel called to adopt the children already in their homes — guiding every step of the adoption journey.",
};

export default function FosterAdoptionPage() {
  const cause = causes.find((c) => c.slug === "foster-adoption");
  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={cause.summary}
        breadcrumb={[{ label: "Causes", href: "/causes/foster-adoption" }, { label: cause.title }]}
      />
      <CauseContent cause={cause} />
      <RelatedCauses currentSlug="foster-adoption" />
    </>
  );
}
