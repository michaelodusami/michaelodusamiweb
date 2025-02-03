export interface ProjectData {
	id: string; // Unique identifier for the project
	title: string; // Project title
	description: string; // Detailed description of the project
	techStack: string[]; // Array of technologies used (e.g., ["React", "Node.js", "AWS"])
	techStackIncludedButNotUsed?: string[];
	features: string[]; // Key features of the project (e.g., ["Authentication", "Real-time chat"])
	liveDemoUrl?: string; // URL to the live demo or deployed app (optional)
	githubUrl?: string; // URL to the GitHub repository (optional)
	status: "Completed" | "In Progress" | "Planned"; // Current status of the project
	startDate: string; // Start date of the project (e.g., "2024-01-01")
	endDate?: string; // End date (optional if ongoing)
	thumbnailUrl?: string; // URL to a thumbnail image representing the project
	category: "Mobile" | "Web" | "Backend" | "Data Science" | "Other" | "Automation"; // Type/category of project
	highlights?: string; // Additional achievements or recognitions (optional)
}

const independentQueens: ProjectData = {
	id: "independent-queens",
	title: "Independent Queens",
	description: `Independent Queens is a women-centric empowerment platform designed to enhance productivity, well-being, and community building.`,
	techStack: ["React", "TypeScript", "Tailwind CSS", "ShadCN"],
	techStackIncludedButNotUsed: [
		"GraphQL",
		"FastAPI",
		"Python",
		"MongoDB",
		"AWS (Cognito, Lambda, S3)",
		"LangChain",
		"Docker",
	],
	features: [
		"Personalized scheduler with Canvas API and menstrual cycle integration",
		"Digital journal with sentiment analysis for emotional well-being",
		"Community explore page for networking and connections",
		"Points-based skill exchange system with a gift card redemption feature",
		"Generative AI and Machine Learning-powered recommendations for activities and well-being",
	],
	liveDemoUrl: "https://iqns.dhruvv.dev",
	githubUrl: "https://devpost.com/software/independent-queens",
	status: "Completed",
	startDate: "2025-02-01", // Placeholder start date, adjust as needed
	category: "Web",
	highlights: `Developed for HackViolet 2025; Built using a full-stack approach with a focus on women empowerment through productivity, well-being, and skill exchange.`,
	thumbnailUrl: "/indiqueens.png", // Add your thumbnail image path here}
};

const mapAbilityProject: ProjectData = {
	id: "mapability",
	title: "MapAbility",
	description: `MapAbility is an accessibility-focused application that allows users to search and review buildings based on accessibility and friendliness metrics. `,
	techStack: ["TypeScript", "ShadCN", "React", "Next.js", "Tailwind CSS"],
	techStackIncludedButNotUsed: ["FastAPI", "MongoDB", "Docker", "AWS"],
	features: [
		"Building search and accessibility reviews",
		"Day planner and journey planning with accessibility-first recommendations",
		"Explore functionality backed by AI-generated summaries and aggregated reviews",
		"Personalized accessibility plans using generative AI",
		"Accessibility features like dyslexia-friendly text, text resizing, contrast mode, text-to-speech, and speech-to-text",
	],
	liveDemoUrl: "https://mapability.vercel.app/home",
	githubUrl: "https://devpost.com/software/mapability-16m47i",
	status: "Completed",
	startDate: "2024-10-01", // Placeholder date, adjust as needed
	endDate: "2025-01-15", // Placeholder date, adjust as needed
	thumbnailUrl: "/projmapability.png",
	category: "Web",
	highlights: `Winner of CoStar Group's Best Real Estate Hack at VTHacks 12. Built to promote accessibility and inclusivity in infrastructure through crowd-sourced reviews and AI-powered recommendations.`,
};

const yumexProject: ProjectData = {
	id: "yumex-food-forum",
	title: "Yumex - Food Lovers Forum",
	description: `Yumex is a dynamic platform designed for food enthusiasts to share culinary experiences, discover new dishes, and engage with a like-minded community. `,
	techStack: ["React", "ShadCN", "Next.js", "TypeScript", "Supabase"],
	techStackIncludedButNotUsed: [],
	features: [
		"Post creation with optional image uploads",
		"Home feed with post sorting by time and upvotes",
		"Dedicated post pages with detailed information",
		"User authentication and authorization for post and comment management",
		"Comments and upvotes functionality",
		"Post categorization and navigation carousel",
		"Post preview during creation",
		"Search functionality by post title (after database integration)",
	],
	liveDemoUrl: "https://youtu.be/qcUbhgHgbd8",
	githubUrl: "https://github.com/michaelodusami/fstackEng-yumex-food-forum",
	status: "Completed",
	startDate: "2023-05-01", // Placeholder date, adjust as needed
	endDate: "2023-05-16", // Placeholder date, adjust as needed
	thumbnailUrl: "/projyumex.png",
	category: "Web",
	highlights: `Developed as the final project for a Web Development course. Includes features for post management, user authentication, and real-time comment updates.`,
};
const bytesProject: ProjectData = {
	id: "bytes-news-app",
	title: "Bytes - Short-Form News App",
	description: `Bytes is a dynamic, short-form news application designed to engage the modern generation. It combines news, reels, and college-specific content to provide a personalized news platform for students. The app acknowledges evolving media consumption habits and offers a user-friendly experience with swipe navigation, local news highlights, and text-to-speech functionality.`,
	techStack: ["React Native", "Expo Go", "NewsAPI", "PropelAuth"],
	techStackIncludedButNotUsed: ["MongoDB", "Cloudinary"],
	features: [
		"Compatible with both Android and iOS devices",
		"User-friendly swipe navigation",
		"Local news articles on the landing page",
		"Text-to-speech functionality for article reading",
		"Category-based article filtering",
		"User profile customization (name, email, school, dark/light mode)",
		"Admin tools to publish urgent news",
	],
	liveDemoUrl: "https://github.com/michaelodusami/hackathon-bytes",
	githubUrl: "https://github.com/michaelodusami/hackathon-bytes",
	status: "Completed",
	startDate: "2024-03-10", // Placeholder date, adjust as needed
	endDate: "2024-03-17", // Placeholder date, adjust as needed
	thumbnailUrl: "/projbytes.png", // Placeholder thumbnail, update as needed
	category: "Mobile",
	highlights: `Developed during HooHacks 2024. A mobile-first, interactive news app offering modern features like text-to-speech, swipe navigation, and real-time news filtering.`,
};

