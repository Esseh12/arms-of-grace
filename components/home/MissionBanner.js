import Link from "next/link";
import ImgPlaceholder from "@/components/ui/ImgPlaceholder";

export default function MissionBanner() {
  return (
    <section className="py-24 bg-lavender overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple/10 rounded-full blur-2xl" />
            <ImgPlaceholder aspect="4/3" color="pink" label="Our mission — team with children" src="/images/mission-team.jpg" className="relative" />
          </div>

          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-pink mb-4">Our Mission</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark leading-tight mb-6">
              Every Child Deserves a Place<br />to Call <span className="text-purple italic">Home</span>
            </h2>
            <blockquote className="border-l-4 border-pink pl-5 mb-6">
              <p className="text-muted text-lg leading-relaxed italic">
                "We exist to be a steady hand and an open heart for the most vulnerable children in our community — until each one finds the permanent, loving family they deserve."
              </p>
              <footer className="mt-3 text-sm font-semibold text-purple">— Patricia Owens, Executive Director</footer>
            </blockquote>
            <p className="text-muted text-base leading-relaxed mb-8">
              Founded in 2010, Arms of Grace has grown from a small team of three to a full-service child placing agency serving families across Richmond, TX and the surrounding areas. Our work is fueled by faith, driven by love, and grounded in the belief that every child deserves permanency.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-purple hover:bg-purple-dark text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors">
              Learn Our Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
