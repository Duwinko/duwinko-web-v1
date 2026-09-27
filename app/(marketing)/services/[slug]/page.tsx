import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent, serviceBySlug } from "@/lib/content-store";
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
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await serviceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="container-site py-16 md:py-24">
      <p className="text-sm text-primary">
        <Link href="/services" className="link link-hover">
          Services
        </Link>
      </p>
      <PageIntro className="mt-4" title={service.title} body={service.description} />
      <p className="mt-8 max-w-3xl text-neutral">{service.detail}</p>
      <Link href="/contact" className="btn btn-primary mt-10 rounded-full">
        Start a project
      </Link>
    </div>
  );
}
