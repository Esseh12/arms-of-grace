export default function SectionTitle({ eyebrow, title, subtitle, align = "center", light = false }) {
  const alignClass = align === "left" ? "text-left" : "text-center mx-auto";

  return (
    <div className={`max-w-2xl ${alignClass} mb-12`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${light ? "text-pink-light" : "text-pink"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl font-bold leading-tight mb-4 ${light ? "text-white" : "text-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
