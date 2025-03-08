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
	description:
	  "A women-centric platform that boosts productivity, fosters well-being, and encourages community-building. Integrates AI for scheduling, sentiment analysis, and personalized recommendations to empower daily routines.",
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
	startDate: "2025-02-01",
	category: "Web",
	highlights:
	  "Developed for HackViolet 2025; Built using a full-stack approach with a focus on women empowerment through productivity, well-being, and skill exchange.",
	thumbnailUrl: "/projects/projindiqueens.png",
  };
  
  const mapAbilityProject: ProjectData = {
	id: "mapability",
	title: "Mapability",
	description:
	  "An accessibility-focused platform that lets users search, review, and plan journeys around buildings based on inclusivity metrics. AI-driven features help tailor travel plans and highlight accessibility options for a seamless user experience.",
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
	startDate: "2024-10-01",
	endDate: "2025-01-15",
	thumbnailUrl: "/projects/projmapability.png",
	category: "Web",
	highlights:
	  "Winner of CoStar Group's Best Real Estate Hack at VTHacks 12. Built to promote accessibility and inclusivity in infrastructure through crowd-sourced reviews and AI-powered recommendations.",
  };
  
  const yumexProject: ProjectData = {
	id: "yumex-food-forum",
	title: "Yumex",
	description:
	  "A social hub for food lovers to share culinary discoveries, discuss recipes, and explore new dishes. Offers real-time community interaction with image-supported posts, comments, and upvotes.",
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
	githubUrl: "https://github.com/michaelodusami/typescript-next-yumex_foodforum",
	status: "Completed",
	startDate: "2023-05-01",
	endDate: "2023-05-16",
	thumbnailUrl: "/projects/projyumex.png",
	category: "Web",
	highlights:
	  "Developed as the final project for a Web Development course. Includes features for post management, user authentication, and real-time comment updates.",
  };
  
  const bytesProject: ProjectData = {
	id: "bytes-news-app",
	title: "Bytes Mobile",
	description:
	  "A short-form news application targeting students, merging local news, reels, and college-specific content. Emphasizes a user-friendly interface with swipe navigation and text-to-speech features for modern, on-the-go reading.",
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
	liveDemoUrl: "https://github.com/michaelodusami/reactnative-bytes",
	githubUrl: "https://github.com/michaelodusami/reactnative-bytes",
	status: "Completed",
	startDate: "2024-03-10",
	endDate: "2024-03-17",
	thumbnailUrl: "/projects/projbytes.png",
	category: "Mobile",
	highlights:
	  "Developed during HooHacks 2024. A mobile-first, interactive news app offering modern features like text-to-speech, swipe navigation, and real-time news filtering.",
  };
  
  const javaExpenseTracker: ProjectData = {
	id: "expense-tracker",
	title: "CML Expense Tracker",
	description:
	  "A Java-based solution for organizing personal finances with CRUD operations, category tracking, and real-time updates. Utilizes Spring Boot, MySQL, and enum-based structures for clarity and consistency.",
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
	githubUrl: "https://github.com/michaelodusami/spring-expensetracker_cml",
	status: "Completed",
	startDate: "2023-08-01",
	endDate: "2023-08-15",
	thumbnailUrl: "/projects/projjavaexpensetracker.png",
	category: "Backend",
	highlights:
	  "Developed using Spring Boot and MySQL, this application demonstrates essential CRUD functionality for financial management with enum-based categorization.",
  };
  
  const jwtAuthProject: ProjectData = {
	id: "jwt-authentication",
	title: "JWT User Authentication",
	description:
	  "A Spring Boot starter template for secure, token-based authentication and role-based authorization. Ensures only verified users can access protected resources, with refresh tokens for extended sessions.",
	techStack: ["Spring Boot", "PostgreSQL", "Docker", "JWT"],
	techStackIncludedButNotUsed: [],
	features: [
	  "User authentication using JSON Web Tokens (JWT)",
	  "Role-based access control for fine-grained permission management",
	  "Secure endpoints for login, registration, and access to protected resources",
	  "Refresh token support to maintain long-term user sessions",
	  "Easily configurable and extendable authentication system",
	],
	githubUrl: "https://github.com/michaelodusami/spring-tdd-jwt_auth",
	status: "Completed",
	startDate: "2024-01-15",
	endDate: "2024-01-30",
	thumbnailUrl: "/projects/projjwt.png",
	category: "Backend",
	highlights:
	  "Developed a secure, role-based authentication system using JWTs with Spring Boot. Designed to be easily reusable and configurable for different applications.",
  };
  
  const playlistManagerProject: ProjectData = {
	id: "playlist-manager",
	title: "Youtube Music Playlist Manager",
	description:
	  "A Python-based tool for creating, updating, and removing YouTube Music playlists via the YTMusicAPI. Employs OAuth for secure access and a layered structure for robust maintainability.",
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
	githubUrl: "https://github.com/michaelodusami/python-ytmusic-automation",
	status: "Completed",
	startDate: "2024-04-10",
	endDate: "2024-04-20",
	thumbnailUrl: "/projects/projpyauto.png",
	category: "Automation",
	highlights:
	  "Developed a structured Python application to automate playlist management on YouTube Music, leveraging the YTMusicAPI.",
  };
  
  const codefest: ProjectData = {
	id: "marriott-codefest-2023",
	title: "Charriot",
	description:
	  "A multi-application system featuring web, mobile, and backend solutions built in a 48-hour sprint. Showcases a microservices-based recommendation engine, real-time APIs, and cross-platform React Native support.",
	techStack: ["Next.js", "React Native", "FastAPI", "AWS"],
	features: [
	  "Scalable microservices architecture",
	  "Cross-platform React Native mobile app",
	  "Next.js web application",
	  "Real-time APIs (50+ endpoints)",
	  "Recommendation engine",
	],
	liveDemoUrl: "https://youtu.be/l3zENh-a7C0",
	githubUrl:
	  "https://github.com/michaelodusami/reactnative-charriot",
	status: "Completed",
	startDate: "2023-10-18",
	endDate: "2023-10-20",
	thumbnailUrl: "/projects/projcodefest.png",
	category: "Mobile",
	highlights:
	  "Achieved 1st place at Marriott CodeFest VT; invited to present to Marriott executives.",
  };
  
  const travelDataSwift: ProjectData = {
	id: "swift_travel_guide_001",
	title: "Travel Guide IOS",
	description:
	  "An iOS app for browsing travel destinations, attractions, and interactive maps. Uses SwiftUI for clean, modern navigation and a streamlined user experience.",
	techStack: ["Swift", "SwiftUI"],
	features: [
	  "Browse Places – View a list of travel destinations",
	  "Explore Attractions – Discover attractions in each place",
	  "View Locations on a Map – See pins for destinations and attractions",
	  "Navigate Between Screens – Seamless navigation with NavigationStack",
	  "Modern UI – Designed with SwiftUI for a clean and intuitive interface",
	],
	githubUrl: "https://github.com/michaelodusami/swiftui-travelguide",
	thumbnailUrl: "/projects/swifttravelguide.png",
	status: "Completed",
	startDate: "2025-02-13",
	category: "Mobile",
  };

  const chatgptswiftuionlyclone: ProjectData = {
	id: "chatgptswiftuionlyclone",
	title: "GPT SwiftUI Single Page Clone",
	description: "Re-made a look-alike ChatGPT mobile app home screen with SwiftUI. This project is purely UI-based with no functionality.",
	techStack: ["Swift", "SwiftUI"],
	techStackIncludedButNotUsed: [], // No additional libraries were included
	features: ["Static UI replication", "Custom SwiftUI components", "Dark mode support"], // Features related to the UI
	status: "Completed",
	startDate: "2025-02-22",
	endDate: "2025-02-22", // Since it's a simple UI clone, it was likely completed in a day
	category: "Mobile",
	thumbnailUrl: "URL_TO_YOUR_IMAGE", // Replace with the actual image URL if hosted somewhere
	githubUrl: "https://github.com/michaelodusami/swift-chatgpt_ui_clone", // Replace with actual repo URL if available
  };
  
  const threadmarkboomarkswiftuiproject: ProjectData = {
	id: "threadmarkboomarkswiftuiproject_id",
	title: "Bookmarking",
	description: "Made a SwiftUI application for creating bookmarks (notes) with attributes demonstrating knowledge using CoreData",
	techStack: ["Swift", "SwiftUI", "CoreData"],
	techStackIncludedButNotUsed: [], // No additional libraries were included
	features: ["Bookmark Creating and Deletion"], // Features related to the UI
	status: "Completed",
	startDate: "2025-02-22",
	endDate: "2025-02-22", // Since it's a simple UI clone, it was likely completed in a day
	category: "Mobile",
	thumbnailUrl: "URL_TO_YOUR_IMAGE", // Replace with the actual image URL if hosted somewhere
	githubUrl: "https://github.com/michaelodusami/swiftui-coredata-threadmark", // Replace with actual repo URL if available
	liveDemoUrl: "https://youtube.com/shorts/Ros1954n2Sc?feature=share"
  };

  export const swiftweatherappv1: ProjectData = {
	id: "swift-weather-app-v1",
	title: "Weather App V1",
	description: "A SwiftUI-based weather application that fetches real-time weather data from OpenWeatherMap and integrates with MapKit for seamless location search. Users can search for any city, view live weather updates, and see the selected location on a map.",
	techStack: ["Swift", "SwiftUI", "MapKit", "OpenWeatherMap API", "CoreLocation"],
	techStackIncludedButNotUsed: ["CoreLocation"], // If you planned to use but didn't
	features: [
		"Location-based weather search",
		"Live weather updates",
		"MapKit integration with dynamic markers",
		"Seamless navigation with SwiftUI's NavigationStack",
		"Dynamic UI updates based on API responses"
	],
	liveDemoUrl: "https://www.youtube.com/shorts/vdmZ3Rh400U?si=IdCfOeTncndbmC9Y",
	githubUrl: "https://github.com/michaelodusami/swiftui-mapkit-weatherv1app",
	status: "Completed",
	startDate: "2025-03-07",
	thumbnailUrl: "DisneyLandWeatherImg.png", // Assuming this is an appropriate thumbnail
	category: "Mobile",
	highlights: "Successfully implemented a real-time weather tracking app with modern SwiftUI and MapKit features. Optimized for iOS 16+ with seamless navigation and user experience.",
};

  
  // Export updated project array
  export const projectData: ProjectData[] = [
	codefest,
	travelDataSwift,
	independentQueens,
	mapAbilityProject,
	yumexProject,
	bytesProject,
	javaExpenseTracker,
	jwtAuthProject,
	playlistManagerProject,
	chatgptswiftuionlyclone,
	threadmarkboomarkswiftuiproject
  ];
  

