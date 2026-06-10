import PageHero from "@/components/ui/PageHero";
import CauseContent from "@/components/causes/CauseContent";
import RelatedCauses from "@/components/causes/RelatedCauses";
import { causes } from "@/data/causes";

export const metadata = {
  title: "Foster Care | Arms of Grace",
  description: "Providing safe, nurturing temporary homes for children in need through our compassionate foster care program.",
};

export default function FosterCarePage() {
  const cause = causes.find((c) => c.slug === "foster-care");
  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={cause.summary}
        breadcrumb={[{ label: "Causes", href: "/causes/foster-care" }, { label: cause.title }]}
      />
      <CauseContent cause={cause} />
      <RelatedCauses currentSlug="foster-care" />
    </>
  );
}
