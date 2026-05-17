import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full mt-auto bg-surface-container border-t-[1.5pt] border-primary">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 px-6 py-10 md:py-12 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
          <div className="mb-4">
            <Logo size="md" />
          </div>
          <p className="text-on-surface-variant text-sm pr-4">
            Intelligent automation platform for engineering teams that ship fast and stay secure.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">
            Platform
          </span>
          <Link href="/solutions" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Solutions
          </Link>
          <Link href="/developers" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Documentation
          </Link>
          <Link href="/pricing" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Pricing
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">
            Company
          </span>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            About
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-xs uppercase tracking-wider mb-1 md:mb-2">
            Resources
          </span>
          <Link href="/developers" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            API Reference
          </Link>
          <a href="https://github.com/yahorpimenau/bkokos" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            GitHub
          </a>
          <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm">
            Status
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs md:text-sm">
          &copy; 2024 Big Kokos. All rights reserved.
        </p>
        <div className="flex gap-5 text-on-surface-variant text-sm">
          <a href="https://github.com/yahorpimenau/bkokos" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-secondary transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
