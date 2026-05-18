import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Big 404 with coconut as "0" */}
        <div className="flex items-center justify-center gap-1 mb-8">
          <span className="font-[var(--font-headline)] text-[7rem] md:text-[10rem] font-extrabold text-primary leading-none">4</span>
          <img
            src="/kokos-logo.png"
            alt=""
            className="h-24 w-24 md:h-32 md:w-32 object-contain animate-[spin_8s_linear_infinite]"
          />
          <span className="font-[var(--font-headline)] text-[7rem] md:text-[10rem] font-extrabold text-primary leading-none">4</span>
        </div>

        <h1 className="font-[var(--font-headline)] text-2xl md:text-3xl font-bold text-primary mb-4">
          Page not found
        </h1>
        <p className="text-on-surface-variant mb-10 text-base md:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-burnt-orange text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all shadow-lg btn-glow text-center"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-bold hover:bg-primary hover:text-white transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
