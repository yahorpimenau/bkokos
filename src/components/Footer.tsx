import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container border-t-[1.5pt] border-primary">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 px-6 py-10 md:py-12 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
          <div className="mb-4"><Logo size="md" /></div>
          <p className="text-on-surface-variant text-sm pr-4">
            End-to-end development for startups and growing businesses. One team, full stack.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">Services</span>
          <Link href="/services" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">All Services</Link>
          <Link href="/process" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">How We Work</Link>
          <Link href="/pricing" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Pricing</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">Company</span>
          <Link href="/about" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">About</Link>
          <Link href="/contact" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Contact</Link>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">Get in Touch</span>
          <a href="mailto:hello@bigkokos.dev" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">hello@bigkokos.dev</a>
          <a href="https://github.com/yahorpimenau/bkokos" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">GitHub</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs md:text-sm">&copy; {new Date().getFullYear()} Big Kokos. All rights reserved.</p>
        <div className="flex gap-5 text-on-surface-variant text-sm">
          <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
          <Link href="/process" className="hover:text-secondary transition-colors">Process</Link>
          <Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
