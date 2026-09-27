import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";
import { revalidatePath } from "next/cache";
import { defaultContent } from "./site-content";
import type { SiteContent } from "./types";

const DATA_DIR = process.env.CMS_DATA_DIR || path.join(process.cwd(), "data");
const FILE = "content.json";

let writeQueue: Promise<void> = Promise.resolve();

function withLock<T>(fn: () => Promise<T>) {
  const run = writeQueue.then(fn, fn);
  writeQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

function filePath() {
  return path.join(DATA_DIR, FILE);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeContent(raw: unknown): SiteContent {
  if (!isRecord(raw)) return structuredClone(defaultContent);
  const base = structuredClone(defaultContent);
  return {
    ...base,
    ...raw,
    site: { ...base.site, ...(isRecord(raw.site) ? raw.site : {}), social: {
      ...base.site.social,
      ...(isRecord(raw.site) && isRecord(raw.site.social) ? raw.site.social : {}),
    } },
    hero: { ...base.hero, ...(isRecord(raw.hero) ? raw.hero : {}) },
    about: { ...base.about, ...(isRecord(raw.about) ? raw.about : {}) },
    partners: Array.isArray(raw.partners) ? (raw.partners as SiteContent["partners"]) : base.partners,
    services: Array.isArray(raw.services) ? (raw.services as SiteContent["services"]) : base.services,
    process: Array.isArray(raw.process) ? (raw.process as SiteContent["process"]) : base.process,
    projects: Array.isArray(raw.projects) ? (raw.projects as SiteContent["projects"]) : base.projects,
    testimonials: Array.isArray(raw.testimonials)
      ? (raw.testimonials as SiteContent["testimonials"])
      : base.testimonials,
    processImage: typeof raw.processImage === "string" ? raw.processImage : base.processImage,
    contactImage: typeof raw.contactImage === "string" ? raw.contactImage : base.contactImage,
  };
}

async function readUncached(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(filePath(), "utf8");
    return mergeContent(JSON.parse(raw));
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") {
      await writeAll(defaultContent);
      return structuredClone(defaultContent);
    }
    throw error;
  }
}

async function writeAll(content: SiteContent) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const file = filePath();
  const payload = `${JSON.stringify(content, null, 2)}\n`;
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, payload, "utf8");
  await fs.rename(tmp, file);
}

export const getContent = cache(async () => readUncached());

export async function updateContent(mutator: (current: SiteContent) => SiteContent) {
  const next = await withLock(async () => {
    const current = await readUncached();
    const updated = mutator(structuredClone(current));
    await writeAll(updated);
    return updated;
  });
  revalidatePath("/", "layout");
  revalidatePath("/dashboard", "layout");
  return next;
}

export async function serviceBySlug(slug: string) {
  const content = await getContent();
  return content.services.find((item) => item.slug === slug);
}

export async function projectBySlug(slug: string) {
  const content = await getContent();
  return content.projects.find((item) => item.slug === slug);
}
