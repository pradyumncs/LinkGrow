import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linkgrow.online";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/go/", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "Google-Extended",
          "CCBot",
          "PerplexityBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "bingbot",
          "Amazonbot",
        ],
        allow: "/",
        disallow: ["/go/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
