'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SearchIcon, SunIcon, MoonIcon, FilterIcon, TerminalIcon, HelpCircle } from 'lucide-react';
import { PromptTemplate } from '@/types';
import TutorialModal from './TutorialModal';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: { type?: PromptTemplate['type']; tags?: string[] }) => void;
  searchQuery?: string;
  activeFilters?: { type?: PromptTemplate['type']; tags?: string[] };
}

export default function Header({ 
  onSearch, 
  onFilterChange, 
  searchQuery = '', 
  activeFilters = {} 
}: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  useEffect(() => {
    // Show tutorial for first-time visitors
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    if (!hasSeenTutorial) {
      setTimeout(() => {
        setIsTutorialOpen(true);
        localStorage.setItem('hasSeenTutorial', 'true');
      }, 1500);
    }
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    onSearch?.(value);
  };

  const handleTypeFilter = (type: PromptTemplate['type'] | undefined) => {
    onFilterChange?.({ ...activeFilters, type });
  };

  const clearFilters = () => {
    onFilterChange?.({});
    setLocalSearch('');
    onSearch?.('');
  };

  const typeColors = {
    prompt: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    notebook: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    workflow: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    folder: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <TerminalIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Voturi</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search prompt templates..."
              value={localSearch}
              onChange={handleSearchChange}
              className="pl-10 pr-4"
              aria-label="Search prompt templates"
            />
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="flex items-center space-x-2">
          {/* Type Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="hidden md:flex">
                <FilterIcon className="h-4 w-4 mr-2" />
                Type
                {activeFilters.type && (
                  <Badge className={`ml-2 ${typeColors[activeFilters.type]}`} variant="secondary">
                    {activeFilters.type}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleTypeFilter(undefined)}>
                All Types
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTypeFilter('prompt')}>
                Prompts
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTypeFilter('notebook')}>
                Notebooks
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTypeFilter('workflow')}>
                Workflows
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTypeFilter('folder')}>
                Folders
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Clear Filters */}
          {(activeFilters.type || localSearch) && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear
            </Button>
          )}

          {/* How to Use Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsTutorialOpen(true)}
            className="hidden sm:flex items-center space-x-2"
          >
            <HelpCircle className="h-4 w-4" />
            <span>How to Use</span>
          </Button>

          {/* Mobile How to Use Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsTutorialOpen(true)}
            className="sm:hidden"
          >
            <HelpCircle className="h-4 w-4" />
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
      
      {/* Tutorial Modal */}
      <TutorialModal 
        isOpen={isTutorialOpen} 
        onClose={() => setIsTutorialOpen(false)} 
      />
    </header>
  );
}
