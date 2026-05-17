import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function DevelopersPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12 space-y-16 md:space-y-24">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-7 space-y-5 md:space-y-6">
          <AnimateOnScroll animation="fade-in-left">
            <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-[var(--font-mono)] text-xs uppercase tracking-wider">
              Developer Platform
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={100}>
            <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight">
              APIs & tools that
              <br />
              <span className="text-burnt-orange">respect your time.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={200}>
            <p className="text-base md:text-lg text-on-surface-variant max-w-xl">
              Comprehensive CLI, type-safe SDKs, and APIs designed for developer
              productivity. From first request to production in minutes.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={300}>
            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <Link href="/pricing" className="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-all duration-200 shadow-lg btn-glow text-center">
                Get API Keys
              </Link>
              <a href="#cli" className="border-[1.5pt] border-primary text-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-primary/5 transition-colors duration-200 text-center">
                View CLI Docs
              </a>
            </div>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animation="fade-in-right" delay={200} className="lg:col-span-5 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="border-[1.5pt] border-primary bg-surface p-4 md:p-8 rounded-2xl shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-on-secondary-container"></div>
            </div>
            <img
              className="rounded-lg w-full object-cover h-48 md:h-64 border border-outline-variant"
              alt="Developer workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUAyx09Ozd2vEz5EX7muKRTq0ka5TLHLB3fPYUHNKj2xAeA7mrAAyUNFKSeRg2FipbzGUDHOEsnA1vW7admiDve_VSprZYhFg2RtPBGYs3MqXry1MA2r-AwOPLOvtKYW1Pv8dyyz9r1aBe4ZsNBe8DtUcZAoKO3GuvXI_L6i1MYyxzrWwZ07Xc767QcYJewASYio3s-cv5Pr0pzTwO-zGeJDGvIdKTOyc01dogA4_cg4ZHjyq3PlmqdqFoH7XknQqj7ctvcNiqRaEh"
            />
          </div>
        </AnimateOnScroll>
      </section>

      {/* CLI Section */}
      <section id="cli" className="space-y-8 md:space-y-10">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary">
            Command-line first
          </h2>
          <p className="text-on-surface-variant mt-3 md:mt-4 text-sm md:text-base">
            Manage your entire automation infrastructure from the terminal.
            Fast, scriptable, and designed for CI/CD.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="scale-in">
          <div className="bg-primary-container rounded-2xl md:rounded-3xl p-1 md:p-2 border-[1.5pt] border-primary shadow-2xl overflow-hidden hover:shadow-[0_24px_48px_-12px_rgba(74,46,27,0.2)] transition-shadow duration-500">
            <div className="bg-primary-container px-4 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-on-primary-container border-b border-white/10">
              <div className="flex items-center gap-4">
                <span className="font-[var(--font-mono)] text-xs md:text-sm opacity-70">
                  kokos v2.4.0
                </span>
                <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
                <span className="font-[var(--font-mono)] text-xs md:text-sm text-secondary-fixed hidden sm:block">
                  Connected
                </span>
              </div>
            </div>
            <div className="p-4 md:p-8 font-[var(--font-mono)] text-xs md:text-sm text-on-primary-container leading-relaxed min-h-[280px] md:min-h-[380px]">
              <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="text-secondary-fixed">$</span>
                <span>kokos auth login --token $API_KEY</span>
              </div>
              <div className="pl-6 md:pl-8 text-on-primary-container/60 mb-4 md:mb-6">
                &#10003; Authenticated as team-engineering
              </div>
              <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="text-secondary-fixed">$</span>
                <span className="break-all">kokos pipeline create &quot;data-sync&quot; --trigger=webhook</span>
              </div>
              <div className="pl-6 md:pl-8 mb-4 md:mb-6">
                <div className="mt-2 text-on-primary-container/80 bg-on-primary-fixed/30 p-3 md:p-4 rounded-lg border border-white/5">
                  <span className="text-on-tertiary-container font-bold">Pipeline ID:</span> pipe_29x8k<br />
                  <span className="text-on-tertiary-container font-bold">Region:</span> us-east-1<br />
                  <span className="text-on-tertiary-container font-bold">Status:</span>{" "}
                  <span className="bg-secondary/20 text-secondary-fixed px-2 py-0.5 rounded">ACTIVE</span><br />
                  <span className="text-on-tertiary-container font-bold">Endpoint:</span> https://api.bigkokos.io/hook/29x8k
                </div>
              </div>
              <div className="flex gap-3 md:gap-4 mb-3">
                <span className="text-secondary-fixed">$</span>
                <span>kokos logs --tail --pipeline data-sync</span>
              </div>
              <div className="pl-6 md:pl-8 text-on-primary-container/60">
                [12:04:02] Execution started &bull; trigger: webhook<br />
                [12:04:02] Step 1/3: transform &#10003;<br />
                [12:04:03] Step 2/3: validate &#10003;
              </div>
              <div className="flex gap-3 md:gap-4 animate-pulse mt-3">
                <span className="text-secondary-fixed">$</span>
                <span className="w-2 h-5 bg-on-primary-container/50"></span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Resources Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <AnimateOnScroll animation="fade-in-left" className="md:col-span-8">
          <Link href="/solutions" className="block bg-surface border-[1.5pt] border-primary p-6 md:p-8 rounded-2xl h-full group hover:shadow-xl transition-all duration-300 hover:border-burnt-orange/30">
            <div className="space-y-3 md:space-y-4">
              <span className="text-3xl md:text-4xl block group-hover:scale-110 transition-transform duration-300 w-fit">📖</span>
              <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary">
                API Reference
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base">
                Complete REST & GraphQL documentation with examples in Python, Node.js,
                Go, and Ruby. Interactive request builder included.
              </p>
            </div>
            <div className="mt-6 md:mt-8 flex items-center text-burnt-orange font-bold gap-2 group-hover:gap-4 transition-all">
              <span>Explore API</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-right" className="md:col-span-4">
          <div className="bg-secondary-container text-on-secondary-container p-6 md:p-8 rounded-2xl border-[1.5pt] border-primary flex flex-col items-center justify-center text-center space-y-4 h-full group hover:shadow-xl transition-all duration-300">
            <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform">📦</span>
            <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold">
              Official SDKs
            </h3>
            <p className="font-[var(--font-mono)] text-xs">
              PYTHON &bull; NODE &bull; GO &bull; RUBY
            </p>
            <button className="bg-primary text-on-primary w-full py-3 rounded-full font-bold mt-4 hover:scale-[1.03] transition-transform squishy-interaction text-sm">
              npm install @bigkokos/sdk
            </button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100} className="md:col-span-4">
          <div className="bg-surface-container-high p-6 md:p-8 rounded-2xl border-[1.5pt] border-primary space-y-4 h-full group hover:shadow-xl transition-all duration-300 hover:border-burnt-orange/30">
            <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary">
              CLI Tool
            </h3>
            <p className="text-on-surface-variant text-sm md:text-base">
              Full infrastructure management from your terminal. Works with any CI/CD system.
            </p>
            <div className="font-[var(--font-mono)] text-xs md:text-sm bg-primary text-on-primary p-3 rounded-lg">
              brew install bigkokos/tap/kokos
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="md:col-span-8">
          <div className="bg-surface-bright border-[1.5pt] border-primary p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-1 space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="font-[var(--font-mono)] text-xs uppercase font-bold tracking-widest">
                    Community
                  </span>
                </div>
                <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary">
                  Join 5,000+ developers
                </h3>
                <p className="text-on-surface-variant text-sm md:text-base">
                  Share pipeline templates, get help from the team, and connect
                  with engineers building production automation.
                </p>
                <a href="#" className="inline-block text-primary border-b-2 border-primary font-bold py-1 hover:text-burnt-orange hover:border-burnt-orange transition-colors">
                  Join Discord →
                </a>
              </div>
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-secondary/10 overflow-hidden shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Developer community"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz2mI7cGdZudjUH9k-sXxm37YStEV-y2nRIESZr2n9u_zpXSQwu0soFV9GTSzdNip7_oeZGscv3w7p2eb6m8pP7mQxOuFhqxOaBrR_Z0Z7QfSTf_iFlvoAxAHN_Z2LhWUvS04kiI6Yt9IZjwm4K0Qo-piHaJX5qxp3FsvSGOkAU77S5aT2twq810AtLj2njtXy7ItFr5W55zISH0QtK2uhEmMO59lxv4295brNQma6WxBI05ZiHLu6r2dOiJQWHFyW7qmJ1R5MVMDs"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Status */}
      <AnimateOnScroll className="py-8 md:py-12 flex flex-col items-center text-center space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
          <span className="font-[var(--font-mono)] text-xs text-secondary font-bold uppercase">
            All systems operational
          </span>
        </div>
        <p className="text-on-surface-variant text-sm">
          99.99% uptime over the last 90 days &bull; <a href="#" className="text-burnt-orange hover:underline">View status page</a>
        </p>
      </AnimateOnScroll>
    </div>
  );
}
