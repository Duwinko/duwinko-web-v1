import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ name: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-primary">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span className="text-neutral/50">/</span> : null}
              {item.href && !last ? (
                <Link href={item.href} className="link link-hover">
                  {item.name}
                </Link>
              ) : (
                <span className={last ? "text-neutral" : undefined}>{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
