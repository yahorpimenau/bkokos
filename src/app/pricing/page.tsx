import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const plans = [
  {
    label: "Starter",
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["3 active pipelines", "1,000 executions/mo", "Community support", "Basic monitoring"],
    cta: "Get Started",
    ctaLink: "/developers",
    featured: false,
  },
  {
    label: "Professional",
    name: "Pro",
    price: "$49",
    period: "/mo",
    features: ["Unlimited pipelines", "100K executions/mo", "Priority support", "Advanced analytics", "Custom integrations"],
    cta: "Start Free Trial",
    ctaLink: "/developers",
    featured: true,
  },
  {
    label: "Enterprise",
    name: "Scale",
    price: "Custom",
    period: "",
    features: ["Dedicated infrastructure", "Unlimited executions", "24/7 SLA support", "SSO & SCIM", "Custom SLAs"],
    cta: "Contact Sales",
    ctaLink: "/solutions",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 w-full">
      {/* Hero */}
      <div className="text-center mb-12 md:mb-20 space-y-4">
        <AnimateOnScroll>
          <div className="flex justify-center mb-4">
            <div className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-[var(--font-mono)] text-xs uppercase tracking-wider">
              Simple, transparent pricing
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary max-w-2xl mx-auto tracking-tight">
            Plans that scale with you
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto">
            Start free. Upgrade when you need more power. No hidden fees, no surprises.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {plans.map((plan, i) => (
          <AnimateOnScroll key={plan.name} delay={i * 150}>
            <div
              className={`relative p-8 md:p-10 transition-all duration-300 hover:shadow-xl overflow-hidden group rounded-2xl md:rounded-3xl ${
                plan.featured
                  ? "bg-white border-[2.5pt] border-burnt-orange shadow-2xl md:-translate-y-4 z-10"
                  : "bg-surface-container-low border-[1.5pt] border-primary hover:border-burnt-orange/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-burnt-orange text-white px-4 md:px-6 py-2 font-bold font-[var(--font-mono)] text-xs rounded-bl-2xl">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6 md:mb-8">
                <span className="font-[var(--font-mono)] text-xs text-on-surface-variant uppercase font-bold">
                  {plan.label}
                </span>
                <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mt-2">
                  {plan.name}
                </h2>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className={`font-extrabold text-primary ${plan.featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-on-surface-variant">{plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm md:text-base">
                    <span className="text-secondary">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaLink}
                className={`block w-full py-3 md:py-4 rounded-full font-bold transition-all duration-300 text-center ${
                  plan.featured
                    ? "bg-burnt-orange text-white text-lg shadow-lg hover:scale-105 btn-glow"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* FAQ-like feature comparison */}
      <section className="mt-20 md:mt-32">
        <AnimateOnScroll>
          <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            What&apos;s included in every plan
          </h3>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { icon: "🔒", title: "End-to-end encryption", desc: "All data encrypted in transit and at rest. SOC 2 Type II certified." },
            { icon: "📈", title: "Real-time monitoring", desc: "Live dashboards, alerting, and performance metrics for every pipeline." },
            { icon: "🔄", title: "Automatic retries", desc: "Built-in fault tolerance with configurable retry policies and dead-letter queues." },
            { icon: "🌐", title: "Multi-region deployment", desc: "Deploy pipelines close to your users with our global edge network." },
          ].map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
              <div className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-surface-container-highest rounded-xl flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-[var(--font-headline)] text-lg md:text-xl font-semibold text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimateOnScroll animation="scale-in" className="mt-16 md:mt-24">
        <section className="rounded-2xl md:rounded-[3rem] bg-primary text-on-primary p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-burnt-orange/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <div className="relative z-10">
            <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 tracking-tight">
              Not sure which plan fits?
            </h2>
            <p className="text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto opacity-90">
              Talk to our team and we&apos;ll help you find the right configuration for your workload.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/developers" className="bg-burnt-orange text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 transition-transform btn-glow text-center">
                Start Free Trial
              </Link>
              <a href="#" className="bg-transparent border-2 border-on-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-on-primary hover:text-primary transition-colors text-center">
                Talk to Sales
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
