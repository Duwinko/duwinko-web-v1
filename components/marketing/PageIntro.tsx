import { cn } from "@/lib/cn";

export function PageIntro({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      {body ? <p className="mt-4 text-lg text-neutral">{body}</p> : null}
    </header>
  );
}
