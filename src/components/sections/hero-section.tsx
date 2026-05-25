import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Github } from 'lucide-react';

export function HeroSection() {
  const headshot = PlaceHolderImages.find(img => img.id === 'headshot');

  return (
    <section id="hero" className="container pt-16 md:pt-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-headline text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            K.L.M.
          </h1>
          <p className="mt-2 text-xl font-medium text-primary md:text-2xl">
            Full-Stack Developer & Security-Minded Engineer
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Bridging legal precision with software innovation. I build secure, scalable, and user-centric web applications with a focus on robust database architecture and real-world problem-solving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://github.com/lkmensah" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
          {headshot && (
            <Image
              src={headshot.imageUrl}
              alt={headshot.description}
              width={400}
              height={400}
              priority
              className="rounded-full object-cover shadow-2xl"
              data-ai-hint={headshot.imageHint}
            />
          )}
           <div className="absolute -bottom-4 -right-4 rounded-full bg-card p-4 shadow-lg">
             <div className="relative h-12 w-12">
              <div className="absolute inset-0 animate-ping rounded-full border-2 border-primary"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
              </div>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
}
