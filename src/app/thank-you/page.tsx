"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setAlive(true));
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${6 + (i % 5) * 4}px`,
              height: `${6 + (i % 5) * 4}px`,
              left: `${5 + (i * 41) % 90}%`,
              backgroundColor: i % 3 === 0 ? "#D35400" : i % 3 === 1 ? "#466729" : "#311908",
              opacity: alive ? 0.08 + (i % 5) * 0.03 : 0,
              top: alive ? `${5 + (i * 29) % 80}%` : "105%",
              transition: `all ${1 + i * 0.08}s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.04}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-xl text-center">
        {/* Logo + badge */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-10">
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border-2 border-secondary/15 animate-ping" />
          <div className="absolute inset-[-8px] rounded-full border border-secondary/10 animate-[ping_2.5s_ease-out_infinite_0.4s]" />

          <div className="relative w-full h-full rounded-full bg-white tough-border flex items-center justify-center soft-shadow">
            <img src="/kokos-logo.png" alt="" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-11 h-11 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <h1 className="font-[var(--font-headline)] text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          We&apos;re on it.
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-md mx-auto">
          Your message landed. Expect a thoughtful reply within{" "}
          <strong className="text-primary">24 hours</strong>.
        </p>

        {/* Timeline card */}
        <div className="bg-white tough-border rounded-2xl md:rounded-3xl p-6 md:p-8 soft-shadow mb-10 text-left">
          <p className="font-[var(--font-headline)] font-bold text-primary mb-5 text-base">What happens next</p>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { num: "✓", label: "Received", desc: "We got your details", color: "bg-secondary text-white" },
              { num: "2", label: "Reviewing", desc: "Team is on it", color: "bg-surface-container-high text-primary" },
              { num: "3", label: "Reply", desc: "Within 24 hours", color: "bg-surface-container-high text-primary" },
            ].map((step, i) => (
              <div key={step.label} className="relative">
                {i < 2 && <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-px bg-primary/10" />}
                <div className="flex flex-col items-center text-center">
                  <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-sm mb-2 ${step.color}`}>
                    {step.num}
                  </div>
                  <span className="font-[var(--font-headline)] font-bold text-primary text-xs md:text-sm">{step.label}</span>
                  <span className="text-on-surface-variant text-[10px] md:text-xs mt-0.5">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            href="/"
            className="bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg btn-glow text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-colors text-center"
          >
            Read Our Blog
          </Link>
        </div>

        <p className="text-on-surface-variant/40 text-sm">
          Urgent? <a href="mailto:hello@bigkokos.dev" className="text-burnt-orange hover:underline">hello@bigkokos.dev</a>
        </p>
      </div>
    </div>
  );
}
