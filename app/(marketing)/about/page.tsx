import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/lib/content-store";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PageIntro } from "@/components/marketing/PageIntro";

export async function generateMetadata(): Promise<Metadata> {
  const { about } = await getContent();
  return pageMetadata({
    title: "About Duwinko Software Ltd.",
    description: about.body,
    path: "/about",
    image: about.image,
    imageAlt: "Engineering workspace at Duwinko",
  });
}

export default async function AboutPage() {
  const { about } = await getContent();

  return (
    <div className="container-site py-16 md:py-24">
      <JsonLd
        data={webPageJsonLd({
          title: "About Duwinko Software Ltd.",
          description: about.body,
          path: "/about",
          type: "AboutPage",
        })}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <PageIntro className="mt-4" eyebrow="About" title={about.title} body={about.body} />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="glass-panel overflow-hidden rounded-3xl">
          <Image
            src={about.image}
            alt="Engineering workspace at Duwinko"
            width={1000}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {about.points.map((point) => (
            <li key={point} className="glass-panel rounded-2xl px-4 py-3 text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {about.pillars.map((pillar) => (
          <article key={pillar.title} className="glass-panel rounded-3xl p-6">
            <h2 className="text-xl font-semibold">{pillar.title}</h2>
            <p className="mt-3 text-sm text-neutral">{pillar.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-12 text-sm text-neutral">
        See{" "}
        <Link href="/services" className="link link-primary">
          what we build
        </Link>{" "}
        or{" "}
        <Link href="/contact" className="link link-primary">
          start a project
        </Link>
        .
      </p>
    </div>
  );
}
