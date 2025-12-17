import { useState } from "react";
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
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-80'
              }`} />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                
                {/* Hover Action */}
                <div className={`flex items-center gap-2 text-primary transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight size={16} />
                </div>
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
