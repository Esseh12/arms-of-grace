"use client";

import { useState } from "react";

const subjects = [
  "Foster Care Inquiry",
  "Foster Adoption",
  "Supervised Visitations",
  "Private Adoption",
  "Bridging the Gap",
  "Volunteering",
  "Donation",
  "General Question",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-purple/8 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-purple/15 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
          </svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-dark mb-2">Message Received!</h3>
        <p className="text-muted">Thank you for reaching out. A member of our team will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">First Name</label>
          <input required type="text" placeholder="Patricia" value={form.firstName} onChange={set("firstName")} className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1.5">Last Name</label>
          <input required type="text" placeholder="Owens" value={form.lastName} onChange={set("lastName")} className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Email Address</label>
        <input required type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Phone Number</label>
        <input type="tel" placeholder="(281) 555-0100" value={form.phone} onChange={set("phone")} className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Subject</label>
        <select required value={form.subject} onChange={set("subject")} className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white">
          <option value="">Select a subject...</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1.5">Message</label>
        <textarea required rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={set("message")} className="w-full border border-soft rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/60 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/15 transition bg-white resize-none" />
      </div>

      {status === "error" && (
        <p className="text-sm text-pink font-medium">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === "loading"} className="w-full bg-pink hover:bg-pink-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-full transition-colors text-sm flex items-center justify-center gap-2">
        {status === "loading" ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            Sending…
          </>
        ) : "Send Message"}
      </button>
    </form>
  );
}
