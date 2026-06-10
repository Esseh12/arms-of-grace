"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What is a child placing agency?",
    a: "A child placing agency (CPA) is a licensed organization that recruits, trains, and supports foster and adoptive families on behalf of the state. Arms of Grace works directly with the Texas Department of Family and Protective Services to place children with safe, loving homes.",
  },
  {
    q: "How do I become a foster parent?",
    a: "The process starts with an orientation where we walk you through the requirements — background checks, a home study, and state-certified training. From inquiry to licensure typically takes 3–6 months. We guide you every step of the way and stay with you long after placement.",
  },
  {
    q: "What is the difference between foster care and adoption?",
    a: "Foster care is a temporary arrangement while a child's case is active — the goal is always family reunification first. Foster adoption happens when parental rights have been terminated and a child becomes legally free for adoption. We offer both pathways, as well as private adoption for birth families making a plan.",
  },
  {
    q: "Can single people or same-sex couples become foster or adoptive parents?",
    a: "Yes. Texas licenses single individuals, married couples, and unmarried couples to foster and adopt. We welcome all family structures. The most important qualification is your ability to provide a safe, stable, and nurturing environment.",
  },
  {
    q: "What support does Arms of Grace provide after placement?",
    a: "We don't disappear after a child is placed. Our team provides ongoing caseworker visits, 24/7 emergency support, respite care coordination, training, and access to community resources. We believe the family around the family is just as important as the placement itself.",
  },
  {
    q: "What is the Bridging the Gap program?",
    a: "Bridging the Gap serves youth who age out of the foster care system at 18. Without support, many face homelessness, unemployment, and isolation. Our program connects them with mentors, life-skills coaching, housing assistance, and a lasting community.",
  },
  {
    q: "How can I help if I'm not ready to foster or adopt?",
    a: "There are many ways to make a difference — volunteering as a mentor or driver, donating supplies or funds, hosting an awareness event at your church or workplace, or simply sharing our mission. Reach out and we will find the right fit for you.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-pink mb-3">
            FAQ
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-dark leading-tight">
            Questions We Hear Often
          </h2>
        </div>

        <div className="divide-y divide-soft">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base transition-colors ${isOpen ? "text-purple" : "text-dark group-hover:text-purple"}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-purple border-purple text-white rotate-45" : "border-soft text-muted group-hover:border-purple group-hover:text-purple"}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
                  <p className="text-muted text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted text-sm mt-12">
          Still have questions?{" "}
          <Link href="/contact" className="text-purple font-semibold hover:underline">
            Get in touch with our team →
          </Link>
        </p>
      </div>
    </section>
  );
}
