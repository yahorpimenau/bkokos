"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { IconMail } from "./Icons";

const navLinks = [
  { href: "/services", label: "Services", desc: "What we build", emoji: "🌐" },
  { href: "/process", label: "How We Work", desc: "Our process", emoji: "⚙️" },
  { href: "/pricing", label: "Pricing", desc: "Transparent plans", emoji: "💰" },
  { href: "/blog", label: "Blog", desc: "Insights & guides", emoji: "📝" },
  { href: "/about", label: "About", desc: "Our story", emoji: "👋" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header className="w-full top-0 sticky z-40 bg-background/80 backdrop-blur-md border-b-[1.5pt] border-primary/10">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Logo />

          {/* Desktop */}
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

            {/* Hamburger — only visible when menu is closed */}
            {!mobileOpen && (
              <button
                className="md:hidden relative w-10 h-10 flex items-center justify-center"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="absolute w-6 h-0.5 bg-primary -translate-y-2" />
                <span className="absolute w-6 h-0.5 bg-primary" />
                <span className="absolute w-6 h-0.5 bg-primary translate-y-2" />
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile menu — fullscreen */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background flex flex-col">
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10 shrink-0">
            <Logo />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-high active:bg-surface-container-highest transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav */}
          <div className="flex-grow overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-colors ${
                    isActive
                      ? "bg-burnt-orange/10 border-[1.5pt] border-burnt-orange/20"
                      : "border-[1.5pt] border-transparent active:bg-surface-container"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-xl ${
                    isActive ? "bg-burnt-orange/20" : "bg-surface-container-high"
                  }`}>
                    {link.emoji}
                  </div>
                  <div>
                    <span className={`font-[var(--font-headline)] font-bold block text-base ${isActive ? "text-burnt-orange" : "text-primary"}`}>
                      {link.label}
                    </span>
                    <span className="text-on-surface-variant text-xs">{link.desc}</span>
                  </div>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-burnt-orange shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="px-6 pb-8 pt-4 border-t border-primary/10 space-y-4 shrink-0">
            <a
              href="mailto:hello@bigkokos.dev"
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
            >
              <IconMail className="w-4 h-4" />
              <span className="text-sm">hello@bigkokos.dev</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-burnt-orange text-white px-6 py-4 rounded-2xl font-bold text-center text-lg shadow-lg btn-glow"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
