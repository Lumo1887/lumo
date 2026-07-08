import type { MetadataRoute } from "next";
import { modules } from "@/lib/modules";

const BASE_URL = "https://lumo-learn.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/dashboard`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/login`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/impressum`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE_URL}/datenschutz`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE_URL}/agb`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const moduleRoutes: MetadataRoute.Sitemap = modules
    .filter((m) => m.status === "active")
    .map((m) => ({
      url: `${BASE_URL}/module/${m.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticRoutes, ...moduleRoutes];
}
