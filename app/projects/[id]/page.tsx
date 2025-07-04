import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Github, 
  ExternalLink, 
  ArrowLeft,
  Calendar,
  Code,
  Lightbulb
} from 'lucide-react';
import { getProjectById } from '@/lib/data/projects';

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

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
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
              >
                <Github size={16} className="mr-2" />
                View on GitHub
              </a>
            )}
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
      {project.images && project.images.length > 0 && (
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
      )}

      {/* Technical Details */}
      {(project.architecture || project.challenges || project.solutions) && (
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
                  {project.architecture && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Architecture</h3>
                      <p className="text-muted-foreground">
                        {project.architecture}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Learnings */}
              {(project.challenges || project.solutions) && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Lightbulb size={24} className="mr-3" />
                    Key Learnings
                  </h2>
                  <div className="space-y-6">
                    {project.challenges && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenges Faced</h3>
                        <p className="text-muted-foreground">
                          {project.challenges}
                        </p>
                      </div>
                    )}
                    {project.solutions && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solutions Implemented</h3>
                        <p className="text-muted-foreground">
                          {project.solutions}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 