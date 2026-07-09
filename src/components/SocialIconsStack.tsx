import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialData = [
  { 
    icon: Facebook, 
    color: "from-orange-600 to-amber-500", 
    shadow: "shadow-amber-500/50",
    url: "https://facebook.com/frimattechnologies",
    label: "Facebook"
  },
  { 
    icon: Twitter, 
    color: "from-amber-500 to-orange-400", 
    shadow: "shadow-orange-400/50",
    url: "https://twitter.com/frimattechnologies",
    label: "Twitter"
  },
  { 
    icon: Linkedin, 
    color: "from-orange-700 to-orange-600", 
    shadow: "shadow-orange-600/50",
    url: "https://linkedin.com/company/frimattechnologies",
    label: "LinkedIn"
  },
  { 
    icon: Instagram, 
    color: "from-pink-500 via-amber-500 to-orange-400", 
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
