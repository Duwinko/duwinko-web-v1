import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content-store";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageIntro } from "@/components/marketing/PageIntro";
import { cn } from "@/lib/cn";

const description =
  "Web, mobile, internal systems, design, delivery, support — and AI inside products that already have a job.";

export const metadata: Metadata = pageMetadata({
  title: "Software and systems services",
  description,
  path: "/services",
});

export default async function ServicesPage() {
  const { services } = await getContent();

  return (
    <div className="container-site py-16 md:py-24">
      <JsonLd
        data={webPageJsonLd({
          title: "Software and systems services",
          description,
          path: "/services",
          type: "CollectionPage",
        })}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <PageIntro
        className="mt-4"
        eyebrow="Services"
        title="What we actually build"
        body="Engineering is the core. AI is a capability we add when it changes how the product works."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className={cn(
              "rounded-3xl p-8 transition-transform hover:-translate-y-0.5",
              service.featured ? "bg-primary text-primary-content" : "glass-panel",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
              {service.group === "ai" ? "AI capability" : service.group === "support" ? "Support" : "Engineering"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h2>
            <p className={cn("mt-3", service.featured ? "text-primary-content/80" : "text-neutral")}>
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
