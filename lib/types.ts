export type InquiryStatus = "new" | "read" | "archived";

export type Inquiry = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
};

export type ServiceGroup = "engineering" | "ai" | "support";

export type SiteSettings = {
  name: string;
  legalName: string;
  description: string;
  url: string;
  email: string;
  social: {
    linkedin: string;
    x: string;
    instagram: string;
    github: string;
  };
};

export type HeroContent = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  body: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  proof: { value: string; label: string }[];
  image: string;
};

export type Partner = {
  id: string;
  name: string;
  href: string | null;
  order: number;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  body: string;
  yearsLabel: string;
  yearsValue: string;
  points: string[];
  pillars: { title: string; body: string }[];
  image: string;
};

export type ServiceRecord = {
  id: string;
  slug: string;
  group: ServiceGroup;
  featured: boolean;
  title: string;
  short: string;
  description: string;
  detail: string;
  order: number;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type ProjectRecord = {
  id: string;
  slug: string;
  title: string;
  category: string;
  href: string | null;
  image: string;
  featured: boolean;
  partner: string | null;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  order: number;
};

export type TestimonialRecord = {
  id: string;
  quote: string;
  name: string;
  role: string;
  featured: boolean;
  order: number;
};

export type SiteContent = {
  site: SiteSettings;
  hero: HeroContent;
  partners: Partner[];
  about: AboutContent;
  services: ServiceRecord[];
  process: ProcessStep[];
  processImage: string;
  contactImage: string;
  projects: ProjectRecord[];
  testimonials: TestimonialRecord[];
};

export type Project = ProjectRecord;
export type Service = ServiceRecord;
