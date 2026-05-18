import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { IconCoconut, IconLink, IconPalette, IconChat, IconBuild, IconHandshake } from "@/components/Icons";

const team = [
  { name: "Coco", role: "Lead Developer", desc: "10 years full-stack. Turns complex problems into clean code.", Icon: IconCoconut, color: "text-primary" },
  { name: "Kai", role: "Integration Specialist", desc: "CRM & API wizard. If it has an endpoint, Kai can connect it.", Icon: IconLink, color: "text-secondary" },
  { name: "Sol", role: "Product Designer", desc: "Makes complex look simple. Obsessed with user experience.", Icon: IconPalette, color: "text-burnt-orange" },
];

const values = [
  { Icon: IconChat, title: "Transparency over buzzwords", desc: "We say what we mean. No \"synergy\" or \"leverage\" — just clear communication about what we're building and why." },
  { Icon: IconBuild, title: "Code that lasts", desc: "We build for the long run. Clean architecture, documented code, scalable from day one." },
  { Icon: IconHandshake, title: "Clients become partners", desc: "You're not a ticket in our queue. We invest in understanding your business and growing with you." },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Hero */}
      <section className="mb-16 md:mb-24 max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            We&apos;re Big Kokos
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
            A team of builders who love hard problems and smooth solutions.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Story */}
      <AnimateOnScroll className="max-w-3xl mx-auto mb-20 md:mb-28">
        <div className="bg-surface-container-low border-[1.5pt] border-primary p-6 md:p-10 rounded-2xl md:rounded-3xl soft-shadow">
          <h2 className="font-[var(--font-headline)] text-xl md:text-2xl font-bold text-primary mb-4">Our story</h2>
          <div className="text-on-surface-variant space-y-4 leading-relaxed">
            <p>
              Born from frustration with agencies that overpromise and underdeliver. We started Big Kokos to be the dev partner we always wanted: honest, fast, and genuinely full-service.
            </p>
            <p>
              The coconut symbolises our approach — <strong className="text-primary">tough outside</strong> (security, reliability, robust architecture) and <strong className="text-primary">refreshing inside</strong> (simple UX, human communication, smooth workflows).
            </p>
            <p>
              Whether you need a landing page or a complete platform with CRM, mobile app, and automation — we don&apos;t say &ldquo;out of scope.&rdquo; We say &ldquo;how soon?&rdquo;
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Team */}
      <section className="mb-20 md:mb-28">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary">The team</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((person, i) => (
            <AnimateOnScroll key={person.name} delay={i * 150}>
              <div className="bg-white tough-border p-6 md:p-8 rounded-2xl soft-shadow text-center group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <person.Icon className={`w-10 h-10 ${person.color}`} />
                </div>
                <h3 className="font-[var(--font-headline)] text-lg font-bold text-primary">{person.name}</h3>
                <p className="font-[var(--font-mono)] text-xs text-burnt-orange uppercase mb-3">{person.role}</p>
                <p className="text-on-surface-variant text-sm">{person.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-20 md:mb-28">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary">What we believe</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <AnimateOnScroll key={v.title} delay={i * 150} animation={i === 1 ? "scale-in" : i === 0 ? "fade-in-left" : "fade-in-right"}>
              <div className="bg-surface-container p-6 md:p-8 rounded-2xl hover:bg-surface-container-high transition-all duration-300 hover:shadow-lg h-full group">
                <div className="w-12 h-12 bg-burnt-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <v.Icon className="w-6 h-6 text-burnt-orange" />
                </div>
                <h3 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-on-surface-variant text-sm">{v.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimateOnScroll animation="scale-in">
        <div className="bg-primary text-on-primary p-8 md:p-16 rounded-2xl md:rounded-[3rem] text-center">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4">Want to work together?</h2>
          <p className="text-primary-fixed-dim mb-8">We&apos;d love to hear about your project. Let&apos;s crack a coconut.</p>
          <Link href="/contact" className="inline-block bg-burnt-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all btn-glow">
            Start a Conversation
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
