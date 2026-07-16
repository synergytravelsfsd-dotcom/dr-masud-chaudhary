import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { publications } from "@/content/publications";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/leadership",
  "/consulting",
  "/speaking",
  "/projects",
  "/publications",
  "/articles",
  "/research",
  "/media",
  "/interviews",
  "/gallery",
  "/events",
  "/ivp",
  "/pvpa",
  "/companies",
  "/partners",
  "/case-studies",
  "/downloads",
  "/newsletter",
  "/contact",
  "/knowledge",
  "/podcast",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...publications.map((p) => ({
      url: `${base}/publications/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.55,
    })),
  ];
}
