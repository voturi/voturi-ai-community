export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  type: 'prompt' | 'notebook' | 'workflow' | 'folder';
  tags: string[];
  templateUrl?: string;
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
  type?: PromptTemplate['type'];
  tags?: string[];
}

export interface VoturiStats {
  totalPrompts: number;
  totalNotebooks: number;
  totalWorkflows: number;
  totalFolders: number;
  totalContributors: number;
}
