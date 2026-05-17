import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const layers = [
  {
    num: "01",
    title: "Infrastructure Security",
    desc: "Military-grade encryption, firewall protocols, and zero-trust architecture. Your foundation stays impenetrable while everything above moves fast.",
    features: ["256-bit AES encryption at rest", "Global CDN with DDoS protection"],
  },
  {
    num: "02",
    title: "Data Transport",
    desc: "Real-time data streaming and API orchestration layer. Sub-millisecond routing ensures your data arrives exactly where it needs to be.",
    features: ["Event-driven webhooks", "Zero-latency cross-region sync"],
  },
  {
    num: "03",
    title: "Logic Engine",
    desc: "The intelligent core. AI models and complex business rules transform raw inputs into actionable execution plans.",
    features: ["LLM-powered reasoning", "Custom workflow blocks"],
  },
  {
    num: "04",
    title: "Analytics & Optimization",
    desc: "Predictive analytics and continuous optimization. Your pipelines get smarter with every execution cycle.",
    features: ["Predictive performance models", "Auto-scaling & optimization"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Hero */}
      <section className="mb-16 md:mb-24 text-center">
        <AnimateOnScroll>
          <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-[var(--font-mono)] text-xs mb-6 uppercase">
            Platform Architecture
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6 max-w-3xl mx-auto tracking-tight">
            Four layers.
            <br />
            Complete protection.
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Our multi-layered architecture ensures security, performance, and intelligence work together — not against each other.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Architecture Layers */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
        {layers.map((layer, i) => (
          <AnimateOnScroll key={layer.num} delay={i * 100} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
            <div className="bg-surface-container-low border-[1.5pt] border-primary p-6 md:p-8 rounded-2xl md:rounded-3xl soft-shadow relative overflow-hidden group hover:shadow-xl hover:scale-[1.01] transition-all duration-300 h-full">
              <div className="mb-6 md:mb-8">
                <div className="font-[var(--font-mono)] text-xs text-outline mb-2 uppercase">
                  Layer {layer.num}
                </div>
                <h3 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary">
                  {layer.title}
                </h3>
              </div>
              <p className="text-on-surface-variant mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                {layer.desc}
              </p>
              <div className="space-y-3 md:space-y-4">
                {layer.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center p-3 md:p-4 bg-white/50 rounded-xl border border-outline-variant group-hover:border-secondary/30 transition-colors duration-300"
                  >
                    <span className="mr-3 text-secondary text-lg">&#10003;</span>
                    <span className="font-semibold text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </section>

      {/* Integrations */}
      <AnimateOnScroll animation="scale-in">
        <section className="bg-surface-container rounded-3xl md:rounded-[40px] p-8 md:p-12 lg:p-24 text-center border-[1.5pt] border-primary/5">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">
            Connects to your stack
          </h2>
          <p className="text-on-surface-variant mb-12 md:mb-16 max-w-xl mx-auto">
            Pre-built integrations with the tools your team already uses. No complex wiring required.
          </p>
          <div className="relative flex justify-center items-center py-12 md:py-20">
            <div className="border-[1.5pt] border-primary rounded-full w-32 h-32 md:w-48 md:h-48 bg-background shadow-lg z-20 flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahuDagXg-NDV2fO8751tj-gpXi4JJLnH9KqerCqWRgh2hwncmAO-mDpPa-jGCfYWlRiKZe0zuaeWJFQOhbv2lpmwbscB4g1qP3t9odYuvB2s86bWu9pcwWA4va_6cNd1lTLkGolwM7yzc6oVNU7lOkxLnFK-2UnCkWY0pfleusDpLZbU4BJ9dvD22FSEJlz1GenBG-kb80oJF7TxXUWU-bwzQqZzF0d8FI58B4e89gL97SKemuqM4AvHo3Nd2C9RVX3-wkMpCiSl"
                alt="Big Kokos"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
            </div>
            <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-primary/10 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
              <div className="border-[1.5pt] border-primary rounded-full w-12 h-12 md:w-16 md:h-16 bg-white absolute -top-6 md:-top-8 shadow-md flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                <img alt="GitHub" className="w-6 h-6 md:w-8 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBkkY5G_R1fE31geKwiZNi4QDiHB74tNnf_xky51EuVqGmbWSfpU5fVsQ_ZKNzPdFN5Ieum5cpkOOtHjcBJfxY3cLeEmxb2j4UlWXT6HfKZoNjHnWJec3H79v2-HUijH3g8TDuxm_Ws9In-rHRWxfQfIbv65XZ-hmFDbOl5CEmdGQtrpCOfODJ09LjIiAB1JWvwa_ljJGFXwDYwKAE1K0r6FycZv6nMw3FTcCgSeR_Vs2eMXS-Hb8iffZbrIU8BtA1EH5p02FCQE60" />
              </div>
              <div className="border-[1.5pt] border-primary rounded-full w-12 h-12 md:w-16 md:h-16 bg-white absolute -bottom-6 md:-bottom-8 shadow-md flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                <img alt="Slack" className="w-6 h-6 md:w-8 md:h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAzwxLl-elRlzN5vB05wP9KrnEMxZx15RlQM3QIG_p8ui5rCdGhIRqM5zuqKtK9dkDutg0F8Dpr4jH3nimgiSSaSOCee3t120LCdpwlkBth8EHliav96c2dHC6xB9T9vcVzAeiSoHqqyNHYjLJm7Crhp6xu9ijz1UfCH7S_z3Wec9MWqPGGbBbuCWmRQ2hy4kH7Y3-leEBpbwbEfkioPWB9NLGIWHpwsPd2bftJfiIxJiHoXCoq6koIJHHXsebqFKN7RlbQnMwD6x" />
              </div>
              <div className="border-[1.5pt] border-primary rounded-full w-12 h-12 md:w-16 md:h-16 bg-white absolute -left-6 md:-left-8 shadow-md flex items-center justify-center text-xl animate-[spin_30s_linear_infinite_reverse]">
                ☁️
              </div>
              <div className="border-[1.5pt] border-primary rounded-full w-12 h-12 md:w-16 md:h-16 bg-white absolute -right-6 md:-right-8 shadow-md flex items-center justify-center text-xl animate-[spin_30s_linear_infinite_reverse]">
                🗄️
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CTA */}
      <AnimateOnScroll className="mt-20 md:mt-32 mb-16">
        <div className="bg-primary-container p-8 md:p-12 lg:p-20 rounded-2xl md:rounded-[3rem] text-on-primary-container relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary-fixed-dim mb-4 md:mb-6">
              Ready to see it in action?
            </h2>
            <p className="text-base md:text-lg text-on-primary-container/80 mb-8 md:mb-10 max-w-lg mx-auto">
              Book a personalized demo and see how Big Kokos fits your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform btn-glow-green text-center">
                Start Free Trial
              </Link>
              <Link href="/developers" className="border-[1.5pt] border-primary-fixed-dim text-primary-fixed-dim px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors text-center">
                View Documentation
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#bd957c_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
