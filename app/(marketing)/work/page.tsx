import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content-store";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageIntro } from "@/components/marketing/PageIntro";
import { MediaFrame } from "@/components/marketing/MediaFrame";

const description = "Websites, dashboards, and applications Duwinko has shipped.";

export const metadata: Metadata = pageMetadata({
  title: "Selected products and case studies",
  description,
  path: "/work",
});

export default async function WorkPage() {
  const { projects } = await getContent();

  return (
    <div className="container-site py-16 md:py-24">
      <JsonLd
        data={webPageJsonLd({
          title: "Selected products and case studies",
          description,
          path: "/work",
          type: "CollectionPage",
        })}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Work" }]} />
      <PageIntro
        className="mt-4"
        eyebrow="Work"
        title="Selected products"
        body="Real systems for organisations we work with — case studies, not a generic portfolio grid."
      />
      <div className="mt-12 grid gap-10">
        {projects.map((project) => (
          <article key={project.id} className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Link href={`/work/${project.slug}`} className="block">
              <MediaFrame src={project.image} alt={`${project.title} — ${project.category}`} />
            </Link>
            <div>
              <p className="text-sm text-primary">{project.category}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">{project.title}</h2>
              <p className="mt-3 text-neutral">{project.summary}</p>
              <Link href={`/work/${project.slug}`} className="btn btn-outline mt-6 rounded-full">
                Case study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
