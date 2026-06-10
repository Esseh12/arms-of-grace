const stats = [
  { value: "350+", label: "Children Served", desc: "since our founding", color: "text-purple" },
  { value: "200+", label: "Foster Families", desc: "trained and licensed", color: "text-pink" },
  { value: "98%", label: "Placement Success", desc: "across all programs", color: "text-blue" },
  { value: "$3.2M", label: "Funds Raised", desc: "directly serving children", color: "text-purple" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-7 text-center border border-soft">
              <p className={`font-heading font-bold text-4xl sm:text-5xl ${stat.color} mb-2`}>{stat.value}</p>
              <p className="font-semibold text-dark text-sm mb-1">{stat.label}</p>
              <p className="text-muted text-xs">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
