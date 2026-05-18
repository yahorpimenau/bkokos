"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IconGlobe, IconPhone, IconLink, IconGear, IconRocket, IconBuild, IconMail, IconCall, IconShield } from "@/components/Icons";

const serviceOptions = [
  { value: "website", label: "Website / Web App", Icon: IconGlobe },
  { value: "mobile", label: "Mobile App", Icon: IconPhone },
  { value: "crm", label: "CRM Integration", Icon: IconLink },
  { value: "automation", label: "Automation", Icon: IconGear },
  { value: "mvp", label: "MVP / Startup", Icon: IconRocket },
  { value: "everything", label: "Full Package", Icon: IconBuild },
];

const budgetOptions = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K+",
  "Not sure yet",
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function toggleService(value: string) {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          services: selectedServices,
          budget: data.get("budget"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSending(false);
      setSubmitted(true);
    } catch {
      setSending(false);
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 md:py-40 text-center">
        <AnimateOnScroll animation="scale-in">
          <div className="bg-white tough-border p-10 md:p-16 rounded-3xl soft-shadow">
            <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
              <IconShield className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Message received!
            </h1>
            <p className="text-on-surface-variant text-lg mb-8">
              We&apos;ll get back to you within 24 hours with a clear next step.
            </p>
            <Link
              href="/"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <AnimateOnScroll className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-[var(--font-mono)] text-xs mb-6 uppercase">
          Start a Project
        </div>
        <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          Let&apos;s build together
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant">
          Tell us about your project. We reply within 24 hours with a clear next step.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Form — takes 2 cols */}
        <AnimateOnScroll animation="fade-in-left" className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white tough-border p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl soft-shadow"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block font-[var(--font-mono)] text-[11px] uppercase text-on-surface-variant mb-2 tracking-wider">
                  Name <span className="text-burnt-orange">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-[1.5pt] border-primary/15 rounded-xl px-4 py-3.5 bg-surface-container-lowest text-primary placeholder:text-outline focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/15 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-[var(--font-mono)] text-[11px] uppercase text-on-surface-variant mb-2 tracking-wider">
                  Email <span className="text-burnt-orange">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-[1.5pt] border-primary/15 rounded-xl px-4 py-3.5 bg-surface-container-lowest text-primary placeholder:text-outline focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/15 outline-none transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Company */}
            <div className="mb-5">
              <label className="block font-[var(--font-mono)] text-[11px] uppercase text-on-surface-variant mb-2 tracking-wider">
                Company <span className="text-outline font-normal normal-case">(optional)</span>
              </label>
              <input
                type="text"
                name="company"
                className="w-full border-[1.5pt] border-primary/15 rounded-xl px-4 py-3.5 bg-surface-container-lowest text-primary placeholder:text-outline focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/15 outline-none transition-all"
                placeholder="Company name"
              />
            </div>

            {/* Service selector chips */}
            <div className="mb-5">
              <label className="block font-[var(--font-mono)] text-[11px] uppercase text-on-surface-variant mb-3 tracking-wider">
                What do you need? <span className="text-burnt-orange">*</span>
                <span className="text-outline font-normal normal-case ml-1">(select all that apply)</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {serviceOptions.map((opt) => {
                  const active = selectedServices.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => toggleService(opt.value)}
                      className={`inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border-[1.5pt] transition-all duration-200 squishy-interaction ${
                        active
                          ? "bg-burnt-orange text-white border-burnt-orange shadow-md scale-[1.02]"
                          : "bg-surface-container-lowest text-on-surface-variant border-primary/15 hover:border-burnt-orange/40 hover:bg-surface-container"
                      }`}
                    >
                      <opt.Icon className={`w-4 h-4 ${active ? "text-white" : "text-burnt-orange"}`} />
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget */}
            <div className="mb-5">
              <label className="block font-[var(--font-mono)] text-[11px] uppercase text-on-surface-variant mb-2 tracking-wider">
                Budget range
              </label>
              <div className="relative">
                <select name="budget" className="w-full border-[1.5pt] border-primary/15 rounded-xl px-4 py-3.5 bg-surface-container-lowest text-primary focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/15 outline-none transition-all appearance-none pr-10">
                  <option value="">Select a range...</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-sm">
                  ▾
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block font-[var(--font-mono)] text-[11px] uppercase text-on-surface-variant mb-2 tracking-wider">
                Tell us more
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full border-[1.5pt] border-primary/15 rounded-xl px-4 py-3.5 bg-surface-container-lowest text-primary placeholder:text-outline focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/15 outline-none transition-all resize-none"
                placeholder="Describe your project, timeline, goals..."
              />
            </div>

            {/* GDPR consent */}
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 w-4 h-4 rounded border-primary/30 bg-surface-container-lowest text-burnt-orange focus:ring-burnt-orange/30 shrink-0"
                />
                <span className="text-on-surface-variant text-xs leading-relaxed group-hover:text-primary transition-colors">
                  I agree to the processing of my personal data as described in the{" "}
                  <Link href="/privacy" className="text-burnt-orange underline hover:no-underline">Privacy Policy</Link>.
                  You can withdraw consent at any time by contacting us.
                </span>
              </label>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-error-container border border-error/20 rounded-xl text-on-error-container text-sm text-center">
                Something went wrong. Please email us at{" "}
                <a href="mailto:hello@bigkokos.dev" className="underline font-bold">hello@bigkokos.dev</a>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-burnt-orange text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-all btn-glow squishy-interaction flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
            >
              {sending && (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {sending ? "Sending..." : "Send Message"}
              {!sending && <span className="text-xl">&rarr;</span>}
            </button>
            <p className="text-center text-on-surface-variant text-xs mt-4">
              No spam, no obligation. We reply within 24 hours.
            </p>
          </form>
        </AnimateOnScroll>

        {/* Sidebar */}
        <AnimateOnScroll animation="fade-in-right" delay={200} className="lg:col-span-1 space-y-6">
          {/* Contact cards */}
          <div className="bg-white tough-border p-6 rounded-2xl soft-shadow space-y-5">
            <h3 className="font-[var(--font-headline)] text-lg font-bold text-primary">Prefer to talk?</h3>
            <a
              href="mailto:hello@bigkokos.dev"
              className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
            >
              <div className="w-11 h-11 bg-burnt-orange/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <IconMail className="w-5 h-5 text-burnt-orange" />
              </div>
              <div>
                <p className="text-xs text-on-surface-variant">Email us</p>
                <p className="text-primary font-bold text-sm">hello@bigkokos.dev</p>
              </div>
            </a>
            <a
              href="mailto:hello@bigkokos.dev?subject=Discovery%20Call%20Request"
              className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group"
            >
              <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <IconCall className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-on-surface-variant">Quick call</p>
                <p className="text-primary font-bold text-sm">Book a 15-min Discovery Call</p>
              </div>
            </a>
          </div>

          {/* Response time */}
          <div className="bg-secondary-container/30 border-[1.5pt] border-secondary/20 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
              <span className="font-[var(--font-mono)] text-xs text-secondary font-bold uppercase">Avg. response</span>
            </div>
            <p className="font-[var(--font-headline)] text-2xl font-extrabold text-primary">Under 4 hours</p>
            <p className="text-on-surface-variant text-sm mt-1">during business days</p>
          </div>

          {/* Existing client */}
          <div className="bg-surface-container p-6 rounded-2xl">
            <p className="font-[var(--font-mono)] text-[11px] text-on-surface-variant uppercase mb-2 tracking-wider">Existing client?</p>
            <p className="text-on-surface-variant text-sm">
              Reach us on your dedicated Slack or Discord channel for priority support.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
