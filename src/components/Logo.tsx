import Link from "next/link";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const imgSize = size === "lg" ? "h-8 w-8" : size === "md" ? "h-6 w-6" : "h-5 w-5";
  const textSize = size === "lg" ? "text-3xl" : size === "md" ? "text-2xl" : "text-xl";

  return (
    <Link href="/" className={`font-[var(--font-headline)] ${textSize} font-extrabold text-primary hover:scale-105 transition-transform duration-200 inline-flex items-center gap-0`}>
      <span>Big K</span>
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahuDagXg-NDV2fO8751tj-gpXi4JJLnH9KqerCqWRgh2hwncmAO-mDpPa-jGCfYWlRiKZe0zuaeWJFQOhbv2lpmwbscB4g1qP3t9odYuvB2s86bWu9pcwWA4va_6cNd1lTLkGolwM7yzc6oVNU7lOkxLnFK-2UnCkWY0pfleusDpLZbU4BJ9dvD22FSEJlz1GenBG-kb80oJF7TxXUWU-bwzQqZzF0d8FI58B4e89gL97SKemuqM4AvHo3Nd2C9RVX3-wkMpCiSl"
        alt=""
        className={`${imgSize} object-contain inline-block -mx-0.5`}
      />
      <span>k</span>
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahuDagXg-NDV2fO8751tj-gpXi4JJLnH9KqerCqWRgh2hwncmAO-mDpPa-jGCfYWlRiKZe0zuaeWJFQOhbv2lpmwbscB4g1qP3t9odYuvB2s86bWu9pcwWA4va_6cNd1lTLkGolwM7yzc6oVNU7lOkxLnFK-2UnCkWY0pfleusDpLZbU4BJ9dvD22FSEJlz1GenBG-kb80oJF7TxXUWU-bwzQqZzF0d8FI58B4e89gL97SKemuqM4AvHo3Nd2C9RVX3-wkMpCiSl"
        alt=""
        className={`${imgSize} object-contain inline-block -mx-0.5`}
      />
      <span>s</span>
    </Link>
  );
}
