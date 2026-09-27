import Image from "next/image";
import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  requiredMark?: boolean;
};

export function SelectField({
  label,
  hint,
  error,
  id,
  className,
  requiredMark,
  children,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const fieldId = id ?? String(props.name ?? "select");
  return (
    <fieldset className="fieldset w-full p-0">
      <label className="label" htmlFor={fieldId}>
        {label}
        {requiredMark ? <span className="text-error"> *</span> : null}
      </label>
      <select
        id={fieldId}
        className={cn("select w-full", error && "select-error", className)}
        aria-invalid={Boolean(error)}
        {...props}
      >
        {children}
      </select>
      {hint || error ? (
        <p className={cn("label", error && "text-error")}>{error ?? hint}</p>
      ) : null}
    </fieldset>
  );
}

export function CheckField({
  label,
  hint,
  id,
  className,
  ...props
}: { label: string; hint?: string } & InputHTMLAttributes<HTMLInputElement>) {
  const fieldId = id ?? String(props.name ?? "check");
  return (
    <label className={cn("flex cursor-pointer items-start gap-3", className)} htmlFor={fieldId}>
      <input id={fieldId} type="checkbox" className="checkbox checkbox-primary mt-0.5" {...props} />
      <span>
        <span className="font-medium">{label}</span>
        {hint ? <span className="mt-1 block text-sm text-neutral/70">{hint}</span> : null}
      </span>
    </label>
  );
}

export function ImageField({
  label,
  name,
  currentSrc,
  hint,
}: {
  label: string;
  name: string;
  currentSrc?: string;
  hint?: string;
}) {
  return (
    <fieldset className="fieldset w-full p-0">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      {currentSrc ? (
        <Image
          src={currentSrc}
          alt=""
          width={800}
          height={280}
          className="mb-3 h-36 w-full rounded-2xl object-cover"
        />
      ) : null}
      <input id={name} name={name} type="file" accept="image/*" className="file-input w-full" />
      {hint ? <p className="label">{hint}</p> : null}
    </fieldset>
  );
}
