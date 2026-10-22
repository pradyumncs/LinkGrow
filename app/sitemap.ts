import { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linkgrow.online";
  const now = new Date();

  // Core base pages
  const coreRoutes = [
    "",
    "/features",
    "/compare",
    "/tools",
    "/guides",
    "/privacy",
    "/terms",
    "/manifesto",
  ];

  const coreSitemaps = coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const articleSitemaps = ARTICLES.map((article) => ({
    url: `${baseUrl}/guides/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...coreSitemaps, ...articleSitemaps];
}
