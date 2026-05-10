import Script from 'next/script';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TopNav } from '../components/TopNav';

const BASE_URL = 'https://ali-alameedi-portfolio.pages.dev';

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
  description: 'Software Engineer specializing in Java, Spring Boot, cloud platforms (Azure, AWS), distributed systems, microservices, backend architecture, platform engineering, and AI-enabled tooling. I build reliable enterprise systems, APIs, cloud-native services, and AI-driven engineering workflows that scale.',
  keywords: [
    'Ali Alameedi',
    'Software Engineer',
    'Java',
    'Spring Boot',
    'Cloud Computing',
    'Azure',
    'AWS',
    'Distributed Systems',
    'Microservices',
    'API Design',
    'Backend Engineering',
    'Platform Engineering',
    'DevOps',
    'CI/CD',
    'Enterprise Architecture',
    'High Availability',
    'Reliability Engineering',
    'AI Engineering',
    'Prompt Engineering',
    'Multi-Agent Systems',
    'Agent Synchronization',
    'Multi-Agent Analysis',
    'Parallel AI Workflows',
    'MCP Server',
    'MCP Orchestration',
    'LLM Orchestration',
    'AI Ops',
    'AI Toolchain Integration',
    'Cursor',
    'Glean',
    'ChatGPT',
    'Grok',
    'Claude Code',
    'Gemini CLI',
    'Deepseek',
    'VSCode Copilot',
    'GitHub Copilot',
    'LLM',
    'AI Tooling',
    'AI Automation',
  ],
  authors: [{ name: 'Ali Alameedi' }],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Ali Alameedi | Software Engineer',
    description: 'Software Engineer specializing in Java, Spring Boot, cloud platforms (Azure, AWS), distributed systems, microservices, platform engineering, and AI-enabled developer workflows.',
    url: BASE_URL,
    siteName: 'Ali Alameedi Portfolio',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-preview.png`,
        width: 1200,
        height: 630,
        alt: 'Ali Alameedi Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Alameedi | Software Engineer',
    description: 'Software Engineer specializing in Java, Spring Boot, cloud platforms (Azure, AWS), distributed systems, microservices, platform engineering, and AI-enabled developer workflows.',
    images: [`${BASE_URL}/og-preview.png`],
  },
};

const identityGraph = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ali Alameedi',
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer specializing in Java, Spring Boot, cloud platforms (Azure, AWS), distributed systems, microservices, backend architecture, platform engineering, and AI-enabled tooling for developer productivity.',
  url: BASE_URL,
  image: `${BASE_URL}/og-preview.png`,
  worksFor: {
    '@type': 'Organization',
    name: 'Software Engineering and Platform Systems',
  },
  sameAs: [
    'https://github.com/alialameedi',
    'https://www.linkedin.com/in/ali-alameedi',
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'Cloud Computing',
    'Azure',
    'AWS',
    'Distributed Systems',
    'Microservices',
    'API Design',
    'Backend Engineering',
    'Platform Engineering',
    'DevOps',
    'CI/CD',
    'Enterprise Architecture',
    'High Availability Systems',
    'Reliability Engineering',
    'AI Engineering',
    'Prompt Engineering',
    'Agent Synchronization',
    'Multi-Agent Analysis',
    'Parallel AI Workflows',
    'MCP Server',
    'MCP Orchestration',
    'LLM Orchestration',
    'AI Ops',
    'AI Toolchain Integration',
    'Cursor',
    'Glean',
    'ChatGPT',
    'Grok',
    'Claude Code',
    'Gemini CLI',
    'Deepseek',
    'VSCode Copilot',
    'GitHub Copilot',
    'LLM Tooling',
    'AI Tooling',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-950">
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(identityGraph),
          }}
        />
        <TopNav />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
      </body>
    </html>
  );
}
