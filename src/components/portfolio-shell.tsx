'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, BriefcaseBusiness, ChevronDown, Code2, Database, ExternalLink, Github, GraduationCap, MapPin, ShieldCheck } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import type { BlogPostMeta } from '@/lib/blog';

const tabs = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'] as const;
type Tab = (typeof tabs)[number];
const serviceIcons = { code: Code2, data: Database, shield: ShieldCheck };

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="panel-heading"><p>{eyebrow}</p><h2>{title}</h2><span aria-hidden="true" /></div>;
}

function AboutPanel({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="panel-section" aria-labelledby="about-title">
      <SectionTitle eyebrow="A little introduction" title="About me" />
      <div className="about-copy" id="about-title">{portfolio.about.map((text) => <p key={text}>{text}</p>)}</div>
      <h3 className="subheading">What I do</h3>
      <div className="service-grid">
        {portfolio.services.map((service) => {
          const Icon = serviceIcons[service.icon];
          return <article className="service-card" key={service.title}><div className="icon-box"><Icon aria-hidden="true" /></div><div><h4>{service.title}</h4><p>{service.description}</p></div></article>;
        })}
      </div>
      <div className="about-cta"><div><p>Selected work</p><h3>See what I have been building.</h3></div><button type="button" onClick={onExplore}>Explore projects <ArrowUpRight aria-hidden="true" /></button></div>
    </section>
  );
}

function ResumePanel() {
  return (
    <section className="panel-section" aria-labelledby="resume-title">
      <SectionTitle eyebrow="Learning by building" title="Resume" />
      <div className="timeline" id="resume-title">
        {portfolio.journey.map((item) => <article className="timeline-item" key={`${item.period}-${item.title}`}><div className="timeline-icon">{item.type === 'education' ? <GraduationCap aria-hidden="true" /> : <BriefcaseBusiness aria-hidden="true" />}</div><div><p className="timeline-period">{item.period}</p><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
      </div>
      <h3 className="subheading">Working knowledge</h3>
      <div className="skill-grid">{portfolio.skillGroups.map((group) => <article className="skill-card" key={group.title}><h4>{group.title}</h4><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
    </section>
  );
}

function PortfolioPanel() {
  return (
    <section className="panel-section" aria-labelledby="portfolio-title">
      <SectionTitle eyebrow="Work from GitHub" title="Portfolio" />
      <p className="panel-intro" id="portfolio-title">A selection of applications and coursework that document my progress as a developer.</p>
      <div className="project-grid">
        {portfolio.projects.map((project, index) => <article className="project-card" key={project.title}>
          <a className={`project-visual project-${project.accent}`} href={'live' in project ? project.live : project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><span>0{index + 1}</span><strong>{project.category}</strong><ExternalLink aria-hidden="true" /></a>
          <div className="project-body"><div><h3>{project.title}</h3><p>{project.language}</p></div><p>{project.description}</p><div className="project-links"><a href={project.repository} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Source</a>{'live' in project ? <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight aria-hidden="true" /></a> : null}</div></div>
        </article>)}
      </div>
    </section>
  );
}

function BlogPanel({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section className="panel-section" aria-labelledby="blog-title">
      <SectionTitle eyebrow="Notes from the journey" title="Blog" />
      <p className="panel-intro" id="blog-title">Short reflections on the projects and ideas shaping my growth as a software developer.</p>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <article className="blog-card" key={post.title}>
            <div className={`blog-cover project-${post.accent}`}>
              <span>Note 0{index + 1}</span>
              <strong>{post.category}</strong>
            </div>
            <div className="blog-body">
              <p>{post.category}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta"><span>{post.dateLabel}</span><span>Markdown article</span></div>
              <Link className="blog-read-link" href={`/blog/${post.slug}`}>Read article <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section className="panel-section" aria-labelledby="contact-title">
      <SectionTitle eyebrow="Start a conversation" title="Contact" />
      <div className="contact-card" id="contact-title"><p className="contact-kicker">Open to learning, collaboration, and opportunities.</p><h3>Have a project or idea worth exploring?</h3><p>GitHub is the best place to see what I am working on and start a conversation. I am based in Accra and continue to grow through practical software projects.</p><a href={portfolio.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Visit my GitHub <ArrowUpRight aria-hidden="true" /></a></div>
      <div className="contact-details"><div><MapPin aria-hidden="true" /><span><small>Based in</small>{portfolio.location}</span></div><div><BookOpen aria-hidden="true" /><span><small>Currently</small>Bachelor&apos;s degree student</span></div></div>
    </section>
  );
}

export function PortfolioShell({ posts }: { posts: BlogPostMeta[] }) {
  const [activeTab, setActiveTab] = useState<Tab>('About');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const selectTab = (tab: Tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  useEffect(() => {
    if (window.location.hash.toLowerCase() === '#blog') setActiveTab('Blog');
  }, []);

  return (
    <main className="portfolio-shell">
      <aside className={`identity-card ${detailsOpen ? 'details-open' : ''}`}>
        <div className="identity-main">
          <div className="avatar-wrap"><img src={portfolio.avatar} alt={`${portfolio.fullName} GitHub avatar`} /><span aria-label="Available for opportunities" /></div>
          <div className="identity-copy"><h1>{portfolio.name}</h1><p>{portfolio.role}</p></div>
          <button className="details-toggle" type="button" aria-label="Toggle contact details" aria-expanded={detailsOpen} onClick={() => setDetailsOpen((open) => !open)}><span>Show contacts</span><ChevronDown aria-hidden="true" /></button>
        </div>
        <div className="identity-details"><div className="divider" /><ul>
          <li><span className="contact-icon"><MapPin aria-hidden="true" /></span><div><small>Location</small><p>{portfolio.location}</p></div></li>
          <li><span className="contact-icon"><Github aria-hidden="true" /></span><div><small>GitHub</small><a href={portfolio.github} target="_blank" rel="noreferrer">@klmensah</a></div></li>
          <li><span className="contact-icon"><BookOpen aria-hidden="true" /></span><div><small>Focus</small><p>Software development</p></div></li>
        </ul><a className="github-button" href={portfolio.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight aria-hidden="true" /></a></div>
      </aside>
      <div className="content-card">
        <nav className="tab-nav" aria-label="Portfolio sections">{tabs.map((tab) => <button key={tab} type="button" className={activeTab === tab ? 'active' : ''} aria-current={activeTab === tab ? 'page' : undefined} onClick={() => selectTab(tab)}>{tab}</button>)}</nav>
        <div className="panel-wrap" key={activeTab}>{activeTab === 'About' && <AboutPanel onExplore={() => selectTab('Portfolio')} />}{activeTab === 'Resume' && <ResumePanel />}{activeTab === 'Portfolio' && <PortfolioPanel />}{activeTab === 'Blog' && <BlogPanel posts={posts} />}{activeTab === 'Contact' && <ContactPanel />}</div>
      </div>
    </main>
  );
}
