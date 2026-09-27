import Image from "next/image";
import { cn } from "@/lib/cn";

export function MediaFrame({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-3xl border border-base-content/10 bg-[var(--media-frame)] p-3 md:p-5", className)}>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        priority={priority}
        className="h-auto w-full rounded-2xl object-contain"
      />
    </div>
  );
}
