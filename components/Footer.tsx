import React from 'react';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  ExternalLink,
  Youtube
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/odusami03',
      icon: Linkedin,
    },
    {
      name: 'X/Twitter',
      href: 'https://twitter.com/michaelodusami',
      icon: Twitter,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/michaelodusami',
      icon: Github,
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@michaelodusami',
      icon: ExternalLink,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@michaelodusami',
      icon: Youtube,
    },
  ];

  return (
    <footer className={cn(
      "border-t bg-background",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Michael Odusami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 