
interface ProfileData {
    name: string;
    bio: string;
    profilePicture: string;
    socialLinks: {
        github: string;
        linkedin: string;
        devpost: string;
        email: string;
    };
}

interface ProfileItem {
    name: string;
    icon: string;
}

export const profileData: ProfileData = {
	name: "Michael-Andre Odusami",
	bio: "Software Engineer | Mobile & Web Developer | Computer Science @ Virginia Tech",
	profilePicture: "/michaelodusami.png", // Replace with your image path
	socialLinks: {
		github: "https://github.com/michaelodusami",
		linkedin: "https://www.linkedin.com/in/odusami03/",
		devpost:
			"https://devpost.com/modusami?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
		email: "mailto:modusami03@gmail.com",
	},
};

export const skills: ProfileItem[] = [
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

export const experience: ProfileItem[] = [
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