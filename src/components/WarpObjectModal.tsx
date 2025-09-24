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
import { CopyIcon, Pencil1Icon, CheckIcon } from '@radix-ui/react-icons';

interface WarpObjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  content?: string;
}

const WarpObjectModal: React.FC<WarpObjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  content = "This is a sample Warp prompt content that you can copy and edit.",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editedContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you could add logic to save the edited content
  };

  const handleClose = () => {
    setIsEditing(false);
    setEditedContent(content);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          <DialogDescription className="text-base">{description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden py-4">
          <div className="space-y-2 h-full">
            <label htmlFor="content" className="text-sm font-medium">
              Content
            </label>
            {isEditing ? (
              <textarea
                id="content"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full h-[60vh] p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono text-sm"
                placeholder="Enter your Warp prompt content here..."
              />
            ) : (
              <div className="w-full h-[60vh] p-3 border rounded-md bg-muted/50 whitespace-pre-wrap overflow-y-auto font-mono text-sm leading-relaxed">
                {editedContent}
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="flex-shrink-0 flex flex-col sm:flex-row gap-2 border-t pt-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              {isCopied ? (
                <>
                  <CheckIcon className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <CopyIcon className="h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
            
            {/* Edit functionality hidden from users */}
            {false && (
              <Button
                variant="outline"
                size="sm"
                onClick={isEditing ? handleSave : handleEdit}
                className="flex items-center gap-2"
              >
                <Pencil1Icon className="h-4 w-4" />
                {isEditing ? 'Save' : 'Edit'}
              </Button>
            )}
          </div>
          
          <Button onClick={handleClose} variant="default">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WarpObjectModal;
