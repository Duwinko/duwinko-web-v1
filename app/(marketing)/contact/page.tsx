import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../ContactForm";
import { PageIntro } from "@/components/marketing/PageIntro";
import { getContent } from "@/lib/content-store";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a software, systems, or AI-assisted product conversation with Duwinko.",
};

export default async function ContactPage() {
  const { contactImage } = await getContent();

  return (
    <div className="container-site grid gap-10 py-16 md:grid-cols-2 md:py-24">
      <div>
        <PageIntro
          eyebrow="Contact"
          title="Tell us what needs to ship"
          body="Users, deadline, and the system you already have. Messages go to the Duwinko dashboard."
        />
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
