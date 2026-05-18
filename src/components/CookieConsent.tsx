"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white tough-border rounded-2xl soft-shadow p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-primary font-semibold text-sm mb-1">We value your privacy</p>
          <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">
            We use essential cookies to make our site work. With your consent, we may also use analytics cookies to improve your experience.
            Read our{" "}
            <Link href="/privacy" className="text-burnt-orange underline hover:no-underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-full text-sm font-bold text-on-surface-variant border border-primary/20 hover:bg-surface-container transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-full text-sm font-bold bg-primary text-on-primary hover:scale-105 transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
