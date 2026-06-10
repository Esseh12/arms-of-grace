const details = [
  {
    icon: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    title: "Our Office",
    lines: ["1234 Grace Lane, Suite 200", "Houston, TX 77001"],
    color: "text-purple",
    bg: "bg-purple/8",
  },
  {
    icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92Z"/>',
    title: "Phone",
    lines: ["(713) 555-0192", "Mon – Fri, 9am – 5pm"],
    color: "text-pink",
    bg: "bg-pink/8",
  },
  {
    icon: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    title: "Email",
    lines: ["info@armsofgrace.org", "We respond within 24 hours"],
    color: "text-blue",
    bg: "bg-blue/8",
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    title: "Office Hours",
    lines: ["Monday – Friday: 9am – 5pm", "Emergency line available 24/7"],
    color: "text-purple",
    bg: "bg-purple/8",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {details.map((d) => (
        <div key={d.title} className={`${d.bg} rounded-2xl p-5 flex gap-4 items-start`}>
          <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 ${d.color}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d.icon }} />
          </div>
          <div>
            <p className="font-semibold text-dark text-sm mb-0.5">{d.title}</p>
            {d.lines.map((line) => (
              <p key={line} className="text-muted text-sm">{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
