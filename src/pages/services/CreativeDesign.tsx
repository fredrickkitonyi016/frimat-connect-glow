import { ArrowLeft, Palette, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import graphicDesignImage from "@/assets/ads/graphic-design-ad.jpg";
import ServiceDetailModal from "@/components/ServiceDetailModal";

interface ServiceItem {
  name: string;
  price: string;
  description: string;
  details: string;
  features?: string[];
}

export default function CreativeDesign() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    { 
      name: "Logo Design", 
      price: "KSh 8,000", 
      description: "Professional logo design with multiple concepts", 
      details: "3 initial concepts, unlimited revisions, final files in PNG, SVG, PDF formats. Includes brand color palette and typography recommendations.",
      features: ["3 Initial Concepts", "Unlimited Revisions", "PNG, SVG, PDF", "Color Palette"]
    },
    { 
      name: "Brand Identity Package", 
      price: "KSh 25,000", 
      description: "Complete branding including logo, colors, and guidelines", 
      details: "Logo design, business card, letterhead, envelope, brand guidelines document, social media kit, and brand style guide.",
      features: ["Complete Logo", "Business Stationery", "Brand Guidelines", "Social Media Kit"]
    },
    { 
      name: "Business Card Design", 
      price: "KSh 3,000", 
      description: "Professional business card design", 
      details: "Double-sided design, 2 concepts, print-ready files (PDF, AI), includes QR code integration if needed.",
      features: ["Double-Sided", "2 Concepts", "Print-Ready Files", "QR Code Option"]
    },
    { 
      name: "Flyer & Poster Design", 
      price: "KSh 5,000", 
      description: "Eye-catching promotional materials", 
      details: "Single or double-sided design, print-ready and digital versions, social media optimized sizes included.",
      features: ["Print & Digital", "Social Media Sizes", "Eye-Catching Design", "Quick Turnaround"]
    },
    { 
      name: "Social Media Graphics", 
      price: "KSh 10,000", 
      description: "Complete social media visual kit", 
      details: "Profile pictures, cover photos, post templates (10 designs), story templates (5 designs) for Facebook, Instagram, Twitter, and LinkedIn.",
      features: ["Profile Pictures", "Cover Photos", "10 Post Templates", "5 Story Templates"]
    },
    { 
      name: "Brochure Design", 
      price: "KSh 12,000", 
      description: "Professional brochure and catalog design", 
      details: "Bi-fold or tri-fold design, up to 6 pages, print-ready files, includes copywriting assistance and stock images.",
      features: ["Bi/Tri-Fold", "Up to 6 Pages", "Copywriting Help", "Stock Images"]
    },
    { 
      name: "Presentation Design", 
      price: "KSh 8,000", 
      description: "Professional PowerPoint/Keynote design", 
      details: "Up to 20 slides, custom template design, infographics, charts, and data visualization. Editable source files included.",
      features: ["Up to 20 Slides", "Infographics", "Charts & Data Viz", "Editable Files"]
    },
    { 
      name: "Packaging Design", 
      price: "KSh 15,000", 
      description: "Product packaging and label design", 
      details: "3D mockups, print-ready files, die-cut templates, includes material and printing recommendations.",
      features: ["3D Mockups", "Die-Cut Templates", "Print-Ready", "Material Recommendations"]
    },
    { 
      name: "Banner & Signage Design", 
      price: "KSh 6,000", 
      description: "Indoor and outdoor banner designs", 
      details: "Roll-up banners, billboards, shop signage, vehicle wraps. High-resolution print-ready files in multiple sizes.",
      features: ["Roll-Up Banners", "Billboards", "Shop Signage", "Vehicle Wraps"]
    },
    { 
      name: "Infographic Design", 
      price: "KSh 7,000", 
      description: "Visual data and information design", 
      details: "Custom illustrations, data visualization, icon design. Perfect for reports, presentations, and marketing materials.",
      features: ["Custom Illustrations", "Data Visualization", "Icon Design", "Marketing Ready"]
    },
  ];

  const tools = [
    "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva Pro", "CorelDRAW", "Affinity Designer", "Procreate"
  ];

  const features = [
    "Logo & Brand Identity",
    "Print & Marketing Materials",
    "Social Media Graphics",
    "Packaging & Label Design"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>

          <div className="max-w-5xl mx-auto">
            {/* Hero Card */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border mb-12">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={graphicDesignImage} 
                  alt="Creative & Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-card shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500">
                      <Palette className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Creative & Design
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Professional graphic design services that bring your brand vision to life
                </p>

                <div className="space-y-3 pt-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-base">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our creative team delivers stunning visual designs that capture your brand essence and communicate your message effectively. From logo creation to complete brand identity systems, we craft designs that make lasting impressions and help your business stand out in the market.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="text-accent" size={28} />
              Our Services & Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx} 
                  className="glass-card p-5 hover:border-primary/50 transition-all cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                    <span className="text-primary font-bold whitespace-nowrap ml-2">{service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                  <button className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 font-medium transition-colors">
                    Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="glass-card p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="text-primary" size={24} />
                Tools We Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <ServiceDetailModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
