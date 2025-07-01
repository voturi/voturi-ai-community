export interface WarpDriveObject {
  id: string;
  title: string;
  description: string;
  type: 'prompt' | 'notebook' | 'workflow' | 'folder';
  tags: string[];
  warpDriveUrl: string;
  attribution: {
    author: string;
    authorUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  downloadUrl?: string;
}

export interface SearchFilters {
  query: string;
  type?: WarpDriveObject['type'];
  tags?: string[];
}

export interface WarpStats {
  totalPrompts: number;
  totalNotebooks: number;
  totalWorkflows: number;
  totalFolders: number;
  totalContributors: number;
}
