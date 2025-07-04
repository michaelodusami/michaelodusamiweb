import Project from "./interfaces";

const projects: Project[] = [
    {
      id: 1,
      title: "Move - Moving Assistant",
      description: "Aims to help users manage all aspects of their move—from tracking flights and finding nearby places to managing expenses, organizing inventory, and handling multiple moves",
      technologies: ["SwiftUI", "Swift", "UIKit", "Google Maps API", "SerpAPI", "TipKit", "SwiftData"],
      images: [
        "/projects/move1.png",
        "/projects/move2.png",
        "/projects/move3.png",
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

export default projects;