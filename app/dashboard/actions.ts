"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { clearAdminSession, createAdminSession, requireAdmin, validateCredentials } from "@/lib/auth";
import { deleteInquiry, updateInquiryStatus } from "@/lib/inquiries";
import type { InquiryStatus } from "@/lib/types";

function field(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export async function loginAction(formData: FormData) {
  const email = field(formData, "email");
  const password = String(formData.get("password") ?? "");
  if (!validateCredentials(email, password)) {
    redirect("/dashboard/login?error=1");
  }
  await createAdminSession();
  redirect("/dashboard");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/dashboard/login");
}

export async function updateInquiryStatusAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as InquiryStatus;
  if (!id || !["new", "read", "archived"].includes(status)) {
    redirect("/dashboard/inquiries");
  }
  await updateInquiryStatus(id, status);
  revalidatePath("/dashboard");
  redirect(`/dashboard/inquiries/${id}?saved=1`);
}

export async function deleteInquiryAction(id: string) {
  await requireAdmin();
  await deleteInquiry(id);
  revalidatePath("/dashboard");
  redirect("/dashboard/inquiries?deleted=1");
}
