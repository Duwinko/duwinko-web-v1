import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Flash } from "@/components/dashboard/Flash";
import { ProjectForm } from "@/components/dashboard/ProjectForm";
import { getContent } from "@/lib/content-store";

export default async function EditProjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const { projects } = await getContent();
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <div>
      <PageHeader title={project.title} description="Edits publish on the public site after save." />
      <Flash saved={query.saved === "1"} error={query.error} />
      <ProjectForm project={project} />
    </div>
  );
}
