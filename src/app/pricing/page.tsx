const plans = [
  {
    label: "The Starter",
    name: "Young Coconut",
    price: "$0",
    period: "/mo",
    features: ["3 Automation Sprouts", "Basic Oasis Access", "Standard Shell Security"],
    cta: "Start Sprouting",
    featured: false,
  },
  {
    label: "The Professional",
    name: "Ripe Coconut",
    price: "$49",
    period: "/mo",
    features: ["Unlimited Automations", "Advanced Logic Trees", "Priority Oasis Support", "Custom API Integration"],
    cta: "Claim Your Harvest",
    featured: true,
  },
  {
    label: "The Enterprise",
    name: "King Coconut",
    price: "Custom",
    period: "",
    features: ["Dedicated Island Cluster", "Full White-Labeling", "24/7 Concierge Support"],
    cta: "Contact Sourcing",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 w-full">
      {/* Hero Section */}
      <div className="text-center mb-20 space-y-4">
        <div className="flex justify-center mb-4">
          <div className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-[var(--font-mono)] text-xs uppercase tracking-wider flex items-center gap-2">
            <span>🌱</span>
            Nurture Your Workflow
          </div>
        </div>
        <h1 className="font-[var(--font-headline)] text-5xl font-extrabold text-primary max-w-2xl mx-auto tracking-tight">
          Pick your perfect harvest
        </h1>
        <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
          Scale your automation from a single sprout to a lush digital
          plantation with our flexible coconut plans.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-10 transition-all duration-300 hover:shadow-xl overflow-hidden ${
              plan.featured
                ? "bg-white border-[2.5pt] border-secondary shadow-2xl md:-translate-y-6 z-10 rounded-[50%_50%_50%_50%/60%_60%_40%_40%]"
                : "bg-surface-container-low border-[1.5pt] border-primary rounded-[60%_40%_50%_50%/70%_30%_70%_30%]"
            }`}
          >
            {plan.featured && (
              <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-2 font-bold font-[var(--font-mono)] text-xs rounded-bl-3xl">
                POPULAR HARVEST
              </div>
            )}
            <div className="mb-8">
              <span className="font-[var(--font-mono)] text-xs text-secondary uppercase font-bold">
                {plan.label}
              </span>
              <h2 className="font-[var(--font-headline)] text-3xl font-bold text-primary mt-2">
                {plan.name}
              </h2>
              <div className="flex items-baseline gap-1 mt-4">
                <span className={`font-extrabold text-primary ${plan.featured ? "text-5xl" : "text-4xl"}`}>
                  {plan.price}
                </span>
                {plan.period && <span className="text-on-surface-variant">{plan.period}</span>}
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="text-secondary">&#10003;</span>
                  <span className={plan.featured && feature === plan.features[0] ? "font-bold" : ""}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-full font-bold transition-colors duration-300 ${
                plan.featured
                  ? "bg-burnt-orange text-white py-4 text-lg shadow-lg hover:scale-105 transition-transform"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Feature Section */}
      <section className="mt-32">
        <h3 className="font-[var(--font-headline)] text-3xl font-bold text-center mb-12">
          Every coconut is a complete package.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6 p-6 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center text-primary-fixed-dim shrink-0 text-3xl">
              🛡️
            </div>
            <div>
              <h4 className="font-[var(--font-headline)] text-2xl font-semibold text-primary mb-2">
                Tough Outside
              </h4>
              <p className="text-on-surface-variant">
                Enterprise-grade encryption and fiber-reinforced security
                protocols keep your data as safe as a nut in its shell.
              </p>
            </div>
          </div>
          <div className="flex gap-6 p-6 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center text-secondary shrink-0 text-3xl">
              ✨
            </div>
            <div>
              <h4 className="font-[var(--font-headline)] text-2xl font-semibold text-primary mb-2">
                Smooth Inside
              </h4>
              <p className="text-on-surface-variant">
                Our intuitive visual automation builder makes complex workflows
                feel like a breeze on a tropical beach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="mt-24 rounded-[3rem] bg-primary text-on-primary p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <div className="relative z-10">
          <h2 className="font-[var(--font-headline)] text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to hydrate your business?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Join over 10,000 teams who have traded their complex spreadsheets
            for the refreshing simplicity of Big Kokos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
              Get Started For Free
            </button>
            <button className="bg-transparent border-2 border-on-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-on-primary hover:text-primary transition-colors">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
