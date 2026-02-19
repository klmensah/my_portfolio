import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { EducationSection } from '@/components/sections/education-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-32">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
