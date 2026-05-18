"use client";

const BASE = "https://raw.githubusercontent.com/yahorpimenau/thesvg/main/public/icons";

const rows = [
  [
    { slug: "salesforce", name: "Salesforce" },
    { slug: "hubspot", name: "HubSpot" },
    { slug: "zoho", name: "Zoho" },
    { slug: "sap", name: "SAP" },
    { slug: "stripe", name: "Stripe" },
    { slug: "shopify", name: "Shopify" },
    { slug: "slack", name: "Slack" },
    { slug: "jira", name: "Jira" },
    { slug: "notion", name: "Notion" },
    { slug: "asana", name: "Asana" },
    { slug: "monday", name: "Monday" },
    { slug: "trello", name: "Trello" },
    { slug: "zapier", name: "Zapier" },
    { slug: "make", name: "Make" },
    { slug: "airtable", name: "Airtable" },
  ],
  [
    { slug: "aws", name: "AWS" },
    { slug: "google-cloud", name: "Google Cloud" },
    { slug: "azure-devops", name: "Azure" },
    { slug: "vercel", name: "Vercel" },
    { slug: "docker", name: "Docker" },
    { slug: "kubernetes", name: "Kubernetes" },
    { slug: "github", name: "GitHub" },
    { slug: "gitlab", name: "GitLab" },
    { slug: "figma", name: "Figma" },
    { slug: "react", name: "React" },
    { slug: "flutter", name: "Flutter" },
    { slug: "wordpress", name: "WordPress" },
    { slug: "netlify", name: "Netlify" },
    { slug: "supabase", name: "Supabase" },
    { slug: "postgresql", name: "PostgreSQL" },
  ],
];

function MarqueeRow({ items, reverse = false }: { items: typeof rows[0]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex gap-4 md:gap-6 w-max ${reverse ? "animate-[marquee-reverse_40s_linear_infinite]" : "animate-[marquee_40s_linear_infinite]"}`}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.slug}-${i}`}
            className="flex items-center gap-3 bg-white border-[1.5pt] border-primary/10 rounded-2xl px-5 py-3 md:px-6 md:py-4 hover:border-burnt-orange/30 hover:shadow-lg hover:scale-105 transition-all duration-300 shrink-0 group"
          >
            <img
              src={`${BASE}/${item.slug}/default.svg`}
              alt={item.name}
              className="w-7 h-7 md:w-8 md:h-8 object-contain"
              loading="lazy"
            />
            <span className="font-medium text-primary text-sm md:text-base whitespace-nowrap group-hover:text-burnt-orange transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsMarquee() {
  return (
    <div className="space-y-4 md:space-y-6">
      <MarqueeRow items={rows[0]} />
      <MarqueeRow items={rows[1]} reverse />
    </div>
  );
}
