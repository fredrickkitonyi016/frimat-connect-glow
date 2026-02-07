import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import hero images
import cyberpunkCity from "@/assets/hero/cyberpunk-city.jpg";
import holographicUI from "@/assets/hero/holographic-ui.jpg";
import quantumComputing from "@/assets/hero/quantum-computing.jpg";
import futuristicGadgets from "@/assets/hero/futuristic-gadgets.jpg";
import aiNeuralNetwork from "@/assets/hero/ai-neural-network.jpg";

const slides = [
  { image: cyberpunkCity, alt: "Cyberpunk cityscape with neon lights" },
  { image: holographicUI, alt: "Holographic UI interface" },
  { image: quantumComputing, alt: "Quantum computing visualization" },
  { image: futuristicGadgets, alt: "Futuristic gadgets array" },
  { image: aiNeuralNetwork, alt: "AI neural network visualization" },
];

interface HeroSliderProps {
  mousePosition: { x: number; y: number };
}

export default function HeroSlider({ mousePosition }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(slides.length).fill(false));

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Parallax effect calculation
  const parallaxX = (mousePosition.x - 0.5) * 30;
  const parallaxY = (mousePosition.y - 0.5) * 20;

  const handleImageLoad = (index: number) => {
    setIsLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Images with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: parallaxX,
            y: parallaxY,
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1.2, ease: "easeOut" },
            x: { duration: 0.1, ease: "linear" },
            y: { duration: 0.1, ease: "linear" },
          }}
          className="absolute inset-[-30px]"
        >
          {/* Blur placeholder */}
          {!isLoaded[currentSlide] && (
            <div className="absolute inset-0 bg-background skeleton" />
          )}
          
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            onLoad={() => handleImageLoad(currentSlide)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded[currentSlide] ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-[1]" />
      
      {/* Animated Mesh Overlay */}
      <motion.div 
        className="absolute inset-0 z-[2] opacity-60"
        style={{
          background: 'var(--gradient-mesh)',
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Cyber Grid */}
      <div className="absolute inset-0 z-[2] cyber-grid opacity-20" />

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[5] flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-2 md:p-3 rounded-full glass-card hover:bg-primary/20 transition-all pointer-events-auto group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 md:p-3 rounded-full glass-card hover:bg-primary/20 transition-all pointer-events-auto group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[5] flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-1 rounded-full overflow-hidden transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary/30" : "w-4 bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                key={`progress-${currentSlide}`}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-[5] glass-card px-3 py-1.5 text-xs font-mono">
        <span className="text-primary">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-muted-foreground"> / {String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
