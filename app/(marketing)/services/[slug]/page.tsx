import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent, serviceBySlug } from "@/lib/content-store";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageIntro } from "@/components/marketing/PageIntro";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  const { services } = await getContent();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await serviceBySlug(slug);
  if (!service) return { title: "Service" };
  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await serviceBySlug(slug);
  if (!service) notFound();
  const { projects, services } = await getContent();
  const categoryMap: Record<string, string[]> = {
    "web-development": ["Website"],
    "app-development": ["Web application"],
    mis: ["Web application"],
    "ui-ux": ["Figma"],
    "project-analysis": ["Website", "Web application"],
  };
  const matchedWork = projects.filter((project) =>
    (categoryMap[service.id] ?? []).includes(project.category),
  );
  const relatedWork = (matchedWork.length > 0 ? matchedWork : projects.filter((item) => item.featured)).slice(0, 3);
  const otherServices = services.filter((item) => item.id !== service.id).slice(0, 4);

  return (
    <div className="container-site py-16 md:py-24">
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title },
        ]}
      />
      <PageIntro className="mt-4" title={service.title} body={service.description} />
      <p className="mt-8 max-w-3xl text-neutral">{service.detail}</p>
      {relatedWork.length > 0 ? (
        <div className="mt-12">
          <h2 className="text-lg font-semibold">Related work</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {relatedWork.map((project) => (
              <li key={project.id}>
                <Link href={`/work/${project.slug}`} className="link link-primary">
                  {project.title}
                </Link>
                <span className="text-neutral"> — {project.category}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {otherServices.length > 0 ? (
        <div className="mt-10">
          <h2 className="text-lg font-semibold">Other services</h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            {otherServices.map((item) => (
              <li key={item.id}>
                <Link href={`/services/${item.slug}`} className="link link-hover">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <Link href="/contact" className="btn btn-primary mt-10 rounded-full">
        Start a project
      </Link>
    </div>
  );
}
