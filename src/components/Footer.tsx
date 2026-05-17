import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container border-t-[1.5pt] border-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 py-12 max-w-7xl mx-auto">
        <div>
          <div className="font-[var(--font-headline)] text-2xl font-extrabold text-primary mb-4">
            Big Kokos
          </div>
          <p className="text-on-surface-variant text-sm pr-8">
            Premium automation for technical teams that value both strength and
            serenity.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
            Product
          </span>
          <Link
            href="/developers"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Documentation
          </Link>
          <Link
            href="/solutions"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Pricing
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
            Legal
          </span>
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Security Audit
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-sm uppercase tracking-wider mb-2">
            Community
          </span>
          <Link
            href="/developers"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            Automation Lab
          </Link>
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            The Oasis Beta
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-sm">
          &copy; 2024 Big Kokos Automation. All rights reserved.
        </p>
        <div className="flex gap-6 text-primary">
          <span className="cursor-pointer hover:text-secondary">🌐</span>
          <span className="cursor-pointer hover:text-secondary">🔗</span>
          <span className="cursor-pointer hover:text-secondary">⚙️</span>
        </div>
      </div>
    </footer>
  );
}
