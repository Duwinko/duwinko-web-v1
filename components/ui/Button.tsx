import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
  outline: "btn btn-outline",
};

const sizes: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
