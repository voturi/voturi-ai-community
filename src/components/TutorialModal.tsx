'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, CopyIcon, CheckIcon } from '@radix-ui/react-icons';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(id);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const tutorialSteps = [
    {
      title: "Welcome to Prompt Templates! 🎉",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Learn how to supercharge your AI conversations with professional prompt templates.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">What you'll learn:</h4>
            <ul className="space-y-1 text-sm">
              <li>✅ How to copy and use prompt templates</li>
              <li>✅ See real examples of before/after conversations</li>
              <li>✅ Best practices for different AI platforms</li>
              <li>✅ Tips for getting better results</li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            This tutorial takes about 2 minutes and will transform how you interact with AI.
          </p>
        </div>
      )
    },
    {
      title: "Step 1: Choose Your Template 📋",
      content: (
        <div className="space-y-4">
          <p>
            Browse the available prompt templates and click on one that matches your needs.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h4 className="font-semibold">Daily Life Topic Explorer</h4>
                <p className="text-sm text-muted-foreground">
                  Explore everyday topics with balanced perspectives
                </p>
              </div>
            </div>
            <div className="mt-3 text-right">
              <Button size="sm" variant="outline">
                <PlayIcon className="w-3 h-3 mr-1" />
                Click to view
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> Each template is designed by experts to give you comprehensive, structured responses.
          </p>
        </div>
      )
    },
    {
      title: "Step 2: Copy the Template 📄",
      content: (
        <div className="space-y-4">
          <p>
            Once the modal opens, you'll see the complete prompt template. Click the "Copy" button to copy it to your clipboard.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-sm">Template Content Preview:</h4>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleCopy("# Daily Life Topic Explorer\n\n## Mission Statement\nYou are a thoughtful life advisor who helps people explore everyday topics...", "demo")}
              >
                {copiedText === "demo" ? (
                  <>
                    <CheckIcon className="w-3 h-3 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3 h-3 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded border max-h-32 overflow-y-auto font-mono text-xs">
              <div className="text-green-600 dark:text-green-400"># Daily Life Topic Explorer</div>
              <div className="text-blue-600 dark:text-blue-400">## Mission Statement</div>
              <div>You are a thoughtful life advisor who helps people explore everyday topics...</div>
              <div className="text-gray-400">...comprehensive framework and methodology...</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> The entire template (usually 500-2000 words) gets copied to your clipboard.
          </p>
        </div>
      )
    },
    {
      title: "Step 3: Paste in Your AI Chat 🤖",
      content: (
        <div className="space-y-4">
          <p>
            Now paste the template into any AI chat platform. Here's how it works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Before (Generic)</h4>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                <div className="font-medium mb-1">User:</div>
                <div className="text-gray-600 dark:text-gray-400">
                  "Help me with morning routines"
                </div>
                <div className="font-medium mt-2 mb-1">AI:</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs">
                  Generic advice about wake up time, exercise, breakfast...
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ After (Template)</h4>
              <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                <div className="font-medium mb-1">User:</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs">
                  [Pastes full template] + "Help me explore morning routines for busy parents"
                </div>
                <div className="font-medium mt-2 mb-1">AI:</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs">
                  Comprehensive analysis with multiple perspectives, cultural considerations, practical steps...
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> Add your specific question after pasting the template for best results.
          </p>
        </div>
      )
    },
    {
      title: "Step 4: Get Amazing Results! 🚀",
      content: (
        <div className="space-y-4">
          <p>
            With the template, the AI becomes an expert in that specific area and provides structured, comprehensive responses.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">What makes templates so powerful:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 dark:text-blue-400">🎯</span>
                <div>
                  <div className="font-medium">Expert Perspective</div>
                  <div className="text-gray-600 dark:text-gray-400">AI acts as specialist in that field</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 dark:text-green-400">📊</span>
                <div>
                  <div className="font-medium">Structured Output</div>
                  <div className="text-gray-600 dark:text-gray-400">Organized, comprehensive responses</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-600 dark:text-purple-400">🔄</span>
                <div>
                  <div className="font-medium">Multi-Perspective</div>
                  <div className="text-gray-600 dark:text-gray-400">Considers different viewpoints</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-orange-600 dark:text-orange-400">⚡</span>
                <div>
                  <div className="font-medium">Actionable Advice</div>
                  <div className="text-gray-600 dark:text-gray-400">Practical steps you can implement</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
            <p className="text-sm">
              <strong>🔥 Pro Tip:</strong> You can use these templates with ChatGPT, Claude, Gemini, or any AI chat platform. 
              They work everywhere!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "You're Ready! 🎊",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold mb-2">Congratulations!</h3>
            <p className="text-lg">
              You now know how to use professional prompt templates to get amazing AI responses.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Quick Reference:</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                <span>Click on any prompt template card</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                <span>Copy the template content</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                <span>Paste in AI chat + add your question</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                <span>Get expert-level responses!</span>
              </li>
            </ol>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Ready to try your first prompt template?
            </p>
            <Button 
              onClick={onClose} 
              className="mt-3"
              size="lg"
            >
              Start Using Templates! 🚀
            </Button>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-semibold">
                {tutorialSteps[currentStep].title}
              </DialogTitle>
              <DialogDescription>
                Step {currentStep + 1} of {tutorialSteps.length}
              </DialogDescription>
            </div>
            <div className="flex items-center space-x-2">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentStep 
                      ? 'bg-blue-600' 
                      : index < currentStep 
                        ? 'bg-green-600' 
                        : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          <div className="min-h-[400px]">
            {tutorialSteps[currentStep].content}
          </div>
        </div>

        <DialogFooter className="flex-shrink-0 flex flex-row justify-between items-center border-t pt-4">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeftIcon className="w-4 h-4 mr-1" />
            Previous
          </Button>
          
          <div className="flex space-x-2">
            <Button variant="ghost" onClick={handleClose}>
              Skip Tutorial
            </Button>
            
            {currentStep < tutorialSteps.length - 1 ? (
              <Button onClick={nextStep}>
                Next
                <ChevronRightIcon className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleClose} className="bg-green-600 hover:bg-green-700">
                Get Started! 🚀
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialModal;