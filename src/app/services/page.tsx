import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IntegrationsMarquee } from "@/components/IntegrationsMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service development: websites, mobile apps, CRM integrations, automation, dashboards, and DevOps — all from one team.",
};

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

      {/* Service blocks */}
      <div className="space-y-6 md:space-y-8 mb-20 md:mb-32">

        {/* 01 — Websites */}
        <AnimateOnScroll animation="fade-in-up">
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-burnt-orange/20 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-burnt-orange font-bold mb-3 block">01 — Web</span>
              <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Websites &amp; Web Applications</h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                From corporate landing pages to full-stack SaaS platforms. Responsive, fast, and built to convert.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Vue", "Svelte", "Node", "Python", "Laravel", "Shopify"].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{t}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64 shrink-0 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 space-y-3">
                <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                <div className="h-3 bg-burnt-orange/50 rounded-full w-full"></div>
                <div className="h-3 bg-white/20 rounded-full w-1/2"></div>
                <div className="h-20 bg-white/5 border border-white/10 rounded-xl mt-3 flex items-end gap-1 p-3">
                  {[40, 65, 50, 80, 70, 90, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-burnt-orange/80 to-burnt-orange/20" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="text-center text-white/40 text-[10px] font-[var(--font-mono)] uppercase">Live preview</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 02 — Mobile */}
        <AnimateOnScroll animation="fade-in-up" delay={50}>
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-secondary font-bold mb-3 block">02 — Mobile</span>
              <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Mobile App Development</h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                Native performance with cross-platform efficiency. Apps your users actually want to open every day.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React Native", "Flutter", "Swift", "Kotlin", "Firebase"].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{t}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-52 shrink-0 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-[2rem] p-3 mx-auto max-w-[180px]">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3 h-56">
                  <div className="w-10 h-10 bg-secondary/30 rounded-xl"></div>
                  <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
                  <div className="h-2 bg-white/15 rounded-full w-full"></div>
                  <div className="h-2 bg-white/10 rounded-full w-4/5"></div>
                  <div className="mt-auto pt-4">
                    <div className="h-8 bg-secondary/40 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 03 — CRM */}
        <AnimateOnScroll animation="fade-in-up" delay={50}>
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-burnt-orange/15 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-burnt-orange font-bold mb-3 block">03 — Integrations</span>
              <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">CRM Integrations &amp; Automation</h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                Connect your tools. Automate your workflows. Stop copy-pasting between tabs.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Zapier", "Make"].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{t}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64 shrink-0 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 space-y-3">
                {["Leads synced", "Emails triggered", "Data enriched"].map((label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-secondary" : i === 1 ? "bg-burnt-orange" : "bg-white/40"}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/60">{label}</span>
                        <span className="text-white/80 font-bold">{["2,451", "12,800", "8,200"][i]}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full">
                        <div className={`h-full rounded-full ${i === 0 ? "bg-secondary" : i === 1 ? "bg-burnt-orange" : "bg-white/30"}`} style={{ width: `${[85, 65, 72][i]}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 04 — Custom Software */}
        <AnimateOnScroll animation="fade-in-up" delay={50}>
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-secondary/15 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-secondary font-bold mb-3 block">04 — Internal Tools</span>
              <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Custom Software &amp; Internal Tools</h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                Bespoke tools your team actually wants to use. Admin panels, booking engines, workflow automation — built in-house, not hacked together.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Admin Panels", "Booking Systems", "Inventory", "APIs", "Workflow Engines"].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{t}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64 shrink-0 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 space-y-2.5">
                <div className="flex gap-2">
                  <div className="w-1/3 h-16 bg-white/5 border border-white/10 rounded-lg"></div>
                  <div className="w-2/3 h-16 bg-white/5 border border-white/10 rounded-lg"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2 h-10 bg-secondary/20 border border-secondary/20 rounded-lg"></div>
                  <div className="w-1/2 h-10 bg-white/5 border border-white/10 rounded-lg"></div>
                </div>
                <div className="h-12 bg-white/5 border border-white/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 05 — Dashboards */}
        <AnimateOnScroll animation="fade-in-up" delay={50}>
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-burnt-orange/20 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-burnt-orange font-bold mb-3 block">05 — BI &amp; Analytics</span>
              <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Dashboards &amp; Business Intelligence</h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                Turn raw data into real-time decisions. Custom dashboards that replace spreadsheet chaos with one-click clarity.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Metabase", "Power BI", "Looker", "Grafana", "Custom"].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{t}</span>
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

        {/* 06 — MVP */}
        <AnimateOnScroll animation="fade-in-up" delay={50}>
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-secondary font-bold mb-3 block">06 — Startups</span>
              <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Turnkey MVP &amp; Startup Package</h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                From napkin sketch to live product in weeks. Scalable architecture from day one — no rewrites when you grow.
              </p>
              <div className="flex flex-wrap gap-3">
                {["2–4 weeks", "CRM included", "Analytics built-in", "Scale-ready"].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{t}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64 shrink-0 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="space-y-3">
                  {[
                    { label: "Idea", done: true },
                    { label: "Wireframes", done: true },
                    { label: "Prototype", done: true },
                    { label: "MVP Launch", done: false },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${step.done ? "bg-secondary border-secondary" : "border-white/30"}`}>
                        {step.done && <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                      </div>
                      <span className={`text-sm ${step.done ? "text-white/80" : "text-white/40"}`}>{step.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-burnt-orange rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* 07 — DevOps */}
        <AnimateOnScroll animation="fade-in-up" delay={50}>
          <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center overflow-hidden relative">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-burnt-orange/15 rounded-full blur-3xl"></div>
            <div className="flex-1 relative z-10">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-burnt-orange font-bold mb-3 block">07 — Infrastructure</span>
              <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">DevOps &amp; Cloud</h3>
              <p className="text-white/70 mb-6 leading-relaxed max-w-lg">
                Infrastructure that scales itself. CI/CD pipelines, monitoring, security audits — deploy with confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                {["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{t}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64 shrink-0 relative z-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 font-[var(--font-mono)] text-xs space-y-2">
                <div className="text-secondary">$ deploy --prod</div>
                <div className="text-white/50">Building... <span className="text-white/80">done</span></div>
                <div className="text-white/50">Tests... <span className="text-secondary">42/42 passed</span></div>
                <div className="text-white/50">Deploy... <span className="text-secondary">live &#10003;</span></div>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between">
                  <span className="text-white/40">Uptime</span>
                  <span className="text-secondary font-bold">99.99%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Latency</span>
                  <span className="text-burnt-orange font-bold">&lt;50ms</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

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
