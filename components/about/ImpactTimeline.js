import SectionTitle from "@/components/ui/SectionTitle";

const milestones = [
  { year: "2010", title: "Founded", desc: "Arms of Grace was established in Houston with a team of three and a mission to transform foster care." },
  { year: "2013", title: "First 50 Placements", desc: "Reached our first 50 successful foster and adoptive placements, proving the community's need and our model's impact." },
  { year: "2016", title: "Supervised Visitations Program", desc: "Launched our dedicated visitation center, providing a safe, neutral space for family connections." },
  { year: "2019", title: "Bridging the Gap Launch", desc: "Introduced our transition-age youth program to support young adults aging out of the foster care system." },
  { year: "2022", title: "200+ Active Foster Families", desc: "Surpassed 200 trained and licensed foster families — a testament to the community's growing compassion." },
  { year: "2025", title: "350+ Children Served", desc: "Celebrating 15 years of service and over 350 children placed in safe, loving, permanent homes." },
];

export default function ImpactTimeline() {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Journey"
          title="15 Years of Grace in Action"
          subtitle="From humble beginnings to a leading child placing agency — our history is written in transformed lives."
        />
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-soft" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 font-bold text-xs text-white ${i % 3 === 0 ? "bg-purple" : i % 3 === 1 ? "bg-pink" : "bg-blue"}`}>
                  {m.year.slice(2)}
                </div>
                <div className="bg-lavender rounded-2xl p-5 flex-1 border border-soft">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold text-muted">{m.year}</span>
                    <h4 className="font-heading font-bold text-dark text-base">{m.title}</h4>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
