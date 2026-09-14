import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content-store";
import { SectionRule } from "@/components/marketing/SectionRule";
import { ContactForm } from "./ContactForm";
import { MediaFrame } from "@/components/marketing/MediaFrame";
import { cn } from "@/lib/cn";

export default async function HomePage() {
  const { about, hero, partners, process, processImage, projects, services, testimonials } =
    await getContent();
  const featuredWork = projects.filter((item) => item.featured);
  const moreWork = projects.filter((item) => !item.featured);
  const featuredServices = services.filter((item) => item.featured);
  const otherServices = services.filter((item) => !item.featured);
  const quote = testimonials.find((item) => item.featured) ?? testimonials[0];
  return (
    <div>
      <section className="hero-field">
        <div className="container-site pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-chip mx-auto w-fit">{hero.eyebrow}</p>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              {hero.titleLead}{" "}
              <span className="text-primary">{hero.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-neutral md:text-lg">
              {hero.body}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={hero.primaryCta.href} className="btn btn-primary rounded-full px-6">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="btn btn-outline rounded-full px-6">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_minmax(0,22rem)_1fr]">
              <div className="grid gap-4">
                {hero.proof.slice(0, 2).map((item) => (
                  <div key={item.label} className="glass-panel rounded-2xl px-5 py-4 text-left md:text-right">
                    <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                    <p className="text-sm text-neutral">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-3xl">
                <MediaFrame
                  src={hero.image}
                  alt="Software product work from Duwinko"
                  priority
                />
              </div>
              <div className="grid gap-4">
                {hero.proof.slice(2).map((item) => (
                  <div key={item.label} className="glass-panel rounded-2xl px-5 py-4">
                    <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                    <p className="text-sm text-neutral">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SectionRule label="Duwinko" />
      </section>

      <section id="partners" className="container-site py-16 md:py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Partners
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Organisations we build with
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral">
          Delivery partners and clients we have shipped software for — not a logo wall of brands we never touched.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <li key={partner.id}>
              {partner.href ? (
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel flex min-h-24 items-center justify-center rounded-2xl px-4 text-center text-sm font-semibold tracking-wide transition-colors hover:border-primary/50"
                >
                  {partner.name}
                </a>
              ) : (
                <div className="glass-panel flex min-h-24 items-center justify-center rounded-2xl px-4 text-center text-sm font-semibold tracking-wide">
                  {partner.name}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <SectionRule />

      <section id="about" className="container-site grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{about.title}</h2>
          <p className="mt-5 max-w-xl text-neutral">{about.body}</p>
          <div className="mt-8 flex items-end gap-4">
            <p className="text-6xl font-semibold tracking-tight text-primary">{about.yearsValue}</p>
            <p className="pb-2 text-sm uppercase tracking-[0.16em] text-neutral">{about.yearsLabel}</p>
          </div>
          <Link href="/about" className="btn btn-primary mt-8 rounded-full">
            About Duwinko
          </Link>
        </div>
        <div className="glass-panel overflow-hidden rounded-3xl">
          <Image
            src={about.image}
            alt="Engineering work at Duwinko"
            width={900}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <SectionRule />

      <section id="services" className="container-site py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Software engineering first. AI where it helps.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {(featuredServices.length > 0 ? featuredServices : otherServices.slice(0, 4)).map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={cn(
                "rounded-3xl p-6 transition-transform hover:-translate-y-0.5",
                service.featured ? "bg-primary text-primary-content" : "glass-panel",
              )}
            >
              <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className={cn("mt-3 text-sm", service.featured ? "text-primary-content/80" : "text-neutral")}>
                {service.short}
              </p>
              <p className="mt-6 text-sm font-semibold">Read more →</p>
            </Link>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {(featuredServices.length > 0 ? otherServices : otherServices.slice(4)).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="glass-panel rounded-3xl p-5 transition-colors hover:border-primary/40"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-neutral">{service.short}</p>
              </Link>
            ))}
        </div>
      </section>

      <SectionRule />

      <section id="work" className="container-site py-16 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Products in production
            </h2>
          </div>
          <Link href="/work" className="link link-primary">
            All work
          </Link>
        </div>
        <div className="mt-12 grid gap-8">
          {featuredWork.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2",
                index % 2 === 1 && "lg:[&>div:first-child]:order-2",
              )}
            >
              <Link href={`/work/${project.slug}`} className="block">
                <MediaFrame src={project.image} alt={project.title} />
              </Link>
              <div>
                <p className="text-sm text-primary">{project.category}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 max-w-lg text-neutral">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="section-chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={`/work/${project.slug}`} className="btn btn-outline mt-8 rounded-full">
                  Case study
                </Link>
              </div>
            </article>
          ))}
        </div>
        <ul className="mt-12 divide-y divide-base-content/10 border-y border-base-content/10">
          {moreWork.map((project) => (
            <li key={project.id} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">{project.title}</p>
                <p className="text-sm text-neutral">{project.category}</p>
              </div>
              <Link href={`/work/${project.slug}`} className="link link-primary text-sm">
                View
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SectionRule />

      <section className="container-site py-16 md:py-24">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight md:text-5xl">
          How a project actually moves
        </h2>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
          <div className="grid gap-8">
            {process.slice(0, 2).map((step) => (
              <div key={step.title}>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="glass-panel overflow-hidden rounded-3xl">
            <Image
              src={processImage}
              alt="Product and systems work"
              width={800}
              height={640}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="grid gap-8">
            {process.slice(2).map((step) => (
              <div key={step.title}>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionRule />

      <section className="container-site py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why work with us</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {about.pillars.map((pillar) => (
            <article key={pillar.title} className="glass-panel rounded-3xl p-6">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-neutral">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      {quote ? (
      <section className="container-site pb-16 text-center md:pb-24">
        <h2 className="text-3xl font-semibold tracking-tight">What clients say</h2>
        <blockquote className="mx-auto mt-8 max-w-3xl text-lg text-neutral md:text-xl">
          “{quote.quote}”
          <footer className="mt-6 text-sm text-base-content">
            {quote.name} — {quote.role}
          </footer>
        </blockquote>
      </section>
      ) : null}

      <section className="bg-primary text-primary-content">
        <div className="container-site flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Starting a product, or unsticking one?</h2>
            <p className="mt-3 max-w-xl text-primary-content/80">
              Tell us about the users, the deadline, and the system that already exists.
            </p>
          </div>
          <Link href="/contact" className="btn rounded-full border-0 bg-base-100 text-base-content">
            Talk to Duwinko
          </Link>
        </div>
      </section>

      <section id="contact" className="container-site grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Reach us</h2>
          <p className="mt-3 text-neutral">
            The same form lands in the staff dashboard. We follow up on the work, not a mailing list.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
