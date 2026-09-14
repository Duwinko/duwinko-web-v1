"use client";

import { Button } from "@/components/ui/Button";

export function ConfirmDelete({
  action,
  label = "Delete",
  message,
}: {
  action: (formData: FormData) => void;
  label?: string;
  message: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!window.confirm(message)) event.preventDefault();
      }}
    >
      <Button type="submit" variant="outline" className="border-error/40 text-error">
        {label}
      </Button>
    </form>
  );
}
