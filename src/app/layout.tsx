import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TopNav } from '../components/TopNav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ali Alameedi | Software Engineer Portfolio',
  description: 'Software Engineer specializing in Java, cloud platforms, distributed systems, and AI-driven development. I design and build scalable backend systems, developer tools, and enterprise platforms that improve reliability, performance, and developer productivity.',
  keywords: ['Ali Alameedi', 'HPC', 'distributed systems', 'AI engineering', 'platform engineering', 'cloud infrastructure', 'Java', 'Spring Boot', 'React', 'TypeScript'],
  authors: [{ name: 'Ali Alameedi' }],
  metadataBase: new URL('https://ali-alameedi-portfolio.pages.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ali Alameedi | Software Engineer',
    description: 'Software Engineer specializing in Java, cloud platforms, distributed systems, and AI-driven development. I design and build scalable backend systems, developer tools, and enterprise platforms that improve reliability, performance, and developer productivity.',
    url: 'https://ali-alameedi-portfolio.pages.dev/',
    siteName: 'Ali Alameedi Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://ali-alameedi-portfolio.pages.dev/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Ali Alameedi Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Alameedi | Software Engineer',
    description: 'Software Engineer specializing in Java, cloud platforms, distributed systems, and AI-driven development. I design and build scalable backend systems, developer tools, and enterprise platforms that improve reliability, performance, and developer productivity.',
    images: ['https://ali-alameedi-portfolio.pages.dev/og-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-950">
        <TopNav />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
      </body>
    </html>
  );
}
