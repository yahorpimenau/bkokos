import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IconShield, IconDroplet, IconBuild, IconGlobe, IconPhone, IconLink, IconGear, IconRocket, IconWrench, IconChat, IconHammer } from "@/components/Icons";
import { IntegrationsMarquee } from "@/components/IntegrationsMarquee";
import { HomeContactForm } from "@/components/HomeContactForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[75vh] md:min-h-[90vh] flex items-center">
        {/* Full-bleed background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="/kokos-hero.png"
        >
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/20"></div>

        {/* Content */}
        <div className="relative z-10 px-6 py-24 md:py-36 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <AnimateOnScroll animation="fade-in-up">
              <span className="inline-block font-[var(--font-mono)] text-xs uppercase tracking-widest text-white/60 font-bold mb-6 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5">
                Full-Service Development Partner
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Build, launch,
                <br />
                and <span className="text-burnt-orange">scale</span> —
                <br className="hidden sm:block" />
                with one team.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 md:mb-12 max-w-xl leading-relaxed">
                Websites, apps, CRM integrations, and automation.
                Turnkey development for startups and growing businesses.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-burnt-orange text-white px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-200 shadow-[0_8px_32px_rgba(211,84,0,0.4)] text-center squishy-interaction">
                  Get a Free Quote
                </Link>
                <Link href="/process" className="border-2 border-white/30 text-white px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-center backdrop-blur-sm">
                  See How We Work
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
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

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-primary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateOnScroll animation="fade-in-left">
              <div>
                <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to build something great?
                </h3>
                <p className="text-primary-fixed-dim mb-8 text-base md:text-lg leading-relaxed">
                  Tell us about your project. We&apos;ll get back within 24 hours with a clear plan and a fixed quote.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/70">
                    <IconShield className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm">Your data is protected. We never share it.</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <IconChat className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm">Avg. response time: under 4 hours on business days.</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <IconRocket className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm">Free consultation — no commitment required.</span>
                  </div>
                </div>
                <p className="text-white/40 text-xs">
                  Or email us directly at{" "}
                  <a href="mailto:hello@bigkokos.dev" className="text-primary-fixed-dim underline hover:no-underline">hello@bigkokos.dev</a>
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-right" delay={150}>
              <HomeContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
