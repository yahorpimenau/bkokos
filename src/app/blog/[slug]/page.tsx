import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/blog";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const currentIndex = posts.indexOf(post);
  const nextPost = posts[currentIndex + 1] || posts[0];
  const prevPost = posts[currentIndex - 1] || posts[posts.length - 1];

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      {/* Back */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-8 group">
        <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
        All articles
      </Link>

      {/* Header */}
      <div className="mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-burnt-orange/10 text-burnt-orange rounded-full text-xs font-bold">
            {post.category}
          </span>
          <span className="text-on-surface-variant/50 text-xs font-[var(--font-mono)]">{post.readTime} read</span>
          <span className="text-on-surface-variant/50 text-xs font-[var(--font-mono)]">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>
        <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
          {post.title}
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {post.content.map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2 key={i} className="font-[var(--font-headline)] text-xl md:text-2xl font-bold text-primary mt-10 mb-4">
                {block.replace("## ", "")}
              </h2>
            );
          }

          // Handle blocks with headers and body
          if (block.includes("\n\n")) {
            const parts = block.split("\n\n");
            return (
              <div key={i} className="space-y-4">
                {parts.map((part, j) => {
                  if (part.startsWith("## ")) {
                    return (
                      <h2 key={j} className="font-[var(--font-headline)] text-xl md:text-2xl font-bold text-primary mt-10 mb-2">
                        {part.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (part.startsWith("- **")) {
                    const items = part.split("\n").filter(Boolean);
                    return (
                      <ul key={j} className="space-y-2">
                        {items.map((item, k) => {
                          const cleaned = item.replace(/^- /, "");
                          return (
                            <li key={k} className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
                              <span className="text-burnt-orange mt-1 shrink-0">&#8226;</span>
                              <span dangerouslySetInnerHTML={{ __html: cleaned.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>') }} />
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                  return (
                    <p key={j} className="text-on-surface-variant leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: part.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>') }}
                    />
                  );
                })}
              </div>
            );
          }

          return (
            <p key={i} className="text-on-surface-variant leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>') }}
            />
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-14 md:mt-20 bg-primary text-white rounded-2xl p-8 md:p-10 text-center">
        <h3 className="font-[var(--font-headline)] text-xl md:text-2xl font-bold mb-3">Want to discuss this for your project?</h3>
        <p className="text-white/70 mb-6 text-sm md:text-base">We&apos;ll give you honest advice — no sales pitch.</p>
        <Link href="/contact" className="inline-block bg-burnt-orange text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all shadow-lg btn-glow">
          Get in Touch
        </Link>
      </div>

      {/* Nav */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        <Link href={`/blog/${prevPost.slug}`} className="bg-surface-container p-4 md:p-5 rounded-xl hover:bg-surface-container-high transition-colors group">
          <span className="text-xs text-on-surface-variant/50 block mb-1">&larr; Previous</span>
          <span className="font-[var(--font-headline)] text-sm font-bold text-primary group-hover:text-burnt-orange transition-colors line-clamp-2">{prevPost.title}</span>
        </Link>
        <Link href={`/blog/${nextPost.slug}`} className="bg-surface-container p-4 md:p-5 rounded-xl hover:bg-surface-container-high transition-colors text-right group">
          <span className="text-xs text-on-surface-variant/50 block mb-1">Next &rarr;</span>
          <span className="font-[var(--font-headline)] text-sm font-bold text-primary group-hover:text-burnt-orange transition-colors line-clamp-2">{nextPost.title}</span>
        </Link>
      </div>
    </article>
  );
}
