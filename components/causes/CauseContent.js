import ImgPlaceholder from "@/components/ui/ImgPlaceholder";
import Button from "@/components/ui/Button";

export default function CauseContent({ cause }) {
  const checkColor = cause.color === "purple" ? "text-purple" : cause.color === "pink" ? "text-pink" : "text-blue";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-3xl font-bold text-dark mb-5">About This Program</h2>
            <p className="text-muted text-base leading-relaxed mb-8">{cause.description}</p>

            <h3 className="font-heading font-bold text-xl text-dark mb-4">What We Offer</h3>
            <ul className="space-y-3 mb-10">
              {cause.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className={`mt-1 shrink-0 ${checkColor}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                    </svg>
                  </span>
                  <span className="text-muted text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button href="/become-volunteer" variant="secondary">Volunteer with Us</Button>
              <Button href="/contact" variant="outlinePurple">Ask a Question</Button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <ImgPlaceholder aspect="3/4" color={cause.color} label={`${cause.title} — program photo`} src={cause.detailImage} />
            <div className="bg-lavender rounded-2xl p-6 border border-soft">
              <h4 className="font-heading font-bold text-dark text-base mb-2">Ready to Take the Next Step?</h4>
              <p className="text-muted text-sm leading-relaxed mb-4">Contact our team today and speak with a specialist about how you can get involved with our {cause.title} program.</p>
              <Button href="/contact" variant="primary" className="w-full justify-center">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
