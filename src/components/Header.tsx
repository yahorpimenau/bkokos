"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/developers", label: "Automation Lab" },
  { href: "/developers", label: "The Oasis" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full top-0 sticky z-40 bg-background/80 backdrop-blur-md border-b-[1.5pt] border-primary/10">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="font-[var(--font-headline)] text-2xl font-bold text-primary"
        >
          Big Kokos
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition-transform duration-200 hover:scale-[1.02] ${
                  isActive
                    ? "text-tertiary font-bold border-b-2 border-tertiary pb-1"
                    : "text-on-surface-variant hover:text-tertiary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button className="bg-tertiary text-on-tertiary px-6 py-2.5 rounded-full font-bold hover:scale-[1.02] transition-transform duration-200 squishy-interaction">
          Peek Inside
        </button>
      </nav>
    </header>
  );
}
