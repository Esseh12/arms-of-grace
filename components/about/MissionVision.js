const cards = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    color: "text-purple",
    bg: "bg-purple/8",
    label: "Our Mission",
    text: "To be a beacon of hope for vulnerable children in Texas — providing safe placements, supporting families, and advocating tirelessly until every child has a permanent, loving home.",
  },
  {
    icon: '<circle cx="12" cy="12" r="2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>',
    color: "text-pink",
    bg: "bg-pink/8",
    label: "Our Vision",
    text: "A Texas where no child waits alone. A community where foster and adoptive families are celebrated, resourced, and never left without support.",
  },
  {
    icon: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
    color: "text-blue",
    bg: "bg-blue/8",
    label: "Our Values",
    text: "Grace. Integrity. Compassion. We approach every family — foster, adoptive, or biological — with dignity, honesty, and unconditional care.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.label} className={`${c.bg} rounded-2xl p-8`}>
              <div className={`w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-5 ${c.color}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: c.icon }} />
              </div>
              <h3 className="font-heading font-bold text-xl text-dark mb-3">{c.label}</h3>
              <p className="text-muted text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
