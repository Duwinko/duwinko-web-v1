import "server-only";
import { promises as fs } from "fs";
import path from "path";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 6 * 1024 * 1024;

function extensionFor(type: string) {
  if (type === "image/jpeg") return "jpg";
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  return "gif";
}

export async function saveUploadedImage(file: File | null, fallback: string) {
  if (!file || file.size === 0) return fallback;
  if (!ALLOWED.has(file.type)) {
    throw new Error("Use a JPEG, PNG, WebP, or GIF image.");
  }
  if (file.size > MAX_BYTES) {
    throw new Error("Images must be 6MB or smaller.");
  }

  const name = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${extensionFor(file.type)}`;
  const dir = path.join(process.cwd(), "public", "media", "uploads");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, name), Buffer.from(await file.arrayBuffer()));
  return `/media/uploads/${name}`;
}
