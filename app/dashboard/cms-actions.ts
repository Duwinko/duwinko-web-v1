"use server";

import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { getContent, updateContent } from "@/lib/content-store";
import {
  checkbox,
  csvList,
  field,
  lineList,
  numberField,
  optionalUrl,
  uniqueSlug,
} from "@/lib/form-fields";
import { saveUploadedImage } from "@/lib/media";
import { slugify } from "@/lib/slug";
import type { ServiceGroup } from "@/lib/types";

function fail(path: string, message: string): never {
  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

export async function saveSettingsAction(formData: FormData) {
  await requireAdmin();
  const content = await getContent();
  try {
    const heroImage = await saveUploadedImage(
      formData.get("heroImage") as File | null,
      content.hero.image,
    );
    const aboutImage = await saveUploadedImage(
      formData.get("aboutImage") as File | null,
      content.about.image,
    );
    const processImage = await saveUploadedImage(
      formData.get("processImage") as File | null,
      content.processImage,
    );
    const contactImage = await saveUploadedImage(
      formData.get("contactImage") as File | null,
      content.contactImage,
    );

    const proof = [0, 1, 2, 3].map((index) => ({
      value: field(formData, `proofValue${index}`),
      label: field(formData, `proofLabel${index}`),
    }));

    const process = [0, 1, 2, 3].map((index) => ({
      title: field(formData, `processTitle${index}`),
      body: field(formData, `processBody${index}`),
    }));

    const pillars = [0, 1, 2].map((index) => ({
      title: field(formData, `pillarTitle${index}`),
      body: field(formData, `pillarBody${index}`),
    }));

    await updateContent((current) => ({
      ...current,
      site: {
        name: field(formData, "name") || current.site.name,
        legalName: field(formData, "legalName") || current.site.legalName,
        description: field(formData, "description") || current.site.description,
        url: field(formData, "url") || current.site.url,
        email: field(formData, "email") || current.site.email,
        social: {
          linkedin: field(formData, "linkedin"),
          x: field(formData, "x"),
          instagram: field(formData, "instagram"),
          github: field(formData, "github"),
        },
      },
      hero: {
        ...current.hero,
        eyebrow: field(formData, "eyebrow"),
        titleLead: field(formData, "titleLead"),
        titleAccent: field(formData, "titleAccent"),
        body: field(formData, "heroBody"),
        image: heroImage,
        proof,
      },
      about: {
        ...current.about,
        eyebrow: field(formData, "aboutEyebrow"),
        title: field(formData, "aboutTitle"),
        body: field(formData, "aboutBody"),
        yearsLabel: field(formData, "yearsLabel"),
        yearsValue: field(formData, "yearsValue"),
        points: lineList(formData, "points"),
        pillars,
        image: aboutImage,
      },
      process,
      processImage,
      contactImage,
    }));
  } catch (error) {
    fail("/dashboard/settings", error instanceof Error ? error.message : "Could not save settings.");
  }
  redirect("/dashboard/settings?saved=1");
}

export async function saveProjectAction(formData: FormData) {
  await requireAdmin();
  const id = field(formData, "id") || crypto.randomUUID();
  const content = await getContent();
  const existing = content.projects.find((item) => item.id === id);
  const title = field(formData, "title");
  if (!title) fail(existing ? `/dashboard/projects/${id}` : "/dashboard/projects/new", "Title is required.");

  try {
    const image = await saveUploadedImage(
      formData.get("imageFile") as File | null,
      existing?.image || "/media/work-operations.png",
    );
    const slug = uniqueSlug(
      slugify(field(formData, "slug") || title),
      content.projects,
      id,
    );

    await updateContent((current) => {
      const record = {
        id,
        slug,
        title,
        category: field(formData, "category") || "Website",
        href: optionalUrl(formData, "href"),
        image,
        featured: checkbox(formData, "featured"),
        partner: field(formData, "partner") || null,
        summary: field(formData, "summary"),
        problem: field(formData, "problem"),
        solution: field(formData, "solution"),
        technologies: csvList(formData, "technologies"),
        order: numberField(formData, "order", current.projects.length + 1),
      };
      const others = current.projects.filter((item) => item.id !== id);
      return { ...current, projects: [...others, record].sort((a, b) => a.order - b.order) };
    });
  } catch (error) {
    fail(
      existing ? `/dashboard/projects/${id}` : "/dashboard/projects/new",
      error instanceof Error ? error.message : "Could not save project.",
    );
  }
  redirect(`/dashboard/projects/${id}?saved=1`);
}

export async function deleteProjectAction(id: string) {
  await requireAdmin();
  await updateContent((current) => ({
    ...current,
    projects: current.projects.filter((item) => item.id !== id),
  }));
  redirect("/dashboard/projects?deleted=1");
}

export async function saveServiceAction(formData: FormData) {
  await requireAdmin();
  const id = field(formData, "id") || crypto.randomUUID();
  const content = await getContent();
  const existing = content.services.find((item) => item.id === id);
  const title = field(formData, "title");
  if (!title) fail(existing ? `/dashboard/services/${id}` : "/dashboard/services/new", "Title is required.");

  const group = (field(formData, "group") || "engineering") as ServiceGroup;
  const slug = uniqueSlug(slugify(field(formData, "slug") || title), content.services, id);

  await updateContent((current) => {
    const record = {
      id,
      slug,
      group: ["engineering", "ai", "support"].includes(group) ? group : "engineering",
      featured: checkbox(formData, "featured"),
      title,
      short: field(formData, "short"),
      description: field(formData, "description"),
      detail: field(formData, "detail"),
      order: numberField(formData, "order", current.services.length + 1),
    };
    const others = current.services.filter((item) => item.id !== id);
    return { ...current, services: [...others, record].sort((a, b) => a.order - b.order) };
  });
  redirect(`/dashboard/services/${id}?saved=1`);
}

export async function deleteServiceAction(id: string) {
  await requireAdmin();
  await updateContent((current) => ({
    ...current,
    services: current.services.filter((item) => item.id !== id),
  }));
  redirect("/dashboard/services?deleted=1");
}

export async function saveTestimonialAction(formData: FormData) {
  await requireAdmin();
  const id = field(formData, "id") || crypto.randomUUID();
  const quote = field(formData, "quote");
  const name = field(formData, "name");
  if (!quote || !name) {
    fail(
      field(formData, "id") ? `/dashboard/testimonials/${id}` : "/dashboard/testimonials/new",
      "Quote and name are required.",
    );
  }

  await updateContent((current) => {
    const record = {
      id,
      quote,
      name,
      role: field(formData, "role"),
      featured: checkbox(formData, "featured"),
      order: numberField(formData, "order", current.testimonials.length + 1),
    };
    const others = current.testimonials.filter((item) => item.id !== id);
    return { ...current, testimonials: [...others, record].sort((a, b) => a.order - b.order) };
  });
  redirect(`/dashboard/testimonials/${id}?saved=1`);
}

export async function deleteTestimonialAction(id: string) {
  await requireAdmin();
  await updateContent((current) => ({
    ...current,
    testimonials: current.testimonials.filter((item) => item.id !== id),
  }));
  redirect("/dashboard/testimonials?deleted=1");
}

export async function savePartnerAction(formData: FormData) {
  await requireAdmin();
  const id = field(formData, "id") || crypto.randomUUID();
  const name = field(formData, "name");
  if (!name) fail("/dashboard/partners", "Partner name is required.");

  await updateContent((current) => {
    const record = {
      id,
      name,
      href: optionalUrl(formData, "href"),
      order: numberField(formData, "order", current.partners.length + 1),
    };
    const others = current.partners.filter((item) => item.id !== id);
    return { ...current, partners: [...others, record].sort((a, b) => a.order - b.order) };
  });
  redirect("/dashboard/partners?saved=1");
}

export async function deletePartnerAction(id: string) {
  await requireAdmin();
  await updateContent((current) => ({
    ...current,
    partners: current.partners.filter((item) => item.id !== id),
  }));
  redirect("/dashboard/partners?deleted=1");
}
