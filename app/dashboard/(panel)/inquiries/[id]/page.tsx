import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/FormExtras";
import { Flash } from "@/components/dashboard/Flash";
import { ConfirmDelete } from "@/components/dashboard/ConfirmDelete";
import { deleteInquiryAction, updateInquiryStatusAction } from "@/app/dashboard/actions";
import { getInquiry } from "@/lib/inquiries";

export default async function InquiryDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const inquiry = await getInquiry(id);
  if (!inquiry) notFound();

  return (
    <div>
      <p className="text-sm text-primary">
        <Link href="/dashboard/inquiries" className="link link-hover">
          Inquiries
        </Link>
      </p>
      <PageHeader title={inquiry.fullName} description={inquiry.email} />
      <Flash saved={query.saved === "1"} />
      <Card className="mt-8 max-w-3xl">
        <CardBody className="grid gap-4">
          <p className="text-sm text-neutral/70">{new Date(inquiry.createdAt).toLocaleString()}</p>
          <p>
            <a className="link" href={`mailto:${inquiry.email}`}>
              {inquiry.email}
            </a>
            {" · "}
            <a className="link" href={`tel:${inquiry.phone}`}>
              {inquiry.phone}
            </a>
          </p>
          <p className="whitespace-pre-wrap">{inquiry.message}</p>
          <form action={updateInquiryStatusAction} className="flex flex-wrap items-end gap-3">
            <input type="hidden" name="id" value={inquiry.id} />
            <SelectField name="status" label="Status" defaultValue={inquiry.status}>
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="archived">Archived</option>
            </SelectField>
            <Button type="submit">Update status</Button>
          </form>
          <ConfirmDelete
            action={deleteInquiryAction.bind(null, inquiry.id)}
            message="Delete this inquiry permanently?"
          />
        </CardBody>
      </Card>
    </div>
  );
}
