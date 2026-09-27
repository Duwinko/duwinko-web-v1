import "server-only";
import { promises as fs } from "fs";
import path from "path";
import type { Inquiry } from "./types";

const DATA_DIR = process.env.CMS_DATA_DIR || path.join(process.cwd(), "data");
const FILE = "inquiries.json";

let writeQueue: Promise<void> = Promise.resolve();

function withLock<T>(fn: () => Promise<T>) {
  const run = writeQueue.then(fn, fn);
  writeQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readAll(): Promise<Inquiry[]> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, FILE), "utf8");
    const parsed = JSON.parse(raw) as Inquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") return [];
    throw error;
  }
}

async function writeAll(items: Inquiry[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const file = path.join(DATA_DIR, FILE);
  const payload = `${JSON.stringify(items, null, 2)}\n`;
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, payload, "utf8");
  await fs.rename(tmp, file);
}

export async function listInquiries() {
  return readAll();
}

export async function createInquiry(
  input: Omit<Inquiry, "id" | "status" | "createdAt">,
) {
  return withLock(async () => {
    const items = await readAll();
    const inquiry: Inquiry = {
      id: crypto.randomUUID(),
      ...input,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    items.unshift(inquiry);
    await writeAll(items);
    return inquiry;
  });
}

export async function getInquiry(id: string) {
  const items = await readAll();
  return items.find((item) => item.id === id) ?? null;
}

export async function updateInquiryStatus(id: string, status: Inquiry["status"]) {
  return withLock(async () => {
    const items = await readAll();
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], status };
    await writeAll(items);
    return items[index];
  });
}

export async function deleteInquiry(id: string) {
  return withLock(async () => {
    const items = await readAll();
    const next = items.filter((item) => item.id !== id);
    if (next.length === items.length) return false;
    await writeAll(next);
    return true;
  });
}
