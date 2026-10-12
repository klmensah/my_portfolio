export const portfolio = {
  name: 'K.L.M.',
  fullName: 'K.L. Mensah',
  role: 'Software Developer',
  location: 'Accra, Ghana',
  avatar: 'profile-portrait.jpg',
  github: 'https://github.com/klmensah',
  linkedin: 'https://www.linkedin.com/in/lawrence-mensah-3659a110a/',
  supportUrl: 'https://github.com/sponsors/klmensah',
  about: [
    'I am a software developer who builds practical workflow and information-management systems for organisations with complex operational processes.',
    'My current work includes Dockerised Odoo and Next.js applications for correspondence intake, document routing, physical-file tracking, multi-branch administration, finance, attendance, and reporting.',
  ],
  services: [
    { title: 'Enterprise applications', description: 'Odoo and Next.js systems designed around real operational workflows.', icon: 'code' },
    { title: 'Workflow & data systems', description: 'Structured tools for documents, records, finance, attendance, and reporting.', icon: 'data' },
    { title: 'Dockerised delivery', description: 'Containerised applications with dependable databases and deployment foundations.', icon: 'shield' },
  ],
  skillGroups: [
    { title: 'Frontend', skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { title: 'Enterprise & backend', skills: ['Odoo', 'Python', 'Node.js', 'PostgreSQL', 'Prisma'] },
    { title: 'Delivery', skills: ['Docker', 'Caddy', 'Git', 'GitHub Actions'] },
  ],
  journey: [
    { period: 'Present', title: 'Software development', description: 'Building Dockerised workflow and information-management systems with Odoo, Next.js, TypeScript, and PostgreSQL.', type: 'experience' },
    { period: '2024 — Present', title: 'Independent software projects', description: 'Designing and developing applications for document routing, physical-file tracking, finance, attendance, and reporting.', type: 'experience' },
    { period: 'Current focus', title: 'Enterprise workflow systems', description: 'Turning complex operational processes into clear, reliable tools that teams can use every day.', type: 'experience' },
  ],
  projects: [
    { title: 'Correspondence & Document Engine', description: 'Dockerised application for correspondence intake, minuting, task routing, work-product management, physical-file tracking, filing, assessments, and executive dashboards.', language: 'Odoo 19 · PostgreSQL · Docker', category: 'Document workflow', repository: null, accent: 'violet' },
    { title: 'Legal Workflow & Physical File Tracking System', description: 'Platform with registry and practitioner workspaces, physical-file movement tracking, collaborative drafting, document export, task management, and operational dashboards.', language: 'Next.js · TypeScript · PostgreSQL · Docker', category: 'Workflow system', repository: null, accent: 'blue' },
    { title: 'Multi-Branch Church Management System', description: 'Application for multi-branch membership, attendance, programmes, giving, expenditure approvals, contributions, communications, and operational reporting.', language: 'Odoo 19 · PostgreSQL · Docker', category: 'Operations platform', repository: 'https://github.com/klmensah/efcidatacentre', accent: 'green' },
  ],
} as const;
