const encoder = new TextEncoder();

function toBase64Url(bytes: ArrayBuffer | Uint8Array) {
  const buffer = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  buffer.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function signSession(email: string, secret: string, maxAge: number) {
  const payload = JSON.stringify({
    email,
    exp: Date.now() + maxAge * 1000,
  });
  const payloadPart = toBase64Url(encoder.encode(payload));
  const key = await hmacKey(secret);
  const signature = toBase64Url(
    await crypto.subtle.sign("HMAC", key, encoder.encode(payloadPart)),
  );
  return `${payloadPart}.${signature}`;
}

export async function verifySession(token: string, secret: string) {
  const [payloadPart, signature] = token.split(".");
  if (!payloadPart || !signature) return null;

  const key = await hmacKey(secret);
  const expected = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, encoder.encode(payloadPart)),
  );
  const received = fromBase64Url(signature);
  if (expected.length !== received.length) return null;

  let match = 0;
  for (let i = 0; i < expected.length; i += 1) match |= expected[i] ^ received[i];
  if (match !== 0) return null;

  try {
    const json = new TextDecoder().decode(fromBase64Url(payloadPart));
    const data = JSON.parse(json) as { email?: string; exp?: number };
    if (!data.email || !data.exp || data.exp < Date.now()) return null;
    return { email: data.email };
  } catch {
    return null;
  }
}
