import { youtubeVideoData } from "@/lib/youtubeData";
import YoutubeCard from "./YoutubeCard";
import { profileData } from "@/lib/profileData";
import { Linkedin, Github, Mail, Signpost, YoutubeIcon } from "lucide-react";

const YoutubePage: React.FC = () => {
    return (
        <div className="container p-8 space-y-12">
      {/* Find Me Section */}
      <section className="flex">
        <div className="flex space-x-6">
          <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.email} target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.devpost} target="_blank" rel="noopener noreferrer">
            <Signpost className="w-6 h-6 hover:text-primary transition-colors" />
          </a>
          <a href={profileData.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
            <YoutubeIcon className="w-6 h-6 text-red-500 hover:text-primary transition-colors" />
          </a>
        </div>
      </section>

        {/* Profile Header */}
        <header className="flex items-center space-x-8">
            <div className="flex-1">
            <h1 className="text-6xl font-bold mb-3">{profileData.name}</h1>
            <p className="text-black text-md">{profileData.bio}</p>
            </div>
        </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {youtubeVideoData.map((video) => (
          <YoutubeCard key={video.id} video={video} />
        ))}
      </div>
      </div>
    );
};

export default YoutubePage;