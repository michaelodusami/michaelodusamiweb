"use client"

import React, { useMemo } from 'react';
import { 
  FileText, 
  Linkedin, 
  Twitter, 
  Youtube
} from 'lucide-react';

interface PlatformStats {
  platform: string;
  name: string;
  count: number;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

// Simplified data structure - just platform and count
const platformData = [
  {
    platform: 'youtube',
    name: 'YouTube',
    count: 0,
    icon: Youtube,
    color: 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-400'
  },
  {
    platform: 'x',
    name: 'X/Twitter',
    count: 20,
    icon: Twitter,
    color: 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400'
  },
  {
    platform: 'medium',
    name: 'Medium',
    count: 4,
    icon: FileText,
    color: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400'
  },
  {
    platform: 'linkedin',
    name: 'LinkedIn',
    count: 8,
    icon: Linkedin,
    color: 'text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-blue-400'
  }
];

export default function PostsPage() {
  const platformStats = useMemo(() => {
    // Only include platforms that have posts
    return platformData.filter(platform => platform.count > 0);
  }, []);

  const totalPosts = platformData.reduce((sum, platform) => sum + platform.count, 0);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Content Statistics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Overview of my content across different platforms and channels.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Total Posts Card */}
          <div className="bg-card border rounded-lg p-8 mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Total Posts</h2>
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-primary mb-4">
              {totalPosts}
            </div>
            <p className="text-muted-foreground text-lg">
              Across all platforms
            </p>
          </div>

          {/* Platform Breakdown */}
          {platformStats.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.platform}
                    className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${stat.color}`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{stat.name}</h3>
                          <p className="text-muted-foreground text-sm">Platform</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {stat.count}
                      </div>
                      <p className="text-muted-foreground">
                        {stat.count === 1 ? 'post' : 'posts'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-2">No Posts Yet</h3>
              <p className="text-muted-foreground">
                Content will appear here as I publish across different platforms.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 