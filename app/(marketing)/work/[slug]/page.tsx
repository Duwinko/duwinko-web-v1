import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent, projectBySlug } from "@/lib/content-store";
import { breadcrumbJsonLd, creativeWorkJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/MediaFrame";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  const { projects } = await getContent();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await projectBySlug(slug);
  if (!project) return { title: "Work" };
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: project.image,
    imageAlt: `${project.title} — ${project.category}`,
    type: "article",
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await projectBySlug(slug);
  if (!project) notFound();
  const { projects, services } = await getContent();
  const moreWork = projects.filter((item) => item.id !== project.id).slice(0, 3);
  const relatedService =
    project.category === "Website"
      ? services.find((item) => item.id === "web-development")
      : project.category === "Figma"
        ? services.find((item) => item.id === "ui-ux")
        : services.find((item) => item.id === "mis");

  return (
    <div className="container-site py-16 md:py-24">
      <JsonLd data={creativeWorkJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: project.title },
        ]}
      />
      <PageIntro className="mt-4" eyebrow={project.category} title={project.title} body={project.summary} />
      <div className="mt-10">
        <MediaFrame src={project.image} alt={`${project.title} — ${project.category}`} />
      </div>
      <dl className="mt-12 grid gap-8 md:grid-cols-3">
        <div>
          <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Problem</dt>
          <dd className="mt-3 text-neutral">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Solution</dt>
          <dd className="mt-3 text-neutral">{project.solution}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Stack</dt>
          <dd className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="section-chip">
                {tech}
              </span>
            ))}
          </dd>
        </div>
      </dl>
      <div className="mt-10 flex flex-wrap gap-3">
        {project.href ? (
          <a
            href={project.href}
            className="btn btn-primary rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live
          </a>
        ) : null}
        <Link href="/contact" className="btn btn-outline rounded-full">
          Start a similar project
        </Link>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {relatedService ? (
          <Link href={`/services/${relatedService.slug}`} className="link link-primary">
            {relatedService.title}
          </Link>
        ) : null}
        {moreWork.map((item) => (
          <Link key={item.id} href={`/work/${item.slug}`} className="link link-hover">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
