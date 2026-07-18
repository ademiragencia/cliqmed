import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { VISTO_PAGES } from "@/lib/vistos";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...VISTO_PAGES.map((v) => ({
      url: `${SITE_URL}/vistos/${v.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
