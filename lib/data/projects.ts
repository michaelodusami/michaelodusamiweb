import { Project } from '../types';

export interface MobileProject {
  id: string;
  title: string;
  description: string;
  screens: string[]; // up to 3 image URLs
  technologies: string[];
  externalUrl: string;
}

export const mobileProjects: MobileProject[] = [
  {
    id: 'move',
    title: 'Moving Assistant - Native iOS App',
    description: 'A comprehensive iOS application designed to streamline the moving process by enabling users to manage tasks, expenses, flights, and local exploration all in one place. Key features include task management, expense tracking, flight planning, local exploration, and an inventory system with QR code functionality. It was developed using MVVM architecture, SwiftData for persistence, MapKit, TipKit for onboarding, and AVFoundation.',
    screens: [
      '/projects/move1.png',
      '/projects/move2.png',
      '/projects/move3.png',
    ],
    technologies: ['SwiftUI', 'Charts', 'SwiftData', 'MapKit', 'TipKit', 'AVFoundation', 'Google Places API'],
    externalUrl: 'https://www.youtube.com/watch?v=tguY241cjDc',
  },
  {
    id: 'chariot-codefest',
    title: 'Chariot CodeFest - Hospitality App',
    description: 'A hospitality application prototype developed for Marriott in under 48 hours, designed to enhance user satisfaction through innovative features and multilingual support. It features a multilingual chatbot (powered by a REST API), personalized user preferences, comprehensive booking history, and real-time customer service integration.',
    screens: [
      '/projects/charriot1.png',
      '/projects/charriot2.png',
    ],
    technologies: ['React Native', 'Expo Go', 'FastAPI', 'AWS Lambda', 'RESTful API', 'TypeScript'],
    externalUrl: 'https://github.com/michaelodusami/reactnative-charriot', // Placeholder for external link
  },
  {
    id: 'bytes',
    title: 'Bytes - News Platform',
    description: 'An innovative news consumption platform that combines TikTok-style reels functionality with up-to-date news content, featuring accessibility enhancements and personalized content delivery. Key features include a TikTok-inspired vertical scrolling interface, real-time news via NewsAPI, text-to-speech for visually impaired users, and personalized content categorization.',
    screens: [
      '/projects/bytes1.png'
    ],
    technologies: ['React Native', 'Expo Go', 'MongoDB', 'FastAPI', 'Text-to-Speech Library', 'NewsAPI', 'TypeScript'],
    externalUrl: 'https://github.com/michaelodusami/reactnative-bytes', // Placeholder for external link
  },
]