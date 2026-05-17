export default function DevelopersPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-[var(--font-mono)] text-xs uppercase tracking-wider">
            Developer Portal
          </div>
          <h1 className="font-[var(--font-headline)] text-5xl font-extrabold text-primary leading-tight tracking-tight">
            Ship harder with{" "}
            <span className="text-secondary italic">tropical</span> precision.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl">
            Welcome to the Oasis of Automation. We provide the tools, CLI, and
            API endpoints to turn your complex workflows into a breezy afternoon
            under a palm tree.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-200 shadow-lg">
              Get API Keys
            </button>
            <button className="border-[1.5pt] border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-colors duration-200">
              Read the Docs
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="border-[1.5pt] border-primary bg-surface p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-on-secondary-container"></div>
            </div>
            <img
              className="rounded-lg w-full object-cover h-64 border border-outline-variant"
              alt="Developer workstation in a tropical setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUAyx09Ozd2vEz5EX7muKRTq0ka5TLHLB3fPYUHNKj2xAeA7mrAAyUNFKSeRg2FipbzGUDHOEsnA1vW7admiDve_VSprZYhFg2RtPBGYs3MqXry1MA2r-AwOPLOvtKYW1Pv8dyyz9r1aBe4ZsNBe8DtUcZAoKO3GuvXI_L6i1MYyxzrWwZ07Xc767QcYJewASYio3s-cv5Pr0pzTwO-zGeJDGvIdKTOyc01dogA4_cg4ZHjyq3PlmqdqFoH7XknQqj7ctvcNiqRaEh"
            />
          </div>
        </div>
      </section>

      {/* The Coconut Terminal */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-[var(--font-headline)] text-3xl font-bold text-primary">
            The Coconut Terminal
          </h2>
          <p className="text-on-surface-variant mt-4">
            Our CLI tool is built for speed. No fluff, just pure shell-powered
            coconut cracking.
          </p>
        </div>
        <div className="bg-primary-container rounded-3xl p-1 md:p-2 border-[1.5pt] border-primary shadow-2xl overflow-hidden">
          <div className="bg-primary-container px-6 py-4 flex justify-between items-center text-on-primary-container border-b border-white/10">
            <div className="flex items-center gap-4">
              <span className="font-[var(--font-mono)] text-sm opacity-70">
                kokos --version 2.4.0
              </span>
              <div className="h-4 w-px bg-white/20"></div>
              <span className="font-[var(--font-mono)] text-sm text-secondary-fixed">
                Status: Connected
              </span>
            </div>
          </div>
          <div className="p-8 font-[var(--font-mono)] text-sm text-on-primary-container leading-relaxed min-h-[400px]">
            <div className="flex gap-4 mb-4">
              <span className="text-secondary-fixed">&#10140;</span>
              <span>~ kokos auth login --method=oasis-token</span>
            </div>
            <div className="pl-8 text-on-primary-container/60 mb-6">
              Verifying credentials with the Coconut Server...
              <br />
              Success! Authenticated as developer-772.
            </div>
            <div className="flex gap-4 mb-4">
              <span className="text-secondary-fixed">&#10140;</span>
              <span>~ kokos create leaf-node &quot;DataFlow_Primary&quot;</span>
            </div>
            <div className="pl-8 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-secondary-fixed">🌿</span>
                <span className="text-secondary-fixed">
                  Planting node... [████████████████████] 100%
                </span>
              </div>
              <div className="mt-2 text-on-primary-container/80 bg-on-primary-fixed/30 p-4 rounded-lg border border-white/5">
                <span className="text-on-tertiary-container font-bold">
                  Node ID:
                </span>{" "}
                ln_8829_x99
                <br />
                <span className="text-on-tertiary-container font-bold">
                  Region:
                </span>{" "}
                tropical-east-1 (Oceania)
                <br />
                <span className="text-on-tertiary-container font-bold">
                  Status:
                </span>{" "}
                <span className="bg-secondary/20 text-secondary-fixed px-2 py-0.5 rounded">
                  RIPE
                </span>
              </div>
            </div>
            <div className="flex gap-4 animate-pulse">
              <span className="text-secondary-fixed">&#10140;</span>
              <span className="w-2 h-5 bg-on-primary-container/50"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Documentation Card */}
        <div className="md:col-span-8 bg-surface border-[1.5pt] border-primary p-8 rounded-2xl flex flex-col justify-between group hover:shadow-xl transition-all">
          <div className="space-y-4">
            <span className="text-secondary text-4xl">📖</span>
            <h3 className="font-[var(--font-headline)] text-2xl font-semibold text-primary">
              Comprehensive Documentation
            </h3>
            <p className="text-on-surface-variant">
              Everything from basic REST requests to advanced GraphQL mutations.
              We provide boilerplate for Go, Rust, and Node.js to get you up and
              running in minutes.
            </p>
          </div>
          <div className="mt-8 flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all">
            <span>Explore Docs</span>
            <span>→</span>
          </div>
        </div>

        {/* SDK Card */}
        <div className="md:col-span-4 bg-secondary-container text-on-secondary-container p-8 rounded-2xl border-[1.5pt] border-primary flex flex-col items-center justify-center text-center space-y-4">
          <span className="text-5xl">📦</span>
          <h3 className="font-[var(--font-headline)] text-2xl font-semibold">
            Official SDKs
          </h3>
          <p className="font-[var(--font-mono)] text-xs">
            PYTHON &bull; NODE &bull; GO &bull; RUBY
          </p>
          <button className="bg-primary text-on-primary w-full py-3 rounded-full font-bold mt-4 hover:scale-[1.02] transition-transform">
            npm install @kokos/sdk
          </button>
        </div>

        {/* CLI Card */}
        <div className="md:col-span-4 bg-surface-container-high p-8 rounded-2xl border-[1.5pt] border-primary space-y-4">
          <h3 className="font-[var(--font-headline)] text-2xl font-semibold text-primary">
            Big Kokos CLI
          </h3>
          <p className="text-on-surface-variant">
            Manage your whole infrastructure from your favorite terminal
            emulator.
          </p>
          <div className="font-[var(--font-mono)] text-sm bg-primary text-on-primary p-3 rounded-lg">
            brew install big-kokos
          </div>
        </div>

        {/* Community Card */}
        <div className="md:col-span-8 bg-surface-bright border-[1.5pt] border-primary p-8 rounded-2xl relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-secondary">
                <span>👥</span>
                <span className="font-[var(--font-mono)] text-xs uppercase font-bold tracking-widest">
                  The Grove
                </span>
              </div>
              <h3 className="font-[var(--font-headline)] text-2xl font-semibold text-primary">
                Join the developer community.
              </h3>
              <p className="text-on-surface-variant">
                Collaborate with thousands of engineers building autonomous
                systems. Share templates, get help, and grow together in The
                Grove.
              </p>
              <button className="text-primary border-b-2 border-primary font-bold py-1 hover:text-secondary hover:border-secondary transition-colors">
                Join Discord
              </button>
            </div>
            <div className="w-full md:w-48 h-48 rounded-full border-8 border-secondary/10 overflow-hidden shrink-0">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="Developer community"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz2mI7cGdZudjUH9k-sXxm37YStEV-y2nRIESZr2n9u_zpXSQwu0soFV9GTSzdNip7_oeZGscv3w7p2eb6m8pP7mQxOuFhqxOaBrR_Z0Z7QfSTf_iFlvoAxAHN_Z2LhWUvS04kiI6Yt9IZjwm4K0Qo-piHaJX5qxp3FsvSGOkAU77S5aT2twq810AtLj2njtXy7ItFr5W55zISH0QtK2uhEmMO59lxv4295brNQma6WxBI05ZiHLu6r2dOiJQWHFyW7qmJ1R5MVMDs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Network Pulse */}
      <section className="py-12 flex flex-col items-center text-center space-y-8">
        <div className="relative inline-flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-secondary/5 rounded-full animate-pulse"></div>
          <div className="flex gap-4 text-6xl">
            <span className="opacity-30">🌿</span>
            <span>🌿</span>
            <span className="opacity-30">🌿</span>
          </div>
        </div>
        <div>
          <h4 className="font-[var(--font-mono)] text-xs text-secondary font-bold mb-2 uppercase">
            NETWORK PULSE
          </h4>
          <p className="font-[var(--font-headline)] text-2xl font-semibold text-primary">
            99.9% Ripe. Your flows are active.
          </p>
        </div>
      </section>
    </div>
  );
}
