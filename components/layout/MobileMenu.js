"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isOpen, onClose, links }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-dark/40 z-50 backdrop-blur-sm" onClick={onClose} />}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-soft">
          <p className="font-heading font-bold text-purple text-lg">Arms of Grace</p>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-soft text-dark transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-dark font-medium text-sm rounded-xl hover:bg-lavender transition-colors"
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openDropdown === link.label && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-soft pl-3">
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} onClick={onClose} className="block px-3 py-2 text-sm text-muted hover:text-purple transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} href={link.href} onClick={onClose} className="block px-4 py-3 text-dark font-medium text-sm rounded-xl hover:bg-lavender hover:text-purple transition-colors">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="px-6 py-6 border-t border-soft space-y-3">
          <Link href="/become-volunteer" onClick={onClose} className="block w-full text-center border-2 border-purple text-purple font-semibold py-3 rounded-full text-sm hover:bg-soft transition-colors">
            Become a Volunteer
          </Link>
          <Link href="/contact" onClick={onClose} className="block w-full text-center bg-pink text-white font-semibold py-3 rounded-full text-sm hover:bg-pink-dark transition-colors">
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
}
