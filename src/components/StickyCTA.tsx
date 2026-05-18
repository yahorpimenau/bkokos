"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollY / (docHeight - winHeight);
      const nearBottom = scrollY + winHeight >= docHeight - 100;

      setVisible(scrollPercent > 0.4 && !nearBottom);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 bg-primary/95 backdrop-blur-md border-t border-primary-fixed-dim/20 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <p className="text-primary-fixed-dim text-sm font-medium hidden sm:block">
          Ready to start?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-burnt-orange text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all btn-glow sm:ml-auto"
        >
          Get a Free Quote <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
