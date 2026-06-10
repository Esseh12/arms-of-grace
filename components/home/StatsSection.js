"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 350,    suffix: "+",   label: "Children Served",   desc: "since our founding",          color: "text-purple" },
  { value: 200,    suffix: "+",   label: "Foster Families",   desc: "trained and licensed",         color: "text-pink"   },
  { value: 98,     suffix: "%",   label: "Placement Success", desc: "across all programs",          color: "text-blue"   },
  { value: 15,     suffix: "yrs", label: "Serving Texas",     desc: "Richmond & surrounding areas", color: "text-purple" },
];

function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

function StatItem({ stat, started }) {
  const count = useCountUp(stat.value, 1800, started);
  return (
    <div className="flex flex-col items-center text-center px-6">
      <span className={`font-heading font-bold text-6xl xl:text-7xl leading-none ${stat.color} mb-3 tabular-nums`}>
        {count}{stat.suffix}
      </span>
      <span className="font-semibold text-dark text-sm mb-1">{stat.label}</span>
      <span className="text-muted text-xs">{stat.desc}</span>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white border-y border-soft" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-14">
          Our impact in numbers
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-soft gap-y-14 lg:gap-y-0">
          {stats.map((s, i) => (
            <div key={s.label} className={i === 1 ? "border-l border-soft lg:border-none" : ""}>
              <StatItem stat={s} started={started} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
