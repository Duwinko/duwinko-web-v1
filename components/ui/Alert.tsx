import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Alert({
  className,
  tone = "info",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  tone?: "info" | "success" | "error";
}) {
  const map = {
    info: "alert-info",
    success: "alert-success",
    error: "alert-error",
  };
  return (
    <div role="status" className={cn("alert", map[tone], className)} {...props} />
  );
}
