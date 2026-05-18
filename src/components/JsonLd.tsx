export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Big Kokos",
    url: "https://bkokos.vercel.app",
    logo: "https://bkokos.vercel.app/android-chrome-512x512.png",
    description:
      "Full-service development: websites, mobile apps, CRM integrations, automation, and dashboards.",
    email: "hello@bigkokos.dev",
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "CRM Integration",
      "Business Automation",
      "Dashboard & BI Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
