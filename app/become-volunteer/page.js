import PageHero from "@/components/ui/PageHero";
import WhyVolunteer from "@/components/volunteer/WhyVolunteer";
import VolunteerForm from "@/components/volunteer/VolunteerForm";
import StatsSection from "@/components/home/StatsSection";
import ImgPlaceholder from "@/components/ui/ImgPlaceholder";

export const metadata = {
  title: "Become a Volunteer | Arms of Grace",
  description: "Join over 200 volunteers serving children and families through Arms of Grace. Apply today and make a lasting difference.",
};

export default function BecomeVolunteerPage() {
  return (
    <>
      <PageHero
        title="Become a Volunteer"
        subtitle="You don't need a special skill set — just a willing heart. Join our community of 200+ volunteers changing lives across Houston."
        breadcrumb={[{ label: "Become a Volunteer" }]}
      />
      <WhyVolunteer />
      <StatsSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-pink block mb-3">Apply Now</span>
                <h2 className="font-heading font-bold text-3xl text-dark leading-tight mb-4">
                  Start Your Volunteer Journey
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Complete the form and our Volunteer Program Lead, Amara Okafor, will personally reach out within 2–3 business days to discuss the best role for you.
                </p>
              </div>
              <ImgPlaceholder aspect="4/3" color="purple" label="Volunteers serving together" src="/images/volunteer-serving.jpg" />
              <div className="bg-pink/8 rounded-2xl p-5 border border-pink/15">
                <p className="font-semibold text-dark text-sm mb-1">Questions first?</p>
                <p className="text-muted text-sm">Call us at <span className="font-semibold text-dark">(713) 555-0192</span> or email <span className="font-semibold text-dark">volunteer@armsofgrace.org</span></p>
              </div>
            </div>
            <div className="lg:col-span-3 bg-lavender rounded-2xl p-8 border border-soft">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
