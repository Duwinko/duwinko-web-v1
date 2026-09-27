import { cn } from "@/lib/cn";

type Tone = "neutral" | "primary" | "success" | "warning" | "error";

const tones: Record<Tone, string> = {
  neutral: "badge-ghost",
  primary: "badge-primary",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={cn("badge badge-sm font-medium", tones[tone], className)}>
      {children}
    </span>
  );
}
