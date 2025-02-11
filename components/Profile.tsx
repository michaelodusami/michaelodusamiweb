import { profileData, skills, experience } from "@/lib/profileData";
import { Github, Linkedin, Mail, Signpost } from "lucide-react";
import Image from "next/image";



export default function ProfilePage() {
	return (
		<div className="container mx-auto p-8 space-y-12">
			{/* Find Me Section */}
			<section className="flex justify-center">
				<div className="flex space-x-6">
					<a
						href={profileData.socialLinks.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
					</a>
					<a
						href={profileData.socialLinks.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="w-6 h-6 hover:text-primary transition-colors" />
					</a>

					<a href={profileData.socialLinks.email}>
						<Mail className="w-6 h-6 hover:text-primary transition-colors" />
					</a>

					<a href={profileData.socialLinks.devpost}>
						<Signpost className="w-6 h-6 hover:text-primary transition-colors" />
					</a>
				</div>
			</section>
			{/* Profile Header */}
			<header className="flex items-center space-x-8">
			<div style={{ 
    width: '400px', 
    height: '400px', 
    position: 'relative', 
    overflow: 'hidden', 
    borderRadius: '50%' 
  }}>
  <Image
    src={profileData.profilePicture}
    alt="Profile Picture"
    width={300}
    height={300}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
</div>




		<div className="flex-1">
			<h1 className="text-6xl font-bold mb-3">{profileData.name}</h1>
			<p className="text-muted-foreground text-lg">{profileData.bio}</p>
		</div>
	</header>


{/* Skills Section */}
<section>
  <h2 className="text-xl font-bold mb-6">Skills</h2>
  <div className="carousel-container">
    <div className="carousel-content">
      {skills.map((skill) => (
        <div key={skill.name} className="carousel-item">
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            className="h-12 w-12"
          />
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
      {/* Duplicate items to create a seamless loop */}
      {skills.map((skill) => (
        <div key={`${skill.name}-duplicate`} className="carousel-item">
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            className="h-12 w-12"
          />
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

<section>
  <h2 className="text-xl font-bold mb-6">Experience With</h2>
  <div className="carousel-container">
    <div className="carousel-content">
      {experience.map((skill) => (
        <div key={skill.name} className="carousel-item">
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            className="h-12 w-12"
          />
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
      {/* Duplicate items to create a seamless loop */}
      {experience.map((skill) => (
        <div key={`${skill.name}-duplicate`} className="carousel-item">
          <img
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
            alt={skill.name}
            className="h-12 w-12"
          />
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>
		
		</div>
	);
}
