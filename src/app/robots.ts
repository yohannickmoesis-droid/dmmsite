import type { MetadataRoute } from "next";

const siteUrl = "https://dmm-transition-reconversion.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}