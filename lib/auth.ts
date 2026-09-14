import { timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME, SESSION_MAX_AGE, getAdminConfig } from "./admin-config";
import { signSession, verifySession } from "./session";

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  const size = Math.max(left.length, right.length, 1);
  const aPad = Buffer.alloc(size);
  const bPad = Buffer.alloc(size);
  left.copy(aPad);
  right.copy(bPad);
  return timingSafeEqual(aPad, bPad) && left.length === right.length;
}

export async function createAdminSession() {
  const config = getAdminConfig();
  const token = await signSession(config.email, config.secret, SESSION_MAX_AGE);
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function getAdminSession() {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySession(token, getAdminConfig().secret);
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/dashboard/login");
  return session;
}

export function validateCredentials(email: string, password: string) {
  const config = getAdminConfig();
  return (
    safeEqual(email.trim().toLowerCase(), config.email.toLowerCase()) &&
    safeEqual(password, config.password)
  );
}
