"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    dropdown: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Our Impact", href: "/about#impact" },
    ],
  },
  {
    label: "Causes",
    dropdown: [
      { label: "Foster Care", href: "/causes/foster-care" },
      { label: "Foster Adoption", href: "/causes/foster-adoption" },
      { label: "Supervised Visitations", href: "/causes/supervised-visitations" },
      { label: "Private Adoption", href: "/private-adoption" },
      { label: "Bridging the Gap", href: "/bridging-the-gap" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream border-b border-cream-dark shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Arms of Grace — Child Placing Agency"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="group relative">
                    <button className="flex items-center gap-1 text-brown hover:text-purple font-medium text-sm transition-colors py-2">
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-cream rounded-2xl shadow-lg border border-cream-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                      <div className="p-2">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-sm text-brown hover:bg-cream-dark hover:text-purple rounded-xl transition-colors">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.label} href={link.href} className="text-brown hover:text-purple font-medium text-sm transition-colors">
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/become-volunteer" className="text-brown font-semibold text-sm border border-brown/30 px-4 py-2 rounded-full hover:bg-cream-dark transition-colors">
                Volunteer
              </Link>
              <Link href="/contact" className="bg-purple text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-dark transition-colors">
                Donate Now
              </Link>
            </div>

            <button className="lg:hidden p-2 text-brown rounded-lg hover:bg-cream-dark transition-colors" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
