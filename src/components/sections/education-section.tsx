import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, GraduationCap } from 'lucide-react';

const education = {
  degree: 'Juris Doctor (J.D.)',
  institution: 'University of Law',
  year: '2021',
};

const certifications = [
  { name: 'Certified in Cybersecurity (CC)', authority: 'ISC(2)' },
  { name: 'Database Management Essentials', authority: 'Coursera' },
  { name: 'Full-Stack Software Engineering', authority: 'Bootcamp Institute' },
];

export function EducationSection() {
  return (
    <section id="education" className="container">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Education & Certifications</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            My academic background and commitment to continuous learning in technology.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">{education.degree}</h3>
              <p className="mt-1 text-muted-foreground">{education.institution}</p>
              <p className="text-sm font-semibold text-primary">{education.year}</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map(cert => (
                  <li key={cert.name}>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.authority}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
