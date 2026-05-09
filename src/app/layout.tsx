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
  title: 'Ali Alameedi — AI & HPC Software Engineer',
  description: 'Ali Alameedi portfolio: AI-augmented engineering platforms, distributed systems, and HPC infrastructure.',
  keywords: ['Ali Alameedi', 'HPC', 'distributed systems', 'AI engineering', 'platform engineering', 'cloud infrastructure'],
  authors: [{ name: 'Ali Alameedi' }],
  openGraph: {
    title: 'Ali Alameedi — AI & HPC Software Engineer',
    description: 'Ali Alameedi portfolio: AI-augmented engineering platforms, distributed systems, and HPC infrastructure.',
    type: 'website',
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
