import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-20 md:pt-28 md:pb-36 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="z-10">
            <AnimateOnScroll animation="fade-in-left">
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-secondary font-bold mb-4 block">
                Workflow Automation Platform
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-[48px] font-extrabold text-primary mb-6 leading-tight tracking-tight">
                Automate with
                <br />
                <span className="text-burnt-orange">confidence.</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={200}>
              <p className="font-[var(--font-body)] text-base sm:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-xl leading-relaxed">
                Enterprise-grade security meets developer-first workflows.
                Build, deploy, and scale automation pipelines without
                compromising on speed or reliability.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pricing"
                  className="bg-burnt-orange text-white px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-200 soft-shadow btn-glow text-center squishy-interaction"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/developers"
                  className="tough-border border-primary text-primary px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors duration-200 text-center"
                >
                  View Documentation
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-right" delay={200} className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-secondary-container/20 blur-3xl rounded-full -z-10"></div>
            <img
              alt="Big Kokos automation platform"
              className="w-full max-w-[350px] lg:max-w-[450px] drop-shadow-2xl animate-float"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahuDagXg-NDV2fO8751tj-gpXi4JJLnH9KqerCqWRgh2hwncmAO-mDpPa-jGCfYWlRiKZe0zuaeWJFQOhbv2lpmwbscB4g1qP3t9odYuvB2s86bWu9pcwWA4va_6cNd1lTLkGolwM7yzc6oVNU7lOkxLnFK-2UnCkWY0pfleusDpLZbU4BJ9dvD22FSEJlz1GenBG-kb80oJF7TxXUWU-bwzQqZzF0d8FI58B4e89gL97SKemuqM4AvHo3Nd2C9RVX3-wkMpCiSl"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-surface-container py-10 md:py-12 px-6">
        <AnimateOnScroll>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-[var(--font-mono)] text-primary/40 font-bold uppercase text-xs">
              Trusted by
            </div>
            <img alt="Stripe" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvMrA_f-BSgSYX_580_sr4aqrkseSt5zSU2UzE9JzJPLLLHMiv_E4rJsZuPx-GV0VrWBWgZY9W2tp9eM3I7ZPCmHmZUVVCkeSIG-RqUW7qVfRs2JxYkiGcKy-2q0aNu4lZwmEn0dqr1GswRscglCaftfPBFN92RG1MquCuRGefJ-9PX8IPyUSIzNJBp4I8gs7CJa697GODcGW8GQzy6a61UXChwWgRFmTovlehuN59U4ZIVMmiYifA6OAJ68ftVamYYsavCu0fYDMa" />
            <img alt="Airbnb" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCNrDwUduzpc8Ty5xsmXp_gd_JEjUqHlDM5EFtEbQ33MOKsgmbWeFboUsS2-2w0hlbr48xgz-wZ85XiZuitS7vEwBSbBPohQssl3-CdlVHMO8RdOzpC6pa1rddxaSVe7yW1L6g28Dp4f2qZQZ_pKhEC41v4mTdbgrph9Z7plYOjQha9yKE2Y7Av8rKuBesCARv9NMsT66oEgAGKdikYmdDIxPUOSJGv65QHEU1dRHzErK4yhm5u9ZCGTsfClxqXOSOwaN6JmLhDjBN" />
            <img alt="Figma" className="h-6 md:h-8 hidden sm:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcM34Jtjez2XmB50SgpRjb0WaC1A9UqiAuAibDllBOxKNF1sViItZKD6cCTUwfyJ9VgvR28lxdIf_uY8smtM3L0Ze9GSL2rH_bjEr83gGKV5pGl67u5fB9VuihkUlX29QZfqn0Tf8UV5JtpuKxp5w-q6tKNeAIAQvDmtmHj4L7OlY42tEcXUUzyXuPRWhZJ_hHqTo3By9mO7P8ijd4tCl75TrgbOKRRkRHrksymVCgzIOSZodUXUmxbbUXB8ax-qVOvUl6RxFuuCU7" />
            <img alt="Slack" className="h-6 md:h-8 hidden sm:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6PypUkeFjayA1k7EIln8fT1nuVTrHpCK-KKbhfs_qH_-uUEvO0w-HUlOS-2wvFz3V1AzMleB-uD_NcqCANm1Rda1eWccSM265C4GNG0xJFpCFgPX2tSjwdHPJS2cBs7l5BdzvLNPnbW3gIhcPEHzAoTOrFuldOe5-xtsl8tX8Vx8NBOhbBsn3QRo5uUt0XIURcBuOjTYQ9uGAdNzwIN_SioPVfWK9HFmlPYmAwgBoyPLC5GT6BZf8si-Lz1EL9ZQqtTQPpTV6z4Iz" />
            <img alt="GitHub" className="h-6 md:h-8 hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJjCD9zweQbKFHbFzraAl_eAGGJnnPdKKH04-sRxMtD4wkxt-CJzrXobFkTFmxX9Kyu8738xhwCS0W1x4AtnQ0r3yV10RAvcOBzXbbPLcx3MJ-AbjArAyLetwnh2cmyAXL5ry7pKEcGQyBa-jVoQme_6ehJtpEwJmpt9wsDNfpzev-T2SjqfOH7DRWzEf8gyDdDBvIJx84WmWDVpyyMib6YAGosMMyZ3Rq_ovLBEtHYl0LGGproKQTqGusL_6UOMkEi0AXC4X2hyMi" />
          </div>
        </AnimateOnScroll>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">
            Built for modern engineering teams
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to design, deploy, and monitor automation pipelines at scale.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: "🔒", bg: "bg-primary-container", title: "Zero-Trust Security", desc: "End-to-end encryption, SOC 2 compliance, and granular RBAC out of the box. Your data never leaves your perimeter.", link: "/solutions" },
            { icon: "⚡", bg: "bg-secondary-container", title: "Real-Time Pipelines", desc: "Event-driven architecture with sub-second latency. Connect any data source, transform on the fly, and route to any destination.", link: "/solutions" },
            { icon: "🧠", bg: "bg-tertiary-container", title: "AI-Powered Orchestration", desc: "Intelligent routing, anomaly detection, and auto-scaling. The platform learns your patterns and optimizes execution paths.", link: "/developers" },
          ].map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 150}>
              <Link href={card.link} className="block bg-white tough-border p-6 md:p-8 rounded-xl soft-shadow group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${card.bg} flex items-center justify-center rounded-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-surface-container-low px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-12 md:mb-20">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">
              From setup to production in minutes
            </h2>
            <p className="text-on-surface-variant">
              Four simple steps to fully automated workflows.
            </p>
          </AnimateOnScroll>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {[
              { icon: "📡", num: "01", title: "Connect", desc: "Link your data sources, APIs, and services with pre-built connectors." },
              { icon: "🔧", num: "02", title: "Build", desc: "Design logic flows visually or with code — your choice." },
              { icon: "🚀", num: "03", title: "Deploy", desc: "One-click deployment with instant rollback capabilities." },
              { icon: "📊", num: "04", title: "Monitor", desc: "Real-time observability with alerts and performance metrics." },
            ].map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 150} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white tough-border mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6 soft-shadow relative group hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl md:text-4xl">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 bg-burnt-orange text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                    {step.num}
                  </div>
                </div>
                <h4 className="font-bold text-primary mb-1 md:mb-2 text-sm md:text-base">{step.title}</h4>
                <p className="text-xs md:text-sm text-on-surface-variant px-2 md:px-4">{step.desc}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Experience Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll animation="scale-in">
          <div className="bg-primary text-white tough-border rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center overflow-hidden relative">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="lg:w-1/2 z-10">
              <span className="font-[var(--font-mono)] text-secondary-fixed-dim uppercase tracking-widest text-xs sm:text-sm mb-4 block">
                Developer Experience
              </span>
              <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-8">
                Built for engineers,
                <br />
                <span className="text-secondary-fixed">by engineers.</span>
              </h2>
              <p className="text-primary-fixed-dim text-base md:text-lg mb-8 md:mb-10">
                CLI-first workflow, comprehensive SDKs, and an API that feels
                like it was designed by someone who actually uses it.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {["Official SDKs for Python, Node, Go, Ruby", "GraphQL & REST APIs", "Sandbox environment for testing"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-secondary text-lg">&#10003;</span>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/developers"
                className="inline-block bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-all soft-shadow btn-glow-green"
              >
                Explore the Platform
              </Link>
            </div>
            <div className="lg:w-1/2 w-full bg-[#1A0E05] tough-border border-primary-fixed-dim/30 rounded-xl md:rounded-2xl p-4 md:p-6 font-[var(--font-mono)] text-xs md:text-sm text-on-primary-container h-[280px] md:h-[380px] shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-on-tertiary-container"></div>
                <span className="ml-4 opacity-50 text-xs">terminal</span>
              </div>
              <div className="flex-grow space-y-2 opacity-80">
                <p className="text-secondary-fixed">$ kokos init my-pipeline</p>
                <p className="text-on-primary-fixed-variant">&#10003; Project initialized</p>
                <p className="text-secondary-fixed mt-3">$ kokos deploy --env production</p>
                <p className="text-on-primary-fixed-variant">Deploying to production...</p>
                <div className="flex gap-1 py-3 md:py-4">
                  <div className="h-2 w-6 md:w-8 bg-secondary rounded-full"></div>
                  <div className="h-2 w-6 md:w-8 bg-secondary rounded-full"></div>
                  <div className="h-2 w-6 md:w-8 bg-secondary rounded-full"></div>
                  <div className="h-2 w-6 md:w-8 bg-secondary/30 rounded-full animate-pulse"></div>
                </div>
                <p className="text-secondary-fixed">&#10003; Deployed in 4.2s</p>
                <p className="text-on-primary-container/60">Endpoint: https://api.bigkokos.io/v1/my-pipeline</p>
                <p className="animate-pulse mt-2">_</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-20 bg-surface-container px-6">
        <AnimateOnScroll>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "< 50ms", label: "Avg. Latency" },
              { value: "10K+", label: "Active Teams" },
              { value: "2M+", label: "Pipelines/day" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[var(--font-headline)] text-2xl md:text-4xl font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-on-surface-variant text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary px-6 text-center">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Stay in the loop</h3>
            <p className="text-primary-fixed-dim mb-8 md:mb-10 text-sm md:text-base">
              Product updates, engineering blog posts, and platform announcements. No spam.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <input
                className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 md:px-8 py-3 md:py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-white/40 transition-all focus:bg-white/15"
                placeholder="you@company.com"
                type="email"
              />
              <button className="bg-secondary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-all btn-glow-green" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
