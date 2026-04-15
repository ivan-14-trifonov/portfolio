export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'framework' | 'language';
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
  functionality: string[];
  architecture: {
    description: string;
    diagram?: string;
    components: Array<{
      name: string;
      description: string;
    }>;
  };
  features: string[];
  screenshots?: string[];
  year: number;
}