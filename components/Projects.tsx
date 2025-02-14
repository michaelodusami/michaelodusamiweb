"use client";

import Image from "next/image";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ProjectData } from "@/lib/projectData";

interface ProjectsListProps {
	projects: ProjectData[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
	const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);

	// Get unique tech stacks
	const allTechStacks = Array.from(
		new Set(projects.flatMap((project) => project.techStack))
	);

	// Filter projects based on selected tech stack
	const filteredProjects = selectedTechStack.length
		? projects.filter((project) =>
				selectedTechStack.every((tech) => project.techStack.includes(tech))
		  )
		: projects;

	const toggleTechStack = (tech: string) => {
		setSelectedTechStack((prev) =>
			prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
		);
	};

	return (
		<div>
			{/* Filter Options */}
			<div className="mb-6">
				<h3 className="text-lg font-semibold mb-2">Filter by Tech Stack:</h3>
				<div className="flex flex-wrap gap-2">
					{allTechStacks.map((tech) => (
						<button
							key={tech}
							onClick={() => toggleTechStack(tech)}
							className={`px-3 py-1 rounded-full border ${
								selectedTechStack.includes(tech)
									? "bg-primary text-white"
									: "bg-muted text-foreground"
							}`}
						>
							{tech}
						</button>
					))}
				</div>
			</div>

			{/* Project List */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredProjects.map((project) => (
					<SingleProject key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}

interface ProjectProps {
	project: ProjectData;
}

export function SingleProject({ project }: ProjectProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="rounded-lg overflow-hidden shadow-lg border bg-background">
			{/* Project Thumbnail */}
			{project.thumbnailUrl && (
				<Image
					src={project.thumbnailUrl}
					alt={project.title}
					width={600}
					height={400}
					className="w-full h-48 object-cover"
				/>
			)}

			{/* Project Content */}
			<div className="p-6 space-y-4">
				<h3 className="text-xl font-bold">{project.title}</h3>
				<p className="text-muted-foreground">{project.description}</p>

				{/* Category */}
				<div className="text-sm font-medium">
					<span className="text-muted-foreground">Category:</span> {project.category}
				</div>

				{/* Project Status */}
				<div className="text-sm font-medium">
					<span className="text-muted-foreground">Status:</span> {project.status}
				</div>

				{/* Dropdown Toggle */}
				<button
					className="flex items-center space-x-1 text-primary hover:underline text-sm mt-4"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<span>{isExpanded ? "Show Less" : "Show More"}</span>
					<ChevronDown
						className={`w-5 h-5 transform ${isExpanded ? "rotate-180" : ""}`}
					/>
				</button>

				{/* Expanded Details */}
				{isExpanded && (
					<div className="space-y-4 mt-4">
						{/* Highlights */}
						{project.highlights && (
							<div className="text-sm italic">
								<span className="text-muted-foreground">Highlights:</span>{" "}
								{project.highlights}
							</div>
						)}

						{/* Tech Stack */}
						<div>
							<h4 className="text-lg font-semibold">Tech Stack</h4>
							<div className="flex flex-wrap gap-2 text-sm">
								{project.techStack.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 bg-muted text-foreground rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Extra Tech Stacks */}
						{project.techStackIncludedButNotUsed &&
							project.techStackIncludedButNotUsed.length > 0 && (
								<div>
									<h4 className="text-lg font-semibold">Extra Tech Stacks</h4>
									<div className="flex flex-wrap gap-2 text-sm">
										{project.techStackIncludedButNotUsed.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-muted/50 text-foreground rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							)}

						{/* Project Links */}
						<div className="flex space-x-4">
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-1 text-primary hover:underline"
								>
									<Github className="w-5 h-5" />
									<span>GitHub</span>
								</a>
							)}
							{project.liveDemoUrl && (
								<a
									href={project.liveDemoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-1 text-primary hover:underline"
								>
									<ExternalLink className="w-5 h-5" />
									<span>Live Demo</span>
								</a>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
