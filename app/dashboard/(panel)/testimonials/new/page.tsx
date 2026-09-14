import { PageHeader } from "@/components/ui/PageHeader";
import { Flash } from "@/components/dashboard/Flash";
import { TestimonialForm } from "@/components/dashboard/TestimonialForm";

export default async function NewTestimonialPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const query = await searchParams;
  return (
    <div>
      <PageHeader title="New testimonial" />
      <Flash error={query.error} />
      <TestimonialForm />
    </div>
  );
}
