import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-12 pb-20 md:pt-28 md:pb-36 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="z-10">
            <AnimateOnScroll animation="fade-in-left">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-secondary font-bold mb-4 block">
                Full-Service Development
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-[48px] font-extrabold text-primary mb-6 leading-tight tracking-tight">
                Crack Open Your
                <br />
                <span className="text-burnt-orange">Digital Growth</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={200}>
              <p className="text-base sm:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-xl leading-relaxed">
                Websites, apps, CRM integrations, automation &mdash; all under one shell.
                Turnkey development for startups and businesses.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing" className="bg-burnt-orange text-white px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-200 soft-shadow btn-glow text-center squishy-interaction">
                  Get a Coconut Plan
                </Link>
                <Link href="/process" className="tough-border border-primary text-primary px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors duration-200 text-center">
                  See How We Work
                </Link>
              </div>
              <p className="text-on-surface-variant text-sm mt-4 font-[var(--font-mono)]">From MVP to enterprise &mdash; we deliver.</p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-right" delay={200} className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-secondary-container/20 blur-3xl rounded-full -z-10"></div>
            <img alt="Big Kokos" className="w-full max-w-[350px] lg:max-w-[450px] drop-shadow-2xl animate-float" src="/kokos-hero.png" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">Why Big Kokos?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">One team, one contract, zero headaches.</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: "🥥", title: "Hard-Shell Security", desc: "We build robust, scalable solutions with enterprise-grade protection. Your data and code are locked tight.", link: "/services" },
            { icon: "💧", title: "Smooth Integration", desc: "CRM, APIs, legacy systems — our coconut water flow connects everything seamlessly. No more silos.", link: "/services" },
            { icon: "🌴", title: "One Tree, All Fruits", desc: "Websites, mobile apps, automation, cloud — one team, one contract, zero headaches. Truly turnkey.", link: "/services" },
          ].map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 150}>
              <Link href={card.link} className="block bg-white tough-border p-6 md:p-8 rounded-xl soft-shadow group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-surface-container-high flex items-center justify-center rounded-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">{card.icon}</span>
                </div>
                <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">{card.title}</h3>
                <p className="text-on-surface-variant text-sm md:text-base">{card.desc}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-burnt-orange font-bold text-sm group-hover:gap-3 transition-all">
                  Learn more <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 md:py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-12 md:mb-16">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">What we build</h2>
            <p className="text-on-surface-variant">If it involves code, integration, or automation — we handle it.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌐", title: "Websites & Web Apps", desc: "From corporate landing pages to full-stack SaaS platforms. Responsive, fast, custom-built." },
              { icon: "📱", title: "Mobile Apps", desc: "iOS + Android (React Native / Flutter / native). Smooth UX that users love to open every day." },
              { icon: "🔗", title: "CRM & Integrations", desc: "Connect HubSpot, Salesforce, Pipedrive, or any custom CRM. Automate leads, sync data, save hours." },
              { icon: "⚙️", title: "Custom Automation", desc: "Workflows, scripts, AI agents — we automate the repetitive so you focus on growth." },
              { icon: "🚀", title: "MVP in a Week", desc: "Got an idea? We'll build a minimum viable product fast. Test, iterate, scale." },
              { icon: "🛠️", title: "Maintenance & Support", desc: "24/7 coconut-care plans. We're here when you need us." },
            ].map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 100}>
                <div className="bg-white tough-border p-6 rounded-xl soft-shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-300 h-full group">
                  <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform w-fit">{s.icon}</span>
                  <h3 className="font-[var(--font-headline)] text-lg font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-on-surface-variant text-sm">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll className="text-center mt-10">
            <Link href="/services" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
              View All Services
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-20">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">How it works</h2>
          <p className="text-on-surface-variant">Three simple steps from idea to launch.</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: "🥥", num: "01", title: "Pick the Coconut", desc: "Tell us your needs. Discovery call + free consultation." },
            { icon: "🔨", num: "02", title: "Crack It Open", desc: "We design, build, and integrate — transparent sprints, weekly updates." },
            { icon: "🧉", num: "03", title: "Enjoy the Refreshment", desc: "Launch, train your team, and keep growing. We stay for support." },
          ].map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 150} className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white tough-border mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6 soft-shadow relative group hover:scale-110 transition-transform duration-300">
                <span className="text-3xl md:text-4xl">{step.icon}</span>
                <div className="absolute -top-2 -right-2 bg-burnt-orange text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                  {step.num}
                </div>
              </div>
              <h4 className="font-[var(--font-headline)] font-bold text-primary mb-2 text-lg">{step.title}</h4>
              <p className="text-sm text-on-surface-variant px-4">{step.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll className="text-center mt-10">
          <Link href="/process" className="text-burnt-orange font-bold hover:underline">See our full process &rarr;</Link>
        </AnimateOnScroll>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-surface-container px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary">What our clients say</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "Big Kokos turned our scattered tools into one smooth workflow. Websites, CRM, mobile app — all delivered in 3 months.", name: "Alex M.", title: "Founder of GreenLeaf" },
              { quote: "Finally a dev partner who thinks like a builder, not a salesperson. The coconut metaphor actually works.", name: "Sofia R.", title: "CTO of Lume" },
            ].map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 150} animation={i === 0 ? "fade-in-left" : "fade-in-right"}>
                <div className="bg-white tough-border p-6 md:p-8 rounded-2xl soft-shadow h-full">
                  <p className="text-on-surface-variant italic mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-on-surface-variant text-sm">{t.title}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary px-6 text-center">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to go nuts? <span className="opacity-60">(In a good way)</span>
            </h3>
            <p className="text-primary-fixed-dim mb-8 md:mb-10">
              Let&apos;s crack your project together. Free quote, no pressure.
            </p>
            <Link href="/contact" className="inline-block bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all btn-glow">
              Start a Conversation
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
