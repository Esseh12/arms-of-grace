import Link from "next/link";
import Image from "next/image";

const programs = [
  { label: "Foster Care", href: "/causes/foster-care" },
  { label: "Foster Adoption", href: "/causes/foster-adoption" },
  { label: "Supervised Visitations", href: "/causes/supervised-visitations" },
  { label: "Private Adoption", href: "/private-adoption" },
  { label: "Bridging the Gap", href: "/bridging-the-gap" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Become a Volunteer", href: "/become-volunteer" },
];

const socials = [
  { label: "Facebook", href: "#", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", href: "#", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.5 20.5h9a5 5 0 0 0 5-5v-9a5 5 0 0 0-5-5h-9a5 5 0 0 0-5 5v9a5 5 0 0 0 5 5z" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Arms of Grace logo" width={64} height={64} className="object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Opening hearts, building families, and changing lives through compassionate foster care and adoption services in Texas.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 rounded-full bg-white/10 hover:bg-purple flex items-center justify-center transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-base">Our Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-white/60 hover:text-pink-light transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-pink-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-base">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2 items-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Richmond, TX<br />United States</span>
              </li>
              <li className="flex gap-2 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92Z"/></svg>
                <span>(281) 975-9651</span>
              </li>
              <li className="flex gap-2 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>Armsofgracecpa@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-white font-medium mb-2">Newsletter</p>
              <form className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-purple-light" />
                <button type="submit" className="bg-purple hover:bg-purple-light px-4 py-2 rounded-full text-sm font-semibold text-white transition-colors">
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Arms of Grace Child Placing Agency. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
