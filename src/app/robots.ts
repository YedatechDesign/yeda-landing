import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const allowAll = { allow: "/" as const };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "bingbot", ...allowAll },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
