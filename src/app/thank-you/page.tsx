"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [count, setCount] = useState(0);

  // Confetti-like effect: spawn particles once
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => (c < 100 ? c + 2 : c));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-0"
            style={{
              left: `${10 + (i * 37) % 80}%`,
              backgroundColor: i % 3 === 0 ? "#D35400" : i % 3 === 1 ? "#466729" : "#311908",
              opacity: count > i * 5 ? 0.15 + (i % 4) * 0.05 : 0,
              top: count > i * 5 ? `${10 + (i * 23) % 70}%` : "110%",
              transition: `all ${0.8 + i * 0.1}s cubic-bezier(0.34, 1.56, 0.64, 1)`,
              transform: `scale(${0.5 + (i % 3) * 0.5})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Card */}
        <div className="bg-white tough-border rounded-3xl p-8 md:p-10 soft-shadow text-center">
          {/* Logo + check */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center">
              <img src="/kokos-logo.png" alt="" className="w-11 h-11 object-contain" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          <h1 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold text-primary mb-2">
            We&apos;re on it.
          </h1>
          <p className="text-on-surface-variant text-sm mb-8">
            Expect a reply within <strong className="text-primary">24 hours</strong>.
          </p>

          {/* Mini timeline — horizontal */}
          <div className="flex items-center gap-0 mb-8">
            {[
              { label: "Received", active: true },
              { label: "Reviewing", active: false },
              { label: "Reply", active: false },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    step.active
                      ? "bg-secondary text-white"
                      : "bg-surface-container-high text-on-surface-variant"
                  }`}>
                    {step.active ? "✓" : i + 1}
                  </div>
                  <span className="text-[10px] text-on-surface-variant mt-1.5 font-[var(--font-mono)]">{step.label}</span>
                </div>
                {i < 2 && (
                  <div className="h-px w-full bg-primary/10 -mt-4" />
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              href="/"
              className="block bg-primary text-on-primary py-3 rounded-full font-bold hover:scale-[1.02] transition-all text-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="block border border-primary/15 text-primary py-3 rounded-full font-bold hover:bg-surface-container transition-colors text-sm"
            >
              Read Our Blog
            </Link>
          </div>
        </div>

        {/* Subtle footer */}
        <p className="text-center text-on-surface-variant/40 text-xs mt-6">
          Urgent? <a href="mailto:hello@bigkokos.dev" className="text-burnt-orange hover:underline">hello@bigkokos.dev</a>
        </p>
      </div>
    </div>
  );
}
