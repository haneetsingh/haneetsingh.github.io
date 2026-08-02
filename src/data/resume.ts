export const profile = {
  name: "Haneet Singh",
  title: "Technical Lead / Senior Software Engineer",
  tagline: "TypeScript, Next.js, Node.js",
  location: "Toronto, Canada",
  email: "singh.haneet007@gmail.com",
  phone: "(647) 868-3930",
  bio: "Fifteen years building web products, the last several years at a staff or lead level across fintech, supply chain and banking. I own codebases end to end, from architecture and hands-on delivery to managing the team that ships it. TypeScript is home base across the stack - React, Next.js, Node.js. Most of that time has been spent dropped into regulated or high-stakes environments, where the job is getting a team moving fast without breaking things.",
  social: [
    { label: "GitHub", href: "https://github.com/haneetsingh" },
    { label: "LinkedIn", href: "https://linkedin.com/in/haneetsingh/" },
    { label: "Twitter", href: "https://twitter.com/iSinghHaneet" },
    { label: "Drupal.org", href: "https://drupal.org/u/singh_haneet" },
  ],
};

export const experience = [
  {
    role: "Software Engineering Consultant (Senior Software Engineer, Liberty Mutual)",
    org: "Self-employed",
    location: "Remote",
    period: "Oct 2025 – Present",
    bullets: [
      "Providing technical leadership on an enterprise platform supporting thousands of users in a regulated environment.",
      "Own the design and delivery of core platform capabilities that support critical operational workflows for the business.",
      "Set engineering standards, code review practices and process improvements for the team.",
      "Guide engineers through complex technical implementations while keeping solutions scalable and maintainable.",
      "Work with product and engineering leadership to keep architecture decisions aligned with both business goals and compliance requirements.",
    ],
  },
  {
    role: "Software Engineering Consultant (Software Engineer, Everstream Analytics)",
    org: "Self-employed",
    location: "Remote",
    period: "Mar 2025 – Aug 2025",
    bullets: [
      "Built and maintained web applications for the Everstream Analytics supply chain risk platform using TypeScript, Next.js, Tailwind CSS and Django, with a strong focus on accessibility and pixel-accurate UI.",
      "Built an interactive geospatial incidents map visualizing thousands of global disruption events, with filtering and clustering so analysts could spot what mattered quickly.",
      "Built a chatbot UI on CopilotKit that let users query incident data in plain language.",
      "Shipped an incident digests viewer in Next.js with role-based auth, so different user groups only saw what was relevant to them.",
      "Refactored key backend API endpoints to cut redundant calls and improve response times across the platform.",
    ],
  },
  {
    role: "Technical Lead",
    org: "NearForm",
    location: "Remote",
    period: "Apr 2024 – Feb 2025",
    bullets: [
      "Led consulting engagements end to end, translating client business goals into a technical plan the team could actually execute.",
      "Built full-stack solutions in Next.js, React, Node.js and PostgreSQL, staying hands-on rather than just reviewing other people's code.",
      "Did regular code review and acted as the technical backstop when the team hit hard problems.",
      "Managed and mentored engineers directly, including performance feedback and career development conversations.",
      "Worked across teams and with stakeholders to turn technical trade-offs into recommendations non-technical people could act on.",
    ],
  },
  {
    role: "Technical Lead",
    org: "Finneo",
    location: "Toronto",
    period: "Dec 2021 – Mar 2024",
    bullets: [
      "Owned the full development lifecycle for an in-house product: roadmap, milestones and shipping.",
      "Built the core product on React/Next.js, Express.js and PostgreSQL/MongoDB, and managed the infrastructure it ran on.",
      "Stayed hands-on with a large share of the codebase and ran thorough code reviews to keep quality high across the team.",
      "Managed a small development team, with regular 1:1s and real feedback rather than box-checking.",
      "Worked with product owners to build POCs and prototypes that tested whether an idea was worth building out.",
      "Wrote documentation and tests that made it easier for new engineers to get up to speed.",
    ],
  },
  {
    role: "Senior Consultant",
    org: "GeekSoft Consulting",
    location: "Amsterdam",
    period: "Oct 2020 – Oct 2021",
    bullets: [
      "Worked on banking applications for ING, following the bank's engineering standards closely given the regulatory environment.",
      "Led migration of legacy on-premise applications to Azure and modernized the frontend using ES Modules, Web Components and Lit.",
      "Worked with business stakeholders across a few different sectors within ING to scope and build features.",
      "Mentored engineers on the team and helped keep technical decisions tied to the bank's broader goals.",
    ],
  },
];

