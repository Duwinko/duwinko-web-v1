import { PageHeader } from "@/components/ui/PageHeader";
import { Flash } from "@/components/dashboard/Flash";
import { ServiceForm } from "@/components/dashboard/ServiceForm";

export default async function NewServicePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const query = await searchParams;
  return (
    <div>
      <PageHeader title="New service" />
      <Flash error={query.error} />
      <ServiceForm />
    </div>
  );
}
