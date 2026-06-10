"use client";

import { useState } from "react";

const roles = [
  "Mentor / Tutor",
  "Transportation Driver",
  "Event Support",
  "Office Assistant",
  "Bridging the Gap Life Coach",
  "Foster Family Support",
  "Fundraising & Outreach",
  "Other",
];

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-purple/8 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-purple/15 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
          </svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-dark mb-2">Application Submitted!</h3>
        <p className="text-muted">Thank you for your heart to serve. Our Volunteer Coordinator will reach out within 2–3 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">First Name</label>
          <input required type="text" placeholder="James" className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">Last Name</label>
          <input required type="text" placeholder="Obi" className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Email Address</label>
        <input required type="email" placeholder="you@email.com" className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Phone Number</label>
        <input type="tel" placeholder="(713) 555-0100" className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Area of Interest</label>
        <select required className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white">
          <option value="">Choose a volunteer role...</option>
          {roles.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Availability</label>
        <select className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white">
          <option value="">Select availability...</option>
          <option>Weekday mornings</option>
          <option>Weekday afternoons</option>
          <option>Evenings</option>
          <option>Weekends only</option>
          <option>Flexible</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Tell Us About Yourself</label>
        <textarea rows={4} placeholder="Share a bit about your background and why you'd like to volunteer..." className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white resize-none" />
      </div>
      <button type="submit" className="w-full bg-purple hover:bg-purple-dark text-white font-semibold py-3.5 rounded-full transition-colors text-sm">
        Submit Application
      </button>
    </form>
  );
}
