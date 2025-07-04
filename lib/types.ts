import { LucideIcon } from 'lucide-react';

// Social Media Platform Types
export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  complexity: ProjectComplexity;
  // Detail page specific fields
  architecture?: string;
  challenges?: string;
  solutions?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  dribbbleUrl?: string;
  images?: string[];
  date?: string;
}

export type ProjectCategory = 
  | 'health'
  | 'productivity' 
  | 'utility'
  | 'lifestyle'
  | 'finance'
  | 'social'
  | 'education'
  | 'entertainment';

export type ProjectComplexity = 'beginner' | 'intermediate' | 'advanced';

// Post Types
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  platform: PostPlatform;
  platformName: string;
  platformIcon: LucideIcon;
  url: string;
  isExternal: boolean;
  date: string;
  category: PostCategory;
  readTime?: string; // For Medium articles
  duration?: string; // For YouTube videos
}

export type PostPlatform = 'medium' | 'youtube' | 'x' | 'linkedin';

export type PostCategory = 'tutorial' | 'insights' | 'announcement' | 'qa' | 'review';

// Filter Types
export interface FilterOption {
  id: string;
  name: string;
  icon?: LucideIcon;
}

// Category and Platform Data
export interface CategoryData {
  id: string;
  name: string;
}

export interface PlatformData {
  id: string;
  name: string;
  icon: LucideIcon;
} 