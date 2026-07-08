import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin", "/checkout/", "/reset-password"],
      },
    ],
    sitemap: "https://lumo-learn.de/sitemap.xml",
  };
}