// Used only for the downloadable résumé: keeps the consulting work as one
// section instead of the two engagement entries shown on the site.
export const resumeExperience = [
  {
    role: "Software Engineering Consultant",
    org: "Self-employed",
    location: "Remote",
    period: "Mar 2025 – Present",
    bullets: [
      "Leading a platform engagement with Liberty Mutual (Oct 2025–present) as Senior Software Engineer, providing technical leadership on an enterprise platform supporting thousands of users in a regulated environment.",
      "Own the design and delivery of core platform capabilities that support critical operational workflows for the business.",
      "Set engineering standards, code review practices and process improvements for the team.",
      "Guide engineers through complex technical implementations while keeping solutions scalable and maintainable.",
      "Work with product and engineering leadership to keep architecture decisions aligned with both business goals and compliance requirements.",
      "Built and maintained web applications for the Everstream Analytics supply chain risk platform (Mar–Aug 2025) using TypeScript, Next.js, Tailwind CSS and Django, with a strong focus on accessibility and pixel-accurate UI.",
      "Built an interactive geospatial incidents map visualizing thousands of global disruption events, with filtering and clustering so analysts could spot what mattered quickly.",
      "Built a chatbot UI on CopilotKit that let users query incident data in plain language.",
      "Shipped an incident digests viewer in Next.js with role-based auth, so different user groups only saw what was relevant to them.",
      "Refactored key backend API endpoints to cut redundant calls and improve response times across the platform.",
    ],
  },
  ...experience.slice(2),
];

export const earlierRoles = [
  {
    role: "Contract Software Consultant",
    summary:
      "Delivered client projects including MyLook (an AR-based omni-channel shopping experience), Adidas CTC's B2B platform, Rawpixel and St. Jerome's University.",
  },
  {
    role: "Senior Frontend Developer, Srijan Technologies",
    summary: "Built Drupal 8, React.js and Node.js solutions; ran code reviews and trained other developers on modern frontend practices.",
  },
  {
    role: "Senior Software Engineer, Ex2 Solutions India",
    summary: "Led the frontend team on a website builder product, designed the UI and mentored developers.",
  },
  {
    role: "Frontend Developer, Axelerant Technologies",
    summary: "Built websites with Drupal, PHP, JavaScript and HTML/CSS.",
  },
  {
    role: "Software Developer, Wipro Technologies",
    summary: "Built responsive web applications with PHP, Drupal and JavaScript, and ran UAT sessions and demos.",
  },
];

export const projects = [
  {
    name: "Liberty Mutual: Enterprise Platform",
    description:
      "Technical leadership on an enterprise platform used by thousands of people in a regulated industry. Owned the design and delivery of the core features that run day-to-day operations.",
    tags: ["TypeScript", "Next.js", "Node.js"],
    href: "",
  },
  {
    name: "Everstream Analytics: Supply Chain Risk Platform",
    description:
      "Interactive geospatial map visualizing thousands of global disruption events with filtering and clustering, plus a natural-language incident chatbot UI built on CopilotKit.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "CopilotKit"],
    href: "",
  },
  {
    name: "Finneo Lending Platform",
    description:
      "Commercial real estate financing platform. Owned architecture and delivery of the core lending and document workflows, main API and client apps.",
    tags: ["Next.js", "Express.js", "PostgreSQL", "MongoDB"],
    href: "",
  },
  {
    name: "ING Banking Modernization",
    description:
      "Migrated legacy on-premise banking applications to Azure and modernized the frontend with ES Modules, Web Components and Lit.",
    tags: ["Azure", "Web Components", "Lit"],
    href: "",
  },
  {
    name: "MyLook",
    description:
      "AR shopping experience for trying on and buying contact lenses online. Built the frontend for one of the earlier augmented-reality commerce products.",
    tags: ["JavaScript", "AR", "E-commerce"],
    href: "",
  },
  {
    name: "SmartKPIs",
    description:
      "Led the team building a goal-tracking application for employee KPIs: tracking, notifications and a customized dashboard for reviewing team goals.",
    tags: ["React.js", "Drupal 8", "PHP", "Webpack"],
    href: "",
  },
  {
    name: "InforMEA & UNCCD: UN Digital Platforms",
    description:
      "Built glossary and autocomplete search for the UN's InforMEA portal and a Q&A feature for the UN Convention to Combat Desertification's official site.",
    tags: ["Drupal", "PHP"],
    href: "",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "PHP"],
  "Frameworks & Libraries": ["React.js", "Next.js", "Node.js", "Lit", "Angular", "Drupal"],
  Frontend: ["HTML5", "CSS3", "Web Components", "Redux", "Zustand", "React Query"],
  "Backend & APIs": ["Microservices", "REST", "GraphQL"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  Testing: ["Jest", "React Testing Library", "Supertest", "Mocha", "Chai", "Playwright", "Cypress"],
  "Cloud & DevOps": ["Docker", "Kubernetes", "AWS", "Azure", "DigitalOcean", "Vercel"],
  Practices: ["Agile (Scrum/Kanban)", "CI/CD", "TDD", "Unit Testing", "Code Reviews", "Git/SVN"],
};

export const education = {
  degree: "Bachelor's in Computer Engineering",
  school: "University of Jammu, Jammu, India",
  period: "2007 – 2011",
};
