import Image from "next/image";
import { site } from "@/lib/site-content";
import { cn } from "@/lib/cn";

export function BrandLogo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/brand/logo-white.png"
        alt={site.name}
        width={160}
        height={48}
        priority={priority}
        className={cn("logo-on-dark h-10 w-auto", className)}
      />
      <Image
        src="/brand/logo.png"
        alt=""
        width={160}
        height={48}
        priority={priority}
        className={cn("logo-on-light h-10 w-auto", className)}
      />
    </span>
  );
}
