'use client';

import Link from 'next/link';
import { Project } from '@/types/project';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="p-6">
          {/* Заголовок и год */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
          </div>
          
          {/* Описание */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {project.shortDescription}
          </p>
          
          {/* Технологии */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <TechBadge key={idx} tech={tech} />
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          
          {/* Кнопка */}
          <div className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
            Подробнее →
          </div>
        </div>
      </div>
    </Link>
  );
}