import { PageHeader } from "@/components/ui/PageHeader";
import { Flash } from "@/components/dashboard/Flash";
import { ProjectForm } from "@/components/dashboard/ProjectForm";

export default async function NewProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const query = await searchParams;
  return (
    <div>
      <PageHeader title="New project" description="This case study will appear on Work and, if featured, on Home." />
      <Flash error={query.error} />
      <ProjectForm />
    </div>
  );
}
