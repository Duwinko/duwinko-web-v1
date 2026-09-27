import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { Flash } from "@/components/dashboard/Flash";
import { getContent } from "@/lib/content-store";

export default async function ServicesAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const query = await searchParams;
  const { services } = await getContent();

  return (
    <div>
      <PageHeader
        title="Services"
        description="Manage the public capabilities list and detail pages."
        actions={
          <Link href="/dashboard/services/new" className="btn btn-primary rounded-full">
            New service
          </Link>
        }
      />
      <Flash saved={query.saved === "1"} deleted={query.deleted === "1"} />
      <div className="mt-8">
        {services.length === 0 ? (
          <EmptyState title="No services" body="Add the first capability." />
        ) : (
          <Table headers={["Service", "Group", "Status", ""]}>
            {services.map((service) => (
              <tr key={service.id}>
                <td className="font-medium">{service.title}</td>
                <td className="capitalize">{service.group}</td>
                <td>
                  <Badge tone={service.featured ? "primary" : "neutral"}>
                    {service.featured ? "Highlighted" : "Standard"}
                  </Badge>
                </td>
                <td className="text-right">
                  <Link href={`/dashboard/services/${service.id}`} className="link link-primary">
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
