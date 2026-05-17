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
                Automation Reinvented
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={100}>
              <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-[48px] font-extrabold text-primary mb-6 leading-tight tracking-tight">
                Crack Open Smarter{" "}
                <span className="text-tertiary">Automation</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={200}>
              <p className="font-[var(--font-body)] text-base sm:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-xl leading-relaxed">
                Tough security, smooth workflows, and fresh ideas for your
                development cycle. Experience the resilient core of professional
                enterprise tech with the refreshing calm of the oasis.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-left" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pricing"
                  className="bg-burnt-orange text-white px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-200 soft-shadow btn-glow text-center squishy-interaction"
                >
                  Peek Inside
                </Link>
                <Link
                  href="/developers"
                  className="tough-border border-primary text-primary px-8 sm:px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors duration-200 text-center"
                >
                  View Docs
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in-right" delay={200} className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-secondary-container/20 blur-3xl rounded-full -z-10"></div>
            <img
              alt="A polished 3D render of a glossy brown coconut shell split in half, revealing a glowing digital circuit network inside"
              className="w-full max-w-[400px] lg:max-w-[500px] drop-shadow-2xl animate-float"
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
              Trusted By
            </div>
            <img alt="Stripe" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvMrA_f-BSgSYX_580_sr4aqrkseSt5zSU2UzE9JzJPLLLHMiv_E4rJsZuPx-GV0VrWBWgZY9W2tp9eM3I7ZPCmHmZUVVCkeSIG-RqUW7qVfRs2JxYkiGcKy-2q0aNu4lZwmEn0dqr1GswRscglCaftfPBFN92RG1MquCuRGefJ-9PX8IPyUSIzNJBp4I8gs7CJa697GODcGW8GQzy6a61UXChwWgRFmTovlehuN59U4ZIVMmiYifA6OAJ68ftVamYYsavCu0fYDMa" />
            <img alt="Airbnb" className="h-6 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCNrDwUduzpc8Ty5xsmXp_gd_JEjUqHlDM5EFtEbQ33MOKsgmbWeFboUsS2-2w0hlbr48xgz-wZ85XiZuitS7vEwBSbBPohQssl3-CdlVHMO8RdOzpC6pa1rddxaSVe7yW1L6g28Dp4f2qZQZ_pKhEC41v4mTdbgrph9Z7plYOjQha9yKE2Y7Av8rKuBesCARv9NMsT66oEgAGKdikYmdDIxPUOSJGv65QHEU1dRHzErK4yhm5u9ZCGTsfClxqXOSOwaN6JmLhDjBN" />
            <img alt="Figma" className="h-6 md:h-8 hidden sm:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcM34Jtjez2XmB50SgpRjb0WaC1A9UqiAuAibDllBOxKNF1sViItZKD6cCTUwfyJ9VgvR28lxdIf_uY8smtM3L0Ze9GSL2rH_bjEr83gGKV5pGl67u5fB9VuihkUlX29QZfqn0Tf8UV5JtpuKxp5w-q6tKNeAIAQvDmtmHj4L7OlY42tEcXUUzyXuPRWhZJ_hHqTo3By9mO7P8ijd4tCl75TrgbOKRRkRHrksymVCgzIOSZodUXUmxbbUXB8ax-qVOvUl6RxFuuCU7" />
            <img alt="Slack" className="h-6 md:h-8 hidden sm:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6PypUkeFjayA1k7EIln8fT1nuVTrHpCK-KKbhfs_qH_-uUEvO0w-HUlOS-2wvFz3V1AzMleB-uD_NcqCANm1Rda1eWccSM265C4GNG0xJFpCFgPX2tSjwdHPJS2cBs7l5BdzvLNPnbW3gIhcPEHzAoTOrFuldOe5-xtsl8tX8Vx8NBOhbBsn3QRo5uUt0XIURcBuOjTYQ9uGAdNzwIN_SioPVfWK9HFmlPYmAwgBoyPLC5GT6BZf8si-Lz1EL9ZQqtTQPpTV6z4Iz" />
            <img alt="GitHub" className="h-6 md:h-8 hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJjCD9zweQbKFHbFzraAl_eAGGJnnPdKKH04-sRxMtD4wkxt-CJzrXobFkTFmxX9Kyu8738xhwCS0W1x4AtnQ0r3yV10RAvcOBzXbbPLcx3MJ-AbjArAyLetwnh2cmyAXL5ry7pKEcGQyBa-jVoQme_6ehJtpEwJmpt9wsDNfpzev-T2SjqfOH7DRWzEf8gyDdDBvIJx84WmWDVpyyMib6YAGosMMyZ3Rq_ovLBEtHYl0LGGproKQTqGusL_6UOMkEi0AXC4X2hyMi" />
          </div>
        </AnimateOnScroll>
      </section>

      {/* Three Pillars */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-12 md:mb-16">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">
            The Coconut Core
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: "🛡️", bg: "bg-primary-container", title: "Tough Security", desc: "A shell so hard, no breach can crack it. We prioritize military-grade encryption and zero-trust architecture at every node.", link: "/solutions" },
            { icon: "⚡", bg: "bg-secondary-container", title: "Smooth Workflows", desc: "Liquid efficiency that flows through your pipelines. Automate redundant tasks and eliminate friction from commit to deploy.", link: "/solutions" },
            { icon: "💡", bg: "bg-tertiary-container", title: "Fresh Ideas", desc: "A refreshing perspective on AI-driven orchestration. Our models learn your patterns to suggest the path of least resistance.", link: "/developers" },
          ].map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 150}>
              <Link href={card.link} className="block bg-white tough-border p-6 md:p-8 rounded-xl soft-shadow group hover:scale-[1.03] hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${card.bg} flex items-center justify-center rounded-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl md:text-3xl">{card.icon}</span>
                </div>
                <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">{card.title}</h3>
                <p className="text-on-surface-variant text-sm md:text-base">{card.desc}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-tertiary font-bold text-sm group-hover:gap-3 transition-all">
                  Learn more <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-16 md:py-24 bg-surface-container-low px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll className="text-center mb-12 md:mb-20">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">
              The Automation Lifecycle
            </h2>
            <p className="text-on-surface-variant">From initial seed to bountiful harvest.</p>
          </AnimateOnScroll>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {[
              { icon: "🌱", num: "01", title: "Plant", desc: "Discover assets and scan your environment for potential." },
              { icon: "🌿", num: "02", title: "Grow", desc: "Build logic flows with our low-code organic builder." },
              { icon: "🍃", num: "03", title: "Harvest", desc: "Deploy and watch your productivity scale automatically." },
              { icon: "🥥", num: "04", title: "Open", desc: "Analyze results and refine with fresh AI insights." },
            ].map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 150} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white tough-border mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6 soft-shadow relative group hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl md:text-4xl">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 bg-secondary text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
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

      {/* The Oasis Section */}
      <section id="oasis" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <AnimateOnScroll animation="scale-in">
          <div className="bg-primary text-white tough-border rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center overflow-hidden relative">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="lg:w-1/2 z-10">
              <span className="font-[var(--font-mono)] text-secondary-fixed-dim uppercase tracking-widest text-xs sm:text-sm mb-4 block">
                Experimental Environment
              </span>
              <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 md:mb-8">
                Enter <span className="text-secondary-fixed">The Oasis</span>
              </h2>
              <p className="text-primary-fixed-dim text-base md:text-lg mb-8 md:mb-10">
                Our interactive sandbox allows you to simulate high-load automation scenarios before pushing to production.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {["Real-time latency simulation", "Visual logic debugger", "Secure data obfuscation"].map((item) => (
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
                Start Sandbox Demo
              </Link>
            </div>
            <div className="lg:w-1/2 w-full bg-[#1A0E05] tough-border border-primary-fixed-dim/30 rounded-xl md:rounded-2xl p-4 md:p-6 font-[var(--font-mono)] text-xs md:text-sm text-on-primary-container h-[300px] md:h-[400px] shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center gap-2 mb-3 md:mb-4 pb-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-on-tertiary-container"></div>
                <span className="ml-4 opacity-50 text-xs">oasis-cli --simulate-flow</span>
              </div>
              <div className="flex-grow space-y-2 opacity-80">
                <p className="text-secondary-fixed">&gt; Initializing Kokos ecosystem...</p>
                <p className="text-on-primary-fixed-variant">[OK] Environment &quot;Oasis_V2&quot; ready.</p>
                <p>&gt; Running automation_leaf: plant_build_harvest</p>
                <p className="text-on-tertiary-container">... Processing seed #8821 ...</p>
                <div className="flex gap-1 py-3 md:py-4">
                  <div className="h-2 w-6 md:w-8 bg-secondary rounded-full"></div>
                  <div className="h-2 w-6 md:w-8 bg-secondary rounded-full"></div>
                  <div className="h-2 w-6 md:w-8 bg-secondary rounded-full"></div>
                  <div className="h-2 w-6 md:w-8 bg-secondary/30 rounded-full animate-pulse"></div>
                </div>
                <p className="text-secondary-fixed">Analysis: +12% Efficiency Gain</p>
                <p className="animate-pulse">_</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary px-6 text-center">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Stay Fresh</h3>
            <p className="text-primary-fixed-dim mb-8 md:mb-10 text-sm md:text-base">
              Get the latest automation tips, security patches, and oasis updates directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <input
                className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 md:px-8 py-3 md:py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-white/40 transition-all focus:bg-white/15"
                placeholder="you@company.com"
                type="email"
              />
              <button className="bg-secondary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-all btn-glow-green" type="submit">
                Get fresh updates
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
