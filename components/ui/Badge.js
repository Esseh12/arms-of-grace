const variants = {
  purple: "bg-purple/10 text-purple",
  pink: "bg-pink/10 text-pink",
  blue: "bg-blue/10 text-blue",
  soft: "bg-soft text-muted",
};

export default function Badge({ label, variant = "purple" }) {
  return (
    <span className={`inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${variants[variant]}`}>
      {label}
    </span>
  );
}
