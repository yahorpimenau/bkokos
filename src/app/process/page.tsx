import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IconSprout, IconScroll, IconHammer, IconRocket, IconWrench, IconHandshake, IconCoins } from "@/components/Icons";
import type { Metadata } from "next";
import { FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our process from discovery to delivery: transparent, structured, and built around your needs.",
};

const stages = [
  { Icon: IconSprout, title: "Discovery", desc: "Free discovery call. We listen, ask questions, and map your needs." },
  { Icon: IconScroll, title: "Proposal", desc: "Clear scope, timeline, and fixed price or retainer. You approve before anything starts." },
  { Icon: IconHammer, title: "Development", desc: "Agile sprints. Weekly demos, dedicated Slack channel, full transparency." },
  { Icon: IconRocket, title: "Launch", desc: "Go live + 30-day hyper-care period. We fix anything, fast." },
  { Icon: IconWrench, title: "Ongoing Support", desc: "Continuous maintenance, updates, and scaling — monthly or hourly." },
];

const guarantees = [
  { Icon: IconHandshake, title: "No lock-in contracts", desc: "Pay as you grow. Leave whenever you want — but you won't want to." },
  { Icon: IconScroll, title: "IP is yours", desc: "Full code ownership after payment. No strings attached." },
  { Icon: IconCoins, title: "Deadline guarantee", desc: "Money-back if we miss a deadline. Terms apply — ask us." },
];

const faqs = [
  { q: "How long does a typical project take?", a: "A landing page takes 1–2 weeks. A full web app with CRM integration is usually 6–12 weeks. MVPs can ship in 2–4 weeks." },
  { q: "What technologies do you use?", a: "React, Next.js, Vue, Node.js, Python, Laravel, React Native, Flutter — we pick the best tool for your project, not our favorite." },
  { q: "Do you work with our timezone?", a: "Yes. We adapt to your working hours and provide async updates via Slack so nothing slows down." },
  { q: "What if the project scope changes?", a: "We use agile sprints specifically for this. Scope changes are normal — we reprioritize and requote transparently." },
  { q: "How do payments work?", a: "Fixed-price projects: 30% upfront, 40% at mid-point, 30% on delivery. Retainers: monthly billing." },
];

export default function ProcessPage() {
  return (
    <>
    <FAQJsonLd items={faqs} />
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
                  <stage.Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
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
                <div className="w-14 h-14 bg-burnt-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <g.Icon className="w-7 h-7 text-burnt-orange" />
                </div>
                <h3 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">{g.title}</h3>
                <p className="text-on-surface-variant text-sm">{g.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20 md:mb-32 max-w-3xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">Frequently asked questions</h2>
        </AnimateOnScroll>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={faq.q} delay={i * 80}>
              <details className="bg-white tough-border rounded-2xl soft-shadow group open:shadow-lg transition-all">
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-[var(--font-headline)] font-bold text-primary text-base md:text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span className="text-burnt-orange ml-4 shrink-0 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-on-surface-variant text-sm md:text-base leading-relaxed border-t border-primary/5 pt-4">
                  {faq.a}
                </div>
              </details>
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
              Book a free discovery call. We&apos;ll map your needs and give you a fixed quote within 48 hours.
            </p>
            <Link href="/contact" className="inline-block bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all btn-glow">
              Book a Free Call
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
    </>
  );
}
