import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  IconReact, IconNodejs, IconTypescript, IconJavascript, IconHtml5,
  IconCss3, IconNextjs, IconTailwindcss, IconPostgresql, IconMongodb,
  IconFirebase, IconDocker, IconGit, IconAws, TechIcon
} from '@/components/icons';
import { Code2, Database, Server, Cloud } from 'lucide-react';

const skills = {
  frontend: [
    { name: 'React', icon: <IconReact /> },
    { name: 'Next.js', icon: <IconNextjs /> },
    { name: 'TypeScript', icon: <IconTypescript /> },
    { name: 'JavaScript (ES6+)', icon: <IconJavascript /> },
    { name: 'Tailwind CSS', icon: <IconTailwindcss /> },
    { name: 'HTML5', icon: <IconHtml5 /> },
    { name: 'CSS3', icon: <IconCss3 /> },
  ],
  backend: [
    { name: 'Node.js', icon: <IconNodejs /> },
    { name: 'Express.js', icon: <TechIcon name="Express" /> },
    { name: 'Python', icon: <TechIcon name="Python" /> },
    { name: 'REST APIs', icon: <TechIcon name="API" /> },
    { name: 'GraphQL', icon: <TechIcon name="GraphQL" /> },
  ],
  databases: [
    { name: 'PostgreSQL', icon: <IconPostgresql /> },
    { name: 'MongoDB', icon: <IconMongodb /> },
    { name: 'Firebase', icon: <IconFirebase /> },
    { name: 'SQL', icon: <TechIcon name="SQL" /> },
    { name: 'Database Design', icon: <Database /> },
  ],
  devops: [
    { name: 'Docker', icon: <IconDocker /> },
    { name: 'AWS', icon: <IconAws /> },
    { name: 'Git & GitHub', icon: <IconGit /> },
    { name: 'CI/CD', icon: <TechIcon name="CI/CD" /> },
    { name: 'Vercel', icon: <TechIcon name="Vercel" /> },
  ],
};

const SkillCard = ({ title, icon, skillsList }: { title: string; icon: React.ReactNode; skillsList: { name: string; icon: React.ReactNode }[] }) => (
  <Card className="flex flex-col bg-card/50">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="rounded-lg bg-primary/10 p-3 text-primary">{icon}</div>
      <CardTitle className='font-headline text-xl'>{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-3">
        {skillsList.map(skill => (
          <li key={skill.name} className="flex items-center gap-3">
            <span className="h-6 w-6 text-muted-foreground">{skill.icon}</span>
            <span className="font-code text-sm font-medium">{skill.name}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export function SkillsSection() {
  return (
    <section id="skills" className="container">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A snapshot of the technologies I work with across the stack.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SkillCard title="Frontend" icon={<Code2 className="h-6 w-6" />} skillsList={skills.frontend} />
          <SkillCard title="Backend" icon={<Server className="h-6 w-6" />} skillsList={skills.backend} />
          <SkillCard title="Databases" icon={<Database className="h-6 w-6" />} skillsList={skills.databases} />
          <SkillCard title="DevOps & Cloud" icon={<Cloud className="h-6 w-6" />} skillsList={skills.devops} />
        </div>
      </div>
    </section>
  );
}
