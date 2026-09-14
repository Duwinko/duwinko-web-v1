import type { SiteContent } from "./types";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const defaultContent: SiteContent = {
  site: {
    name: "Duwinko",
    legalName: "Duwinko Software Ltd.",
    description:
      "Duwinko designs and builds websites, mobile apps, and management systems — including AI-powered features when they help the product ship and run.",
    url: "https://duwinko.com",
    email: "hello@duwinko.com",
    social: {
      linkedin: "https://www.linkedin.com/in/duwinko-company-4419a5251/",
      x: "https://twitter.com/duwinko",
      instagram: "https://www.instagram.com/duwinko/",
      github: "https://github.com/duwinko",
    },
  },
  hero: {
    eyebrow: "Duwinko Software Ltd.",
    titleLead: "Software built to run.",
    titleAccent: "AI when it earns a place.",
    body: "We design and ship web applications, mobile products, and internal systems so businesses spend less time on stalled projects — and more time operating.",
    primaryCta: { href: "/contact", label: "Start a project" },
    secondaryCta: { href: "/work", label: "See our work" },
    proof: [
      { value: "Web", label: "Applications" },
      { value: "Mobile", label: "Products" },
      { value: "Systems", label: "MIS & APIs" },
      { value: "AI", label: "Where it helps" },
    ],
    image: "/media/hero-product.png",
  },
  partners: [
    { id: "sampro", name: "Sampro Ltd", href: "https://www.samproltd.com/", order: 1 },
    { id: "nrc", name: "NRC Ltd", href: "https://www.niyorwandacad.com/", order: 2 },
    { id: "lebambe", name: "Lebambe Saint Joseph", href: null, order: 3 },
    { id: "niyo", name: "Niyo Rwanda CAD", href: "https://www.niyorwandacad.com/", order: 4 },
  ],
  about: {
    eyebrow: "The company",
    title: "Engineering teams that finish the work",
    body: "Duwinko exists so clients get software that matches how they actually operate — not a template with a logo on it. Our target is fewer failed projects, clearer scope, and products people can keep running.",
    yearsLabel: "Focus",
    yearsValue: "Ship",
    points: [
      "Understanding customer needs",
      "The right stack for the job",
      "Support after launch",
      "Delivery on an agreed timeline",
      "Long-term working relationships",
      "Follow-up after go-live",
    ],
    pillars: [
      {
        title: "Mission",
        body: "Build software that lowers the failure rate of software projects and helps companies succeed.",
      },
      {
        title: "Vision",
        body: "Give businesses software they can actually run, so they are not part of the global pattern of stalled and abandoned projects.",
      },
      {
        title: "Goals",
        body: "Reduce cost, effort, time, and risk on software projects in a proven, reliable way.",
      },
    ],
    image: "/media/about-studio.png",
  },
  services: [
    {
      id: "web-development",
      slug: "web-development",
      group: "engineering",
      featured: true,
      title: "Web development",
      short: "Sites and web systems built for the way your team works.",
      description:
        "Websites and web systems designed for clarity, performance, and the way your team works day to day.",
      detail:
        "We plan, design, and build public sites and authenticated web applications — from marketing to operations. The work includes information architecture, interface, and the APIs those screens depend on.",
      order: 1,
    },
    {
      id: "app-development",
      slug: "app-development",
      group: "engineering",
      featured: true,
      title: "App development",
      short: "Mobile products for the field, the office, or both.",
      description:
        "Mobile applications that help you run the business from the field, the office, or both.",
      detail:
        "We build mobile applications around real tasks: capturing work on site, reviewing status, and staying in sync with the same systems your office already uses.",
      order: 2,
    },
    {
      id: "mis",
      slug: "management-information-systems",
      group: "engineering",
      featured: true,
      title: "Management information systems",
      short: "Internal tools for operations, records, and reporting.",
      description:
        "Internal systems for operations, records, and reporting — built around your process, not the other way around.",
      detail:
        "MIS work is where most of the delivery risk sits. We map the process first, then build the records, workflows, and reporting so the system matches the operation.",
      order: 3,
    },
    {
      id: "ai-solutions",
      slug: "ai-solutions",
      group: "ai",
      featured: true,
      title: "AI solutions",
      short: "Automation and AI inside products that already have a job to do.",
      description:
        "AI-powered features, intelligent automation, and data-assisted workflows — added when they reduce work, not when they decorate a pitch.",
      detail:
        "We add AI to products we also know how to ship: extraction, search, drafting, routing, and automation on top of a real application. If a simpler rule or a better form will do, we say so.",
      order: 4,
    },
    {
      id: "ui-ux",
      slug: "ui-ux-design",
      group: "engineering",
      featured: false,
      title: "UI/UX design",
      short: "Interfaces with a bias toward clarity over decoration.",
      description:
        "Interface and experience design for web and mobile, with a bias toward clarity over decoration.",
      detail:
        "Design here means structure, hierarchy, and usable flows — then visual polish that still looks like a serious product, not a template.",
      order: 5,
    },
    {
      id: "project-analysis",
      slug: "project-analysis",
      group: "engineering",
      featured: false,
      title: "Project analysis",
      short: "Scope the problem before production code starts.",
      description:
        "We work with you to scope the problem, the users, and the constraints before a line of production code is written.",
      detail:
        "Analysis is how we keep projects from stalling: users, constraints, integrations, and a sequence of delivery that a team can actually follow.",
      order: 6,
    },
    {
      id: "computer-support",
      slug: "computer-service-support",
      group: "support",
      featured: false,
      title: "Computer service support",
      short: "Practical IT support around the software we ship.",
      description: "Practical IT support so the tools around the software stay usable.",
      detail:
        "When the product depends on working machines and a stable setup, we provide the support work that keeps that environment usable.",
      order: 7,
    },
  ],
  process: [
    {
      title: "Analyse",
      body: "Users, constraints, and the system that already exists — before we promise a build.",
    },
    {
      title: "Design",
      body: "Flows and interfaces that match the operation, not a generic dashboard kit.",
    },
    {
      title: "Build",
      body: "Web, mobile, APIs, and internal systems, with AI only where it changes the outcome.",
    },
    {
      title: "Support",
      body: "Launch, follow-up, and the maintenance that keeps the product in production.",
    },
  ],
  processImage: "/media/process-craft.png",
  contactImage: "/media/contact-desk.png",
  projects: [
    {
      id: "sampro-dashboard",
      slug: "sampro-dashboard",
      title: "Sampro operations dashboard",
      category: "Web application",
      href: "https://dashboard.samproltd.com/",
      image: "/media/work-operations.png",
      featured: true,
      partner: "Sampro Ltd",
      summary: "An operations dashboard for Sampro Ltd so the business can run day to day from one system.",
      problem: "Operations needed a single place to work — not a brochure site pretending to be software.",
      solution:
        "We built a web application for daily use: structured records, clear status, and a layout that holds up on a real workday.",
      technologies: ["Web application", "Dashboard", "Internal tools"],
      order: 1,
    },
    {
      id: "sampro-site",
      slug: "sampro-website",
      title: "Sampro website",
      category: "Website",
      href: "https://www.samproltd.com/",
      image: "/media/work-website.png",
      featured: true,
      partner: "Sampro Ltd",
      summary: "Marketing site for Sampro Ltd, paired with the operations product.",
      problem: "The public site had to explain the company without drifting away from the product behind it.",
      solution: "A clear marketing website that points visitors to the real work Sampro does.",
      technologies: ["Website", "Content", "Brand"],
      order: 2,
    },
    {
      id: "nrc",
      slug: "niyo-rwanda-cad",
      title: "Niyo Rwanda CAD",
      category: "Website",
      href: "https://www.niyorwandacad.com/",
      image: "/media/work-construction.png",
      featured: false,
      partner: "NRC Ltd",
      summary: "Website for a construction company.",
      problem: "The company needed a public site that presented projects and the practice clearly.",
      solution: "A construction-company website with a straightforward structure and live pages.",
      technologies: ["Website"],
      order: 3,
    },
    {
      id: "lebambe",
      slug: "lebambe-saint-joseph",
      title: "Lebambe Saint Joseph",
      category: "Web application",
      href: null,
      image: "/media/work-internal.png",
      featured: false,
      partner: "Lebambe Saint Joseph",
      summary: "Web application for Lebambe Saint Joseph.",
      problem: "Internal work needed a system, not another unmanaged spreadsheet trail.",
      solution: "A web application tailored to how the organisation records and follows work.",
      technologies: ["Web application"],
      order: 4,
    },
    {
      id: "figma",
      slug: "product-design",
      title: "Product design",
      category: "Figma",
      href: null,
      image: "/media/work-design.png",
      featured: false,
      partner: null,
      summary: "Interface design in Figma for product work before engineering.",
      problem: "The product needed structure and hierarchy before a production build.",
      solution: "Figma design that could be implemented without guessing the intent.",
      technologies: ["UI/UX", "Figma"],
      order: 5,
    },
  ],
  testimonials: [
    {
      id: "emmanuel-niyomukiza",
      quote:
        "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how you built my website. I never have any problem at all.",
      name: "Emmanuel Niyomukiza",
      role: "CEO and Founder, NRC Ltd",
      featured: true,
      order: 1,
    },
  ],
};

export const site = defaultContent.site;
export const hero = defaultContent.hero;
export const partners = defaultContent.partners;
export const about = defaultContent.about;
export const services = defaultContent.services;
export const process = defaultContent.process;
export const projects = defaultContent.projects;
export const testimonials = defaultContent.testimonials;

