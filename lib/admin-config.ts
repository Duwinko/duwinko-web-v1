import "server-only";

export const COOKIE_NAME = "duwinko_admin";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function read(name: string) {
  return process.env[name]?.trim() || "";
}

export function getAdminConfig() {
  const email = read("ADMIN_EMAIL");
  const password = read("ADMIN_PASSWORD");
  const secret = read("ADMIN_SESSION_SECRET");

  if (process.env.NODE_ENV === "production") {
    if (!email || !password || !secret) {
      throw new Error(
        "ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET must be set in production.",
      );
    }
    if (secret.length < 24) {
      throw new Error("ADMIN_SESSION_SECRET must be at least 24 characters.");
    }
  }

  return {
    email: email || "admin@localhost",
    password: password || "duwinko-dev",
    secret: secret || "local-dev-secret-not-for-production",
  };
}
