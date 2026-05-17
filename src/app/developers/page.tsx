import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function DevelopersPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-7 space-y-5 md:space-y-6">
          <AnimateOnScroll animation="fade-in-left">
            <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-[var(--font-mono)] text-xs uppercase tracking-wider">
              Developer Portal
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={100}>
            <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight tracking-tight">
              Ship harder with{" "}
              <span className="text-secondary italic">tropical</span> precision.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={200}>
            <p className="text-base md:text-lg text-on-surface-variant max-w-xl">
              Welcome to the Oasis of Automation. We provide the tools, CLI, and
              API endpoints to turn your complex workflows into a breezy afternoon
              under a palm tree.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-left" delay={300}>
            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <Link href="/pricing" className="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-all duration-200 shadow-lg btn-glow text-center">
                Get API Keys
              </Link>
              <Link href="#docs" className="border-[1.5pt] border-primary text-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-primary/5 transition-colors duration-200 text-center">
                Read the Docs
              </Link>
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
              alt="Developer workstation in a tropical setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUAyx09Ozd2vEz5EX7muKRTq0ka5TLHLB3fPYUHNKj2xAeA7mrAAyUNFKSeRg2FipbzGUDHOEsnA1vW7admiDve_VSprZYhFg2RtPBGYs3MqXry1MA2r-AwOPLOvtKYW1Pv8dyyz9r1aBe4ZsNBe8DtUcZAoKO3GuvXI_L6i1MYyxzrWwZ07Xc767QcYJewASYio3s-cv5Pr0pzTwO-zGeJDGvIdKTOyc01dogA4_cg4ZHjyq3PlmqdqFoH7XknQqj7ctvcNiqRaEh"
            />
          </div>
        </AnimateOnScroll>
      </section>

      {/* The Coconut Terminal */}
      <section id="oasis" className="space-y-8 md:space-y-10">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto">
          <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary">
            The Coconut Terminal
          </h2>
          <p className="text-on-surface-variant mt-3 md:mt-4 text-sm md:text-base">
            Our CLI tool is built for speed. No fluff, just pure shell-powered
            coconut cracking.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="scale-in">
          <div className="bg-primary-container rounded-2xl md:rounded-3xl p-1 md:p-2 border-[1.5pt] border-primary shadow-2xl overflow-hidden hover:shadow-[0_24px_48px_-12px_rgba(74,46,27,0.2)] transition-shadow duration-500">
            <div className="bg-primary-container px-4 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-on-primary-container border-b border-white/10">
              <div className="flex items-center gap-4">
                <span className="font-[var(--font-mono)] text-xs md:text-sm opacity-70">
                  kokos --version 2.4.0
                </span>
                <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
                <span className="font-[var(--font-mono)] text-xs md:text-sm text-secondary-fixed hidden sm:block">
                  Status: Connected
                </span>
              </div>
            </div>
            <div className="p-4 md:p-8 font-[var(--font-mono)] text-xs md:text-sm text-on-primary-container leading-relaxed min-h-[300px] md:min-h-[400px]">
              <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="text-secondary-fixed">➜</span>
                <span>~ kokos auth login --method=oasis-token</span>
              </div>
              <div className="pl-6 md:pl-8 text-on-primary-container/60 mb-4 md:mb-6">
                Verifying credentials with the Coconut Server...
                <br />
                Success! Authenticated as developer-772.
              </div>
              <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                <span className="text-secondary-fixed">➜</span>
                <span className="break-all">~ kokos create leaf-node &quot;DataFlow_Primary&quot;</span>
              </div>
              <div className="pl-6 md:pl-8 mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-secondary-fixed">🌿</span>
                  <span className="text-secondary-fixed">
                    Planting node... [███████████████████���] 100%
                  </span>
                </div>
                <div className="mt-2 text-on-primary-container/80 bg-on-primary-fixed/30 p-3 md:p-4 rounded-lg border border-white/5">
                  <span className="text-on-tertiary-container font-bold">Node ID:</span> ln_8829_x99<br />
                  <span className="text-on-tertiary-container font-bold">Region:</span> tropical-east-1 (Oceania)<br />
                  <span className="text-on-tertiary-container font-bold">Status:</span>{" "}
                  <span className="bg-secondary/20 text-secondary-fixed px-2 py-0.5 rounded">RIPE</span>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4 animate-pulse">
                <span className="text-secondary-fixed">➜</span>
                <span className="w-2 h-5 bg-on-primary-container/50"></span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Bento Grid */}
      <section id="docs" className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4">
        {/* Documentation Card */}
        <AnimateOnScroll animation="fade-in-left" className="md:col-span-8">
          <Link href="/solutions" className="block bg-surface border-[1.5pt] border-primary p-6 md:p-8 rounded-2xl h-full group hover:shadow-xl transition-all duration-300 hover:border-secondary/50">
            <div className="space-y-3 md:space-y-4">
              <span className="text-3xl md:text-4xl block group-hover:scale-110 transition-transform duration-300 w-fit">📖</span>
              <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary">
                Comprehensive Documentation
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base">
                Everything from basic REST requests to advanced GraphQL mutations.
                We provide boilerplate for Go, Rust, and Node.js to get you up and
                running in minutes.
              </p>
            </div>
            <div className="mt-6 md:mt-8 flex items-center text-primary font-bold gap-2 group-hover:gap-4 group-hover:text-secondary transition-all">
              <span>Explore Docs</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </AnimateOnScroll>

        {/* SDK Card */}
        <AnimateOnScroll animation="fade-in-right" className="md:col-span-4">
          <div className="bg-secondary-container text-on-secondary-container p-6 md:p-8 rounded-2xl border-[1.5pt] border-primary flex flex-col items-center justify-center text-center space-y-4 h-full group hover:shadow-xl transition-all duration-300">
            <span className="text-4xl md:text-5xl group-hover:animate-bounce">📦</span>
            <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold">
              Official SDKs
            </h3>
            <p className="font-[var(--font-mono)] text-xs">
              PYTHON &bull; NODE &bull; GO &bull; RUBY
            </p>
            <button className="bg-primary text-on-primary w-full py-3 rounded-full font-bold mt-4 hover:scale-[1.03] transition-transform squishy-interaction">
              npm install @kokos/sdk
            </button>
          </div>
        </AnimateOnScroll>

        {/* CLI Card */}
        <AnimateOnScroll delay={100} className="md:col-span-4">
          <div className="bg-surface-container-high p-6 md:p-8 rounded-2xl border-[1.5pt] border-primary space-y-4 h-full group hover:shadow-xl transition-all duration-300 hover:border-secondary/50">
            <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary">
              Big Kokos CLI
            </h3>
            <p className="text-on-surface-variant text-sm md:text-base">
              Manage your whole infrastructure from your favorite terminal emulator.
            </p>
            <div className="font-[var(--font-mono)] text-xs md:text-sm bg-primary text-on-primary p-3 rounded-lg group-hover:animate-shimmer">
              brew install big-kokos
            </div>
          </div>
        </AnimateOnScroll>

        {/* Community Card */}
        <AnimateOnScroll delay={200} className="md:col-span-8">
          <div className="bg-surface-bright border-[1.5pt] border-primary p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="flex-1 space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 text-secondary">
                  <span>👥</span>
                  <span className="font-[var(--font-mono)] text-xs uppercase font-bold tracking-widest">
                    The Grove
                  </span>
                </div>
                <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary">
                  Join the developer community.
                </h3>
                <p className="text-on-surface-variant text-sm md:text-base">
                  Collaborate with thousands of engineers building autonomous
                  systems. Share templates, get help, and grow together.
                </p>
                <button className="text-primary border-b-2 border-primary font-bold py-1 hover:text-secondary hover:border-secondary transition-colors">
                  Join Discord
                </button>
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

      {/* Network Pulse */}
      <AnimateOnScroll className="py-8 md:py-12 flex flex-col items-center text-center space-y-6 md:space-y-8">
        <div className="relative inline-flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-secondary/5 rounded-full animate-pulse"></div>
          <div className="flex gap-4 text-4xl md:text-6xl">
            <span className="opacity-30 animate-[pulse_3s_ease-in-out_infinite]">🌿</span>
            <span className="animate-[pulse_3s_ease-in-out_infinite_0.5s]">🌿</span>
            <span className="opacity-30 animate-[pulse_3s_ease-in-out_infinite_1s]">🌿</span>
          </div>
        </div>
        <div>
          <h4 className="font-[var(--font-mono)] text-xs text-secondary font-bold mb-2 uppercase">
            NETWORK PULSE
          </h4>
          <p className="font-[var(--font-headline)] text-xl md:text-2xl font-semibold text-primary">
            99.9% Ripe. Your flows are active.
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
