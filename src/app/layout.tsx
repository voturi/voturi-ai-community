import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voturi - Professional AI Prompt Templates",
  description: "Transform your AI conversations with expert-crafted prompt templates for health, fitness, nutrition, daily life, and technical topics. Created by Praveen Voturi.",
  keywords: ["AI prompts", "prompt templates", "ChatGPT", "Claude", "health", "fitness", "nutrition", "productivity", "Voturi"],
  authors: [{ name: "Praveen Voturi" }],
  robots: "index, follow",
  openGraph: {
    title: "Voturi - Professional AI Prompt Templates",
    description: "Transform your AI conversations with expert-crafted prompt templates for health, fitness, nutrition, and daily life topics.",
    url: "https://voturi-ai-community.vercel.app",
    siteName: "Voturi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voturi - Professional AI Prompt Templates",
    description: "Transform your AI conversations with expert-crafted prompt templates for health, fitness, nutrition, and daily life topics.",
    creator: "@PraveenVoturi",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
