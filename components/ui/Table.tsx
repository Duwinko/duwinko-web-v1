import { cn } from "@/lib/cn";

export function Table({
  headers,
  children,
  className,
}: {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto glass-panel", className)}>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-xs font-semibold uppercase tracking-wide">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
