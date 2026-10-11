export const portfolio = {
  name: 'K.L.M.',
  fullName: 'K.L. Mensah',
  role: 'Software Developer',
  location: 'Accra, Ghana',
  avatar: 'https://avatars.githubusercontent.com/u/171818853?v=4',
  github: 'https://github.com/klmensah',
  about: [
    'I build practical web applications and enjoy turning complicated requirements into clear, usable experiences. My work spans modern TypeScript interfaces, data-driven systems, and software engineering assignments.',
    'A background in law influences the way I work: I pay attention to detail, think carefully about rules and edge cases, and care about building systems people can trust.',
  ],
  services: [
    { title: 'Web applications', description: 'Responsive interfaces and full-stack products built around real workflows.', icon: 'code' },
    { title: 'Data systems', description: 'Structured tools for managing financial, legal, and organisational information.', icon: 'data' },
    { title: 'Secure thinking', description: 'Careful defaults, clear permissions, and attention to the data behind each feature.', icon: 'shield' },
  ],
  skillGroups: [
    { title: 'Frontend', skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { title: 'Backend & data', skills: ['Node.js', 'PostgreSQL', 'Firebase', 'C#', 'Python'] },
    { title: 'Workflow', skills: ['Git', 'GitHub Actions', 'Docker', 'Responsive design'] },
  ],
  journey: [
    { period: 'Present', title: 'Bachelor’s degree studies', description: 'Building a foundation in computer science and software engineering through coursework and hands-on assignments.', type: 'education' },
    { period: '2024 — Present', title: 'Independent software projects', description: 'Designing and developing portfolio, finance, data-centre, and case-management applications published on GitHub.', type: 'experience' },
    { period: 'Ongoing', title: 'From law to technology', description: 'Applying legal precision, research habits, and structured thinking to software problems and product decisions.', type: 'experience' },
  ],
  projects: [
    { title: 'Church Finance App', description: 'A TypeScript application focused on church financial management.', language: 'TypeScript', category: 'Finance', repository: 'https://github.com/klmensah/church-finance-app', live: 'https://church-finance-app.vercel.app', accent: 'amber' },
    { title: 'Legal Case Management', description: 'A web application for organising legal case-management workflows.', language: 'TypeScript', category: 'Legal tech', repository: 'https://github.com/klmensah/legal-case-management', live: 'https://legal-case-management-ten.vercel.app', accent: 'violet' },
    { title: 'Attorney Case Management', description: 'A TypeScript project exploring tools for attorney case workflows.', language: 'TypeScript', category: 'Legal tech', repository: 'https://github.com/klmensah/attorney-case-management', accent: 'blue' },
    { title: 'EFCI Data Centre', description: 'A data-centre project built with a modern TypeScript stack.', language: 'TypeScript', category: 'Data systems', repository: 'https://github.com/klmensah/efcidatacentre', accent: 'green' },
    { title: 'Memory Allocation Simulator', description: 'A Python program that simulates memory allocation and fragmentation.', language: 'Python', category: 'Computer science', repository: 'https://github.com/klmensah/memory-allocation-simulator', accent: 'rose' },
    { title: 'Personal Portfolio', description: 'This responsive portfolio, statically exported and deployed with GitHub Actions.', language: 'TypeScript', category: 'Web design', repository: 'https://github.com/klmensah/my_portfolio', accent: 'gold' },
  ],
} as const;
