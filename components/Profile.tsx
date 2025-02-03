import Image from "next/image";
import { Github, Linkedin, Mail, Twitter, Signpost } from "lucide-react";

const profileData = {
	name: "Michael Odusami",
	bio: `Hi there 👋 I am a self-taught Software Engineer and current student at Virginia Tech, where I am pursuing a Bachelor's degree in Engineering. My passion for technology and problem-solving has driven me to explore various domains of software development, from full-stack web applications to hardware interfacing.

Over the years, I've honed my skills by working on personal projects, collaborating with peers, and continuously pushing the boundaries of my knowledge. I thrive in environments that challenge me to learn new technologies and design scalable, maintainable systems.

🌱 Right now, I'm diving deep into system design principles, API testing, and plan to start experimenting with Arduino and IoT projects soon. I believe in the power of interdisciplinary skills to create innovative solutions.

🔭 Currently, I'm in the middle of developing a mobile application that I plan to release between June and August. It's an ambitious project that combines my expertise in app development, backend integration, and UI/UX design. I’m excited about its potential to make a meaningful impact.

📚As a lifelong learner, I strive to stay updated on emerging technologies and best practices in the tech industry.`,
	profilePicture: "/profile-pic.jpg", // Replace with your image path
	socialLinks: {
		github: "https://github.com/michaelodusami",
		linkedin: "https://www.linkedin.com/in/odusami03/",
		devpost:
			"https://devpost.com/modusami?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
		email: "modusami03@gmail.com",
	},
};

const skills = [
	{ name: "Java", icon: "java" },
	{ name: "Python", icon: "python" },
	{ name: "Spring", icon: "spring" },
	{ name: "JavaScript", icon: "javascript" },
	{ name: "TypeScript", icon: "typescript" },
	{ name: "Next.js", icon: "nextjs" },
	{ name: "Git", icon: "git" },
	{ name: "Svelte", icon: "svelte" },
	{ name: "Supabase", icon: "supabase" },
	{ name: "SQLite", icon: "sqlite" },
	{ name: "SASS", icon: "sass" },
	{ name: "React", icon: "react" },
	{ name: "PostgreSQL", icon: "postgres" },
	{ name: "Node.js", icon: "nodejs" },
	{ name: "MySQL", icon: "mysql" },
	{ name: "MongoDB", icon: "mongodb" },
	{ name: "Tailwind", icon: "tailwind" },
	{ name: "HTML", icon: "html" },
	{ name: "CSS", icon: "css" },
	{ name: "Hibernate", icon: "hibernate" },
	{ name: "FastAPI", icon: "fastapi" },
	{ name: "Express.js", icon: "express" },
	{ name: "Docker", icon: "docker" },
	{ name: "C", icon: "c" },
	{ name: "C++", icon: "cpp" },
	{ name: "Postman", icon: "postman" },
	{ name: "Maven", icon: "maven" },
	{ name: "Linux", icon: "linux" },
	{ name: "Bash", icon: "bash" },
	{ name: "Swift", icon: "swift" },
];

const experience = [
	{ name: "Unity", icon: "unity" },

	{ name: "R", icon: "r" },
	{ name: "PHP", icon: "php" },
	{ name: "MATLAB", icon: "matlab" },
	{ name: "Material-UI", icon: "materialui" },
	{ name: "Kafka", icon: "kafka" },
	{ name: "GraphQL", icon: "graphql" },
	{ name: "Firebase", icon: "firebase" },
	{ name: "CMake", icon: "cmake" },
	{ name: "Bootstrap", icon: "bootstrap" },
	{ name: "AWS", icon: "aws" },
];

export default function ProfilePage() {
	return (
		<div className="container mx-auto p-8 space-y-12">
			{/* Find Me Section */}
			<section className="flex justify-center">
				<div className="flex space-x-6">
					<a
						href={profileData.socialLinks.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
					</a>
					<a
						href={profileData.socialLinks.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="w-6 h-6 hover:text-primary transition-colors" />
					</a>

					<a href={profileData.socialLinks.email}>
						<Mail className="w-6 h-6 hover:text-primary transition-colors" />
					</a>

					<a href={profileData.socialLinks.devpost}>
						<Signpost className="w-6 h-6 hover:text-primary transition-colors" />
					</a>
				</div>
			</section>
			{/* Profile Header */}
			<header className="flex items-center space-x-6">
				{/* <Image
					src={profileData.profilePicture}
					alt="Profile Picture"
					width={120}
					height={120}
					className="rounded-full object-cover"
				/> */}
				<div>
					<h1 className="text-2xl font-bold mb-5">{profileData.name}</h1>
					<p className="text-muted-foreground whitespace-pre-line">{profileData.bio}</p>
				</div>
			</header>

			{/* Skills Section */}
			<section>
				<h2 className="text-xl font-bold mb-4">Skills</h2>
				<div className="grid grid-cols-6 gap-6">
					{skills.map((skill) => (
						<div key={skill.name} className="flex flex-col items-center space-y-2">
							<img
								src={`https://skillicons.dev/icons?i=${skill.icon}`}
								alt={skill.name}
								className="h-12 w-12"
							/>
							<span className="text-sm">{skill.name}</span>
						</div>
					))}
				</div>
			</section>

			{/* Experience Section */}
			<section>
				<h2 className="text-xl font-bold mb-4">Experience With</h2>
				<div className="grid grid-cols-6 gap-6">
					{experience.map((exp) => (
						<div key={exp.name} className="flex flex-col items-center space-y-2">
							<img
								src={`https://skillicons.dev/icons?i=${exp.icon}`}
								alt={exp.name}
								className="h-12 w-12"
							/>
							<span className="text-sm">{exp.name}</span>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
