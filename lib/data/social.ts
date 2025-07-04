import { SocialLink } from '../types';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  ExternalLink,
  Youtube,
  Mail
} from 'lucide-react';

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/odusami03',
    icon: Linkedin,
  },
  {
    name: 'X/Twitter',
    href: 'https://x.com/michaelodusami',
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
    href: 'https://www.youtube.com/@michaelodusami',
    icon: Youtube,
  },
];

export const emailLink: SocialLink = {
  name: 'Email',
  href: 'mailto:modusami03@gmail.com',
  icon: Mail,
};

// Helper function to get all social links including email
export const getAllSocialLinks = (): SocialLink[] => {
  return [...socialLinks, emailLink];
};

// Helper function to get social link by name
export const getSocialLinkByName = (name: string): SocialLink | undefined => {
  return getAllSocialLinks().find(link => link.name.toLowerCase() === name.toLowerCase());
}; 