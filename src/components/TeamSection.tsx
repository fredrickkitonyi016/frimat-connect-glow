import { Github, Linkedin, Mail, Award } from "lucide-react";

const team = [
  {
    name: "Francis Maina",
    role: "CEO & Founder",
    specialization: "Full-Stack Development",
    bio: "10+ years of experience in software development and business leadership. Passionate about innovative tech solutions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    skills: ["Leadership", "Strategy", "Full-Stack Dev"],
    social: {
      linkedin: "https://linkedin.com/in/francis-maina",
      github: "https://github.com/francis-maina",
      email: "francis@frimat.tech"
    }
  },
  {
    name: "Rita Kimani",
    role: "CTO",
    specialization: "Cybersecurity & Cloud Architecture",
    bio: "Expert in cybersecurity with extensive experience in cloud infrastructure and system security implementations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    skills: ["Cybersecurity", "Cloud Architecture", "DevOps"],
    social: {
      linkedin: "https://linkedin.com/in/rita-kimani",
      github: "https://github.com/rita-kimani", 
      email: "rita@frimat.tech"
    }
  },
  {
    name: "Samuel Ochieng",
    role: "Lead Mobile Developer",
    specialization: "iOS & Android Development",
    bio: "Mobile development specialist with a track record of creating award-winning apps for various industries.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    skills: ["iOS Development", "Android", "React Native"],
    social: {
      linkedin: "https://linkedin.com/in/samuel-ochieng",
      github: "https://github.com/samuel-ochieng",
      email: "samuel@frimat.tech"
    }
  },
  {
    name: "Grace Wanjiku",
    role: "UI/UX Designer",
    specialization: "Product Design & User Experience",
    bio: "Creative designer focused on creating intuitive and beautiful user experiences that drive business results.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    skills: ["UI/UX Design", "Prototyping", "User Research"],
    social: {
      linkedin: "https://linkedin.com/in/grace-wanjiku",
      email: "grace@frimat.tech"
    }
  }
];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="glass-card hover-scale group text-center">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-accent p-2 rounded-full">
                  <Award size={16} className="text-background" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-accent mb-4">{member.specialization}</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}