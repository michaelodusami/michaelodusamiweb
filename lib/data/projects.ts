import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Fitness Tracker App',
    thumbnail: '/projects/move1.png',
    description: 'A comprehensive fitness tracking application built with SwiftUI',
    technologies: ['SwiftUI', 'Core Data', 'HealthKit'],
    category: 'health',
    complexity: 'intermediate',
    architecture: 'MVVM with Combine for reactive programming',
    challenges: 'Integrating HealthKit permissions and data synchronization while maintaining app performance and user privacy. Implemented a custom caching layer to handle offline scenarios and reduce API calls.',
    solutions: 'Created a robust data layer using Core Data with HealthKit integration, implemented proper error handling and user feedback, and optimized the UI for smooth 60fps animations.',
    githubUrl: 'https://github.com/michaelodusami/fitness-tracker',
    appStoreUrl: 'https://apps.apple.com/app/fitness-tracker',
    dribbbleUrl: 'https://dribbble.com/shots/fitness-tracker-design',
    images: [
      '/projects/move1.png',
      '/projects/move2.png',
      '/projects/move1.png', // Placeholder - replace with actual screenshots
    ],
    date: 'December 2024',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    thumbnail: '/projects/move2.png',
    description: 'A productivity app for managing daily tasks and projects',
    technologies: ['SwiftUI', 'Combine', 'UserDefaults'],
    category: 'productivity',
    complexity: 'beginner',
    architecture: 'MVVM with Combine for state management',
    challenges: 'Implementing real-time task synchronization across multiple devices while maintaining data consistency and handling offline scenarios.',
    solutions: 'Used CloudKit for seamless data synchronization, implemented conflict resolution strategies, and created a robust offline-first architecture.',
    githubUrl: 'https://github.com/michaelodusami/task-manager',
    appStoreUrl: 'https://apps.apple.com/app/task-manager',
    dribbbleUrl: 'https://dribbble.com/shots/task-manager-design',
    images: [
      '/projects/move2.png',
      '/projects/move1.png',
      '/projects/move2.png', // Placeholder - replace with actual screenshots
    ],
    date: 'November 2024',
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    thumbnail: '/projects/move1.png',
    description: 'Real-time weather information with beautiful UI',
    technologies: ['SwiftUI', 'Core Location', 'URLSession'],
    category: 'utility',
    complexity: 'intermediate',
    architecture: 'MVVM with async/await for network calls',
    challenges: 'Handling location permissions, managing network requests efficiently, and providing accurate weather data with minimal API calls.',
    solutions: 'Implemented location caching, request debouncing, and offline weather data storage to reduce API calls and improve user experience.',
    githubUrl: 'https://github.com/michaelodusami/weather-app',
    appStoreUrl: 'https://apps.apple.com/app/weather-dashboard',
    images: [
      '/projects/move1.png',
      '/projects/move2.png',
      '/projects/move1.png', // Placeholder - replace with actual screenshots
    ],
    date: 'October 2024',
  },
  {
    id: 'project-4',
    title: 'Recipe Finder',
    thumbnail: '/projects/move2.png',
    description: 'Discover and save your favorite recipes',
    technologies: ['SwiftUI', 'Core Data', 'CloudKit'],
    category: 'lifestyle',
    complexity: 'advanced',
    architecture: 'MVVM with CloudKit integration',
    challenges: 'Implementing complex search algorithms, managing large recipe databases, and ensuring smooth CloudKit synchronization across devices.',
    solutions: 'Built a sophisticated search system with filters, implemented efficient data pagination, and created a robust CloudKit sync mechanism with conflict resolution.',
    githubUrl: 'https://github.com/michaelodusami/recipe-finder',
    appStoreUrl: 'https://apps.apple.com/app/recipe-finder',
    images: [
      '/projects/move2.png',
      '/projects/move1.png',
      '/projects/move2.png', // Placeholder - replace with actual screenshots
    ],
    date: 'September 2024',
  },
  {
    id: 'project-5',
    title: 'Budget Tracker',
    thumbnail: '/projects/move1.png',
    description: 'Personal finance management made simple',
    technologies: ['SwiftUI', 'Core Data', 'Charts'],
    category: 'finance',
    complexity: 'intermediate',
    architecture: 'MVVM with Core Data and Charts framework',
    challenges: 'Creating intuitive financial visualizations, implementing secure data storage, and providing meaningful insights from transaction data.',
    solutions: 'Integrated Charts framework for beautiful financial graphs, implemented data encryption for sensitive information, and created smart categorization algorithms.',
    githubUrl: 'https://github.com/michaelodusami/budget-tracker',
    appStoreUrl: 'https://apps.apple.com/app/budget-tracker',
    images: [
      '/projects/move1.png',
      '/projects/move2.png',
      '/projects/move1.png', // Placeholder - replace with actual screenshots
    ],
    date: 'August 2024',
  },
  {
    id: 'project-6',
    title: 'Social Media App',
    thumbnail: '/projects/move2.png',
    description: 'Connect with friends and share moments',
    technologies: ['SwiftUI', 'Firebase', 'Authentication'],
    category: 'social',
    complexity: 'advanced',
    architecture: 'MVVM with Firebase backend',
    challenges: 'Implementing real-time messaging, managing user authentication, and handling large amounts of user-generated content efficiently.',
    solutions: 'Used Firebase Realtime Database for instant messaging, implemented proper user authentication flows, and created efficient content caching strategies.',
    githubUrl: 'https://github.com/michaelodusami/social-app',
    appStoreUrl: 'https://apps.apple.com/app/social-connect',
    images: [
      '/projects/move2.png',
      '/projects/move1.png',
      '/projects/move2.png', // Placeholder - replace with actual screenshots
    ],
    date: 'July 2024',
  },
];

// Filter options for projects
export const projectCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'health', name: 'Health & Fitness' },
  { id: 'productivity', name: 'Productivity' },
  { id: 'utility', name: 'Utility' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'finance', name: 'Finance' },
  { id: 'social', name: 'Social' },
  { id: 'education', name: 'Education' },
  { id: 'entertainment', name: 'Entertainment' },
];

export const projectComplexities = [
  { id: 'all', name: 'All Levels' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
];

export const projectTechnologies = [
  'SwiftUI',
  'UIKit',
  'Core Data',
  'Combine',
  'HealthKit',
  'CloudKit',
  'Firebase',
  'URLSession',
  'Core Location',
  'Charts',
  'Authentication',
  'UserDefaults',
  'Core Animation',
  'WidgetKit',
  'App Clips',
  'ARKit',
  'Core ML',
  'Vision',
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
}; 