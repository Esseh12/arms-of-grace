import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { causes } from "@/data/causes";

export default function RelatedCauses({ currentSlug }) {
  const related = causes.filter((c) => c.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-20 bg-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Explore More" title="Other Ways We Serve" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((cause) => (
            <Link key={cause.slug} href={cause.href} className="group bg-white rounded-2xl p-6 border border-soft hover:shadow-md transition-all hover:-translate-y-0.5">
              <Badge label={cause.eyebrow} variant={cause.color} />
              <h3 className="font-heading font-bold text-lg text-dark mt-3 mb-2 group-hover:text-purple transition-colors">
                {cause.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{cause.summary}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-purple">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
