"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "How We Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="w-full top-0 sticky z-40 bg-background/80 backdrop-blur-md border-b-[1.5pt] border-primary/10">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-medium transition-all duration-200 hover:scale-[1.02] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-tertiary after:transition-all after:duration-300 ${
                pathname === link.href
                  ? "text-tertiary font-bold after:w-full"
                  : "text-on-surface-variant hover:text-tertiary after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:block bg-burnt-orange text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-all duration-200 squishy-interaction btn-glow"
          >
            Let&apos;s Talk
          </Link>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden mobile-menu-enter border-t border-primary/10 bg-background/95 backdrop-blur-lg px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-on-surface-variant hover:text-tertiary transition-colors py-2 border-b border-primary/5">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="bg-burnt-orange text-white px-6 py-3 rounded-full font-bold text-center mt-2 hover:scale-105 transition-transform">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
