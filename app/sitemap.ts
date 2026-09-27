import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content-store";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects, services, site } = await getContent();
  const now = new Date();
  return [
    { url: site.url, lastModified: now },
    { url: `${site.url}/about`, lastModified: now },
    { url: `${site.url}/services`, lastModified: now },
    { url: `${site.url}/work`, lastModified: now },
    { url: `${site.url}/contact`, lastModified: now },
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified: now,
    })),
  ];
}
