import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-lavender">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="Voices from Our Community"
          subtitle="The greatest testament to our work is the families and individuals whose lives have been transformed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-5 ring-4 ring-white shadow-md">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              <Stars />

              <p className="text-dark text-base leading-relaxed mb-6 max-w-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p className="font-semibold text-dark text-sm">{t.name}</p>
                <p className="text-muted text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
