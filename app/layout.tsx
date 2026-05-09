import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Alameedi - AI & HPC Software Engineer",
  description: "Senior software engineer specializing in high-performance computing, distributed systems, and AI-augmented engineering platforms at General Motors.",
  keywords: ["HPC", "distributed systems", "AI engineering", "platform engineering", "cloud infrastructure", "software engineer"],
  authors: [{ name: "Ali Alameedi" }],
  openGraph: {
    title: "Ali Alameedi - AI & HPC Software Engineer",
    description: "Building large-scale distributed HPC systems, AI-accelerated engineering platforms, and cloud-native infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
