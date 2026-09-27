import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { Card, CardBody } from "@/components/ui/Card";
import { TextField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Flash } from "@/components/dashboard/Flash";
import { ConfirmDelete } from "@/components/dashboard/ConfirmDelete";
import { deletePartnerAction, savePartnerAction } from "@/app/dashboard/cms-actions";
import { getContent } from "@/lib/content-store";

export default async function PartnersAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string; error?: string }>;
}) {
  const query = await searchParams;
  const { partners } = await getContent();

  return (
    <div>
      <PageHeader
        title="Partners"
        description="Organisations on the homepage partner section. Saves into data/content.json."
      />
      <Flash saved={query.saved === "1"} deleted={query.deleted === "1"} error={query.error} />

      <Card className="mt-8">
        <CardBody>
          <h2 className="text-lg font-semibold">Add partner</h2>
          <form action={savePartnerAction} className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr_8rem_auto]">
            <TextField name="name" label="Name" requiredMark required />
            <TextField name="href" label="Website" />
            <TextField name="order" label="Order" type="number" defaultValue={partners.length + 1} />
            <div className="flex items-end">
              <Button type="submit">Add</Button>
            </div>
          </form>
        </CardBody>
      </Card>

      <div className="mt-8 grid gap-4">
        {partners.length === 0 ? (
          <EmptyState title="No partners" body="Add organisations you have actually shipped with." />
        ) : (
          partners.map((partner) => (
            <Card key={partner.id}>
              <CardBody>
                <form action={savePartnerAction} className="grid gap-4 md:grid-cols-[1fr_1fr_8rem]">
                  <input type="hidden" name="id" value={partner.id} />
                  <TextField name="name" label="Name" defaultValue={partner.name} required />
                  <TextField name="href" label="Website" defaultValue={partner.href ?? ""} />
                  <TextField name="order" label="Order" type="number" defaultValue={partner.order} />
                  <div className="flex flex-wrap items-center gap-3 md:col-span-3">
                    <Button type="submit" size="sm">
                      Update
                    </Button>
                  </div>
                </form>
                <div className="mt-4">
                  <ConfirmDelete
                    action={deletePartnerAction.bind(null, partner.id)}
                    message={`Remove ${partner.name} from the partners section?`}
                  />
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
