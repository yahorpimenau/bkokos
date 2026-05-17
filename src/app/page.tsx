export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:pt-32 md:pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-secondary font-bold mb-4 block">
              Automation Reinvented
            </span>
            <h1 className="font-[var(--font-headline)] text-5xl md:text-[48px] font-extrabold text-primary mb-6 leading-tight tracking-tight">
              Crack Open Smarter{" "}
              <span className="text-tertiary">Automation</span>
            </h1>
            <p className="font-[var(--font-body)] text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              Tough security, smooth workflows, and fresh ideas for your
              development cycle. Experience the resilient core of professional
              enterprise tech with the refreshing calm of the oasis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 soft-shadow">
                Peek Inside
              </button>
              <button className="tough-border border-primary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors duration-200">
                View Docs
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-secondary-container/20 blur-3xl rounded-full -z-10"></div>
            <img
              alt="A polished 3D render of a glossy brown coconut shell split in half, revealing a glowing digital circuit network inside"
              className="w-full max-w-[500px] drop-shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahuDagXg-NDV2fO8751tj-gpXi4JJLnH9KqerCqWRgh2hwncmAO-mDpPa-jGCfYWlRiKZe0zuaeWJFQOhbv2lpmwbscB4g1qP3t9odYuvB2s86bWu9pcwWA4va_6cNd1lTLkGolwM7yzc6oVNU7lOkxLnFK-2UnCkWY0pfleusDpLZbU4BJ9dvD22FSEJlz1GenBG-kb80oJF7TxXUWU-bwzQqZzF0d8FI58B4e89gL97SKemuqM4AvHo3Nd2C9RVX3-wkMpCiSl"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-surface-container py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="font-[var(--font-mono)] text-primary/40 font-bold uppercase text-xs">
            Trusted By
          </div>
          <img alt="Stripe" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvMrA_f-BSgSYX_580_sr4aqrkseSt5zSU2UzE9JzJPLLLHMiv_E4rJsZuPx-GV0VrWBWgZY9W2tp9eM3I7ZPCmHmZUVVCkeSIG-RqUW7qVfRs2JxYkiGcKy-2q0aNu4lZwmEn0dqr1GswRscglCaftfPBFN92RG1MquCuRGefJ-9PX8IPyUSIzNJBp4I8gs7CJa697GODcGW8GQzy6a61UXChwWgRFmTovlehuN59U4ZIVMmiYifA6OAJ68ftVamYYsavCu0fYDMa" />
          <img alt="Airbnb" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCNrDwUduzpc8Ty5xsmXp_gd_JEjUqHlDM5EFtEbQ33MOKsgmbWeFboUsS2-2w0hlbr48xgz-wZ85XiZuitS7vEwBSbBPohQssl3-CdlVHMO8RdOzpC6pa1rddxaSVe7yW1L6g28Dp4f2qZQZ_pKhEC41v4mTdbgrph9Z7plYOjQha9yKE2Y7Av8rKuBesCARv9NMsT66oEgAGKdikYmdDIxPUOSJGv65QHEU1dRHzErK4yhm5u9ZCGTsfClxqXOSOwaN6JmLhDjBN" />
          <img alt="Figma" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcM34Jtjez2XmB50SgpRjb0WaC1A9UqiAuAibDllBOxKNF1sViItZKD6cCTUwfyJ9VgvR28lxdIf_uY8smtM3L0Ze9GSL2rH_bjEr83gGKV5pGl67u5fB9VuihkUlX29QZfqn0Tf8UV5JtpuKxp5w-q6tKNeAIAQvDmtmHj4L7OlY42tEcXUUzyXuPRWhZJ_hHqTo3By9mO7P8ijd4tCl75TrgbOKRRkRHrksymVCgzIOSZodUXUmxbbUXB8ax-qVOvUl6RxFuuCU7" />
          <img alt="Slack" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6PypUkeFjayA1k7EIln8fT1nuVTrHpCK-KKbhfs_qH_-uUEvO0w-HUlOS-2wvFz3V1AzMleB-uD_NcqCANm1Rda1eWccSM265C4GNG0xJFpCFgPX2tSjwdHPJS2cBs7l5BdzvLNPnbW3gIhcPEHzAoTOrFuldOe5-xtsl8tX8Vx8NBOhbBsn3QRo5uUt0XIURcBuOjTYQ9uGAdNzwIN_SioPVfWK9HFmlPYmAwgBoyPLC5GT6BZf8si-Lz1EL9ZQqtTQPpTV6z4Iz" />
          <img alt="GitHub" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJjCD9zweQbKFHbFzraAl_eAGGJnnPdKKH04-sRxMtD4wkxt-CJzrXobFkTFmxX9Kyu8738xhwCS0W1x4AtnQ0r3yV10RAvcOBzXbbPLcx3MJ-AbjArAyLetwnh2cmyAXL5ry7pKEcGQyBa-jVoQme_6ehJtpEwJmpt9wsDNfpzev-T2SjqfOH7DRWzEf8gyDdDBvIJx84WmWDVpyyMib6YAGosMMyZ3Rq_ovLBEtHYl0LGGproKQTqGusL_6UOMkEi0AXC4X2hyMi" />
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-headline)] text-3xl font-bold text-primary mb-4">
            The Coconut Core
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🛡️", bg: "bg-primary-container", title: "Tough Security", desc: "A shell so hard, no breach can crack it. We prioritize military-grade encryption and zero-trust architecture at every node." },
            { icon: "⚡", bg: "bg-secondary-container", title: "Smooth Workflows", desc: "Liquid efficiency that flows through your pipelines. Automate redundant tasks and eliminate friction from commit to deploy." },
            { icon: "💡", bg: "bg-tertiary-container", title: "Fresh Ideas", desc: "A refreshing perspective on AI-driven orchestration. Our models learn your patterns to suggest the path of least resistance." },
          ].map((card) => (
            <div key={card.title} className="bg-white tough-border p-8 rounded-xl soft-shadow group hover:scale-[1.01] transition-transform">
              <div className={`w-16 h-16 ${card.bg} flex items-center justify-center rounded-2xl mb-6`}>
                <span className="text-3xl">{card.icon}</span>
              </div>
              <h3 className="font-[var(--font-headline)] text-2xl font-semibold text-primary mb-4">{card.title}</h3>
              <p className="text-on-surface-variant">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-24 bg-surface-container-low px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-[var(--font-headline)] text-3xl font-bold text-primary mb-4">
              The Automation Lifecycle
            </h2>
            <p className="text-on-surface-variant">From initial seed to bountiful harvest.</p>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
            {[
              { icon: "🌱", num: "01", title: "Plant", desc: "Discover assets and scan your environment for potential." },
              { icon: "🌿", num: "02", title: "Grow", desc: "Build logic flows with our low-code organic builder." },
              { icon: "🍃", num: "03", title: "Harvest", desc: "Deploy and watch your productivity scale automatically." },
              { icon: "🥥", num: "04", title: "Open", desc: "Analyze results and refine with fresh AI insights." },
            ].map((step) => (
              <div key={step.num} className="flex-1 text-center">
                <div className="w-24 h-24 bg-white tough-border mx-auto rounded-full flex items-center justify-center mb-6 soft-shadow relative">
                  <span className="text-4xl">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                </div>
                <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-on-surface-variant px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Oasis Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-primary text-white tough-border rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="lg:w-1/2 z-10">
            <span className="font-[var(--font-mono)] text-secondary-fixed-dim uppercase tracking-widest text-sm mb-4 block">
              Experimental Environment
            </span>
            <h2 className="font-[var(--font-headline)] text-3xl md:text-5xl font-extrabold mb-8">
              Enter <span className="text-secondary-fixed">The Oasis</span>
            </h2>
            <p className="text-primary-fixed-dim text-lg mb-10">
              Our interactive sandbox allows you to simulate high-load automation scenarios before pushing to production.
            </p>
            <ul className="space-y-4 mb-10">
              {["Real-time latency simulation", "Visual logic debugger", "Secure data obfuscation"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-secondary text-lg">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all soft-shadow">
              Start Sandbox Demo
            </button>
          </div>
          <div className="lg:w-1/2 w-full bg-[#1A0E05] tough-border border-primary-fixed-dim/30 rounded-2xl p-6 font-[var(--font-mono)] text-sm text-on-primary-container h-[400px] shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-on-tertiary-container"></div>
              <span className="ml-4 opacity-50">oasis-cli --simulate-flow</span>
            </div>
            <div className="flex-grow space-y-2 opacity-80">
              <p className="text-secondary-fixed">&gt; Initializing Kokos ecosystem...</p>
              <p className="text-on-primary-fixed-variant">[OK] Environment &quot;Oasis_V2&quot; ready.</p>
              <p>&gt; Running automation_leaf: plant_build_harvest</p>
              <p className="text-on-tertiary-container">... Processing seed #8821 ...</p>
              <div className="flex gap-1 py-4">
                <div className="h-2 w-8 bg-secondary rounded-full"></div>
                <div className="h-2 w-8 bg-secondary rounded-full"></div>
                <div className="h-2 w-8 bg-secondary rounded-full"></div>
                <div className="h-2 w-8 bg-secondary/30 rounded-full animate-pulse"></div>
              </div>
              <p className="text-secondary-fixed">Analysis: +12% Efficiency Gain</p>
              <p className="animate-pulse">_</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-[var(--font-headline)] text-3xl font-bold text-white mb-6">Stay Fresh</h3>
          <p className="text-primary-fixed-dim mb-10">
            Get the latest automation tips, security patches, and oasis updates directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              className="flex-grow bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-white/40"
              placeholder="you@company.com"
              type="email"
            />
            <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all" type="submit">
              Get fresh updates
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
