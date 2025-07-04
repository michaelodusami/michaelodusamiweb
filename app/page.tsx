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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg max-w-none text-center space-y-6">
  <p>
    My journey into iOS development began with a fascination of this massive piece of technology we can place in our own hands. As a <strong>self-taught iOS Engineer</strong> and 
    a <strong>B.S. Computer Science major at Virginia Tech</strong> (entering my final year!), 
    I specialize in Swift and SwiftUI, crafting applications that not only meet 
    functional requirements but exceed user expectations through thoughtful design and robust architecture.
  </p>
  <p>
    I believe in the power of continuous learning and disciplined growth. Every project 
    is an opportunity to push boundaries, learn new technologies, and refine my craft. 
    This philosophy of "Just Learn." drives everything I do - from writing clean, 
    maintainable code to sharing knowledge with the developer community.
  </p>
  <p>
    Beyond my passion for iOS, my experiences include impactful roles:
    <br/><br/>
    <strong>Software Engineer Intern @ MAXUT, INC.</strong> (June 2025 - Present): Diving deep into iOS development with <strong>Xcode and SwiftUI</strong>.
    <br/>
    <strong>Teaching Assistant @ Virginia Tech College of Engineering</strong> (August 2024 - Present): Guiding over 80 students in foundational <strong>Java</strong> and <strong>Python</strong> programming, significantly boosting their comprehension and lab performance.
    <br/>
    <strong>Information Technology Developer Intern @ TDI - a Blackstone Portfolio Company</strong> (May 2024 - August 2024): Developed a <strong>Java automation application</strong> that cut manual processing by 45%, saving over $3000 monthly, and engineered integrated Power Automate flows.
    <br/>
    <strong>Software Engineer Intern @ ipNX Nigeria Limited</strong> (July 2023 - August 2023): Designed and implemented a secure customer intake form using <strong>React, Next.js, and PHP</strong>, focusing on intuitive UX and strong security.
  </p>
  <p>
    My commitment to creating impactful software has also earned me several recognitions:
    <br/><br/>
    &#127941; <strong>Marriott CodeFest 1st Place</strong> (React Native)
    <br/>
    &#127942; <strong>UVA HooHacks Best Accessibility Award</strong> (React Native)
    <br/>
    &#127894; <strong>HackViolet Best Financial Award</strong> (React Web App)
    <br/>
    &#127894; <strong>VTHACKS' 2024 Best Real Estate Award</strong> (React Web App)
  </p>
  <p>
    When I'm not coding, you'll find me sharing insights on social media, watching movies such as Inception, sharing my knowledge with others, or playing soccer. 
    I'm passionate about helping others grow in their development journey and avoid making the same mistakes I made.
  </p>
</div>
        </div>
      </section>
    </div>
  );
}