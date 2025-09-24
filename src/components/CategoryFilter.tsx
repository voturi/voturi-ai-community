'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export type TemplateCategory = 'all' | 'engineering' | 'health' | 'fitness' | 'nutrition' | 'lifestyle';

export interface CategoryInfo {
  id: TemplateCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Templates',
    description: 'View all available prompt templates',
    icon: '🎯',
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
  },
  {
    id: 'engineering',
    name: 'Engineering & Tech',
    description: 'Code analysis, documentation, and technical workflows',
    icon: '⚙️',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    id: 'health',
    name: 'General Health',
    description: 'Research health topics with evidence-based information',
    icon: '🏥',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  },
  {
    id: 'fitness',
    name: 'Fitness & Exercise',
    description: 'Workout planning and fitness research guidance',
    icon: '💪',
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  },
  {
    id: 'nutrition',
    name: 'Food & Nutrition',
    description: 'Meal planning and nutritional research support',
    icon: '🥗',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  },
  {
    id: 'lifestyle',
    name: 'Daily Life & Lifestyle',
    description: 'Personal growth and everyday topic exploration',
    icon: '🌱',
    color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
  }
];

interface CategoryFilterProps {
  activeCategory: TemplateCategory;
  onCategoryChange: (category: TemplateCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange
}) => {
  const getTemplateCount = (categoryId: TemplateCategory): number => {
    if (categoryId === 'all') return 6;
    
    const categoryMapping = {
      engineering: 2, // Context Engineering Master, Codebase Analysis
      health: 1,      // Health Research Assistant
      fitness: 1,     // Fitness Research & Planning
      nutrition: 1,   // Food & Nutrition Research Guide
      lifestyle: 1    // Daily Life Topic Explorer
    };
    
    return categoryMapping[categoryId] || 0;
  };

  return (
    <div className="w-full mb-8">
      <div className="flex flex-col space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Browse by Category</h3>
          <p className="text-sm text-muted-foreground">
            Find the perfect prompt template for your needs
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center space-x-2 h-auto py-3 px-4 ${
                activeCategory === category.id 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{category.name}</span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : category.color
                  }`}
                >
                  {getTemplateCount(category.id)} templates
                </Badge>
              </div>
            </Button>
          ))}
        </div>
        
        {activeCategory !== 'all' && (
          <div className="text-center">
            <div className="bg-muted/30 rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-2xl">
                  {categories.find(c => c.id === activeCategory)?.icon}
                </span>
                <h4 className="font-semibold">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {categories.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;