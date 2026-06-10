import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import ImgPlaceholder from "@/components/ui/ImgPlaceholder";
import Badge from "@/components/ui/Badge";
import { causes } from "@/data/causes";

export default function CausesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Programs"
          title="How We Serve Children & Families"
          subtitle="Five distinct pathways — each one a bridge between a child in need and a family ready to love."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause, i) => (
            <Link
              key={cause.slug}
              href={cause.href}
              className={`group block bg-lavender rounded-2xl overflow-hidden border border-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <ImgPlaceholder aspect="16/9" color={cause.color} label={`${cause.title} program image`} src={cause.image} rounded="" />
              <div className="p-6">
                <Badge label={cause.eyebrow} variant={cause.color} />
                <h3 className="font-heading font-bold text-xl text-dark mt-3 mb-2 group-hover:text-purple transition-colors">
                  {cause.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {cause.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
