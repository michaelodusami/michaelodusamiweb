import { Post, PlatformData } from '../types';
import { 
  FileText, 
  Linkedin, 
  Twitter, 
  Youtube,
  Filter
} from 'lucide-react';

export const posts: Post[] = [
  {
    id: 'original-just-learn-x',
    title: 'Just learn.',
    excerpt: '.',
    platform: 'x',
    platformName: 'X/Twitter',
    platformIcon: FileText,
    url: 'https://x.com/michaelodusami/status/1940940874508128764',
    isExternal: true,
    date: '2025-07-3',
    readTime: '1 second read',
    category: 'insights',
  },
]

// export const posts: Post[] = [
//   {
//     id: 'post-1',
//     title: 'Building a SwiftUI App with MVVM Architecture',
//     excerpt: 'Learn how to implement the MVVM pattern in SwiftUI for better code organization and testability. This comprehensive guide covers everything from basic setup to advanced techniques.',
//     platform: 'medium',
//     platformName: 'Medium',
//     platformIcon: FileText,
//     url: '/posts/building-swiftui-app-mvvm',
//     isExternal: false,
//     date: '2024-12-15',
//     readTime: '8 min read',
//     category: 'tutorial',
//   },
//   {
//     id: 'post-2',
//     title: 'The Future of iOS Development: What to Expect in 2025',
//     excerpt: 'Exploring upcoming trends in iOS development, from new SwiftUI features to emerging technologies that will shape the mobile landscape.',
//     platform: 'medium',
//     platformName: 'Medium',
//     platformIcon: FileText,
//     url: '/posts/future-ios-development-2025',
//     isExternal: false,
//     date: '2024-12-10',
//     readTime: '12 min read',
//     category: 'insights',
//   },
//   {
//     id: 'post-3',
//     title: 'Just shipped my first SwiftUI app to the App Store! 🚀',
//     excerpt: 'Excited to share that my fitness tracking app is now live on the App Store. Built with SwiftUI, Core Data, and HealthKit integration.',
//     platform: 'twitter',
//     platformName: 'X/Twitter',
//     platformIcon: Twitter,
//     url: 'https://x.com/michaelodusami/status/123456789',
//     isExternal: true,
//     date: '2024-12-08',
//     category: 'announcement',
//   },
//   {
//     id: 'post-4',
//     title: 'Key Lessons from Building a Production SwiftUI App',
//     excerpt: 'Reflecting on the challenges and learnings from developing a real-world SwiftUI application. Performance optimization, state management, and user experience insights.',
//     platform: 'linkedin',
//     platformName: 'LinkedIn',
//     platformIcon: Linkedin,
//     url: 'https://linkedin.com/posts/michaelodusami_swiftui-ios-development',
//     isExternal: true,
//     date: '2024-12-05',
//     category: 'insights',
//   },
//   {
//     id: 'post-5',
//     title: 'Understanding Combine Framework in iOS',
//     excerpt: 'A deep dive into Apple\'s Combine framework and how it revolutionizes reactive programming in iOS. Practical examples and best practices for real-world applications.',
//     platform: 'medium',
//     platformName: 'Medium',
//     platformIcon: FileText,
//     url: '/posts/understanding-combine-framework-ios',
//     isExternal: false,
//     date: '2024-11-28',
//     readTime: '15 min read',
//     category: 'tutorial',
//   },
//   {
//     id: 'post-6',
//     title: 'The importance of accessibility in mobile apps 📱',
//     excerpt: 'Why building accessible apps isn\'t just good practice—it\'s essential. Sharing insights on implementing VoiceOver, Dynamic Type, and other accessibility features.',
//     platform: 'twitter',
//     platformName: 'X/Twitter',
//     platformIcon: Twitter,
//     url: 'https://x.com/michaelodusami/status/123456788',
//     isExternal: true,
//     date: '2024-11-25',
//     category: 'insights',
//   },
//   {
//     id: 'post-7',
//     title: 'SwiftUI Animation Masterclass: From Basics to Advanced',
//     excerpt: 'Learn how to create stunning animations in SwiftUI. This comprehensive tutorial covers everything from simple transitions to complex gesture-based animations.',
//     platform: 'youtube',
//     platformName: 'YouTube',
//     platformIcon: Youtube,
//     url: 'https://www.youtube.com/watch?v=swiftui-animations',
//     isExternal: true,
//     date: '2024-12-12',
//     duration: '25:30',
//     category: 'tutorial',
//   },
//   {
//     id: 'post-8',
//     title: 'Building a Real-time Chat App with SwiftUI and Firebase',
//     excerpt: 'Step-by-step guide to creating a real-time chat application using SwiftUI and Firebase. Learn about real-time data synchronization and user authentication.',
//     platform: 'youtube',
//     platformName: 'YouTube',
//     platformIcon: Youtube,
//     url: 'https://www.youtube.com/watch?v=swiftui-firebase-chat',
//     isExternal: true,
//     date: '2024-12-01',
//     duration: '42:15',
//     category: 'tutorial',
//   },
//   {
//     id: 'post-9',
//     title: 'iOS Development Q&A: Your Questions Answered',
//     excerpt: 'Answering your most common questions about iOS development, SwiftUI, and mobile app development. From beginner to advanced topics.',
//     platform: 'youtube',
//     platformName: 'YouTube',
//     platformIcon: Youtube,
//     url: 'https://www.youtube.com/watch?v=ios-qa-session',
//     isExternal: true,
//     date: '2024-11-20',
//     duration: '18:45',
//     category: 'qa',
//   },
//   {
//     id: 'post-10',
//     title: 'SwiftUI vs UIKit: When to Use Each Framework',
//     excerpt: 'A comprehensive comparison of SwiftUI and UIKit, helping you decide which framework to use for your next iOS project.',
//     platform: 'medium',
//     platformName: 'Medium',
//     platformIcon: FileText,
//     url: '/posts/swiftui-vs-uikit-comparison',
//     isExternal: false,
//     date: '2024-11-15',
//     readTime: '10 min read',
//     category: 'insights',
//   },
//   {
//     id: 'post-11',
//     title: 'New iOS 18 features that will change how we build apps',
//     excerpt: 'Exploring the latest iOS 18 features and how they will impact iOS development practices and user experiences.',
//     platform: 'twitter',
//     platformName: 'X/Twitter',
//     platformIcon: Twitter,
//     url: 'https://x.com/michaelodusami/status/123456787',
//     isExternal: true,
//     date: '2024-11-10',
//     category: 'insights',
//   },
//   {
//     id: 'post-12',
//     title: 'Core Data Best Practices for iOS Apps',
//     excerpt: 'Essential tips and best practices for using Core Data effectively in iOS applications, from data modeling to performance optimization.',
//     platform: 'medium',
//     platformName: 'Medium',
//     platformIcon: FileText,
//     url: '/posts/core-data-best-practices',
//     isExternal: false,
//     date: '2024-11-05',
//     readTime: '14 min read',
//     category: 'tutorial',
//   },
// ];

// Filter options for posts
export const postCategories = [
  { id: 'all', name: 'All Content' },
  { id: 'tutorial', name: 'Tutorials' },
  { id: 'insights', name: 'Insights' },
  { id: 'announcement', name: 'Announcements' },
  { id: 'qa', name: 'Q&A' },
  { id: 'review', name: 'Reviews' },
];

export const postPlatforms: PlatformData[] = [
  { id: 'all', name: 'All Platforms', icon: Filter },
  { id: 'medium', name: 'Medium', icon: FileText },
  { id: 'youtube', name: 'YouTube', icon: Youtube },
  { id: 'x', name: 'X/Twitter', icon: Twitter },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin },
];

// Helper function to get post by ID
export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

// Helper function to get posts by platform
export const getPostsByPlatform = (platform: string): Post[] => {
  if (platform === 'all') return posts;
  return posts.filter(post => post.platform === platform);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: string): Post[] => {
  if (category === 'all') return posts;
  return posts.filter(post => post.category === category);
}; 