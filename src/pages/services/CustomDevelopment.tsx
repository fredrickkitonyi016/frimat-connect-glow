import { ArrowLeft, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import webDevImage from "@/assets/services/web-dev-service.jpg";
import ServiceDetailModal from "@/components/ServiceDetailModal";

interface ServiceItem {
  name: string;
  price: string;
  description: string;
  details: string;
  features?: string[];
}

export default function CustomDevelopment() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    { 
      name: "Custom Web App (Basic)", 
      price: "KSh 80,000", 
      description: "Simple web application with database", 
      details: "User authentication, CRUD operations, responsive design, admin panel, and deployment. 30-day post-launch support.",
      features: ["User Authentication", "CRUD Operations", "Admin Panel", "30-Day Support"]
    },
    { 
      name: "Custom Web App (Advanced)", 
      price: "KSh 200,000", 
      description: "Complex app with multiple modules", 
      details: "Role-based access, real-time features, third-party integrations, advanced reporting, and 60-day support.",
      features: ["Role-Based Access", "Real-Time Features", "3rd Party Integrations", "60-Day Support"]
    },
    { 
      name: "Enterprise Software", 
      price: "KSh 500,000+", 
      description: "Large-scale business systems", 
      details: "Custom ERP/CRM, multi-tenant architecture, enterprise integrations, training, documentation, and SLA support.",
      features: ["Custom ERP/CRM", "Multi-Tenant", "Enterprise Integrations", "SLA Support"]
    },
    { 
      name: "API Development", 
      price: "KSh 40,000", 
      description: "RESTful or GraphQL API", 
      details: "Secure authentication, rate limiting, documentation (Swagger/OpenAPI), versioning, and testing suite.",
      features: ["Secure Auth", "Rate Limiting", "Swagger Docs", "Testing Suite"]
    },
    { 
      name: "Database Design", 
      price: "KSh 25,000", 
      description: "Optimized database architecture", 
      details: "Schema design, indexing strategy, query optimization, migration scripts, and performance recommendations.",
      features: ["Schema Design", "Indexing Strategy", "Query Optimization", "Migration Scripts"]
    },
    { 
      name: "System Integration", 
      price: "KSh 50,000", 
      description: "Connect existing systems", 
      details: "API integrations, data synchronization, webhook handlers, error handling, and monitoring setup.",
      features: ["API Integrations", "Data Sync", "Webhooks", "Monitoring Setup"]
    },
    { 
      name: "UI/UX Design", 
      price: "KSh 35,000", 
      description: "Complete interface design", 
      details: "User research, wireframes, interactive prototypes, design system, and developer handoff documentation.",
      features: ["User Research", "Wireframes", "Prototypes", "Design System"]
    },
    { 
      name: "MVP Development", 
      price: "KSh 100,000", 
      description: "Minimum viable product for startups", 
      details: "Core features only, rapid development (4-6 weeks), investor-ready, scalable foundation, and iteration support.",
      features: ["Core Features", "4-6 Weeks", "Investor-Ready", "Scalable Foundation"]
    },
  ];

  const technologies = [
    "React & Next.js", "Node.js & Python", "React Native & Flutter", "PostgreSQL & MongoDB", "AWS & Google Cloud", "Docker & Kubernetes"
  ];

  const features = [
    "Custom Software",
    "Enterprise Solutions",
    "System Integration",
    "Legacy Modernization"
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
                  src={webDevImage} 
                  alt="Custom Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Custom Development
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bespoke software solutions tailored to your business needs
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
                Transform your ideas into powerful software solutions. Our expert developers create custom applications tailored to your unique business requirements with modern technologies and best practices.
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
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tech}
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
