import { Github, Linkedin, Mail, Award, ImageOff } from "lucide-react";
import { useState } from "react";

const team = [
  {
    name: "Fredrick Kitonyi Kiio",
    role: "CEO & Founder",
    specialization: "Full-Stack Development & Business Strategy",
    bio: "Visionary leader with extensive experience in software development and technology entrepreneurship. Passionate about driving digital transformation for Kenyan businesses.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    skills: ["Leadership", "Full-Stack Dev", "Business Strategy"],
    social: {
      linkedin: "https://linkedin.com/in/fredrick-kitonyi",
      github: "https://github.com/fredrick-kitonyi",
      email: "fredrick@frimat.tech"
    }
  },
  {
    name: "Sylvester Karanja",
    role: "CTO & Co-Founder",
    specialization: "Cloud Architecture & Cybersecurity",
    bio: "Expert in cloud infrastructure and cybersecurity with a proven track record of implementing secure, scalable solutions for enterprises across East Africa.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    skills: ["Cloud Architecture", "Cybersecurity", "DevOps"],
    social: {
      linkedin: "https://linkedin.com/in/sylvester-karanja",
      github: "https://github.com/sylvester-karanja", 
      email: "sylvester@frimat.tech"
    }
  }
];

interface TeamMemberProps {
  member: typeof team[0];
}

function TeamMemberCard({ member }: TeamMemberProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="glass-card hover-scale group text-center max-w-md mx-auto">
      <div className="relative mb-6">
        {imgError ? (
          <div className="w-32 h-32 rounded-full mx-auto bg-muted border-4 border-primary/20 group-hover:border-primary/40 transition-colors flex items-center justify-center">
            <ImageOff size={40} className="text-muted-foreground" />
          </div>
        ) : (
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute -bottom-2 right-1/2 translate-x-[56px] bg-gradient-to-r from-primary to-accent p-2 rounded-full">
          <Award size={18} className="text-primary-foreground" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
      <p className="text-primary font-semibold text-lg mb-2">{member.role}</p>
      <p className="text-sm text-accent mb-4">{member.specialization}</p>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        {member.bio}
      </p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          )}
          <a
            href={`mailto:${member.social.email}`}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet Our Expert Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind FRIMAT's success. Our diverse team brings together years of experience and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
