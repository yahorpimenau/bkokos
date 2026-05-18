import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Animated checkmark */}
        <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-8">
          <div className="absolute inset-0 bg-secondary/10 rounded-full animate-ping"></div>
          <div className="relative w-full h-full bg-secondary/15 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 md:w-14 md:h-14 text-secondary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Message received!
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg mb-4 leading-relaxed">
          Thanks for reaching out. We&apos;ll review your project details and get back to you
          within <strong className="text-primary">24 hours</strong> with a clear next step.
        </p>

        {/* What happens next */}
        <div className="bg-surface-container-low border-[1.5pt] border-primary/10 rounded-2xl p-6 mb-10 text-left">
          <p className="font-[var(--font-headline)] font-bold text-primary text-sm mb-4">What happens next:</p>
          <div className="space-y-3">
            {[
              { num: "1", text: "We review your request and prepare follow-up questions" },
              { num: "2", text: "You'll receive a personalized reply with a proposed approach" },
              { num: "3", text: "We schedule a free discovery call to align on scope and budget" },
            ].map((step) => (
              <div key={step.num} className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-burnt-orange/10 text-burnt-orange rounded-full flex items-center justify-center shrink-0 text-xs font-bold">
                  {step.num}
                </div>
                <p className="text-on-surface-variant text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-burnt-orange text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all shadow-lg btn-glow text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary hover:text-white transition-colors text-center"
          >
            Explore Services
          </Link>
        </div>

        <p className="text-on-surface-variant/50 text-xs mt-8">
          Need something urgent? Email us directly at{" "}
          <a href="mailto:hello@bigkokos.dev" className="text-burnt-orange underline hover:no-underline">
            hello@bigkokos.dev
          </a>
        </p>
      </div>
    </div>
  );
}