const javaExpenseTracker: ProjectData = {
	id: "expense-tracker",
	title: "Expense Tracker",
	description: `The Expense Tracker is a Java-based application designed to help users manage their financial records. It allows users to create, view, update, and delete expenses while organizing them by categories and payment methods. This application is built with a robust backend that leverages Java's powerful frameworks and MySQL for persistent data storage.`,
	techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Hibernate"],
	techStackIncludedButNotUsed: [],
	features: [
		"Create new expenses with details like title, amount, category, and payment method",
		"Find expenses by ID, category, or payment method",
		"View all expenses in a structured format",
		"Update expense details in real-time",
		"Delete expenses as needed",
		"Enum-based categories and payment methods for streamlined categorization",
	],
	liveDemoUrl: "", // No live demo link available
	githubUrl: "https://github.com/michaelodusami/javaEng-expense-tracker-cml",
	status: "Completed",
	startDate: "2023-08-01", // Placeholder date, adjust as needed
	endDate: "2023-08-15", // Placeholder date, adjust as needed
	thumbnailUrl: "/projjavaexpensetracker.png",
	category: "Backend",
	highlights: `Developed using Spring Boot and MySQL, this application demonstrates essential CRUD functionality for financial management with enum-based categorization.`,
};

const jwtAuthProject: ProjectData = {
	id: "jwt-authentication",
	title: "JWT User Authentication in Spring Boot",
	description: `This is a boilerplate template for implementing JWT (JSON Web Token) authentication in a Spring Boot application. It provides a secure and scalable solution to authenticate and authorize users, ensuring that only authenticated users can access protected resources.`,
	techStack: ["Spring Boot", "PostgreSQL", "Docker", "JWT"],
	techStackIncludedButNotUsed: [],
	features: [
		"User authentication using JSON Web Tokens (JWT)",
		"Role-based access control for fine-grained permission management",
		"Secure endpoints for login, registration, and access to protected resources",
		"Refresh token support to maintain long-term user sessions",
		"Easily configurable and extendable authentication system",
	],
	liveDemoUrl: "", // No live demo link available
	githubUrl: "https://github.com/michaelodusami/javaEng-JWT-userauthentication",
	status: "Completed",
	startDate: "2024-01-15", // Placeholder date, adjust as needed
	endDate: "2024-01-30", // Placeholder date, adjust as needed
	thumbnailUrl: "/projjwt.png", // Placeholder thumbnail, update as needed
	category: "Backend",
	highlights: `Developed a secure, role-based authentication system using JWTs with Spring Boot. Designed to be easily reusable and configurable for different applications.`,
};

const playlistManagerProject: ProjectData = {
	id: "playlist-manager",
	title: "Playlist Manager Interface",
	description: `The Playlist Manager Interface is a Python program for managing playlists on YouTube Music. It allows users to perform various operations such as creating, deleting, and updating playlists, as well as adding or removing songs. This program uses the ytmusicapi library to interact with YouTube Music and supports OAuth-based authentication.`,
	techStack: ["Python", "YTMusicAPI"],
	techStackIncludedButNotUsed: [],
	features: [
		"Create new playlists and manage them",
		"Add and remove songs from playlists",
		"Delete playlists",
		"Interact with YouTube Music using the YTMusicAPI",
		"OAuth authentication for secure access to YouTube Music",
		"Layered architecture with interface, service, controller, and backend modules",
	],
	liveDemoUrl: "", // No live demo available
	githubUrl: "https://github.com/michaelodusami/pyEng-ytmusic-automation",
	status: "Completed",
	startDate: "2024-04-10", // Placeholder date, adjust as needed
	endDate: "2024-04-20", // Placeholder date, adjust as needed
	thumbnailUrl: "/projpyauto.png", // Placeholder thumbnail, update as needed
	category: "Automation",
	highlights: `Developed a structured Python application to automate playlist management on YouTube Music, leveraging the YTMusicAPI.`,
};

export const projectData: ProjectData[] = [
	independentQueens,
	mapAbilityProject,
	yumexProject,
	bytesProject,
	javaExpenseTracker,
	jwtAuthProject,
	playlistManagerProject,
];
