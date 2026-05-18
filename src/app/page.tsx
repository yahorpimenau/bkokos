import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IconShield, IconDroplet, IconBuild, IconGlobe, IconPhone, IconLink, IconGear, IconRocket, IconWrench, IconChat, IconHammer, IconChart, IconStar, IconQuote } from "@/components/Icons";
import { IntegrationsMarquee } from "@/components/IntegrationsMarquee";
import { HomeContactForm } from "@/components/HomeContactForm";
import { HeroVideo } from "@/components/HeroVideo";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[75vh] md:min-h-[90vh] flex items-center">
        {/* Background video with branded preloader */}
        <HeroVideo />

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: IconGlobe, title: "Websites & Web Apps", desc: "From corporate landing pages to full-stack SaaS platforms. Responsive, fast, custom-built." },
              { Icon: IconPhone, title: "Mobile Apps", desc: "iOS + Android (React Native / Flutter / native). Smooth UX that users love to open every day." },
              { Icon: IconLink, title: "CRM & Integrations", desc: "Connect HubSpot, Salesforce, Pipedrive, or any custom CRM. Automate leads, sync data, save hours." },
              { Icon: IconGear, title: "Custom Automation", desc: "Workflows, scripts, AI agents — we automate the repetitive so you focus on growth." },
              { Icon: IconChart, title: "Dashboards & Analytics", desc: "Custom BI dashboards with Metabase, Power BI, or bespoke. Turn raw data into decisions." },
              { Icon: IconRocket, title: "MVP in a Week", desc: "Got an idea? We'll build a minimum viable product fast. Test, iterate, scale." },
              { Icon: IconBuild, title: "Internal Tools", desc: "Admin panels, inventory systems, booking engines — tools your team actually wants to use." },
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
      <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-block font-[var(--font-mono)] text-xs uppercase tracking-widest text-burnt-orange font-bold mb-4">Our Process</span>
          <h2 className="font-[var(--font-headline)] text-2xl md:text-4xl font-bold text-primary">Idea to launch in three steps</h2>
        </AnimateOnScroll>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[4.5rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-burnt-orange via-secondary to-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                Icon: IconChat,
                num: "01",
                title: "Discovery",
                desc: "Free consultation to understand your goals, map the scope, and define a clear plan.",
                detail: "1–2 days",
                color: "burnt-orange",
              },
              {
                Icon: IconHammer,
                num: "02",
                title: "Design & Build",
                desc: "Agile sprints with weekly demos. You see progress, give feedback, stay in control.",
                detail: "2–12 weeks",
                color: "secondary",
              },
              {
                Icon: IconRocket,
                num: "03",
                title: "Launch & Grow",
                desc: "Go live with confidence. 30-day hyper-care, ongoing support, and room to scale.",
                detail: "Ongoing",
                color: "primary",
              },
            ].map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 200}>
                <div className="relative bg-white tough-border rounded-2xl p-6 md:p-8 soft-shadow hover:shadow-xl transition-all duration-300 group h-full">
                  {/* Number badge */}
                  <div className={`w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl flex items-center justify-center mb-6 relative z-10 ${
                    step.color === "burnt-orange" ? "bg-burnt-orange/10" :
                    step.color === "secondary" ? "bg-secondary/10" : "bg-primary/10"
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <step.Icon className={`w-7 h-7 md:w-8 md:h-8 ${
                      step.color === "burnt-orange" ? "text-burnt-orange" :
                      step.color === "secondary" ? "text-secondary" : "text-primary"
                    }`} />
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-[10px] ${
                      step.color === "burnt-orange" ? "bg-burnt-orange" :
                      step.color === "secondary" ? "bg-secondary" : "bg-primary"
                    }`}>
                      {step.num}
                    </div>
                  </div>

                  <h4 className="font-[var(--font-headline)] font-bold text-primary mb-2 text-lg md:text-xl">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-4">{step.desc}</p>

                  <span className={`inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                    step.color === "burnt-orange" ? "bg-burnt-orange/10 text-burnt-orange" :
                    step.color === "secondary" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
                  }`}>
                    {step.detail}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <Link href="/process" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors group">
            See our full process
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </AnimateOnScroll>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-28 bg-primary overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-14 md:mb-20">
            <span className="inline-block font-[var(--font-mono)] text-xs uppercase tracking-widest text-white/50 font-bold mb-4">Client Stories</span>
            <h2 className="font-[var(--font-headline)] text-2xl md:text-4xl font-bold text-white">Trusted by teams that ship</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { quote: "Big Kokos turned our scattered tools into one smooth workflow. Website, CRM, mobile app — all delivered in 3 months.", name: "Alex M.", title: "Founder, GreenLeaf", metric: "3 months", metricLabel: "full platform delivery" },
              { quote: "They delivered our MVP two weeks early and it just worked. No drama, no scope creep — just solid engineering.", name: "Sofia R.", title: "CTO, Lume", metric: "2 weeks", metricLabel: "ahead of schedule" },
              { quote: "Our dashboards went from 6 separate spreadsheets to one real-time Metabase setup. Decisions that took days now take minutes.", name: "James K.", title: "Head of Ops, Forra", metric: "80%", metricLabel: "faster reporting" },
            ].map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 150}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl h-full flex flex-col hover:bg-white/10 transition-colors duration-300 group">
                  <IconQuote className="w-8 h-8 text-burnt-orange/60 mb-4 group-hover:text-burnt-orange transition-colors" />
                  <p className="text-white/80 mb-6 leading-relaxed flex-grow text-sm md:text-base">
                    {t.quote}
                  </p>
                  <div className="border-t border-white/10 pt-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-white/50 text-xs">{t.title}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-[var(--font-headline)] text-xl md:text-2xl font-extrabold text-burnt-orange">{t.metric}</p>
                      <p className="text-white/40 text-[10px] md:text-xs uppercase font-[var(--font-mono)]">{t.metricLabel}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Stats bar */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              {[
                { value: "50+", label: "Projects delivered" },
                { value: "98%", label: "On-time delivery" },
                { value: "4.9/5", label: "Client satisfaction" },
                { value: "<4h", label: "Avg. response time" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
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
