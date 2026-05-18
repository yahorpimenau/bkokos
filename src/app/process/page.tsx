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
  { Icon: IconSprout, title: "Discovery", desc: "Free call. We listen, ask the right questions, and map your needs — scope, goals, constraints.", time: "Day 1", color: "burnt-orange" },
  { Icon: IconScroll, title: "Proposal", desc: "Clear scope document, timeline, and a fixed-price quote. No work starts until you approve.", time: "Day 2–3", color: "secondary" },
  { Icon: IconHammer, title: "Development", desc: "Agile sprints with weekly demos. Dedicated Slack channel. You see progress, give feedback, stay in control.", time: "Week 1–12", color: "primary" },
  { Icon: IconRocket, title: "Launch", desc: "Production deployment + 30-day hyper-care. We monitor, fix, and optimize — fast.", time: "Launch day", color: "burnt-orange" },
  { Icon: IconWrench, title: "Ongoing Support", desc: "Continuous maintenance, feature updates, and scaling. Monthly retainer or pay-as-you-go.", time: "Ongoing", color: "secondary" },
];

const guarantees = [
  { Icon: IconHandshake, title: "No lock-in contracts", desc: "Pay as you grow. Leave whenever you want." },
  { Icon: IconScroll, title: "Your IP, always", desc: "Full code ownership after payment. No strings." },
  { Icon: IconCoins, title: "Deadline guarantee", desc: "Money-back if we miss it. Terms apply." },
];

const faqs = [
  { q: "How long does a typical project take?", a: "A landing page takes 1–2 weeks. A full web app with CRM integration is usually 6–12 weeks. MVPs can ship in 2–4 weeks." },
  { q: "What technologies do you use?", a: "React, Next.js, Vue, Node.js, Python, Laravel, React Native, Flutter — we pick the best tool for your project, not our favorite." },
  { q: "Do you work with our timezone?", a: "Yes. We adapt to your working hours and provide async updates via Slack so nothing slows down." },
  { q: "What if the project scope changes?", a: "We use agile sprints specifically for this. Scope changes are normal — we reprioritize and requote transparently." },
  { q: "How do payments work?", a: "Fixed-price projects: 30% upfront, 40% at mid-point, 30% on delivery. Retainers: monthly billing." },
];

function clr(color: string, type: "bg" | "text" | "border") {
  const map: Record<string, Record<string, string>> = {
    "burnt-orange": { bg: "bg-burnt-orange", text: "text-burnt-orange", border: "border-burnt-orange" },
    secondary: { bg: "bg-secondary", text: "text-secondary", border: "border-secondary" },
    primary: { bg: "bg-primary", text: "text-primary", border: "border-primary" },
  };
  return map[color]?.[type] || "";
}

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
              Transparent, structured, and built around your needs.
            </p>
          </AnimateOnScroll>
        </section>

        {/* Timeline */}
        <section className="mb-20 md:mb-32 max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line — desktop */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-burnt-orange via-secondary to-primary" />

            <div className="space-y-0">
              {stages.map((stage, i) => (
                <AnimateOnScroll key={stage.title} delay={i * 120}>
                  <div className="relative flex gap-6 md:gap-10 group">
                    {/* Dot + connector */}
                    <div className="hidden md:flex flex-col items-center shrink-0 w-16">
                      <div className={`w-16 h-16 rounded-2xl ${clr(stage.color, "bg")}/10 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300`}>
                        <stage.Icon className={`w-7 h-7 ${clr(stage.color, "text")}`} />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 bg-white border-[1.5pt] border-primary/10 rounded-2xl p-6 md:p-8 mb-6 group-hover:shadow-xl group-hover:${clr(stage.color, "border")}/20 transition-all duration-300`}>
                      <div className="flex items-start gap-4 md:gap-0 md:items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {/* Mobile icon */}
                          <div className={`md:hidden w-11 h-11 rounded-xl ${clr(stage.color, "bg")}/10 flex items-center justify-center shrink-0`}>
                            <stage.Icon className={`w-5 h-5 ${clr(stage.color, "text")}`} />
                          </div>
                          <div>
                            <h3 className="font-[var(--font-headline)] text-lg md:text-xl font-bold text-primary">{stage.title}</h3>
                          </div>
                        </div>
                        <span className={`font-[var(--font-mono)] text-[10px] md:text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full shrink-0 ${clr(stage.color, "bg")}/10 ${clr(stage.color, "text")}`}>
                          {stage.time}
                        </span>
                      </div>
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed md:pl-0">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees — dark block */}
        <AnimateOnScroll animation="scale-in" className="mb-20 md:mb-32">
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-burnt-orange/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold mb-8 text-center">Our guarantees</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {guarantees.map((g) => (
                  <div key={g.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-burnt-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <g.Icon className="w-6 h-6 text-burnt-orange" />
                    </div>
                    <h3 className="font-[var(--font-headline)] font-bold text-white mb-2">{g.title}</h3>
                    <p className="text-white/60 text-sm">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* FAQ */}
        <section className="mb-20 md:mb-32 max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary">FAQ</h2>
          </AnimateOnScroll>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} delay={i * 60}>
                <details className="bg-white border-[1.5pt] border-primary/10 rounded-xl group open:border-burnt-orange/20 open:shadow-lg transition-all">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-[var(--font-headline)] font-bold text-primary text-sm md:text-base select-none list-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="text-burnt-orange ml-4 shrink-0 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* CTA */}
        <AnimateOnScroll animation="scale-in">
          <div className="bg-surface-container rounded-2xl md:rounded-3xl p-8 md:p-14 text-center">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold text-primary mb-4">Ready to start?</h2>
            <p className="text-on-surface-variant mb-8 max-w-md mx-auto">
              Book a free discovery call. Fixed quote within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg btn-glow text-center">
                Book a Free Call
              </Link>
              <Link href="/pricing" className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-colors text-center">
                View Pricing
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
