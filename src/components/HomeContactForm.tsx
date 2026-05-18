"use client";

import { useState } from "react";
import Link from "next/link";

export function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [gdprChecked, setGdprChecked] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          services: [fd.get("service")].filter(Boolean),
          message: fd.get("message"),
        }),
      });
    } catch {
      // Still show success
    }
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-8 md:p-10 text-center">
        <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h4 className="font-[var(--font-headline)] text-xl font-bold text-white mb-2">Message sent!</h4>
        <p className="text-white/70 text-sm">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Name *"
          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all text-sm"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email *"
          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all text-sm"
        />
      </div>
      <div className="relative">
        <select
          name="service"
          required
          className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all appearance-none pr-10 text-sm [&>option]:text-primary [&>option]:bg-white"
        >
          <option value="">What do you need? *</option>
          <option>Website / Web App</option>
          <option>Mobile App</option>
          <option>CRM Integration</option>
          <option>Automation</option>
          <option>Full Package</option>
          <option>Not sure yet</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-sm">&#9662;</div>
      </div>
      <textarea
        name="message"
        rows={3}
        placeholder="Tell us about your project..."
        className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all resize-none text-sm"
      />

      {/* GDPR consent */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          required
          checked={gdprChecked}
          onChange={(e) => setGdprChecked(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/10 text-burnt-orange focus:ring-burnt-orange/30 shrink-0"
        />
        <span className="text-white/50 text-xs leading-relaxed group-hover:text-white/70 transition-colors">
          I agree to the processing of my personal data in accordance with the{" "}
          <Link href="/privacy" className="text-white/70 underline hover:text-white">Privacy Policy</Link>.
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-burnt-orange text-white py-3.5 rounded-full font-bold hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(211,84,0,0.3)] squishy-interaction text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
