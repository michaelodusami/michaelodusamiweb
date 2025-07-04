"use client"

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  Calendar,
  FileText,
  MessageCircle,
  Linkedin,
  Twitter,
  Youtube,
  Filter,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  posts, 
  postCategories, 
  postPlatforms 
} from '@/lib/data/posts';

export default function PostsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

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
      case 'youtube':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-400';
      case 'x':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      case 'linkedin':
        return 'text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-blue-400';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
      const platformMatch = selectedPlatform === 'all' || post.platform === selectedPlatform;
      return categoryMatch && platformMatch;
    });
  }, [selectedCategory, selectedPlatform]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPlatform('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPlatform !== 'all';

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

      {/* Filters Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Content</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
            >
              <Filter size={16} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md">
                  {postCategories.find(c => c.id === selectedCategory)?.name}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 hover:bg-primary/80 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedPlatform !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md">
                  {postPlatforms.find(p => p.id === selectedPlatform)?.name}
                  <button
                    onClick={() => setSelectedPlatform('all')}
                    className="ml-1 hover:bg-primary/80 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Filter Options */}
          {showFilters && (
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Category</h3>
                  <div className="space-y-2">
                    {postCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors",
                          selectedCategory === category.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Platform Filter */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Platform</h3>
                  <div className="space-y-2">
                    {postPlatforms.map((platform) => {
                      const Icon = platform.icon;
                      return (
                        <button
                          key={platform.id}
                          onClick={() => setSelectedPlatform(platform.id)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-md transition-colors flex items-center",
                            selectedPlatform === platform.id
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          )}
                        >
                          <Icon size={16} className="mr-2" />
                          {platform.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-muted-foreground mb-6">
            Showing {filteredPosts.length} of {posts.length} posts
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No posts found with the selected filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
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

                      {/* Read Time / Duration */}
                      {(post.readTime || post.duration) && (
                        <div className="mt-4 text-xs text-muted-foreground">
                          {post.readTime || post.duration}
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
                            {post.platform === 'youtube' ? 'Watch on YouTube' : `Read on ${post.platformName}`}
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
          )}
        </div>
      </section>
    </div>
  );
} 