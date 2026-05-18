"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { IconGlobe, IconGear, IconChart, IconRocket, IconChat, IconMail } from "./Icons";

const navLinks = [
  { href: "/services", label: "Services", desc: "What we build", Icon: IconGlobe },
  { href: "/process", label: "How We Work", desc: "Our process", Icon: IconGear },
  { href: "/pricing", label: "Pricing", desc: "Transparent plans", Icon: IconChart },
  { href: "/blog", label: "Blog", desc: "Insights & guides", Icon: IconChat },
  { href: "/about", label: "About", desc: "Our story", Icon: IconRocket },
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

            {/* Hamburger */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`absolute w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`absolute w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`absolute w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — fullscreen overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[45] bg-background flex flex-col animate-fade-in-up" style={{ animationDuration: "200ms" }}>
          {/* Top bar spacer (matches header height) */}
          <div className="h-[65px] shrink-0" />

          {/* Nav links */}
          <div className="flex-grow overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-burnt-orange/10 border-[1.5pt] border-burnt-orange/20"
                      : "border-[1.5pt] border-transparent active:bg-surface-container"
                  }`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? "bg-burnt-orange/20" : "bg-surface-container-high"
                  }`}>
                    <link.Icon className={`w-5 h-5 ${isActive ? "text-burnt-orange" : "text-primary"}`} />
                  </div>
                  <div>
                    <span className={`font-[var(--font-headline)] font-bold block text-base ${isActive ? "text-burnt-orange" : "text-primary"}`}>
                      {link.label}
                    </span>
                    <span className="text-on-surface-variant text-xs">{link.desc}</span>
                  </div>
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
