'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { generateSummaryAction } from '@/app/actions';
import { Wand2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const professionalStrengths = [
  'Security-First Mindset: Proactive in identifying and mitigating vulnerabilities.',
  'Database Expertise: Proficient in SQL/NoSQL, optimization, and architecture.',
  'Real-World Experience: Proven ability to translate complex requirements into functional software.',
  'Analytical Problem-Solving: Leveraging legal background for meticulous code and logic.',
  'Full-Stack Versatility: Seamlessly integrating frontend and backend technologies.',
];

export function AboutSection() {
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([]);
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const githubGraph = PlaceHolderImages.find(img => img.id === 'github-contributions');
  const lighthouseBadge = PlaceHolderImages.find(img => img.id === 'lighthouse-badge');


  const handleStrengthToggle = (strength: string, checked: boolean) => {
    setSelectedStrengths(prev =>
      checked ? [...prev, strength] : prev.filter(s => s !== strength)
    );
  };

  const handleGenerateSummary = () => {
    if (selectedStrengths.length === 0) {
      toast({
        title: 'No Strengths Selected',
        description: 'Please select at least one strength to generate a summary.',
        variant: 'destructive',
      });
      return;
    }
    startTransition(async () => {
      const result = await generateSummaryAction(selectedStrengths);
      if (result.error) {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
        setGeneratedSummary('');
      } else {
        setGeneratedSummary(result.summary ?? 'Could not generate summary.');
        toast({
          title: 'Summary Generated!',
          description: 'The AI-powered summary has been created for you.',
        });
      }
    });
  };

  return (
    <section id="about" className="container">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A brief introduction to my background, skills, and passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-base text-muted-foreground">
            <p>
              With a foundation in law, I bring a unique perspective to software development, characterized by meticulous attention to detail, analytical rigor, and a deep understanding of complex systems. My journey into technology was driven by a passion for building solutions that are not only functional but also secure and efficient.
            </p>
            <p>
              I thrive on the challenges of full-stack development, from designing intuitive user interfaces with modern frontend frameworks to architecting robust backend systems and databases. My security-first mindset ensures that applications are built to withstand real-world threats, protecting both user data and business integrity.
            </p>
            <p>
              I am actively seeking opportunities—internships, freelance projects, or full-time roles—where I can contribute my skills, learn from experienced teams, and help create impactful technology.
            </p>
            <div className='flex flex-col gap-4 pt-4'>
                {githubGraph && <Image src={githubGraph.imageUrl} alt={githubGraph.description} width={832} height={128} className='w-full rounded-md' data-ai-hint={githubGraph.imageHint} />}
                {lighthouseBadge && <Image src={lighthouseBadge.imageUrl} alt={lighthouseBadge.description} width={200} height={80} className='rounded-md' data-ai-hint={lighthouseBadge.imageHint}/>}
            </div>
          </div>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-6 w-6 text-primary" />
                AI-Powered Summary Generator
              </CardTitle>
              <CardDescription>
                Select my key strengths and let AI craft a personalized summary for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Select Strengths:</Label>
                <div className="space-y-2">
                  {professionalStrengths.map(strength => (
                    <div key={strength} className="flex items-center gap-2">
                      <Checkbox
                        id={strength}
                        onCheckedChange={checked => handleStrengthToggle(strength, !!checked)}
                      />
                      <label htmlFor={strength} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {strength.split(':')[0]}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleGenerateSummary} disabled={isPending} className="w-full">
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Summary
              </Button>

              {generatedSummary && (
                <div className="space-y-2">
                  <Label htmlFor="ai-summary">Generated Summary:</Label>
                  <Textarea
                    id="ai-summary"
                    readOnly
                    value={generatedSummary}
                    className="min-h-[120px] bg-background"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
