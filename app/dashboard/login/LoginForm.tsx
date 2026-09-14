"use client";

import { loginAction } from "../actions";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Field";
import { Alert } from "@/components/ui/Alert";

export function LoginForm({ error }: { error?: boolean }) {
  return (
    <form action={loginAction} className="mt-8 grid max-w-md gap-4">
      {error ? <Alert tone="error">Invalid email or password.</Alert> : null}
      <TextField
        name="email"
        type="email"
        label="Email"
        autoComplete="username"
        required
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        required
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
