import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

const colorMap = {
  purple: { quote: "text-purple", bg: "bg-white", border: "border-l-4 border-purple" },
  pink: { quote: "text-pink", bg: "bg-white", border: "border-l-4 border-pink" },
  blue: { quote: "text-blue", bg: "bg-white", border: "border-l-4 border-blue" },
};

function QuoteIcon({ color }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className={color}>
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.02L9.13 6c-1.29.6-2.38 1.48-3.27 2.64-.9 1.16-1.36 2.5-1.36 4 0 1.12.38 2.07 1.13 2.83.76.77 1.68 1.15 2.77 1.15.98 0 1.8-.31 2.46-.94.66-.63.99-1.43.99-2.38v-.52zm9.13 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.13-1.07-.14-1.54-.03-.16-.94.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.02L18.26 6c-1.29.6-2.38 1.48-3.27 2.64-.9 1.16-1.36 2.5-1.36 4 0 1.12.38 2.07 1.13 2.83.76.77 1.68 1.15 2.77 1.15.97 0 1.8-.31 2.46-.94.66-.63.99-1.43.99-2.38v-.52z"/>
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="Voices from Our Community"
          subtitle="The greatest testament to our work is the families and individuals whose lives have been transformed."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const c = colorMap[t.color] || colorMap.purple;
            return (
              <div key={t.name} className={`${c.bg} ${c.border} rounded-2xl p-8 shadow-sm`}>
                <QuoteIcon color={c.quote} />
                <p className="text-muted text-base leading-relaxed mt-4 mb-6 italic">{t.quote}</p>
                <div>
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-muted text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
