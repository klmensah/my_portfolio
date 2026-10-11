import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'K.L.M. | Software Developer',
  description:
    'Portfolio of K.L. Mensah, a software developer and student in Accra building practical web applications.',
  keywords: ['software developer', 'portfolio', 'TypeScript', 'Next.js', 'Accra'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
