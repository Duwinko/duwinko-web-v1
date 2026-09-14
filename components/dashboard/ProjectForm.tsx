import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { CheckField, ImageField } from "@/components/ui/FormExtras";
import { TextAreaField, TextField } from "@/components/ui/Field";
import { ConfirmDelete } from "@/components/dashboard/ConfirmDelete";
import { deleteProjectAction, saveProjectAction } from "@/app/dashboard/cms-actions";
import type { ProjectRecord } from "@/lib/types";

export function ProjectForm({ project }: { project?: ProjectRecord }) {
  const remove = deleteProjectAction.bind(null, project?.id ?? "");

  return (
    <form action={saveProjectAction} encType="multipart/form-data" className="mt-8 grid gap-6">
      {project ? <input type="hidden" name="id" value={project.id} /> : null}
      <Card>
        <CardBody className="grid gap-4 md:grid-cols-2">
          <TextField name="title" label="Title" requiredMark defaultValue={project?.title} required />
          <TextField name="slug" label="Slug" hint="Leave blank to generate from the title." defaultValue={project?.slug} />
          <TextField name="category" label="Category" defaultValue={project?.category} />
          <TextField name="partner" label="Partner" defaultValue={project?.partner ?? ""} />
          <TextField name="href" label="Live URL" defaultValue={project?.href ?? ""} />
          <TextField name="order" label="Order" type="number" defaultValue={project?.order ?? 1} />
          <div className="md:col-span-2">
            <CheckField name="featured" label="Featured on the homepage" defaultChecked={project?.featured} />
          </div>
          <div className="md:col-span-2">
            <TextAreaField name="summary" label="Summary" defaultValue={project?.summary} />
          </div>
          <TextAreaField name="problem" label="Problem" defaultValue={project?.problem} />
          <TextAreaField name="solution" label="Solution" defaultValue={project?.solution} />
          <div className="md:col-span-2">
            <TextField
              name="technologies"
              label="Technologies"
              hint="Comma-separated."
              defaultValue={project?.technologies.join(", ")}
            />
          </div>
          <div className="md:col-span-2">
            <ImageField
              name="imageFile"
              label="Cover image"
              currentSrc={project?.image}
              hint="JPEG, PNG, WebP, or GIF. Written into public/media/uploads."
            />
          </div>
        </CardBody>
      </Card>
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Save project</Button>
        <Link href="/dashboard/projects" className="btn btn-ghost">
          Cancel
        </Link>
        {project ? (
          <ConfirmDelete action={remove} message="Delete this project from the public site?" />
        ) : null}
      </div>
    </form>
  );
}
