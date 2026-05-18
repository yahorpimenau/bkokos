import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IconShield, IconDroplet, IconBuild, IconGlobe, IconPhone, IconLink, IconGear, IconRocket, IconWrench, IconChat, IconHammer, IconRocket as IconLaunch } from "@/components/Icons";
import { IntegrationsMarquee } from "@/components/IntegrationsMarquee";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[85vh] flex items-center">
        {/* Full-bleed background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/kokos-hero.png"
        >
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Light overlay — enough for readability, video still clearly visible */}
        <div className="absolute inset-0 bg-primary/40"></div>

        <div className="relative z-10 px-6 py-20 md:py-32 max-w-7xl mx-auto w-full text-center">
          <AnimateOnScroll animation="fade-in-up">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-white/70 font-bold mb-4 block">
              Full-Service Development Partner
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Build, launch, and
              <br />
              scale — with one team.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <p className="text-base sm:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Websites, apps, CRM integrations, and automation — all from one team.
              Turnkey development for startups and growing businesses.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-burnt-orange text-white px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-200 shadow-lg btn-glow text-center squishy-interaction">
                Get a Free Quote
              </Link>
              <Link href="/process" className="border-2 border-white/60 text-white px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-200 text-center">
                See How We Work
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6 font-[var(--font-mono)]">From MVP to enterprise — we deliver.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">Why teams choose us</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">One team, one contract, zero headaches.</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { Icon: IconShield, bg: "bg-primary-container", color: "text-on-primary-container", title: "Built-In Security", desc: "Enterprise-grade protection from day one. Encrypted data, secure APIs, compliance-ready architecture.", link: "/services" },
            { Icon: IconDroplet, bg: "bg-secondary-container", color: "text-on-secondary-container", title: "Seamless Integration", desc: "CRM, APIs, legacy systems — we connect everything so your data flows without friction.", link: "/services" },
            { Icon: IconBuild, bg: "bg-tertiary-container", color: "text-on-tertiary-container", title: "One Team, Full Stack", desc: "Websites, mobile apps, automation, cloud — one partner for everything. No vendor juggling.", link: "/services" },
          ].map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 150}>
              <Link href={card.link} className="block bg-white tough-border p-6 md:p-8 rounded-xl soft-shadow group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${card.bg} flex items-center justify-center rounded-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.Icon className={`w-7 h-7 md:w-8 md:h-8 ${card.color}`} />
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
              { Icon: IconGlobe, title: "Websites & Web Apps", desc: "From corporate landing pages to full-stack SaaS platforms. Responsive, fast, custom-built." },
              { Icon: IconPhone, title: "Mobile Apps", desc: "iOS + Android (React Native / Flutter / native). Smooth UX that users love to open every day." },
              { Icon: IconLink, title: "CRM & Integrations", desc: "Connect HubSpot, Salesforce, Pipedrive, or any custom CRM. Automate leads, sync data, save hours." },
              { Icon: IconGear, title: "Custom Automation", desc: "Workflows, scripts, AI agents — we automate the repetitive so you focus on growth." },
              { Icon: IconRocket, title: "MVP in a Week", desc: "Got an idea? We'll build a minimum viable product fast. Test, iterate, scale." },
              { Icon: IconWrench, title: "Maintenance & Support", desc: "24/7 support plans. We're here when you need us." },
            ].map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 100}>
                <div className="bg-white tough-border p-6 rounded-xl soft-shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <s.Icon className="w-6 h-6 text-burnt-orange" />
                  </div>
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

      {/* Integrations Marquee */}
      <section className="py-16 md:py-20 bg-surface-container px-6">
        <AnimateOnScroll className="text-center mb-8 md:mb-12">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-3">
            We integrate with your stack
          </h2>
          <p className="text-on-surface-variant">CRMs, clouds, dev tools, automation — all connected.</p>
        </AnimateOnScroll>
        <IntegrationsMarquee />
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-20">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">How it works</h2>
          <p className="text-on-surface-variant">Three steps from idea to launch.</p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { Icon: IconChat, num: "01", title: "Discovery", desc: "Tell us your needs. Free consultation to map the scope, timeline, and budget." },
            { Icon: IconHammer, num: "02", title: "Design & Build", desc: "We design, develop, and integrate — transparent sprints, weekly updates." },
            { Icon: IconRocket, num: "03", title: "Launch & Grow", desc: "Go live, train your team, and keep scaling. We stay for ongoing support." },
          ].map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 150} className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white tough-border mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6 soft-shadow relative group hover:scale-110 transition-transform duration-300">
                <step.Icon className="w-9 h-9 md:w-11 md:h-11 text-primary" />
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
              { quote: "Big Kokos turned our scattered tools into one smooth workflow. Website, CRM, mobile app — all delivered in 3 months.", name: "Alex M.", title: "Founder, GreenLeaf" },
              { quote: "They delivered our MVP two weeks early and it just worked. No drama, no scope creep — just solid engineering.", name: "Sofia R.", title: "CTO, Lume" },
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
              Ready to build something great?
            </h3>
            <p className="text-primary-fixed-dim mb-8 md:mb-10">
              Let&apos;s bring your project to life. Free quote, no pressure.
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
