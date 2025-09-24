import React from 'react';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import Hero from '@/components/Hero';
import WarpGrid from '@/components/WarpGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prompt Galary - Discover and Share Warp Prompts',
  description: 'Explore community-driven collection of customised  prompts and workflows.',
  openGraph: {
    title: 'Prompt Galary - Discover and Share Warp Prompts',
    description: 'Explore community-driven collection of standard prompts and workflows.',
  },
};

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <NavigationMenu />
      <Hero />
      <section className="flex-1">
        <WarpGrid />
      </section>
    </main>
  );
};

export default HomePage;
