import PageHero from "@/components/ui/PageHero";
import CauseContent from "@/components/causes/CauseContent";
import RelatedCauses from "@/components/causes/RelatedCauses";
import { causes } from "@/data/causes";

export const metadata = {
  title: "Supervised Visitations | Arms of Grace",
  description: "Facilitating safe, monitored connections between children in care and their biological families to support healing and reunification.",
};

export default function SupervisedVisitationsPage() {
  const cause = causes.find((c) => c.slug === "supervised-visitations");
  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={cause.summary}
        breadcrumb={[{ label: "Causes", href: "/causes/supervised-visitations" }, { label: cause.title }]}
      />
      <CauseContent cause={cause} />
      <RelatedCauses currentSlug="supervised-visitations" />
    </>
  );
}
