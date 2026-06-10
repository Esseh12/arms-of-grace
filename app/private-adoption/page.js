import PageHero from "@/components/ui/PageHero";
import CauseContent from "@/components/causes/CauseContent";
import RelatedCauses from "@/components/causes/RelatedCauses";
import { causes } from "@/data/causes";

export const metadata = {
  title: "Private Adoption | Arms of Grace",
  description: "A compassionate, confidential private adoption process that honors birth parents and welcomes adoptive families.",
};

export default function PrivateAdoptionPage() {
  const cause = causes.find((c) => c.slug === "private-adoption");
  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={cause.summary}
        breadcrumb={[{ label: "Private Adoption" }]}
      />
      <CauseContent cause={cause} />
      <RelatedCauses currentSlug="private-adoption" />
    </>
  );
}
