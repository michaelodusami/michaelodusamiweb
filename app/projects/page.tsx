"use client"

import React from 'react';
import { mobileProjects } from '@/lib/data/projects';
import { ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Tabs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-lg bg-muted p-1">
              <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow transition-colors">
                Mobile
              </button>
              {/* <button className="px-6 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors" disabled>
                Web
              </button>
              <button className="px-6 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors" disabled>
                Misc
              </button> */}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Projects</h1>
        </div>
      </section>

      {/* Mobile Projects List */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {mobileProjects.map((project) => (
            <article
              key={project.id}
              className="bg-card shadow-xl rounded-2xl flex flex-col overflow-hidden"
            >
              {/* Info Top */}
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-muted-foreground text-lg mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow hover:bg-primary/90 transition-colors w-fit"
                >
                  View Project <ExternalLink size={18} />
                </a>
              </div>
              {/* Images Bottom */}
              <div className="flex gap-4 justify-center items-center p-6 overflow-x-auto">
                {project.screens.map((screen, idx) => (
                  <div
                    key={idx}
                    className="relative w-32 h-64 sm:w-48 sm:h-96 lg:w-64 lg:h-[32rem] rounded-xl overflow-hidden shadow-lg bg-white flex-shrink-0"
                  >
                    <img
                      src={screen}
                      alt={`${project.title} screen ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
} 