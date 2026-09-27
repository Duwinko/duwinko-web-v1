"use server";

import { createInquiry } from "@/lib/inquiries";

export type ContactState = {
  ok?: boolean;
  error?: string;
};

export async function submitContactAction(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!fullName || !phone || !email || !message) {
    return { error: "Please complete every field." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter a valid email address." };
  }

  try {
    await createInquiry({ fullName, phone, email, message });
    return { ok: true };
  } catch {
    return {
      error:
        "We could not save your message on this host. Email us directly and we will follow up.",
    };
  }
}
