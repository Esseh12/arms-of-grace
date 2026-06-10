import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

const ways = [
  {
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    title: "Make a Donation",
    desc: "Your gift directly funds foster family support, adoption services, and youth transitional programs. Every dollar creates change.",
    href: "/contact",
    cta: "Give Today",
    border: "border-t-pink",
    iconBg: "bg-pink/10 text-pink",
    ctaStyle: "bg-pink hover:bg-pink-dark text-white",
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    title: "Volunteer Your Time",
    desc: "Serve as a mentor, driver, event helper, or office support. Your skills and presence matter deeply to the children we serve.",
    href: "/become-volunteer",
    cta: "Get Started",
    border: "border-t-purple",
    iconBg: "bg-purple/10 text-purple",
    ctaStyle: "bg-purple hover:bg-purple-dark text-white",
  },
  {
    icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
    title: "Spread the Word",
    desc: "Share our mission with your church, workplace, or community. Awareness opens doors for children who are waiting for a family.",
    href: "/contact",
    cta: "Share Our Story",
    border: "border-t-blue",
    iconBg: "bg-blue/10 text-blue",
    ctaStyle: "bg-blue hover:bg-blue-dark text-white",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Get Involved"
          title="There Are Many Ways to Help"
          subtitle="Whether you give, serve, or share — every act of grace ripples outward and changes a child's story."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ways.map((w) => (
            <div key={w.title} className={`bg-white rounded-3xl p-8 border-t-4 shadow-sm hover:shadow-md transition-shadow ${w.border}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${w.iconBg}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: w.icon }} />
              </div>
              <h3 className="font-heading font-bold text-xl text-dark mb-3">{w.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{w.desc}</p>
              <Link href={w.href} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${w.ctaStyle}`}>
                {w.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
