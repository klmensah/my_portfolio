import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  ShieldCheck,
} from 'lucide-react';

import { portfolio } from '@/data/portfolio';

const highlights = [
  {
    icon: Code2,
    title: 'Full-stack thinking',
    text: 'I connect thoughtful interfaces with dependable backend systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-minded',
    text: 'I consider data protection and safe defaults from the start.',
  },
  {
    icon: Layers3,
    title: 'Built for real use',
    text: 'I focus on clear, maintainable solutions to practical problems.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="font-mono text-sm font-bold tracking-[0.24em] text-white">
            KLM<span className="text-cyan-400">.</span>
          </a>
          <div className="flex items-center gap-5 text-sm text-slate-300">
            <a className="hidden transition hover:text-white sm:inline" href="#about">About</a>
            <a className="hidden transition hover:text-white sm:inline" href="#work">Work</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative isolate overflow-hidden px-6 pb-24 pt-24 sm:pt-32 lg:px-8 lg:pb-32">
        <div className="hero-glow" aria-hidden="true" />
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Open to opportunities
            </p>
            <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
              I build useful software with
              <span className="gradient-text"> precision.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {portfolio.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="button-primary">
                View my work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="button-secondary">
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>A practical developer with an unusual foundation.</h2>
          <p>{portfolio.about}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface-card">
              <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-8" aria-labelledby="skills-heading">
        <div className="section-heading">
          <p className="eyebrow">Toolbox</p>
          <h2 id="skills-heading">Technologies I work with.</h2>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3" aria-label="Technical skills">
          {portfolio.skills.map((skill) => (
            <li key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-sm text-slate-300">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Small, focused, and built to ship.</h2>
        </div>
        <div className="mt-12 grid gap-6">
          {portfolio.projects.map((project) => (
            <article key={project.title} className="group project-card">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Featured project</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-400">{project.description}</p>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-slate-500" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <a href={project.repository} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title} source code`}>
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pb-28 text-center sm:pb-36">
        <div className="mx-auto max-w-3xl rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.04] px-6 py-16 sm:px-12">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Have a project or opportunity in mind?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
            The best place to reach me right now is GitHub. You can see what I&apos;m building and start a conversation there.
          </p>
          <a href={portfolio.github} target="_blank" rel="noreferrer" className="button-primary mt-9">
            Visit my GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8 text-sm text-slate-500 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {portfolio.name}</p>
          <p>Built with Next.js and hosted on GitHub Pages.</p>
        </div>
      </footer>
    </main>
  );
}
