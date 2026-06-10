import Link from "next/link";
import Image from "next/image";

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden min-h-[320px]">
      <div className="absolute inset-0">
        <Image src="/images/hero-page.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-dark/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
