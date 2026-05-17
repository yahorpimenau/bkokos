import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container border-t-[1.5pt] border-primary">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 px-6 py-10 md:py-12 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
          <Link href="/" className="font-[var(--font-headline)] text-2xl font-extrabold text-primary mb-4 block hover:scale-105 transition-transform w-fit">
            Big Kokos
          </Link>
          <p className="text-on-surface-variant text-sm pr-4">
            Premium automation for technical teams that value both strength and
            serenity.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">
            Product
          </span>
          <Link href="/developers" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Documentation
          </Link>
          <Link href="/solutions" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Solutions
          </Link>
          <Link href="/pricing" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Pricing
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">
            Legal
          </span>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Security Audit
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">
            Community
          </span>
          <Link href="/developers" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Automation Lab
          </Link>
          <Link href="/developers#oasis" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            The Oasis
          </Link>
          <a href="https://github.com/yahorpimenau/bkokos" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            GitHub
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs md:text-sm">
          &copy; 2024 Big Kokos Automation. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-6 text-on-surface-variant">
          <a href="#" className="hover:text-secondary transition-colors" aria-label="Website">🌐</a>
          <a href="https://github.com/yahorpimenau/bkokos" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="GitHub">💻</a>
          <Link href="/pricing" className="hover:text-secondary transition-colors" aria-label="Settings">⚙️</Link>
        </div>
      </div>
    </footer>
  );
}
