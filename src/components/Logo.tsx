import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const imgSize = size === "lg" ? "h-8 w-8" : size === "md" ? "h-7 w-7" : "h-5 w-5";
  const textSize = size === "lg" ? "text-3xl" : size === "md" ? "text-2xl" : "text-xl";

  return (
    <Link href="/" className={`font-[var(--font-headline)] ${textSize} font-extrabold text-primary hover:scale-105 transition-transform duration-200 inline-flex items-baseline gap-0`}>
      <span>Big K</span>
      <img
        src="/kokos-logo.png"
        alt=""
        className={`${imgSize} object-contain inline-block -mx-0.5 relative -top-px`}
      />
      <span>k</span>
      <img
        src="/kokos-logo.png"
        alt=""
        className={`${imgSize} object-contain inline-block -mx-0.5 relative -top-px`}
      />
      <span>s</span>
    </Link>
  );
}
