import { posts } from "@/data/blog";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bkokos.vercel.app";

  const staticPages = [
    "",
    "/services",
    "/process",
    "/pricing",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.7,
  }));

  const blogPages = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
