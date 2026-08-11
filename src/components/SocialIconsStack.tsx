import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialData = [
  { 
    icon: Facebook, 
    color: "from-lime-600 to-cyan-500", 
    shadow: "shadow-cyan-500/50",
    url: "https://facebook.com/frimattechnologies",
    label: "Facebook"
  },
  { 
    icon: Twitter, 
    color: "from-cyan-500 to-lime-400", 
    shadow: "shadow-lime-400/50",
    url: "https://twitter.com/frimattechnologies",
    label: "Twitter"
  },
  { 
    icon: Linkedin, 
    color: "from-lime-700 to-lime-600", 
    shadow: "shadow-lime-600/50",
    url: "https://linkedin.com/company/frimattechnologies",
    label: "LinkedIn"
  },
  { 
    icon: Instagram, 
    color: "from-pink-500 via-cyan-500 to-lime-400", 
    shadow: "shadow-pink-500/50",
    url: "https://instagram.com/frimattechnologies",
    label: "Instagram"
  }
];

export default function SocialIconsStack() {
  return (
    <div className="flex items-center gap-3">
      {socialData.map((social, index) => {
        const Icon = social.icon;
        
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center
              w-10 h-10 rounded-xl
              bg-gradient-to-br ${social.color}
              shadow-md hover:shadow-lg ${social.shadow}
              transition-all duration-300
              hover:scale-110 hover:-translate-y-1
              cursor-pointer
            `}
            title={social.label}
          >
            <Icon 
              size={18} 
              className="text-white drop-shadow-sm"
            />
          </a>
        );
      })}
    </div>
  );
}
