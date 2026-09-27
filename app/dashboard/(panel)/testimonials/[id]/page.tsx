import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Flash } from "@/components/dashboard/Flash";
import { TestimonialForm } from "@/components/dashboard/TestimonialForm";
import { getContent } from "@/lib/content-store";

export default async function EditTestimonialPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const { testimonials } = await getContent();
  const testimonial = testimonials.find((item) => item.id === id);
  if (!testimonial) notFound();

  return (
    <div>
      <PageHeader title={testimonial.name} />
      <Flash saved={query.saved === "1"} error={query.error} />
      <TestimonialForm testimonial={testimonial} />
    </div>
  );
}
