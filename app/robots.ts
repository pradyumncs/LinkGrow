import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
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
    sitemap: "https://linkgrow.app/sitemap.xml",
  };
}
