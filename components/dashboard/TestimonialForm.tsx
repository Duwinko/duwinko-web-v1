import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { CheckField } from "@/components/ui/FormExtras";
import { TextAreaField, TextField } from "@/components/ui/Field";
import { ConfirmDelete } from "@/components/dashboard/ConfirmDelete";
import { deleteTestimonialAction, saveTestimonialAction } from "@/app/dashboard/cms-actions";
import type { TestimonialRecord } from "@/lib/types";

export function TestimonialForm({ testimonial }: { testimonial?: TestimonialRecord }) {
  const remove = deleteTestimonialAction.bind(null, testimonial?.id ?? "");

  return (
    <form action={saveTestimonialAction} className="mt-8 grid gap-6">
      {testimonial ? <input type="hidden" name="id" value={testimonial.id} /> : null}
      <Card>
        <CardBody className="grid gap-4">
          <TextAreaField name="quote" label="Quote" requiredMark required defaultValue={testimonial?.quote} />
          <TextField name="name" label="Name" requiredMark required defaultValue={testimonial?.name} />
          <TextField name="role" label="Role" defaultValue={testimonial?.role} />
          <TextField name="order" label="Order" type="number" defaultValue={testimonial?.order ?? 1} />
          <CheckField name="featured" label="Show on the homepage" defaultChecked={testimonial?.featured ?? true} />
        </CardBody>
      </Card>
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Save testimonial</Button>
        <Link href="/dashboard/testimonials" className="btn btn-ghost">
          Cancel
        </Link>
        {testimonial ? (
          <ConfirmDelete action={remove} message="Delete this testimonial?" />
        ) : null}
      </div>
    </form>
  );
}
