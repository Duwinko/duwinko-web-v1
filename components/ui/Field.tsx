import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  requiredMark?: boolean;
};

export function TextField({
  label,
  hint,
  error,
  id,
  className,
  requiredMark,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const fieldId = id ?? String(props.name ?? "field");
  return (
    <fieldset className="fieldset w-full p-0">
      <label className="label" htmlFor={fieldId}>
        {label}
        {requiredMark ? <span className="text-error"> *</span> : null}
      </label>
      <input
        id={fieldId}
        className={cn("input w-full", error && "input-error", className)}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {hint || error ? (
        <p className={cn("label", error && "text-error")}>{error ?? hint}</p>
      ) : null}
    </fieldset>
  );
}

export function TextAreaField({
  label,
  hint,
  error,
  id,
  className,
  requiredMark,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const fieldId = id ?? String(props.name ?? "message");
  return (
    <fieldset className="fieldset w-full p-0">
      <label className="label" htmlFor={fieldId}>
        {label}
        {requiredMark ? <span className="text-error"> *</span> : null}
      </label>
      <textarea
        id={fieldId}
        className={cn(
          "textarea min-h-32 w-full",
          error && "textarea-error",
          className,
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {hint || error ? (
        <p className={cn("label", error && "text-error")}>{error ?? hint}</p>
      ) : null}
    </fieldset>
  );
}
