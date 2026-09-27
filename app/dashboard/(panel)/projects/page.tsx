import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Table } from "@/components/ui/Table";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge } from "@/components/ui/Badge";
import { Flash } from "@/components/dashboard/Flash";
import { getContent } from "@/lib/content-store";

export default async function ProjectsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const query = await searchParams;
  const { projects } = await getContent();

  return (
    <div>
      <PageHeader
        title="Projects"
        description="Create, edit, and remove case studies. Changes write into data/content.json."
        actions={
          <Link href="/dashboard/projects/new" className="btn btn-primary rounded-full">
            New project
          </Link>
        }
      />
      <Flash saved={query.saved === "1"} deleted={query.deleted === "1"} />
      <div className="mt-8">
        {projects.length === 0 ? (
          <EmptyState title="No projects" body="Add the first case study." />
        ) : (
          <Table headers={["Project", "Category", "Status", ""]}>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="font-medium">{project.title}</td>
                <td>{project.category}</td>
                <td>
                  <Badge tone={project.featured ? "primary" : "neutral"}>
                    {project.featured ? "Featured" : "Listed"}
                  </Badge>
                </td>
                <td className="text-right">
                  <Link href={`/dashboard/projects/${project.id}`} className="link link-primary">
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
