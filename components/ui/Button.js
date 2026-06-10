import Link from "next/link";

const variants = {
  primary: "bg-pink text-white hover:bg-pink-dark",
  secondary: "bg-purple text-white hover:bg-purple-dark",
  blue: "bg-blue text-white hover:bg-blue-dark",
  outlinePurple: "border-2 border-purple text-purple hover:bg-purple hover:text-white",
  outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-purple",
  ghost: "text-purple hover:bg-soft",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({ href, variant = "primary", size = "md", className = "", children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
