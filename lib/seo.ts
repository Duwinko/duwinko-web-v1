import type { Metadata } from "next";
import { defaultContent } from "./site-content";

export const DEFAULT_OG_IMAGE = "/media/hero-product.png";
export const DEFAULT_OG_ALT = "Duwinko software product work";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return defaultContent.site.url.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncateMeta(value: string, max = 160) {
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  imageAlt?: string;
  type?: "website" | "article";
  index?: boolean;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  index = true,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const descriptionText = truncateMeta(description);
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);
  const ogAlt = imageAlt || title;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: descriptionText,
    ...(index ? { alternates: { canonical: url } } : {}),
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
    openGraph: {
      title,
      description: descriptionText,
      url,
      siteName: defaultContent.site.name,
      locale: "en_US",
      type,
      images: [
        {
          url: ogImage,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: descriptionText,
      images: [ogImage],
    },
  };
}

export function organizationId() {
  return `${getSiteUrl()}/#organization`;
}

export function websiteId() {
  return `${getSiteUrl()}/#website`;
}

export function organizationJsonLd(site: {
  name: string;
  legalName: string;
  description: string;
  email: string;
  social: { linkedin: string; x: string; instagram: string; github: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: site.name,
    legalName: site.legalName,
    url: getSiteUrl(),
    email: site.email,
    logo: absoluteUrl("/brand/logo.png"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description: site.description,
    sameAs: [site.social.linkedin, site.social.x, site.social.instagram, site.social.github],
  };
}

export function websiteJsonLd(site: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: site.name,
    url: getSiteUrl(),
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": organizationId() },
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: truncateMeta(description),
    url: absoluteUrl(path),
    isPartOf: { "@id": websiteId() },
    about: { "@id": organizationId() },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": organizationId() },
    serviceType: service.title,
  };
}

export function creativeWorkJsonLd(project: {
  title: string;
  summary: string;
  slug: string;
  image: string;
  href?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/work/${project.slug}`),
    image: absoluteUrl(project.image),
    creator: { "@id": organizationId() },
    ...(project.href ? { sameAs: project.href } : {}),
  };
}
