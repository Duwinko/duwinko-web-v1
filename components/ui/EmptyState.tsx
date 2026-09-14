import { Button } from "./Button";
import { cn } from "@/lib/cn";

export function EmptyState({
  title,
  body,
  action,
  className,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-3 glass-panel border-dashed px-6 py-10",
        className,
      )}
    >
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="max-w-lg text-sm text-neutral/70">{body}</p>
      {action}
    </div>
  );
}

export function EmptyStateAction(props: React.ComponentProps<typeof Button>) {
  return <Button {...props} />;
}
