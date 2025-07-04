import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Github, 
  ExternalLink, 
  ArrowLeft,
  Calendar,
  Code,
  Lightbulb,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock project data - replace with real data from your projects file
const projectsData = {
  'project-1': {
    id: 'project-1',
    title: 'Fitness Tracker App',
    description: 'A comprehensive fitness tracking application that helps users monitor their workouts, track progress, and achieve their fitness goals. The app features a clean, intuitive interface designed with SwiftUI and integrates seamlessly with Apple Health.',
    technologies: ['SwiftUI', 'Core Data', 'HealthKit', 'Combine', 'Core Location'],
    architecture: 'MVVM with Combine for reactive programming',
    challenges: 'Integrating HealthKit permissions and data synchronization while maintaining app performance and user privacy. Implemented a custom caching layer to handle offline scenarios and reduce API calls.',
    solutions: 'Created a robust data layer using Core Data with HealthKit integration, implemented proper error handling and user feedback, and optimized the UI for smooth 60fps animations.',
    githubUrl: 'https://github.com/michaelodusami/fitness-tracker',
    appStoreUrl: 'https://apps.apple.com/app/fitness-tracker',
    dribbbleUrl: 'https://dribbble.com/shots/fitness-tracker-design',
    images: [
      '/projects/move1.png',
      '/projects/move2.png',
      '/projects/move1.png', // Placeholder
    ],
    date: 'December 2024',
  },
  'project-2': {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A productivity application designed to help users organize their daily tasks, set priorities, and track progress. Features include task categorization, reminders, and progress analytics.',
    technologies: ['SwiftUI', 'Combine', 'UserDefaults', 'Local Notifications'],
    architecture: 'MVVM with Combine for state management',
    challenges: 'Implementing real-time task synchronization across multiple devices while maintaining data consistency and handling offline scenarios.',
    solutions: 'Used CloudKit for seamless data synchronization, implemented conflict resolution strategies, and created a robust offline-first architecture.',
    githubUrl: 'https://github.com/michaelodusami/task-manager',
    appStoreUrl: 'https://apps.apple.com/app/task-manager',
    dribbbleUrl: 'https://dribbble.com/shots/task-manager-design',
    images: [
      '/projects/move2.png',
      '/projects/move1.png',
      '/projects/move2.png', // Placeholder
    ],
    date: 'November 2024',
  },
  // Add more projects as needed
};

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData[params.id as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>
      </section>

      {/* Project Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex items-center text-muted-foreground mb-6">
              <Calendar size={16} className="mr-2" />
              <span>{project.date}</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
            >
              <Github size={16} className="mr-2" />
              View on GitHub
            </a>
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                App Store
              </a>
            )}
            {project.dribbbleUrl && (
              <a
                href={project.dribbbleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                Design on Dribbble
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Media Gallery */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technologies & Architecture */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code size={24} className="mr-3" />
                Technical Details
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background border rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Architecture</h3>
                  <p className="text-muted-foreground">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Learnings */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Lightbulb size={24} className="mr-3" />
                Key Learnings
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Challenges Faced</h3>
                  <p className="text-muted-foreground">
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Solutions Implemented</h3>
                  <p className="text-muted-foreground">
                    {project.solutions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 