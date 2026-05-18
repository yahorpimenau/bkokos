import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { posts } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights on web development, CRM integration, automation, and building products that scale.",
};

const categoryColors: Record<string, string> = {
  "BI & Analytics": "bg-burnt-orange/10 text-burnt-orange",
  "CRM & Automation": "bg-secondary/10 text-secondary",
  "Startups": "bg-primary/10 text-primary",
  "Web Development": "bg-burnt-orange/10 text-burnt-orange",
  "Automation": "bg-secondary/10 text-secondary",
  "Engineering": "bg-primary/10 text-primary",
};

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Hero */}
      <section className="mb-14 md:mb-20 text-center">
        <AnimateOnScroll>
          <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-[var(--font-mono)] text-xs mb-6 uppercase">
            Insights
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h1 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Blog
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto">
            Practical takes on building products, connecting tools, and scaling without the chaos.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Featured post */}
      <AnimateOnScroll className="mb-10 md:mb-14">
        <Link href={`/blog/${featured.slug}`} className="block bg-primary text-white rounded-2xl md:rounded-3xl p-8 md:p-14 overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-burnt-orange/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-white/80">{featured.category}</span>
              <span className="text-white/40 text-xs font-[var(--font-mono)]">{featured.readTime} read</span>
            </div>
            <h2 className="font-[var(--font-headline)] text-2xl md:text-3xl font-extrabold mb-4 group-hover:text-burnt-orange transition-colors">
              {featured.title}
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">{featured.excerpt}</p>
            <span className="inline-flex items-center gap-2 text-burnt-orange font-bold text-sm group-hover:gap-3 transition-all">
              Read article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </div>
        </Link>
      </AnimateOnScroll>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {rest.map((post, i) => (
          <AnimateOnScroll key={post.slug} delay={i * 100}>
            <Link href={`/blog/${post.slug}`} className="block bg-white border-[1.5pt] border-primary/10 rounded-2xl p-6 md:p-8 h-full group hover:shadow-xl hover:border-burnt-orange/20 hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>
                  {post.category}
                </span>
                <span className="text-on-surface-variant/50 text-xs font-[var(--font-mono)]">{post.readTime}</span>
              </div>
              <h3 className="font-[var(--font-headline)] text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-burnt-orange transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-burnt-orange font-bold text-sm group-hover:gap-3 transition-all mt-auto">
                Read more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
