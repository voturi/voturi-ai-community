'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayIcon, ArrowDownIcon } from 'lucide-react';
import TutorialModal from './TutorialModal';

const Hero: React.FC = () => {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Professional Prompt Templates</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transform your AI conversations with expert-crafted prompt templates for health, fitness, nutrition, and daily life topics
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button 
            size="lg" 
            onClick={() => setIsTutorialOpen(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
          >
            <PlayIcon className="w-5 h-5" />
            <span>Get Started - Learn How</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const templatesSection = document.querySelector('#templates-section');
              templatesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center space-x-2"
          >
            <ArrowDownIcon className="w-5 h-5" />
            <span>Browse Templates</span>
          </Button>
        </div>
      </section>
      
      <TutorialModal 
        isOpen={isTutorialOpen} 
        onClose={() => setIsTutorialOpen(false)} 
      />
    </>
  );
};

export default Hero;
