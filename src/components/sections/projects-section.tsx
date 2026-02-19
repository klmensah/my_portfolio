import { ProjectCard, type Project } from '@/components/project-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A comprehensive web application for managing complex data workflows, featuring a secure authentication system and a role-based access control.',
    impact: 'Improved data processing efficiency by 40% and enhanced security compliance.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'TypeScript'],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/your-github/project-alpha',
    image: PlaceHolderImages.find(img => img.id === 'project1')!,
  },
  {
    title: 'Project Beta',
    description: 'An analytics dashboard that visualizes real-time data streams, providing actionable insights for business intelligence and decision-making.',
    impact: 'Enabled stakeholders to monitor key metrics in real-time, leading to faster response times.',
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase', 'Chart.js'],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/your-github/project-beta',
    image: PlaceHolderImages.find(img => img.id === 'project2')!,
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first e-commerce platform with a focus on user experience and performance, integrated with a secure payment gateway.',
    impact: 'Achieved a 99/100 Lighthouse performance score and increased user engagement.',
    techStack: ['React Native', 'GraphQL', 'Stripe', 'MongoDB'],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/your-github/project-gamma',
    image: PlaceHolderImages.find(img => img.id === 'project3')!,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
