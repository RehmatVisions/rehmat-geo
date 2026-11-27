import { articles } from "@/lib/content";

const SITE_URL = "https://geo-by-rehmat.vercel.app";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/case-studies",
  "/contact",
  "/geo-audit",
  "/blog",
  "/resources",
];

export default function sitemap() {
  const staticPages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));

  const blogPages = articles.map(([slug]) => ({
    url: `${SITE_URL}/blog/${slug}`,
  }));

  return [...staticPages, ...blogPages];
}
