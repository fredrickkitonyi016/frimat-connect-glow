import { useState, useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import tech images
import webDevImg from "@/assets/services/web-dev-service.jpg";
import mobileAppImg from "@/assets/services/mobile-app-service.jpg";
import cloudImg from "@/assets/services/cloud-service.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity-service.jpg";
import itSupportImg from "@/assets/services/it-support-service.jpg";
import ecommerceImg from "@/assets/services/ecommerce-service.jpg";

const techItems = [
  {
    image: webDevImg,
    title: "Web Development",
    description: "Modern websites & web applications",
    category: "Development",
  },
  {
    image: mobileAppImg,
    title: "Mobile Solutions",
    description: "iOS & Android app development",
    category: "Mobile",
  },
  {
    image: cloudImg,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions",
    category: "Infrastructure",
  },
  {
    image: cybersecurityImg,
    title: "Cybersecurity",
    description: "Enterprise security solutions",
    category: "Security",
  },
  {
    image: itSupportImg,
    title: "IT Support",
    description: "24/7 technical assistance",
    category: "Support",
  },
  {
    image: ecommerceImg,
    title: "E-commerce",
    description: "Online store solutions",
    category: "Commerce",
  },
];

export default function TechGallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Add staggered delay based on index
                setTimeout(() => {
                  setVisibleCards((prev) => new Set([...prev, index]));
                }, index * 100); // 100ms stagger between each card
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="tech-gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Technology </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of technology services designed to drive your business forward
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: visibleCards.has(index)
                  ? hoveredIndex === index
                    ? 'translateY(-8px) scale(1.02)'
                    : 'translateY(0)'
                  : 'translateY(48px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-0 blur-xl transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-30' : ''
              }`} />
              
              {/* Card Container */}
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 group-hover:border-primary/30">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-95' : 'opacity-85'
                }`} />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Category Badge */}
                  <span className={`inline-block text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-primary/20 scale-105' : ''
                  }`}>
                    {item.category}
                  </span>
                  
                  {/* Title with underline animation */}
                  <h3 className="text-xl font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-sm text-muted-foreground mb-4 transition-all duration-300 ${
                    hoveredIndex === index ? 'text-foreground/80' : ''
                  }`}>
                    {item.description}
                  </p>
                  
                  {/* Hover Action with animated arrow */}
                  <div className={`flex items-center gap-2 text-primary transition-all duration-400 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <span className="text-sm font-semibold">Learn more</span>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${
                      hoveredIndex === index ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </div>
                
                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/5"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Services
            <ExternalLink className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
