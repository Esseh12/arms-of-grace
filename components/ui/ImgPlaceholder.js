import Image from "next/image";

const palettes = {
  purple: { bg: "bg-purple/10", icon: "text-purple/25", border: "border-purple/15" },
  pink: { bg: "bg-pink/10", icon: "text-pink/25", border: "border-pink/15" },
  blue: { bg: "bg-blue/10", icon: "text-blue/25", border: "border-blue/15" },
  soft: { bg: "bg-soft", icon: "text-purple/20", border: "border-soft" },
};

export default function ImgPlaceholder({ aspect = "4/3", label, color = "purple", className = "", rounded = "rounded-2xl", src }) {
  const p = palettes[color] || palettes.purple;

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${src ? "" : `border ${p.bg} ${p.border}`} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image src={src} alt={label || ""} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      ) : (
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 ${p.icon}`}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
          {label && <span className="text-xs font-medium tracking-wide opacity-70">{label}</span>}
        </div>
      )}
    </div>
  );
}
