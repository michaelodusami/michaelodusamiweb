"use client";
import ProfilePage from "@/components/ProfilePage";
import { useNav } from "@/provider/useNav";

// Components for each section
function AboutMe() {
	return <ProfilePage />;
}

// function Project() {
// 	return (
// 		<div className="container mx-auto p-8 space-y-12">
// 			<h2 className="text-2xl font-bold">Projects</h2>
// 			<ProjectsList projects={projectData} />
// 		</div>
// 	);
// }

const componentsMap: { [key: string]: React.FC } = {
	"Profile": AboutMe,
};

export default function Home() {
	const { activeNav } = useNav();

	// Get the component based on the activeNav label
	const ActiveComponent = componentsMap[activeNav];

	return (
		<div className="w-[70%] mx-auto">
			{ActiveComponent ? <ActiveComponent /> : <div>Select an option from the menu</div>}
		</div>
	);
}
