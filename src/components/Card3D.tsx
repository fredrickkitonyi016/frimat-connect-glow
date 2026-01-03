import { useState, useRef, ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function Card3D({ children, className = "", glowColor = "primary" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation (max 15 degrees)
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;
    
    setTransform({ rotateX, rotateY, scale: 1.02 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  const glowColors: Record<string, string> = {
    primary: "rgba(255, 106, 0, 0.3)",
    accent: "rgba(255, 71, 71, 0.3)",
    blue: "rgba(59, 130, 246, 0.3)",
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-300 ease-out ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card content wrapper */}
      <div
        className="relative w-full h-full"
        style={{
          transform: `
            rotateX(${transform.rotateX}deg) 
            rotateY(${transform.rotateY}deg) 
            scale(${transform.scale})
            translateZ(0)
          `,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        {/* 3D Depth layers */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
          style={{
            transform: "translateZ(-30px)",
            opacity: isHovered ? 0.6 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        />

        {/* Glow effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${50 + transform.rotateY * 2}% ${50 - transform.rotateX * 2}%, ${glowColors[glowColor] || glowColors.primary}, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease-out",
            transform: "translateZ(-10px)",
          }}
        />

        {/* Main card with glass effect */}
        <div
          className="relative z-10 glass-card h-full overflow-hidden"
          style={{
            transform: "translateZ(0)",
            boxShadow: isHovered
              ? `0 25px 50px -12px rgba(0, 0, 0, 0.4), 
                 0 0 40px ${glowColors[glowColor] || glowColors.primary}`
              : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease-out",
          }}
        >
          {/* Top shine effect */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none"
            style={{
              transform: "translateZ(1px)",
            }}
          />

          {/* Animated shine sweep */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
            style={{
              transform: "translateZ(2px)",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                transform: isHovered ? "translateX(200%)" : "translateX(-100%)",
                transition: isHovered ? "transform 0.6s ease-out" : "none",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10" style={{ transform: "translateZ(5px)", pointerEvents: "auto" }}>
            {children}
          </div>
        </div>

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full animate-float-particle"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                  left: `${20 + i * 15}%`,
                  bottom: "0",
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* CSS for floating particles */}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) scale(0.3);
            opacity: 0;
          }
        }
        
        .animate-float-particle {
          animation: float-particle 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
