import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
