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

export default function ProcessPage() {
  return (
    <>
      <FAQJsonLd items={faqs} />

      {/* Hero — full width dark */}
      <section className="bg-primary text-white px-6 py-16 md:py-28 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-burnt-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimateOnScroll>
            <span className="inline-block font-[var(--font-mono)] text-xs uppercase tracking-widest text-white/50 font-bold mb-6 border border-white/15 rounded-full px-4 py-1.5 bg-white/5">
              Your Journey
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              From &ldquo;I have an idea&rdquo;
              <br />
              to <span className="text-burnt-orange">&ldquo;It&apos;s live.&rdquo;</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
              Five stages. Full transparency. You know exactly what&apos;s happening at every step.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Journey stages — alternating layout */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 md:-mt-12 relative z-10 mb-20 md:mb-32">
        <div className="space-y-6 md:space-y-0">

          {/* Stage 1 — Discovery */}
          <AnimateOnScroll animation="fade-in-up">
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="bg-white tough-border rounded-2xl md:rounded-3xl p-6 md:p-10 soft-shadow relative md:z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-burnt-orange rounded-xl flex items-center justify-center">
                    <IconSprout className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-wider text-burnt-orange font-bold">Step 01</span>
                </div>
                <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold text-primary mb-3">Discovery</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Free call. We listen, ask the right questions, and map your needs — goals, constraints, timeline.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Free consultation", "Scope mapping", "No commitment"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-burnt-orange/8 text-burnt-orange text-xs font-bold rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center bg-surface-container-low rounded-r-3xl border-y-[1.5pt] border-r-[1.5pt] border-primary -ml-4 pl-8">
                <div className="text-center">
                  <div className="font-[var(--font-headline)] text-5xl font-extrabold text-primary/10">01</div>
                  <div className="font-[var(--font-mono)] text-xs text-on-surface-variant/40 uppercase mt-1">Day 1</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stage 2 — Proposal (reversed) */}
          <AnimateOnScroll animation="fade-in-up" delay={50}>
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="hidden md:flex items-center justify-center bg-surface-container-low rounded-l-3xl border-y-[1.5pt] border-l-[1.5pt] border-primary -mr-4 pr-8">
                <div className="text-center">
                  <div className="font-[var(--font-headline)] text-5xl font-extrabold text-secondary/10">02</div>
                  <div className="font-[var(--font-mono)] text-xs text-on-surface-variant/40 uppercase mt-1">Day 2–3</div>
                </div>
              </div>
              <div className="bg-white tough-border rounded-2xl md:rounded-3xl p-6 md:p-10 soft-shadow relative md:z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <IconScroll className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-wider text-secondary font-bold">Step 02</span>
                </div>
                <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold text-primary mb-3">Proposal</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Clear scope document, timeline, and a fixed-price quote. Nothing starts until you say go.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Fixed price", "Clear timeline", "You approve first"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-secondary/8 text-secondary text-xs font-bold rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stage 3 — Development (full width dark) */}
          <AnimateOnScroll animation="fade-in-up" delay={50}>
            <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-burnt-orange/15 rounded-full blur-3xl" />
              <div className="relative z-10 md:flex md:items-center md:gap-14">
                <div className="flex-1 mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                      <IconHammer className="w-5 h-5 text-burnt-orange" />
                    </div>
                    <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-wider text-burnt-orange font-bold">Step 03 — The Big One</span>
                  </div>
                  <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-3">Development</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Agile sprints with weekly demos. Dedicated Slack channel. You see real progress, give real feedback, stay in full control.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Weekly demos", "Slack channel", "Full transparency"].map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/10 border border-white/15 text-white/80 text-xs font-bold rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                {/* Mini sprint visualization */}
                <div className="w-full md:w-56 shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 font-[var(--font-mono)] text-xs space-y-3">
                    <div className="text-white/40 uppercase text-[10px]">Sprint 3 / Week 6</div>
                    {[
                      { label: "Dashboard UI", done: true },
                      { label: "CRM sync", done: true },
                      { label: "Auth flow", done: false },
                    ].map((t) => (
                      <div key={t.label} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center ${t.done ? "bg-secondary" : "border border-white/30"}`}>
                          {t.done && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>}
                        </div>
                        <span className={t.done ? "text-white/60 line-through" : "text-white/80"}>{t.label}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-white/10">
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-secondary to-burnt-orange rounded-full" />
                      </div>
                      <div className="text-white/40 text-[10px] mt-1.5">67% complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stage 4 — Launch (reversed) */}
          <AnimateOnScroll animation="fade-in-up" delay={50}>
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="hidden md:flex items-center justify-center bg-surface-container-low rounded-l-3xl border-y-[1.5pt] border-l-[1.5pt] border-primary -mr-4 pr-8">
                <div className="text-center">
                  <div className="font-[var(--font-headline)] text-5xl font-extrabold text-burnt-orange/10">04</div>
                  <div className="font-[var(--font-mono)] text-xs text-on-surface-variant/40 uppercase mt-1">Launch day</div>
                </div>
              </div>
              <div className="bg-white tough-border rounded-2xl md:rounded-3xl p-6 md:p-10 soft-shadow relative md:z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-burnt-orange rounded-xl flex items-center justify-center">
                    <IconRocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-wider text-burnt-orange font-bold">Step 04</span>
                </div>
                <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold text-primary mb-3">Launch</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Production deployment with monitoring. 30-day hyper-care — we fix anything, fast. Your team gets trained.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Production deploy", "30-day hyper-care", "Team training"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-burnt-orange/8 text-burnt-orange text-xs font-bold rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stage 5 — Ongoing */}
          <AnimateOnScroll animation="fade-in-up" delay={50}>
            <div className="md:grid md:grid-cols-2 md:gap-0">
              <div className="bg-white tough-border rounded-2xl md:rounded-3xl p-6 md:p-10 soft-shadow relative md:z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <IconWrench className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-wider text-secondary font-bold">Step 05</span>
                </div>
                <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold text-primary mb-3">Ongoing Support</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  We don&apos;t disappear after launch. Maintenance, new features, scaling — monthly retainer or pay-as-you-go.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Retainer or hourly", "Feature updates", "Scaling support"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-secondary/8 text-secondary text-xs font-bold rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center bg-surface-container-low rounded-r-3xl border-y-[1.5pt] border-r-[1.5pt] border-primary -ml-4 pl-8">
                <div className="text-center">
                  <div className="font-[var(--font-headline)] text-5xl font-extrabold text-secondary/10">05</div>
                  <div className="font-[var(--font-mono)] text-xs text-on-surface-variant/40 uppercase mt-1">Ongoing</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Guarantees — dark */}
        <AnimateOnScroll animation="scale-in" className="mb-20 md:mb-32">
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-burnt-orange/15 rounded-full blur-3xl" />
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
