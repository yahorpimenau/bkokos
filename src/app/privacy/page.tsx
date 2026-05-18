export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
      <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl font-extrabold text-primary mb-8 tracking-tight">
        Privacy Policy
      </h1>
      <div className="text-on-surface-variant space-y-6 leading-relaxed text-sm md:text-base">
        <p className="text-on-surface-variant/60 text-sm">Last updated: May 2025</p>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">1. Who we are</h2>
          <p>Big Kokos (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates bigkokos.dev. This policy explains how we collect, use, and protect your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable privacy laws.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">2. Data we collect</h2>
          <p><strong className="text-primary">Information you provide:</strong> Name, email, company name, and project details when you submit our contact form.</p>
          <p className="mt-2"><strong className="text-primary">Automatically collected:</strong> If you accept analytics cookies, we may collect anonymized usage data (pages visited, device type, country) via privacy-respecting analytics. We do not use third-party ad trackers.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">3. How we use your data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to your inquiries and provide project quotes</li>
            <li>To communicate about services you requested</li>
            <li>To improve our website (with your consent)</li>
          </ul>
          <p className="mt-2">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">4. Cookies</h2>
          <p><strong className="text-primary">Essential cookies:</strong> Required for the website to function. These cannot be disabled.</p>
          <p className="mt-2"><strong className="text-primary">Analytics cookies:</strong> Only set with your explicit consent. You can change your preference at any time by clearing your browser cookies.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">5. Your rights (GDPR)</h2>
          <p>If you are in the EU/EEA, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong className="text-primary">Access</strong> — request a copy of your personal data</li>
            <li><strong className="text-primary">Rectification</strong> — correct inaccurate data</li>
            <li><strong className="text-primary">Erasure</strong> — request deletion of your data</li>
            <li><strong className="text-primary">Portability</strong> — receive your data in a machine-readable format</li>
            <li><strong className="text-primary">Object</strong> — object to processing of your data</li>
            <li><strong className="text-primary">Withdraw consent</strong> — at any time, without affecting prior processing</li>
          </ul>
          <p className="mt-2">To exercise any of these rights, email us at <a href="mailto:hello@bigkokos.dev" className="text-burnt-orange underline">hello@bigkokos.dev</a>. We will respond within 30 days.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">6. Data retention</h2>
          <p>We retain contact form submissions for 24 months. Analytics data is anonymized and aggregated. You may request deletion at any time.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">7. Security</h2>
          <p>We use HTTPS encryption, secure hosting, and access controls to protect your data. No data is stored in insecure or publicly accessible systems.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-headline)] text-lg font-bold text-primary mb-2">8. Contact</h2>
          <p>For privacy-related questions: <a href="mailto:hello@bigkokos.dev" className="text-burnt-orange underline">hello@bigkokos.dev</a></p>
        </section>
      </div>
    </div>
  );
}
