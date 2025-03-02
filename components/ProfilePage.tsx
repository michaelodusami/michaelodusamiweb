"use client"
import { useState } from "react";
import { profileData } from "@/lib/profileData";
import { projectData, ProjectData } from "@/lib/projectData";
import ProjectCard from "@/components/ProjectCard";
import { Linkedin, Github, Mail, Signpost, YoutubeIcon } from "lucide-react";

export default function ProfilePage() {
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(projectData);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Function to filter projects by category
  const filterProjects = (category: string) => {
    if (activeFilter === category) {
      // If already selected, reset filter
      setFilteredProjects(projectData);
      setActiveFilter(null);
    } else {
      setFilteredProjects(projectData.filter((proj) => proj.category === category));
      setActiveFilter(category);
    }
  };

  return (
    <div className="container p-8 space-y-12">
      {/* Find Me Section */}
      <section className="flex">
        <div className="flex space-x-6">
          <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.email} target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.devpost} target="_blank" rel="noopener noreferrer">
            <Signpost className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
            <YoutubeIcon className="w-6 h-6 text-red-500 hover:text-primary transition-colors" />
          </a>
        </div>
      </section>

      {/* Profile Header */}
      <header className="flex items-center space-x-8">
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-3">{profileData.name}</h1>
          <p className="text-black text-md">{profileData.bio}</p>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => filterProjects("Mobile")}
          className={`px-4 py-2 border rounded ${
            activeFilter === "Mobile" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Mobile Projects
        </button>
        <button
          onClick={() => filterProjects("Web")}
          className={`px-4 py-2 border rounded ${
            activeFilter === "Web" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Web Projects
        </button>
        <button
          onClick={() => filterProjects("Backend")}
          className={`px-4 py-2 border rounded ${
            activeFilter === "Backend" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Backend Projects
        </button>
        <button
          onClick={() => filterProjects("Automation")}
          className={`px-4 py-2 border rounded ${
            activeFilter === "Automation" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Automation Projects
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}
