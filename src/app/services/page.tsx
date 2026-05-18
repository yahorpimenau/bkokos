import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IntegrationsMarquee } from "@/components/IntegrationsMarquee";
import { IconGlobe, IconPhone, IconLink, IconBuild, IconChart, IconRocket, IconGear, IconShield } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service development: websites, mobile apps, CRM integrations, automation, dashboards, and DevOps — all from one team.",
};

const services = [
  {
    Icon: IconGlobe,
    color: "burnt-orange",
    title: "Websites & Web Applications",
    desc: "From corporate landing pages to full-stack SaaS platforms — responsive, fast, and built to convert.",
    items: ["Custom design (UI/UX) + frontend (React, Vue, Svelte)", "Backend (Node, Python, Laravel, .NET)", "E-commerce (Shopify, WooCommerce, custom)", "Performance optimisation, SEO, hosting setup"],
  },
  {
    Icon: IconPhone,
    color: "secondary",
    title: "Mobile App Development",
    desc: "Native performance with cross-platform efficiency. Apps your users actually want to open.",
    items: ["Cross-platform (React Native, Flutter) or native (Swift, Kotlin)", "App store submission and maintenance", "Offline sync, push notifications, real-time features"],
  },
  {
    Icon: IconLink,
    color: "primary",
    title: "CRM Integrations & Automation",
    desc: "Connect your tools. Automate your workflows. Stop copy-pasting between tabs.",
    items: ["Connect any CRM (Salesforce, HubSpot, Pipedrive, Zoho, custom)", "Two-way sync: leads, contacts, deals, tasks", "Automate email sequences, reporting, data enrichment"],
  },
  {
    Icon: IconBuild,
    color: "burnt-orange",
    title: "Custom Software & Internal Tools",
    desc: "Bespoke tools your team actually wants to use — not another clunky spreadsheet.",
    items: ["Admin dashboards, inventory systems, booking engines", "Workflow automation (Zapier / Make alternatives built in-house)", "API development and third-party integrations"],
  },
  {
    Icon: IconChart,
    color: "secondary",
    title: "Dashboards & Business Intelligence",
    desc: "Turn raw data into real-time decisions. No more spreadsheet chaos.",
    items: ["Custom dashboards with Metabase, Power BI, Looker, or Grafana", "KPI tracking, real-time reporting, automated alerts", "Data pipeline setup: ETL, warehouse, visualization layer", "Turn spreadsheet chaos into one-click decisions"],
  },
  {
    Icon: IconRocket,
    color: "primary",
    title: "Turnkey MVP & Startup Package",
    desc: "From napkin sketch to live product in weeks. Built to scale from day one.",
    items: ["Idea → wireframes → prototype → MVP in 2–4 weeks", "Includes basic CRM integration and analytics", "Scalable architecture — move to production without rewrite"],
  },
  {
    Icon: IconShield,
    color: "burnt-orange",
    title: "DevOps & Cloud",
    desc: "Infrastructure that scales itself. Deploy with confidence, sleep at night.",
    items: ["AWS, Google Cloud, Azure setup", "CI/CD pipelines, monitoring, auto-scaling", "Security audits and compliance (GDPR, SOC2 prep)"],
  },
];

function colorClasses(color: string) {
  return {
    iconBg: color === "burnt-orange" ? "bg-burnt-orange/10" : color === "secondary" ? "bg-secondary/10" : "bg-primary/10",
    iconText: color === "burnt-orange" ? "text-burnt-orange" : color === "secondary" ? "text-secondary" : "text-primary",
    numBg: color === "burnt-orange" ? "bg-burnt-orange" : color === "secondary" ? "bg-secondary" : "bg-primary",
    accent: color === "burnt-orange" ? "group-hover:border-burnt-orange/30" : color === "secondary" ? "group-hover:border-secondary/30" : "group-hover:border-primary/30",
  };
}

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Hero */}
      <section className="mb-16 md:mb-24 text-center">
        <AnimateOnScroll>
          <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-[var(--font-mono)] text-xs mb-6 uppercase">
            What We Do
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6 max-w-3xl mx-auto tracking-tight">
            All-in-One Development
            <br />From A to Z
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            We don&apos;t do &ldquo;sorry, we don&apos;t do that.&rdquo; If it involves code, integration, or automation — we handle it.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
        {services.map((service, i) => {
          const c = colorClasses(service.color);
          return (
            <AnimateOnScroll key={service.title} delay={i * 100} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
              <div className={`bg-white border-[1.5pt] border-primary/10 p-6 md:p-8 rounded-2xl md:rounded-3xl soft-shadow group hover:shadow-xl hover:scale-[1.01] transition-all duration-300 h-full ${c.accent}`}>
                <div className="flex items-start gap-4 md:gap-5 mb-5">
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${c.iconBg} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <service.Icon className={`w-6 h-6 md:w-7 md:h-7 ${c.iconText}`} />
                    <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 ${c.numBg} rounded-full flex items-center justify-center text-white font-bold text-[9px]`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-headline)] text-lg md:text-xl font-bold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm mt-1">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 ml-16 md:ml-[4.75rem]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${c.numBg}`} />
                      <span className="text-on-surface-variant text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          );
        })}
      </section>

      {/* Analytics Hook */}
      <AnimateOnScroll animation="scale-in" className="mb-20 md:mb-32">
        <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-burnt-orange/20 rounded-full blur-3xl"></div>
          <div className="flex-1 relative z-10">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-burnt-orange font-bold mb-3 block">
              BI &amp; Analytics
            </span>
            <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">
              Your business makes data.
              <br />
              We make it useful.
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
              Most companies sit on goldmines of data locked in spreadsheets, CRMs, and disconnected tools.
              We build custom dashboards that turn that chaos into real-time, actionable insights — so you stop guessing and start deciding.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Metabase", "Power BI", "Looker", "Grafana", "Custom"].map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-72 shrink-0 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/50 text-xs font-[var(--font-mono)] uppercase">Revenue</span>
                <span className="text-secondary text-xs font-bold">+23%</span>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {[35, 42, 38, 55, 48, 62, 58, 75, 70, 85, 80, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-burnt-orange/80 to-burnt-orange/30" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
                <div>
                  <p className="font-[var(--font-headline)] text-lg font-extrabold text-white">$142K</p>
                  <p className="text-white/40 text-[10px] font-[var(--font-mono)] uppercase">This month</p>
                </div>
                <div>
                  <p className="font-[var(--font-headline)] text-lg font-extrabold text-secondary">1,847</p>
                  <p className="text-white/40 text-[10px] font-[var(--font-mono)] uppercase">Active users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Integrations */}
      <section className="mb-20 md:mb-32">
        <AnimateOnScroll className="text-center mb-10 md:mb-14">
          <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-secondary font-bold mb-3 block">
            We connect with everything
          </span>
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">
            30+ integrations out of the box
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            CRMs, cloud platforms, dev tools, automation engines — if it has an API, we plug into it.
          </p>
        </AnimateOnScroll>
        <IntegrationsMarquee />
      </section>

      {/* Callout */}
      <AnimateOnScroll animation="scale-in">
        <div className="bg-primary-container p-8 md:p-16 rounded-2xl md:rounded-[3rem] text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-[var(--font-headline)] text-xl md:text-2xl font-bold text-primary-fixed-dim italic mb-6">
              &ldquo;We don&apos;t say &lsquo;out of scope&rsquo; — we say &lsquo;how soon?&rsquo;&rdquo;
            </p>
            <Link href="/contact" className="inline-block bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform btn-glow-green">
              Start Your Project
            </Link>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#bd957c_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
