import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing from $2,500. Fixed quotes after a free discovery call — no surprises.",
};

const plans = [
  {
    label: "Starter",
    name: "Starter",
    price: "From $2,500",
    period: "one-time",
    desc: "Small website or simple CRM integration",
    features: ["Landing page or corporate site", "Basic CRM connection", "Responsive design", "2 rounds of revisions"],
    cta: "Get a Quote",
    featured: false,
  },
  {
    label: "Professional",
    name: "Professional",
    price: "From $8,000",
    period: "one-time",
    desc: "Full website + CRM + automation",
    features: ["Custom web application", "CRM integration & automation", "Admin dashboard", "30-day hyper-care included", "Priority support"],
    cta: "Get a Quote",
    featured: true,
  },
  {
    label: "Enterprise",
    name: "Enterprise",
    price: "From $15,000+",
    period: "project-based",
    desc: "Custom platform / mobile app + ongoing support",
    features: ["Full-stack platform or mobile app", "Complex integrations", "Dedicated project manager", "Custom SLA", "Scalable architecture"],
    cta: "Talk to Us",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Hero */}
      <div className="text-center mb-12 md:mb-20 space-y-4">
        <AnimateOnScroll>
          <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-[var(--font-mono)] text-xs mb-4 uppercase">
            Transparent Pricing
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary max-w-2xl mx-auto tracking-tight">
            Choose your plan
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto">
            All prices are estimated — we give fixed quotes after a free discovery call.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-16">
        {plans.map((plan, i) => (
          <AnimateOnScroll key={plan.name} delay={i * 150}>
            <div className={`relative p-8 md:p-10 transition-all duration-300 hover:shadow-xl overflow-hidden group rounded-2xl md:rounded-3xl ${
              plan.featured
                ? "bg-white border-[2.5pt] border-burnt-orange shadow-2xl md:-translate-y-4 z-10"
                : "bg-surface-container-low border-[1.5pt] border-primary hover:border-burnt-orange/30"
            }`}>
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-burnt-orange text-white px-4 md:px-6 py-2 font-bold font-[var(--font-mono)] text-xs rounded-bl-2xl">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6 md:mb-8">
                <span className="font-[var(--font-mono)] text-xs text-on-surface-variant uppercase font-bold">{plan.label}</span>
                <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mt-2">{plan.name}</h2>
                <div className="mt-4">
                  <span className="text-2xl md:text-3xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-on-surface-variant text-sm ml-2">{plan.period}</span>
                </div>
                <p className="text-on-surface-variant text-sm mt-2">{plan.desc}</p>
              </div>
              <ul className="space-y-3 mb-8 md:mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="text-secondary">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`block w-full py-3 md:py-4 rounded-full font-bold transition-all duration-300 text-center ${
                plan.featured
                  ? "bg-burnt-orange text-white text-lg shadow-lg hover:scale-105 btn-glow"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
              }`}>
                {plan.cta}
              </Link>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Retainer */}
      <AnimateOnScroll>
        <div className="bg-surface-container p-6 md:p-10 rounded-2xl tough-border text-center max-w-2xl mx-auto mb-20">
          <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-bold text-primary mb-2">Monthly Retainer</h3>
          <p className="text-on-surface-variant mb-4">Unlimited small tasks, priority support, ongoing development.</p>
          <div className="text-3xl font-extrabold text-primary mb-4">$2,000 <span className="text-base font-normal text-on-surface-variant">/ month</span></div>
          <Link href="/contact" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
            Learn More
          </Link>
        </div>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll animation="scale-in">
        <section className="rounded-2xl md:rounded-[3rem] bg-primary text-on-primary p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-burnt-orange/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Not sure which plan fits?</h2>
            <p className="text-primary-fixed-dim mb-8 max-w-lg mx-auto">
              Book a free 15-minute call. We&apos;ll help you pick the right scope and budget.
            </p>
            <Link href="/contact" className="inline-block bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform btn-glow">
              Start a Conversation
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
