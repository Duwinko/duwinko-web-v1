import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../ContactForm";
import { PageIntro } from "@/components/marketing/PageIntro";
import { getContent } from "@/lib/content-store";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getContent();
  return pageMetadata({
    title: "Contact",
    description: `Tell ${site.legalName} about the users, deadline, and system you already have. Messages go to the staff dashboard.`,
    path: "/contact",
    image: "/media/contact-desk.png",
    imageAlt: "Meeting table for a project conversation",
  });
}

export default async function ContactPage() {
  const { contactImage, site } = await getContent();

  return (
    <div className="container-site grid  items-end gap-10 py-16 md:grid-cols-2 md:gap-20 md:py-24">
      <JsonLd
        data={webPageJsonLd({
          title: "Contact",
          description: `Start a software or systems conversation with ${site.legalName}.`,
          path: "/contact",
          type: "ContactPage",
        })}
      />
      <div>
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
        <PageIntro
          className="mt-4"
          eyebrow="Contact"
          title="Tell us what needs to ship"
          body="Users, deadline, and the system you already have. Messages go to the Duwinko dashboard."
        />
        <p className="mt-4 text-sm text-neutral">
          Email{" "}
          <a className="link link-primary" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <div className="glass-panel mt-10 overflow-hidden rounded-3xl">
          <Image
            src={contactImage}
            alt=""
            width={800}
            height={560}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
