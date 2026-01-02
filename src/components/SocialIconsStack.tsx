import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialData = [
  { 
    icon: Facebook, 
    color: "from-blue-600 to-blue-500", 
    shadow: "shadow-blue-500/50",
    url: "https://facebook.com/frimattechnologies",
    label: "Facebook"
  },
  { 
    icon: Twitter, 
    color: "from-sky-500 to-sky-400", 
    shadow: "shadow-sky-400/50",
    url: "https://twitter.com/frimattechnologies",
    label: "Twitter"
  },
  { 
    icon: Linkedin, 
    color: "from-blue-700 to-blue-600", 
    shadow: "shadow-blue-600/50",
    url: "https://linkedin.com/company/frimattechnologies",
    label: "LinkedIn"
  },
  { 
    icon: Instagram, 
    color: "from-pink-500 via-purple-500 to-orange-400", 
    shadow: "shadow-pink-500/50",
    url: "https://instagram.com/frimattechnologies",
    label: "Instagram"
  }
];

export default function SocialIconsStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="relative h-32 w-full flex items-center justify-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setHoveredIndex(null);
      }}
    >
      <div className="relative flex items-center justify-center" style={{ perspective: "1000px" }}>
        {socialData.map((social, index) => {
          const Icon = social.icon;
          const isHovered = hoveredIndex === index;
          const reverseIndex = socialData.length - 1 - index;
          
          // Calculate positions for stacked vs expanded states
          const stackOffset = reverseIndex * 8;
          const expandedOffset = (index - (socialData.length - 1) / 2) * 70;
          
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                absolute flex items-center justify-center
                w-14 h-14 rounded-2xl
                bg-gradient-to-br ${social.color}
                shadow-lg ${social.shadow}
                transition-all duration-500 ease-out
                cursor-pointer
              `}
              style={{
                transform: `
                  translateX(${isExpanded ? expandedOffset : 0}px)
                  translateY(${isExpanded ? 0 : -stackOffset}px)
                  translateZ(${isExpanded ? (isHovered ? 30 : 0) : reverseIndex * 15}px)
                  rotateX(${isExpanded ? (isHovered ? -15 : 0) : -10}deg)
                  rotateY(${isHovered ? 10 : 0}deg)
                  scale(${isHovered ? 1.15 : 1})
                `,
                zIndex: isHovered ? 50 : isExpanded ? index : reverseIndex,
                transformStyle: "preserve-3d",
                boxShadow: isHovered 
                  ? `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px ${social.shadow.includes('blue-500') ? 'rgba(59, 130, 246, 0.5)' : social.shadow.includes('sky') ? 'rgba(56, 189, 248, 0.5)' : social.shadow.includes('blue-600') ? 'rgba(37, 99, 235, 0.5)' : 'rgba(236, 72, 153, 0.5)'}`
                  : `0 10px 30px -5px rgba(0, 0, 0, 0.3)`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 3D Top face effect */}
              <div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent"
                style={{
                  transform: "translateZ(1px)",
                }}
              />
              
              {/* Icon */}
              <Icon 
                size={24} 
                className="text-white relative z-10 drop-shadow-lg"
                style={{
                  transform: "translateZ(2px)",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                }}
              />
              
              {/* Shine effect */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl overflow-hidden
                  transition-opacity duration-300
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
                  style={{
                    animation: isHovered ? 'shine 0.6s ease-out forwards' : 'none',
                  }}
                />
              </div>

              {/* Label tooltip */}
              <span 
                className={`
                  absolute -bottom-8 left-1/2 -translate-x-1/2
                  text-xs font-medium text-foreground
                  bg-card/90 backdrop-blur-sm px-2 py-1 rounded-md
                  border border-border shadow-lg
                  transition-all duration-300 whitespace-nowrap
                  ${isHovered && isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}
              >
                {social.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(100%) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
