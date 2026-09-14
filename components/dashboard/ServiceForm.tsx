import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { CheckField, SelectField } from "@/components/ui/FormExtras";
import { TextAreaField, TextField } from "@/components/ui/Field";
import { ConfirmDelete } from "@/components/dashboard/ConfirmDelete";
import { deleteServiceAction, saveServiceAction } from "@/app/dashboard/cms-actions";
import type { ServiceRecord } from "@/lib/types";

export function ServiceForm({ service }: { service?: ServiceRecord }) {
  const remove = deleteServiceAction.bind(null, service?.id ?? "");

  return (
    <form action={saveServiceAction} className="mt-8 grid gap-6">
      {service ? <input type="hidden" name="id" value={service.id} /> : null}
      <Card>
        <CardBody className="grid gap-4 md:grid-cols-2">
          <TextField name="title" label="Title" requiredMark required defaultValue={service?.title} />
          <TextField name="slug" label="Slug" defaultValue={service?.slug} />
          <SelectField name="group" label="Group" defaultValue={service?.group ?? "engineering"}>
            <option value="engineering">Engineering</option>
            <option value="ai">AI</option>
            <option value="support">Support</option>
          </SelectField>
          <TextField name="order" label="Order" type="number" defaultValue={service?.order ?? 1} />
          <div className="md:col-span-2">
            <CheckField
              name="featured"
              label="Highlight on the homepage"
              defaultChecked={service?.featured}
            />
          </div>
          <div className="md:col-span-2">
            <TextField name="short" label="Short line" defaultValue={service?.short} />
          </div>
          <div className="md:col-span-2">
            <TextAreaField name="description" label="Description" defaultValue={service?.description} />
          </div>
          <div className="md:col-span-2">
            <TextAreaField name="detail" label="Detail page copy" defaultValue={service?.detail} />
          </div>
        </CardBody>
      </Card>
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Save service</Button>
        <Link href="/dashboard/services" className="btn btn-ghost">
          Cancel
        </Link>
        {service ? (
          <ConfirmDelete action={remove} message="Delete this service from the public site?" />
        ) : null}
      </div>
    </form>
  );
}
