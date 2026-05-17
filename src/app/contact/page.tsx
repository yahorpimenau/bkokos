"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - Info */}
        <div>
          <AnimateOnScroll animation="fade-in-left">
            <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Crack a coconut
              <br />with us
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={100}>
            <p className="text-base md:text-lg text-on-surface-variant mb-10 max-w-md">
              Tell us about your project. We reply within 24 hours with a clear next step.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-left" delay={200}>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-xl">📧</div>
                <div>
                  <p className="text-sm text-on-surface-variant">Email</p>
                  <a href="mailto:hello@bigkokos.dev" className="text-primary font-bold hover:text-burnt-orange transition-colors">hello@bigkokos.dev</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-xl">📞</div>
                <div>
                  <p className="text-sm text-on-surface-variant">Quick call</p>
                  <a href="#" className="text-primary font-bold hover:text-burnt-orange transition-colors">Book a 15-min Coconut Chat</a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-left" delay={300}>
            <div className="bg-surface-container p-6 rounded-2xl">
              <p className="font-[var(--font-mono)] text-xs text-on-surface-variant uppercase mb-2">Existing client?</p>
              <p className="text-on-surface-variant text-sm">
                Reach us on your dedicated Slack or Discord channel for priority support.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right - Form */}
        <AnimateOnScroll animation="fade-in-right" delay={100}>
          <form className="bg-white tough-border p-6 md:p-10 rounded-2xl md:rounded-3xl soft-shadow space-y-6">
            <div>
              <label className="block font-[var(--font-mono)] text-xs uppercase text-on-surface-variant mb-2">Name *</label>
              <input
                type="text"
                required
                className="w-full border-[1.5pt] border-primary/20 rounded-xl px-4 py-3 bg-surface-container-lowest focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-[var(--font-mono)] text-xs uppercase text-on-surface-variant mb-2">Email *</label>
              <input
                type="email"
                required
                className="w-full border-[1.5pt] border-primary/20 rounded-xl px-4 py-3 bg-surface-container-lowest focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block font-[var(--font-mono)] text-xs uppercase text-on-surface-variant mb-2">Company <span className="normal-case text-outline">(optional)</span></label>
              <input
                type="text"
                className="w-full border-[1.5pt] border-primary/20 rounded-xl px-4 py-3 bg-surface-container-lowest focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="block font-[var(--font-mono)] text-xs uppercase text-on-surface-variant mb-2">What do you need? *</label>
              <select
                required
                className="w-full border-[1.5pt] border-primary/20 rounded-xl px-4 py-3 bg-surface-container-lowest focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all appearance-none"
              >
                <option value="">Select an option...</option>
                <option>Website</option>
                <option>Mobile App</option>
                <option>CRM Integration</option>
                <option>Automation</option>
                <option>Everything</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="block font-[var(--font-mono)] text-xs uppercase text-on-surface-variant mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full border-[1.5pt] border-primary/20 rounded-xl px-4 py-3 bg-surface-container-lowest focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-burnt-orange text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-all btn-glow squishy-interaction"
            >
              Send &rarr;
            </button>
            <p className="text-center text-on-surface-variant text-xs">We reply within 24 hours.</p>
          </form>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
