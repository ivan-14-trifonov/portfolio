import { Technology } from '@/types/project';

const categoryColors = {
  frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  database: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  devops: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  framework: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  language: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

interface TechBadgeProps {
  tech: Technology;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${categoryColors[tech.category]}`}>
      {tech.name}
    </span>
  );
}