'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="container pb-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I&apos;m open to internships, freelance work, and full-time opportunities. Let&apos;s connect!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Feel free to send me a message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center gap-6">
            <a href="mailto:your-email@example.com" className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-card/50">
              <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-muted-foreground">your-email@example.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-card/50">
              <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">LinkedIn</h4>
                <p className="text-sm text-muted-foreground">linkedin.com/in/your-linkedin</p>
              </div>
            </a>
            <a href="https://github.com/lkmensah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-card/50">
              <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">GitHub</h4>
                <p className="text-sm text-muted-foreground">github.com/lkmensah</p>
              </div>
            </a>
            <Button variant="outline" size="lg" asChild className="mt-4">
              <a href="/resume.pdf" download="KLM_Resume.pdf">
                Download My Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
