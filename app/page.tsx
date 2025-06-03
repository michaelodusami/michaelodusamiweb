"use client"
import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
  github?: string;
}

const MobilePortfolio: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Coin Tracker",
      description: "Real-time cryptocurrency tracking app with portfolio management, price alerts, and detailed analytics.",
      technologies: ["React Native", "TypeScript", "CoinGecko API", "Redux", "Chart.js"],
      images: [
        "https://via.placeholder.com/300x600/1a1a2e/eee?text=Coin+List",
        "https://via.placeholder.com/300x600/16213e/eee?text=Bitcoin+Chart",
        "https://via.placeholder.com/300x600/0f3460/eee?text=Search"
      ],
      github: "https://github.com/yourusername/coin-tracker"
    },
    {
      id: 2,
      title: "Weather Now",
      description: "Beautiful weather application with hourly forecasts, radar maps, and severe weather alerts.",
      technologies: ["Flutter", "Dart", "OpenWeather API", "Provider", "Geolocator"],
      images: [
        "https://via.placeholder.com/300x600/2d3561/eee?text=Current+Weather",
        "https://via.placeholder.com/300x600/0e7490/eee?text=Forecast",
        "https://via.placeholder.com/300x600/064e3b/eee?text=Radar+Map"
      ],
      github: "https://github.com/yourusername/weather-now"
    },
    {
      id: 3,
      title: "Task Master",
      description: "Intuitive task management app with smart reminders, categories, and productivity analytics.",
      technologies: ["React Native", "Expo", "Firebase", "React Navigation", "AsyncStorage"],
      images: [
        "https://via.placeholder.com/300x600/7c2d12/eee?text=Task+List",
        "https://via.placeholder.com/300x600/b91c1c/eee?text=Analytics",
        "https://via.placeholder.com/300x600/991b1b/eee?text=Categories"
      ],
      github: "https://github.com/yourusername/task-master"
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Michael Odusami
          </h1>
          <div className="flex items-center gap-4">
            <a href="#projects" className={`hover:opacity-70 transition-opacity ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Projects
            </a>
            <a href="#contact" className={`hover:opacity-70 transition-opacity ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Contact
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Mobile Developer
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Crafting beautiful, intuitive mobile experiences with modern technologies.
            Specialized in React Native and Flutter development.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              className={`p-3 rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className={`p-3 rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className={`p-3 rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-16">
        <h3 className={`text-3xl font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h3>
        
        {/* Project Tabs */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedProject === index
                  ? isDarkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900 text-white'
                  : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div className="order-2 lg:order-1">
            <h4 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {currentProject.title}
            </h4>
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {currentProject.description}
            </p>
            
            <div className="mb-8">
              <h5 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                TECHNOLOGIES
              </h5>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
              {currentProject.link && (
                <a
                  href={currentProject.link}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="order-1 lg:order-2 relative h-[600px] flex items-center justify-center">
            {currentProject.images.map((image, index) => (
              <div
                key={index}
                className="absolute transition-all duration-500"
                style={{
                  transform: `translateX(${index * 60}px) rotate(${index * -5}deg) scale(${1 - index * 0.05})`,
                  zIndex: currentProject.images.length - index,
                }}
              >
                <div className={`relative rounded-[40px] overflow-hidden shadow-2xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-900'
                }`}>
                  {/* Phone Frame */}
                  <div className="p-2">
                    <div className="relative w-[280px] h-[580px] rounded-[32px] overflow-hidden">
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-black bg-opacity-20 flex items-center justify-between px-6 z-10">
                        <span className="text-white text-xs">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-3 bg-white rounded-sm"></div>
                          <div className="w-4 h-3 bg-white rounded-sm"></div>
                          <div className="w-4 h-3 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      {/* Screen */}
                      <img
                        src={image}
                        alt={`${currentProject.title} screen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-16 mb-16">
        <div className={`max-w-3xl mx-auto text-center p-12 rounded-2xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's Build Something Amazing
          </h3>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always interested in new projects and opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:michael.odusami@example.com"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-6">
          <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Michael Odusami. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MobilePortfolio;