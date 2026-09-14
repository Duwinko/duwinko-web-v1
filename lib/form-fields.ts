export function field(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export function optionalUrl(form: FormData, key: string) {
  const value = field(form, key);
  return value || null;
}

export function checkbox(form: FormData, key: string) {
  const value = form.get(key);
  return value === "on" || value === "true" || value === "1";
}

export function numberField(form: FormData, key: string, fallback = 0) {
  const value = Number(field(form, key));
  return Number.isFinite(value) ? value : fallback;
}

export function lineList(form: FormData, key: string) {
  return field(form, key)
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function csvList(form: FormData, key: string) {
  return field(form, key)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function uniqueSlug(
  desired: string,
  items: Array<{ id: string; slug: string }>,
  currentId?: string,
) {
  const base = desired || "item";
  let slug = base;
  let n = 2;
  while (items.some((item) => item.slug === slug && item.id !== currentId)) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}
