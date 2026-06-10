import SectionTitle from "@/components/ui/SectionTitle";

const benefits = [
  {
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    title: "Make a Real Difference",
    desc: "Your presence directly impacts the life of a child or family navigating one of life's most challenging seasons.",
    color: "bg-pink/10 text-pink",
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    title: "Join a Caring Community",
    desc: "Connect with hundreds of like-minded volunteers, foster families, and staff who share your values and vision.",
    color: "bg-purple/10 text-purple",
  },
  {
    icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    title: "Grow Your Skills",
    desc: "Gain valuable experience in child welfare, social services, event coordination, mentorship, and community outreach.",
    color: "bg-blue/10 text-blue",
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>',
    title: "Flexible Commitment",
    desc: "We offer a wide range of roles to fit your schedule — from a few hours a month to weekly involvement.",
    color: "bg-pink/10 text-pink",
  },
  {
    icon: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
    title: "Be Recognized & Valued",
    desc: "We celebrate our volunteers through appreciation events, award ceremonies, and our annual Volunteer of the Year program.",
    color: "bg-purple/10 text-purple",
  },
  {
    icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
    title: "Full Training Provided",
    desc: "No prior experience needed. We provide comprehensive training and ongoing support so you can volunteer with confidence.",
    color: "bg-blue/10 text-blue",
  },
];

export default function WhyVolunteer() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Volunteer"
          title="The Rewards Go Both Ways"
          subtitle="When you serve with Arms of Grace, you receive just as much as you give."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-lavender rounded-2xl p-6 border border-soft">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${b.color}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: b.icon }} />
              </div>
              <h3 className="font-heading font-bold text-base text-dark mb-2">{b.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
