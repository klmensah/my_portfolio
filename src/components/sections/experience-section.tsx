import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Law Clerk',
    company: 'Major Law Firm',
    period: '2021 - 2023',
    description: 'Conducted legal research, drafted memos, and analyzed complex case files. Honed skills in analytical reasoning, logical structuring, and meticulous documentation, which directly translate to writing clean, maintainable, and well-documented code.',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    description: 'Developed and maintained websites for small businesses. Managed full project lifecycle from client consultation and requirements gathering to deployment and support, focusing on creating secure and performant solutions.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            My professional journey and how it shapes my work as a developer.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="group relative mb-12 flex w-full items-center">
              <div className={`flex w-1/2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                {index % 2 !== 0 && (
                  <div className="w-full max-w-md rounded-lg bg-card/50 p-6 shadow-md transition-all duration-300 hover:bg-card hover:shadow-primary/10">
                    <p className="text-sm font-semibold text-primary">{exp.period}</p>
                    <h3 className="mt-1 text-xl font-bold">{exp.role}</h3>
                    <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                )}
              </div>
              <div className="absolute left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-primary p-3 text-primary-foreground shadow-lg">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className={`flex w-1/2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                 {index % 2 === 0 && (
                  <div className="w-full max-w-md rounded-lg bg-card/50 p-6 shadow-md transition-all duration-300 hover:bg-card hover:shadow-primary/10">
                    <p className="text-sm font-semibold text-primary">{exp.period}</p>
                    <h3 className="mt-1 text-xl font-bold">{exp.role}</h3>
                    <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
