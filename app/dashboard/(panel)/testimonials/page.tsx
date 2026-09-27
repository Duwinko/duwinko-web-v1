import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import { Flash } from "@/components/dashboard/Flash";
import { getContent } from "@/lib/content-store";

export default async function TestimonialsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const query = await searchParams;
  const { testimonials } = await getContent();

  return (
    <div>
      <PageHeader
        title="Testimonials"
        description="Quotes shown on the public site."
        actions={
          <Link href="/dashboard/testimonials/new" className="btn btn-primary rounded-full">
            New testimonial
          </Link>
        }
      />
      <Flash saved={query.saved === "1"} deleted={query.deleted === "1"} />
      <div className="mt-8">
        {testimonials.length === 0 ? (
          <EmptyState title="No testimonials" body="Add the first client quote." />
        ) : (
          <Table headers={["Name", "Quote", ""]}>
            {testimonials.map((item) => (
              <tr key={item.id}>
                <td className="font-medium">
                  {item.name}
                  <p className="text-sm font-normal text-neutral/60">{item.role}</p>
                </td>
                <td className="max-w-lg truncate text-sm text-neutral/80">{item.quote}</td>
                <td className="text-right">
                  <Link href={`/dashboard/testimonials/${item.id}`} className="link link-primary">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </Table>
        )}
      </div>
    </div>
  );
}
