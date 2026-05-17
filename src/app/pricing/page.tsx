import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const plans = [
  {
    label: "The Starter",
    name: "Young Coconut",
    price: "$0",
    period: "/mo",
    features: ["3 Automation Sprouts", "Basic Oasis Access", "Standard Shell Security"],
    cta: "Start Sprouting",
    ctaLink: "/developers",
    featured: false,
  },
  {
    label: "The Professional",
    name: "Ripe Coconut",
    price: "$49",
    period: "/mo",
    features: ["Unlimited Automations", "Advanced Logic Trees", "Priority Oasis Support", "Custom API Integration"],
    cta: "Claim Your Harvest",
    ctaLink: "/developers",
    featured: true,
  },
  {
    label: "The Enterprise",
    name: "King Coconut",
    price: "Custom",
    period: "",
    features: ["Dedicated Island Cluster", "Full White-Labeling", "24/7 Concierge Support"],
    cta: "Contact Sourcing",
    ctaLink: "/solutions",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 w-full">
      {/* Hero Section */}
      <div className="text-center mb-12 md:mb-20 space-y-4">
        <AnimateOnScroll>
          <div className="flex justify-center mb-4">
            <div className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-[var(--font-mono)] text-xs uppercase tracking-wider flex items-center gap-2">
              <span>🌱</span>
              Nurture Your Workflow
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary max-w-2xl mx-auto tracking-tight">
            Pick your perfect harvest
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto">
            Scale your automation from a single sprout to a lush digital
            plantation with our flexible coconut plans.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
        {plans.map((plan, i) => (
          <AnimateOnScroll key={plan.name} delay={i * 150}>
            <div
              className={`relative p-8 md:p-10 transition-all duration-300 hover:shadow-xl overflow-hidden group ${
                plan.featured
                  ? "bg-white border-[2.5pt] border-secondary shadow-2xl md:-translate-y-6 z-10 rounded-3xl"
                  : "bg-surface-container-low border-[1.5pt] border-primary rounded-3xl hover:border-secondary/50"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-white px-4 md:px-6 py-2 font-bold font-[var(--font-mono)] text-xs rounded-bl-3xl">
                  POPULAR HARVEST
                </div>
              )}
              <div className="mb-6 md:mb-8">
                <span className="font-[var(--font-mono)] text-xs text-secondary uppercase font-bold">
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
                {plan.features.map((feature, fi) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-secondary">&#10003;</span>
                    <span className={plan.featured && fi === 0 ? "font-bold" : ""}>
                      {feature}
                    </span>
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

      {/* Feature Section */}
      <section className="mt-20 md:mt-32">
        <AnimateOnScroll>
          <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Every coconut is a complete package.
          </h3>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <AnimateOnScroll animation="fade-in-left">
            <div className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-container rounded-xl md:rounded-2xl flex items-center justify-center text-primary-fixed-dim shrink-0 text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                🛡️
              </div>
              <div>
                <h4 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary mb-2">
                  Tough Outside
                </h4>
                <p className="text-on-surface-variant text-sm md:text-base">
                  Enterprise-grade encryption and fiber-reinforced security
                  protocols keep your data as safe as a nut in its shell.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-right">
            <div className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary-container rounded-xl md:rounded-2xl flex items-center justify-center text-secondary shrink-0 text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                ✨
              </div>
              <div>
                <h4 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary mb-2">
                  Smooth Inside
                </h4>
                <p className="text-on-surface-variant text-sm md:text-base">
                  Our intuitive visual automation builder makes complex workflows
                  feel like a breeze on a tropical beach.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Bottom */}
      <AnimateOnScroll animation="scale-in" className="mt-16 md:mt-24">
        <section className="rounded-2xl md:rounded-[3rem] bg-primary text-on-primary p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <div className="relative z-10">
            <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight">
              Ready to hydrate your business?
            </h2>
            <p className="text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto opacity-90">
              Join over 10,000 teams who have traded their complex spreadsheets
              for the refreshing simplicity of Big Kokos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/developers" className="bg-burnt-orange text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 transition-transform btn-glow text-center">
                Get Started For Free
              </Link>
              <Link href="/solutions" className="bg-transparent border-2 border-on-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-on-primary hover:text-primary transition-colors text-center">
                Request a Demo
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
