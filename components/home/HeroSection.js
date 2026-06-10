import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-dark overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Image src="/images/hero-home.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-dark/25" />
      </div>

      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <span className="inline-block text-pink-light text-xs font-semibold tracking-widest uppercase mb-5">
            Child Placing Agency — Richmond, TX
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Opening Hearts.<br />
            <span className="text-pink-light italic">Building Families.</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
            Arms of Grace connects children who need a home with families full of love — through foster care, adoption, and lifelong community support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/causes/foster-care" className="inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink-dark text-white px-8 py-4 rounded-full font-semibold text-base transition-colors">
              Explore Our Causes
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/become-volunteer" className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white hover:text-purple px-8 py-4 rounded-full font-semibold text-base transition-colors">
              Become a Volunteer
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm">
          {[["350+", "Children Served"], ["200+", "Foster Families"], ["15 yrs", "Serving Texas"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="font-heading font-bold text-3xl text-white">{num}</p>
              <p className="text-white/50 text-xs mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
