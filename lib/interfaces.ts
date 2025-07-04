export default interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
  github?: string;
}