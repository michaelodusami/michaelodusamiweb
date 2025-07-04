import React from 'react';
import Image from 'next/image';
import { getAllSocialLinks } from '@/lib/data/social';

export default function HomePage() {
  const socialLinks = getAllSocialLinks();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Michael Odusami
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  iOS Engineer
                </h2>
                <p className="text-xl sm:text-2xl font-medium text-primary">
                  Just Learn.
                </p>
              </div>

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
                      className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/michaelodusami.jpeg"
                    alt="Michael Odusami - iOS Engineer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {/* Optional decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-center space-y-6">
            <p>
              My journey into iOS development began with a fascination for creating intuitive, 
              beautiful mobile experiences that users love. As an iOS Engineer, I specialize in 
              Swift and SwiftUI, crafting applications that not only meet functional requirements 
              but exceed user expectations through thoughtful design and robust architecture.
            </p>
            <p>
              I believe in the power of continuous learning and disciplined growth. Every project 
              is an opportunity to push boundaries, learn new technologies, and refine my craft. 
              This philosophy of "Just Learn." drives everything I do - from writing clean, 
              maintainable code to sharing knowledge with the developer community.
            </p>
            <p>
              When I'm not coding, you'll find me creating content about iOS development, 
              sharing insights on social media, or contributing to open-source projects. 
              I'm passionate about building a strong, supportive tech community and helping 
              others grow in their development journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}