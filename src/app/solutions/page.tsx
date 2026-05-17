const layers = [
  {
    num: "01",
    title: "The Shell",
    desc: "The resilient outer casing. Infrastructure security, firewall protocols, and foundational encryption that keeps your core assets untouched.",
    features: ["256-bit AES Foundation", "Global CDN Hardening"],
  },
  {
    num: "02",
    title: "The Water",
    desc: "The fluid transport system. Real-time data streaming and API orchestrations that hydrate your entire ecosystem without friction.",
    features: ["Streaming API Webhooks", "Zero-Latency Sync"],
  },
  {
    num: "03",
    title: "The Meat",
    desc: "The nutrient-rich core logic. AI models and complex business rules that transform raw inputs into valuable execution blocks.",
    features: ["LLM Reasoning Engine", "Custom Workflow Blocks"],
  },
  {
    num: "04",
    title: "The Oil",
    desc: "The refined essence. Predictive analytics and high-level optimization strategies that ensure your business runs smooth as silk.",
    features: ["Predictive Yield Models", "Auto-Optimization"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-[var(--font-mono)] text-xs mb-6 uppercase">
          Product Architecture
        </div>
        <h1 className="font-[var(--font-headline)] text-5xl font-extrabold text-primary mb-6 max-w-3xl mx-auto tracking-tight">
          Hard Protection,
          <br />
          Fluid Intelligence.
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore our multi-layered automation architecture, designed to scale
          from foundational security to refined business intelligence.
        </p>
      </section>

      {/* Coconut Layers Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {layers.map((layer) => (
          <div
            key={layer.num}
            className="bg-surface-container-low border-[1.5pt] border-primary p-8 rounded-3xl soft-shadow relative overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="font-[var(--font-mono)] text-xs text-outline mb-2 uppercase">
                  Layer {layer.num}
                </div>
                <h3 className="font-[var(--font-headline)] text-3xl font-bold text-primary">
                  {layer.title}
                </h3>
              </div>
              <div className="flex bg-surface-container-highest p-1 rounded-full border border-primary/20">
                <button className="px-4 py-1 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm">
                  Simple
                </button>
                <button className="px-4 py-1 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary">
                  Advanced
                </button>
              </div>
            </div>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              {layer.desc}
            </p>
            <div className="space-y-4">
              {layer.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center p-4 bg-white/50 rounded-xl border border-outline-variant"
                >
                  <span className="mr-3 text-secondary text-lg">&#10003;</span>
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Integration Section */}
      <section className="bg-surface-container rounded-[40px] p-12 md:p-24 text-center border-[1.5pt] border-primary/5">
        <h2 className="font-[var(--font-headline)] text-3xl font-bold text-primary mb-16">
          Effortless Native Sync
        </h2>
        <div className="relative flex justify-center items-center py-20">
          <div className="border-[1.5pt] border-primary rounded-full w-48 h-48 bg-background shadow-lg z-20 flex items-center justify-center">
            <div className="text-primary font-bold text-xl">Big Kokos</div>
          </div>
          <div className="absolute w-[350px] h-[350px] border border-primary/10 rounded-full flex items-center justify-center">
            <div className="border-[1.5pt] border-primary rounded-full w-16 h-16 bg-white absolute -top-8 hover:scale-110 cursor-pointer shadow-md flex items-center justify-center">
              <img
                alt="GitHub"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBkkY5G_R1fE31geKwiZNi4QDiHB74tNnf_xky51EuVqGmbWSfpU5fVsQ_ZKNzPdFN5Ieum5cpkOOtHjcBJfxY3cLeEmxb2j4UlWXT6HfKZoNjHnWJec3H79v2-HUijH3g8TDuxm_Ws9In-rHRWxfQfIbv65XZ-hmFDbOl5CEmdGQtrpCOfODJ09LjIiAB1JWvwa_ljJGFXwDYwKAE1K0r6FycZv6nMw3FTcCgSeR_Vs2eMXS-Hb8iffZbrIU8BtA1EH5p02FCQE60"
              />
            </div>
            <div className="border-[1.5pt] border-primary rounded-full w-16 h-16 bg-white absolute -bottom-8 hover:scale-110 cursor-pointer shadow-md flex items-center justify-center">
              <img
                alt="Slack"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAzwxLl-elRlzN5vB05wP9KrnEMxZx15RlQM3QIG_p8ui5rCdGhIRqM5zuqKtK9dkDutg0F8Dpr4jH3nimgiSSaSOCee3t120LCdpwlkBth8EHliav96c2dHC6xB9T9vcVzAeiSoHqqyNHYjLJm7Crhp6xu9ijz1UfCH7S_z3Wec9MWqPGGbBbuCWmRQ2hy4kH7Y3-leEBpbwbEfkioPWB9NLGIWHpwsPd2bftJfiIxJiHoXCoq6koIJHHXsebqFKN7RlbQnMwD6x"
              />
            </div>
            <div className="border-[1.5pt] border-primary rounded-full w-16 h-16 bg-white absolute -left-8 hover:scale-110 cursor-pointer shadow-md flex items-center justify-center text-primary text-2xl">
              ☁️
            </div>
            <div className="border-[1.5pt] border-primary rounded-full w-16 h-16 bg-white absolute -right-8 hover:scale-110 cursor-pointer shadow-md flex items-center justify-center text-primary text-2xl">
              💻
            </div>
          </div>
        </div>
        <p className="text-on-surface-variant max-w-xl mx-auto mt-16">
          Big Kokos integrates with the tools you already love. No complicated
          wiring, just pure automation flowing through your existing stack.
        </p>
      </section>

      {/* CTA Section */}
      <section className="mt-32 mb-16 text-center">
        <div className="bg-primary-container p-12 md:p-20 rounded-[3rem] text-on-primary-container relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-[var(--font-headline)] text-3xl font-bold text-primary-fixed-dim mb-6">
              Ready to crack the code?
            </h2>
            <p className="text-lg text-on-primary-container/80 mb-10 max-w-lg mx-auto">
              Join 200+ teams automating their core business processes with
              tropical precision.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                Start Free Trial
              </button>
              <button className="border-[1.5pt] border-primary-fixed-dim text-primary-fixed-dim px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#bd957c_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </section>
    </div>
  );
}
