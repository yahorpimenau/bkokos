import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const stages = [
  { icon: "🌱", title: "Seed", desc: "Free discovery call. We listen, ask questions, map your needs." },
  { icon: "🥥", title: "Green Coconut", desc: "Proposal, timeline, fixed price or retainer. You approve." },
  { icon: "🔨", title: "Cracking", desc: "Agile development. Weekly demos, Slack channel, full transparency." },
  { icon: "🧉", title: "Sipping", desc: "Launch + 30-day hyper-care. We fix anything, fast." },
  { icon: "🌴", title: "Coconut Grove", desc: "Ongoing support, updates, and scaling — monthly or hourly." },
];

const guarantees = [
  { icon: "🤝", title: "No lock-in contracts", desc: "Pay as you grow. Leave whenever you want — but you won't want to." },
  { icon: "📜", title: "IP is yours", desc: "Full code ownership after payment. No strings attached." },
  { icon: "💰", title: "Deadline guarantee", desc: "Money-back if we miss a deadline. Terms apply — ask us." },
];

export default function ProcessPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Hero */}
      <section className="mb-16 md:mb-24 text-center">
        <AnimateOnScroll>
          <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-[var(--font-mono)] text-xs mb-6 uppercase">
            Our Process
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            From discovery to delivery
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Transparent, structured, and built around your needs. Here&apos;s exactly what happens when you work with us.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Stages */}
      <section className="mb-20 md:mb-32">
        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
          {stages.map((stage, i) => (
            <AnimateOnScroll key={stage.title} delay={i * 100} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
              <div className="flex gap-5 md:gap-8 items-start bg-white tough-border p-6 md:p-8 rounded-2xl soft-shadow group hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-high rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative">
                  <span className="text-3xl md:text-4xl">{stage.icon}</span>
                  <div className="absolute -top-1 -right-1 bg-burnt-orange text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-[var(--font-headline)] text-lg md:text-xl font-bold text-primary mb-2">{stage.title}</h3>
                  <p className="text-on-surface-variant text-sm md:text-base">{stage.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="mb-20 md:mb-32">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">Our guarantees</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {guarantees.map((g, i) => (
            <AnimateOnScroll key={g.title} delay={i * 150}>
              <div className="bg-surface-container p-6 md:p-8 rounded-2xl hover:bg-surface-container-high transition-all duration-300 hover:shadow-lg text-center h-full group">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{g.icon}</span>
                <h3 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">{g.title}</h3>
                <p className="text-on-surface-variant text-sm">{g.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimateOnScroll animation="scale-in">
        <div className="bg-primary text-on-primary p-8 md:p-16 rounded-2xl md:rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Ready to start?</h2>
            <p className="text-primary-fixed-dim mb-8 max-w-lg mx-auto">
              Book a free discovery call. We&apos;ll listen, map your needs, and give you a fixed quote within 48 hours.
            </p>
            <Link href="/contact" className="inline-block bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all btn-glow">
              Book a Free Call
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
