export const portfolio = {
  name: 'K.L.M.',
  intro:
    'I am a security-minded full-stack developer who combines legal precision with practical software engineering.',
  about:
    'My background in law shaped how I approach software: understand the details, make the logic clear, and build with care. I enjoy turning complex requirements into secure, maintainable web experiences.',
  github: 'https://github.com/klmensah',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Firebase',
    'Tailwind CSS',
    'Docker',
    'Git',
  ],
  projects: [
    {
      title: 'Personal Portfolio',
      description:
        'A fast, accessible portfolio designed as a static site for GitHub Pages. It keeps the content focused and the deployment simple.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
      repository: 'https://github.com/klmensah/my_portfolio',
    },
  ],
} as const;
