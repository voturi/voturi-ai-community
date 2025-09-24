'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WarpGrid from '@/components/WarpGrid';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header 
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      <Hero />
      <section className="flex-1">
        <WarpGrid searchQuery={searchQuery} />
      </section>
    </main>
  );
};

export default HomePage;
