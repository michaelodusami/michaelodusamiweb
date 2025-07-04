"use client"

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ExternalLink, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  projects, 
  projectCategories, 
  projectComplexities, 
  projectTechnologies 
} from '@/lib/data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const complexityMatch = selectedComplexity === 'all' || project.complexity === selectedComplexity;
      const technologyMatch = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => project.technologies.includes(tech));
      
      return categoryMatch && complexityMatch && technologyMatch;
    });
  }, [selectedCategory, selectedComplexity, selectedTechnologies]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedComplexity('all');
    setSelectedTechnologies([]);
  };

  const hasActiveFilters = selectedCategory !== 'all' || 
    selectedComplexity !== 'all' || 
    selectedTechnologies.length > 0;

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

      {/* Filters Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Projects</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
            >
              <Filter size={16} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md">
                  {projectCategories.find(c => c.id === selectedCategory)?.name}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 hover:bg-primary/80 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedComplexity !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md">
                  {projectComplexities.find(c => c.id === selectedComplexity)?.name}
                  <button
                    onClick={() => setSelectedComplexity('all')}
                    className="ml-1 hover:bg-primary/80 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedTechnologies.map(tech => (
                <span key={tech} className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md">
                  {tech}
                  <button
                    onClick={() => toggleTechnology(tech)}
                    className="ml-1 hover:bg-primary/80 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Category</h3>
                  <div className="space-y-2">
                    {projectCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors",
                          selectedCategory === category.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Complexity Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Complexity</h3>
                  <div className="space-y-2">
                    {projectComplexities.map((complexity) => (
                      <button
                        key={complexity.id}
                        onClick={() => setSelectedComplexity(complexity.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors",
                          selectedComplexity === complexity.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {complexity.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Technologies Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {projectTechnologies.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechnology(tech)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors text-sm",
                          selectedTechnologies.includes(tech)
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-muted-foreground mb-6">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found with the selected filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
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

                      {/* Complexity Badge */}
                      <div className="flex items-center justify-between">
                        <span className={cn(
                          "px-2 py-1 text-xs rounded-md",
                          project.complexity === 'beginner' && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400",
                          project.complexity === 'intermediate' && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400",
                          project.complexity === 'advanced' && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400"
                        )}>
                          {project.complexity.charAt(0).toUpperCase() + project.complexity.slice(1)}
                        </span>

                        {/* View Project Link */}
                        <div className="flex items-center text-sm text-primary font-medium">
                          View Project
                          <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 