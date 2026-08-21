import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'K.L.M. | Full-Stack Developer',
  description:
    'Portfolio of K.L.M., a security-minded full-stack developer building practical web software.',
  keywords: ['full-stack developer', 'software engineer', 'TypeScript', 'Next.js', 'security'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
