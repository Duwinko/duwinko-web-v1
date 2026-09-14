import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Flash } from "@/components/dashboard/Flash";
import { ServiceForm } from "@/components/dashboard/ServiceForm";
import { getContent } from "@/lib/content-store";

export default async function EditServicePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const { services } = await getContent();
  const service = services.find((item) => item.id === id);
  if (!service) notFound();

  return (
    <div>
      <PageHeader title={service.title} />
      <Flash saved={query.saved === "1"} error={query.error} />
      <ServiceForm service={service} />
    </div>
  );
}
