import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock projects data - replace with real data from your projects file
const projects = [
  {
    id: 'project-1',
    title: 'Fitness Tracker App',
    thumbnail: '/projects/move1.png', // Using existing image
    description: 'A comprehensive fitness tracking application built with SwiftUI',
    technologies: ['SwiftUI', 'Core Data', 'HealthKit'],
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    thumbnail: '/projects/move2.png', // Using existing image
    description: 'A productivity app for managing daily tasks and projects',
    technologies: ['SwiftUI', 'Combine', 'UserDefaults'],
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    thumbnail: '/projects/move1.png', // Placeholder
    description: 'Real-time weather information with beautiful UI',
    technologies: ['SwiftUI', 'Core Location', 'URLSession'],
  },
  {
    id: 'project-4',
    title: 'Recipe Finder',
    thumbnail: '/projects/move2.png', // Placeholder
    description: 'Discover and save your favorite recipes',
    technologies: ['SwiftUI', 'Core Data', 'CloudKit'],
  },
  {
    id: 'project-5',
    title: 'Budget Tracker',
    thumbnail: '/projects/move1.png', // Placeholder
    description: 'Personal finance management made simple',
    technologies: ['SwiftUI', 'Core Data', 'Charts'],
  },
  {
    id: 'project-6',
    title: 'Social Media App',
    thumbnail: '/projects/move2.png', // Placeholder
    description: 'Connect with friends and share moments',
    technologies: ['SwiftUI', 'Firebase', 'Authentication'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my iOS development projects showcasing Swift, SwiftUI, and modern mobile development practices.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block"
            >
              <article className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Project Thumbnail */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center text-sm text-primary font-medium">
                    View Project
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 