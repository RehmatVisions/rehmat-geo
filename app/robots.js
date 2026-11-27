const SITE_URL = "https://geo-by-rehmat.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "CCBot",
          "Amazonbot",
          "meta-externalagent",
          "Meta-ExternalFetcher",
          "Meta-WebIndexer",
          "Bytespider",
          "cohere-ai",
          "YouBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
