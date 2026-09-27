import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardBody } from "@/components/ui/Card";
import { TextAreaField, TextField } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { ImageField } from "@/components/ui/FormExtras";
import { Flash } from "@/components/dashboard/Flash";
import { saveSettingsAction } from "@/app/dashboard/cms-actions";
import { getContent } from "@/lib/content-store";

export default async function SettingsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const query = await searchParams;
  const content = await getContent();
  const { site, hero, about, process } = content;

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Company details, homepage copy, and photography. Admin login still uses environment variables."
      />
      <Flash saved={query.saved === "1"} error={query.error} />

      <form action={saveSettingsAction} encType="multipart/form-data" className="mt-8 grid gap-6">
        <Card>
          <CardBody className="grid gap-4 md:grid-cols-2">
            <h2 className="text-lg font-semibold md:col-span-2">Company</h2>
            <TextField name="name" label="Short name" defaultValue={site.name} />
            <TextField name="legalName" label="Legal name" defaultValue={site.legalName} />
            <TextField name="url" label="Site URL" defaultValue={site.url} />
            <TextField name="email" label="Public email" defaultValue={site.email} />
            <div className="md:col-span-2">
              <TextAreaField name="description" label="SEO description" defaultValue={site.description} />
            </div>
            <TextField name="linkedin" label="LinkedIn" defaultValue={site.social.linkedin} />
            <TextField name="x" label="X" defaultValue={site.social.x} />
            <TextField name="instagram" label="Instagram" defaultValue={site.social.instagram} />
            <TextField name="github" label="GitHub" defaultValue={site.social.github} />
          </CardBody>
        </Card>

        <Card>
          <CardBody className="grid gap-4 md:grid-cols-2">
            <h2 className="text-lg font-semibold md:col-span-2">Hero</h2>
            <TextField name="eyebrow" label="Eyebrow" defaultValue={hero.eyebrow} />
            <TextField name="titleLead" label="Title" defaultValue={hero.titleLead} />
            <TextField name="titleAccent" label="Accent title" defaultValue={hero.titleAccent} />
            <div className="md:col-span-2">
              <TextAreaField name="heroBody" label="Hero body" defaultValue={hero.body} />
            </div>
            {hero.proof.map((item, index) => (
              <div key={item.label} className="grid gap-2 md:grid-cols-2 md:col-span-2">
                <TextField name={`proofValue${index}`} label={`Proof ${index + 1} value`} defaultValue={item.value} />
                <TextField name={`proofLabel${index}`} label={`Proof ${index + 1} label`} defaultValue={item.label} />
              </div>
            ))}
            <div className="md:col-span-2">
              <ImageField name="heroImage" label="Hero image" currentSrc={hero.image} />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="grid gap-4 md:grid-cols-2">
            <h2 className="text-lg font-semibold md:col-span-2">About</h2>
            <TextField name="aboutEyebrow" label="Eyebrow" defaultValue={about.eyebrow} />
            <TextField name="aboutTitle" label="Title" defaultValue={about.title} />
            <div className="md:col-span-2">
              <TextAreaField name="aboutBody" label="Body" defaultValue={about.body} />
            </div>
            <TextField name="yearsValue" label="Highlight value" defaultValue={about.yearsValue} />
            <TextField name="yearsLabel" label="Highlight label" defaultValue={about.yearsLabel} />
            <div className="md:col-span-2">
              <TextAreaField
                name="points"
                label="About points"
                hint="One point per line."
                defaultValue={about.points.join("\n")}
              />
            </div>
            {about.pillars.map((pillar, index) => (
              <div key={pillar.title} className="md:col-span-2 grid gap-2">
                <TextField name={`pillarTitle${index}`} label={`Pillar ${index + 1} title`} defaultValue={pillar.title} />
                <TextAreaField name={`pillarBody${index}`} label={`Pillar ${index + 1} body`} defaultValue={pillar.body} />
              </div>
            ))}
            <div className="md:col-span-2">
              <ImageField name="aboutImage" label="About image" currentSrc={about.image} />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="grid gap-4">
            <h2 className="text-lg font-semibold">Process and contact photography</h2>
            {process.map((step, index) => (
              <div key={step.title} className="grid gap-2 md:grid-cols-2">
                <TextField name={`processTitle${index}`} label={`Step ${index + 1} title`} defaultValue={step.title} />
                <TextAreaField name={`processBody${index}`} label={`Step ${index + 1} body`} defaultValue={step.body} />
              </div>
            ))}
            <ImageField name="processImage" label="Process image" currentSrc={content.processImage} />
            <ImageField name="contactImage" label="Contact image" currentSrc={content.contactImage} />
          </CardBody>
        </Card>

        <div>
          <Button type="submit">Save settings</Button>
        </div>
      </form>
    </div>
  );
}
