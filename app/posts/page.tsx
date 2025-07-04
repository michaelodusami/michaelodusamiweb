import React from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  Calendar,
  FileText,
  MessageCircle,
  Linkedin,
  Twitter
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock posts data - replace with real data
const posts = [
  {
    id: 'post-1',
    title: 'Building a SwiftUI App with MVVM Architecture',
    excerpt: 'Learn how to implement the MVVM pattern in SwiftUI for better code organization and testability. This comprehensive guide covers everything from basic setup to advanced techniques.',
    platform: 'medium',
    platformName: 'Medium',
    platformIcon: FileText,
    url: '/posts/building-swiftui-app-mvvm',
    isExternal: false,
    date: '2024-12-15',
    readTime: '8 min read',
  },
  {
    id: 'post-2',
    title: 'The Future of iOS Development: What to Expect in 2025',
    excerpt: 'Exploring upcoming trends in iOS development, from new SwiftUI features to emerging technologies that will shape the mobile landscape.',
    platform: 'medium',
    platformName: 'Medium',
    platformIcon: FileText,
    url: '/posts/future-ios-development-2025',
    isExternal: false,
    date: '2024-12-10',
    readTime: '12 min read',
  },
  {
    id: 'post-3',
    title: 'Just shipped my first SwiftUI app to the App Store! 🚀',
    excerpt: 'Excited to share that my fitness tracking app is now live on the App Store. Built with SwiftUI, Core Data, and HealthKit integration.',
    platform: 'twitter',
    platformName: 'X/Twitter',
    platformIcon: Twitter,
    url: 'https://twitter.com/michaelodusami/status/123456789',
    isExternal: true,
    date: '2024-12-08',
  },
  {
    id: 'post-4',
    title: 'Key Lessons from Building a Production SwiftUI App',
    excerpt: 'Reflecting on the challenges and learnings from developing a real-world SwiftUI application. Performance optimization, state management, and user experience insights.',
    platform: 'linkedin',
    platformName: 'LinkedIn',
    platformIcon: Linkedin,
    url: 'https://linkedin.com/posts/michaelodusami_swiftui-ios-development',
    isExternal: true,
    date: '2024-12-05',
  },
  {
    id: 'post-5',
    title: 'Understanding Combine Framework in iOS',
    excerpt: 'A deep dive into Apple\'s Combine framework and how it revolutionizes reactive programming in iOS. Practical examples and best practices for real-world applications.',
    platform: 'medium',
    platformName: 'Medium',
    platformIcon: FileText,
    url: '/posts/understanding-combine-framework-ios',
    isExternal: false,
    date: '2024-11-28',
    readTime: '15 min read',
  },
  {
    id: 'post-6',
    title: 'The importance of accessibility in mobile apps 📱',
    excerpt: 'Why building accessible apps isn\'t just good practice—it\'s essential. Sharing insights on implementing VoiceOver, Dynamic Type, and other accessibility features.',
    platform: 'twitter',
    platformName: 'X/Twitter',
    platformIcon: Twitter,
    url: 'https://twitter.com/michaelodusami/status/123456788',
    isExternal: true,
    date: '2024-11-25',
  },
];

export default function PostsPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'medium':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400';
      case 'twitter':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'linkedin':
        return 'text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Posts & Content
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Articles, insights, and thoughts on iOS development, Swift, and the mobile development landscape.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const PlatformIcon = post.platformIcon;
            return (
              <article
                key={post.id}
                className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Platform Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "flex items-center px-2 py-1 rounded-md text-xs font-medium",
                      getPlatformColor(post.platform)
                    )}>
                      <PlatformIcon size={14} className="mr-1" />
                      {post.platformName}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar size={12} className="mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read Time (for Medium posts) */}
                  {post.readTime && (
                    <div className="mt-4 text-xs text-muted-foreground">
                      {post.readTime}
                    </div>
                  )}

                  {/* Read More Link */}
                  <div className="mt-6">
                    {post.isExternal ? (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary font-medium hover:underline"
                      >
                        Read on {post.platformName}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    ) : (
                      <Link
                        href={post.url}
                        className="inline-flex items-center text-sm text-primary font-medium hover:underline"
                      >
                        Read Article
                        <ExternalLink size={14} className="ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
} 