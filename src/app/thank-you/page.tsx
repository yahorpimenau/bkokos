import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex flex-col">
      {/* Hero — dark branded block */}
      <section className="bg-primary text-white px-6 py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-burnt-orange/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Animated logo + check */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-secondary/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-secondary/10 animate-[ping_2s_ease-out_infinite_0.5s]"></div>
            <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <img src="/kokos-logo.png" alt="" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="font-[var(--font-headline)] text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            We&apos;re on it.
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-md mx-auto">
            Your message is in our queue. Expect a thoughtful reply within{" "}
            <strong className="text-white">24 hours</strong>.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 -mt-8 relative z-10 max-w-2xl mx-auto w-full">
        <div className="bg-white tough-border rounded-2xl md:rounded-3xl p-6 md:p-8 soft-shadow">
          <p className="font-[var(--font-headline)] font-bold text-primary text-sm mb-6">What happens next</p>

          <div className="space-y-0">
            {[
              { time: "Now", title: "Message received", desc: "Your project details are being reviewed by our team.", done: true },
              { time: "Within 24h", title: "Personalized reply", desc: "We'll send you follow-up questions and a proposed approach.", done: false },
              { time: "Day 2–3", title: "Discovery call", desc: "A free 30-minute call to align on scope, timeline, and budget.", done: false },
            ].map((step, i) => (
              <div key={step.title} className="flex gap-4 md:gap-5">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    step.done
                      ? "bg-secondary"
                      : "bg-surface-container-high border-2 border-primary/15"
                  }`}>
                    {step.done ? (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span className="text-on-surface-variant text-xs font-bold">{i + 1}</span>
                    )}
                  </div>
                  {i < 2 && <div className="w-px flex-grow bg-primary/10 my-1" />}
                </div>
                {/* Content */}
                <div className={`pb-6 ${i === 2 ? "pb-0" : ""}`}>
                  <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-on-surface-variant/50">{step.time}</span>
                  <h3 className={`font-[var(--font-headline)] font-bold text-sm md:text-base ${step.done ? "text-secondary" : "text-primary"}`}>
                    {step.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs md:text-sm mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="px-6 py-12 md:py-16 max-w-2xl mx-auto w-full text-center space-y-6">
        <p className="text-on-surface-variant text-sm">While you wait, take a look around:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/services" className="bg-surface-container hover:bg-surface-container-high transition-colors rounded-xl p-4 group">
            <span className="font-[var(--font-headline)] font-bold text-primary text-sm group-hover:text-burnt-orange transition-colors">Services</span>
            <span className="text-on-surface-variant text-xs block mt-0.5">See what we build</span>
          </Link>
          <Link href="/blog" className="bg-surface-container hover:bg-surface-container-high transition-colors rounded-xl p-4 group">
            <span className="font-[var(--font-headline)] font-bold text-primary text-sm group-hover:text-burnt-orange transition-colors">Blog</span>
            <span className="text-on-surface-variant text-xs block mt-0.5">Read our insights</span>
          </Link>
          <Link href="/process" className="bg-surface-container hover:bg-surface-container-high transition-colors rounded-xl p-4 group">
            <span className="font-[var(--font-headline)] font-bold text-primary text-sm group-hover:text-burnt-orange transition-colors">Process</span>
            <span className="text-on-surface-variant text-xs block mt-0.5">How we deliver</span>
          </Link>
        </div>

        <p className="text-on-surface-variant/40 text-xs pt-4">
          Need something urgent?{" "}
          <a href="mailto:hello@bigkokos.dev" className="text-burnt-orange underline hover:no-underline">
            hello@bigkokos.dev
          </a>
        </p>
      </section>
    </div>
  );
}
