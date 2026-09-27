import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { Flash } from "@/components/dashboard/Flash";
import { listInquiries } from "@/lib/inquiries";
import type { InquiryStatus } from "@/lib/types";

export const dynamic = "force-dynamic";

const tones: Record<InquiryStatus, "primary" | "success" | "neutral"> = {
  new: "primary",
  read: "success",
  archived: "neutral",
};

export default async function InquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ deleted?: string }>;
}) {
  const query = await searchParams;
  const inquiries = await listInquiries();

  return (
    <div>
      <PageHeader
        title="Inquiries"
        description="Messages submitted from the public contact form."
      />
      <Flash deleted={query.deleted === "1"} />
      <div className="mt-8">
        {inquiries.length === 0 ? (
          <EmptyState
            title="No inquiries yet"
            body="When someone submits the contact form, they will appear here."
          />
        ) : (
          <Table headers={["Received", "Name", "Email", "Status", ""]}>
            {inquiries.map((item) => (
              <tr key={item.id}>
                <td className="whitespace-nowrap text-sm">
                  {new Date(item.createdAt).toLocaleString()}
                </td>
                <td>
                  <p className="font-medium">{item.fullName}</p>
                  <p className="max-w-md truncate text-sm text-neutral/60">{item.message}</p>
                </td>
                <td className="text-sm">
                  <a className="link" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                  <p className="text-neutral/60">{item.phone}</p>
                </td>
                <td>
                  <Badge tone={tones[item.status]}>{item.status}</Badge>
                </td>
                <td className="text-right">
                  <Link href={`/dashboard/inquiries/${item.id}`} className="link link-primary">
                    Open
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
