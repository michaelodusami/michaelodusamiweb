"use client";
import ProfilePage from "@/components/Profile";
import { useNav } from "@/provider/useNav";

// Components for each section
function AboutMe() {
	return <ProfilePage />;
}

function Projects() {
	return <div>Projects Section</div>;
}

function Resume() {
	return <div>Resume Section</div>;
}

function Skills() {
	return <div>Skills Section</div>;
}

function Explore() {
	return <div>Explore Section</div>;
}

function Contact() {
	return <div>Contact Section</div>;
}

const componentsMap: { [key: string]: React.FC } = {
	"About Me": AboutMe,
	Projects: Projects,
	Resume: Resume,
	Skills: Skills,
	Explore: Explore,
	Contact: Contact,
};

export default function Home() {
	const { activeNav } = useNav();

	// Get the component based on the activeNav label
	const ActiveComponent = componentsMap[activeNav];

	return (
		<div className="min-h-screen pl-10">
			<ActiveComponent />
		</div>
	);
}
