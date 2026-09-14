import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent, projectBySlug } from "@/lib/content-store";
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
  return { title: project.title, description: project.summary };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await projectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="container-site py-16 md:py-24">
      <p className="text-sm text-primary">
        <Link href="/work" className="link link-hover">
          Work
        </Link>
      </p>
      <PageIntro className="mt-4" eyebrow={project.category} title={project.title} body={project.summary} />
      <div className="mt-10">
        <MediaFrame src={project.image} alt={project.title} />
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
          <a href={project.href} className="btn btn-primary rounded-full" target="_blank" rel="noreferrer">
            Visit live
          </a>
        ) : null}
        <Link href="/contact" className="btn btn-outline rounded-full">
          Start a similar project
        </Link>
      </div>
    </div>
  );
}
