"use client";
import ProfilePage from "@/components/Profile";
import { ProjectsList } from "@/components/Projects";
import { projectData } from "@/lib/projectData";
import { useNav } from "@/provider/useNav";

// Components for each section
function AboutMe() {
	return <ProfilePage />;
}

function Project() {
	return (
		<div className="container mx-auto p-8 space-y-12">
			<h2 className="text-2xl font-bold">Projects</h2>
			<ProjectsList projects={projectData} />
		</div>
	);
}

const componentsMap: { [key: string]: React.FC } = {
	"About Me": AboutMe,
	Projects: Project,
};

export default function Home() {
	const { activeNav } = useNav();

	// Get the component based on the activeNav label
	const ActiveComponent = componentsMap[activeNav];

	return (
		<div className="min-h-screen pl-10">
			{ActiveComponent ? <ActiveComponent /> : <div>Select an option from the menu</div>}
		</div>
	);
}
