"use client";

import { useActionState } from "react";
import { submitContactAction, type ContactState } from "./actions";
import { Button } from "@/components/ui/Button";
import { TextAreaField, TextField } from "@/components/ui/Field";
import { Alert } from "@/components/ui/Alert";

const initial: ContactState = {};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactAction, initial);

  return (
    <form action={action} className="grid gap-4">
      {state.ok ? (
        <Alert tone="success">
          Message sent. Thank you — we will get back to you.
        </Alert>
      ) : null}
      {state.error ? <Alert tone="error">{state.error}</Alert> : null}
      <TextField
        name="fullName"
        label="Full name"
        required
        requiredMark
        autoComplete="name"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          name="phone"
          label="Phone"
          type="tel"
          required
          requiredMark
          autoComplete="tel"
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          required
          requiredMark
          autoComplete="email"
        />
      </div>
      <TextAreaField
        name="message"
        label="Message"
        required
        requiredMark
        placeholder="How can we help?"
      />
      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Get in touch"}
      </Button>
    </form>
  );
}
