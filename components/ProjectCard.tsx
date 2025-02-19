import { projectData, ProjectData } from "@/lib/projectData"
import { Github, GithubIcon, VideoIcon } from "lucide-react"

function ProjectCard({project}: {project: ProjectData})
{
    return (
    <div>
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{project.category}</p>
      <p className="text-gray-700 mb-4 max-h-40 overflow-y-scroll">{project.description}</p>
      {/* Show the Live Demo link if it exists */}
      {project.liveDemoUrl && (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:no-underline mr-4"
        >
          <VideoIcon className="inline"/>
        </a>
      )}

      {/* Show the GitHub link if it exists */}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:no-underline"
        >
            <GithubIcon className="inline"/>
        </a>
      )}
    </div>
)
}

export default ProjectCard