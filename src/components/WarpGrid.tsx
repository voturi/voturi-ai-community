'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WarpObjectModal from './WarpObjectModal';

const WarpGrid = () => {
  const [selectedObject, setSelectedObject] = useState<{
    id: number;
    title: string;
    description: string;
    content: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for demonstration
  const warpObjects = [
    {
      id: 1,
      title: 'Sample Warp Object 1',
      description: 'This is a placeholder for a Warp prompt, notebook, or workflow',
      content: `# Sample Warp Prompt

This is a sample Warp prompt content that demonstrates:

1. Command execution
2. Directory navigation
3. File operations

## Example Commands:
\`\`\`bash
ls -la
cd ~/Documents
git status
\`\`\`

You can copy this content and modify it according to your needs!`
    },
    {
      id: 2,
      title: 'Sample Warp Object 2',
      description: 'This is a placeholder for a Warp prompt, notebook, or workflow',
      content: `# Development Setup Script

Quick setup for a new development environment:

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
\`\`\`

Customize this workflow for your project setup!`
    },
    {
      id: 3,
      title: 'Sample Warp Object 3',
      description: 'This is a placeholder for a Warp prompt, notebook, or workflow',
      content: `# Git Workflow Commands

Common Git operations:

\`\`\`bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push origin main
\`\`\`

Great for quick Git operations!`
    },
    {
      id: 4,
      title: 'Sample Warp Object 4',
      description: 'This is a placeholder for a Warp prompt, notebook, or workflow',
      content: 'Coming soon - this will show real Warp community content'
    },
    {
      id: 5,
      title: 'Sample Warp Object 5',
      description: 'This is a placeholder for a Warp prompt, notebook, or workflow',
      content: 'Coming soon - this will show real Warp community content'
    },
    {
      id: 6,
      title: 'Sample Warp Object 6',
      description: 'This is a placeholder for a Warp prompt, notebook, or workflow',
      content: 'Coming soon - this will show real Warp community content'
    }
  ];

  const handleCardClick = (warpObject: typeof warpObjects[0]) => {
    setSelectedObject(warpObject);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedObject(null);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Warp Objects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warpObjects.map((item) => (
            <Card 
              key={item.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform transition-transform duration-200"
              onClick={() => handleCardClick(item)}
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Click to view, copy, and edit this Warp object
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedObject && (
        <WarpObjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedObject.title}
          description={selectedObject.description}
          content={selectedObject.content}
        />
      )}
    </section>
  );
};

export default WarpGrid;
