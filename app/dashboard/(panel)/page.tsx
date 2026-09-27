import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import { listInquiries } from "@/lib/inquiries";
import { getContent } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function DashboardHomePage() {
  const inquiries = await listInquiries();
  const content = await getContent();
  const unread = inquiries.filter((item) => item.status === "new").length;

  const stats = [
    { label: "New inquiries", value: unread, href: "/dashboard/inquiries" },
    { label: "All inquiries", value: inquiries.length, href: "/dashboard/inquiries" },
    { label: "Projects", value: content.projects.length, href: "/dashboard/projects" },
    { label: "Services", value: content.services.length, href: "/dashboard/services" },
    { label: "Partners", value: content.partners.length, href: "/dashboard/partners" },
    { label: "Testimonials", value: content.testimonials.length, href: "/dashboard/testimonials" },
  ];

  return (
    <div>
      <PageHeader
        title="Overview"
        description="Edit public content here. Saves write into the project data files."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="h-full transition-colors hover:border-primary/50">
              <CardBody>
                <p className="text-sm text-neutral/60">{stat.label}</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight">{stat.value}</p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
