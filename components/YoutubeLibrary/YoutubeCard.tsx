import { YoutubeVideo } from "@/lib/youtubeData";
import { VideoIcon } from "lucide-react";

function YoutubeCard({ video }: { video: YoutubeVideo }) {
    return (
      <div className="">
        
        <a href={video.link} target="_blank">
             <img
          src={video.image}
          alt={video.title}
          className="w-full h-44 object-cover rounded mt-2 mb-4"
        />
        </a>
       
        <h2 className="text-md" >{video.title}</h2>
        <a
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:no-underline flex items-center"
        >
          <VideoIcon className="inline mr-2" /> Watch on YouTube
        </a>
      </div>
    );
  }
  
  export default YoutubeCard;