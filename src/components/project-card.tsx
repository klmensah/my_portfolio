import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './ui/card';

export interface Project {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  image: ImagePlaceholder;
}

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-card/50 transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className={cn("grid grid-cols-1 items-center gap-8 md:grid-cols-2", reverse ? "md:grid-flow-col-dense" : "")}>
        <div className={cn("relative h-64 w-full md:h-full", reverse ? "md:col-start-2" : "")}>
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.image.imageHint}
          />
        </div>
        <div className="flex flex-col p-6 md:p-8">
          <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 text-muted-foreground">{project.description}</p>
          <p className="mt-3 text-sm italic text-primary/80">
            <strong>Impact:</strong> {project.impact}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <Button asChild>
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
