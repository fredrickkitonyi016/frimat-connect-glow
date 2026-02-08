import { ArrowLeft, Server, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import cloudServiceImage from "@/assets/services/cloud-service.jpg";
import ServiceDetailModal from "@/components/ServiceDetailModal";

interface ServiceItem {
  name: string;
  price: string;
  description: string;
  details: string;
  features?: string[];
}

export default function CloudMigration() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    { 
      name: "Cloud Readiness Assessment", 
      price: "KSh 20,000", 
      description: "Evaluate your migration readiness", 
      details: "Infrastructure audit, application compatibility check, cost analysis, migration roadmap, and executive presentation.",
      features: ["Infrastructure Audit", "Compatibility Check", "Cost Analysis", "Migration Roadmap"]
    },
    { 
      name: "Small Business Migration", 
      price: "KSh 45,000", 
      description: "Up to 5 servers/applications", 
      details: "Full migration with data transfer, DNS updates, testing, 2-week post-migration support, and rollback plan.",
      features: ["Up to 5 Servers", "Data Transfer", "DNS Updates", "2-Week Support"]
    },
    { 
      name: "Medium Business Migration", 
      price: "KSh 120,000", 
      description: "Up to 20 servers/applications", 
      details: "Phased migration approach, minimal downtime, staff training, monitoring setup, and 30-day support.",
      features: ["Up to 20 Servers", "Minimal Downtime", "Staff Training", "30-Day Support"]
    },
    { 
      name: "Enterprise Migration", 
      price: "KSh 300,000+", 
      description: "Large scale infrastructure migration", 
      details: "Dedicated project manager, custom migration strategy, 24/7 support during migration, and 90-day post-migration care.",
      features: ["Project Manager", "Custom Strategy", "24/7 Support", "90-Day Care"]
    },
    { 
      name: "Database Migration", 
      price: "KSh 30,000", 
      description: "Migrate databases to cloud", 
      details: "Schema migration, data transfer, performance optimization, replication setup, and zero-downtime strategies.",
      features: ["Schema Migration", "Data Transfer", "Performance Optimization", "Zero Downtime"]
    },
    { 
      name: "Email Migration (Google/O365)", 
      price: "KSh 500/mailbox", 
      description: "Migrate to cloud email", 
      details: "Full mailbox migration, calendar, contacts, user training, and MX record configuration.",
      features: ["Full Mailbox", "Calendar & Contacts", "User Training", "MX Configuration"]
    },
    { 
      name: "Application Containerization", 
      price: "KSh 40,000/app", 
      description: "Dockerize legacy applications", 
      details: "Dockerfile creation, container optimization, orchestration setup, CI/CD integration, and documentation.",
      features: ["Dockerfile Creation", "Container Optimization", "CI/CD Integration", "Documentation"]
    },
    { 
      name: "Cloud Architecture Design", 
      price: "KSh 50,000", 
      description: "Design optimal cloud infrastructure", 
      details: "High-availability design, cost optimization, security best practices, scalability planning, and architecture diagrams.",
      features: ["High Availability", "Cost Optimization", "Security Best Practices", "Architecture Diagrams"]
    },
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Ansible", "CloudFormation"
  ];

  const features = [
    "Migration Planning",
    "Data Transfer",
    "Zero Downtime",
    "Post-Migration Support"
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
                  src={cloudServiceImage} 
                  alt="Cloud Migration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500">
                      <Server className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Cloud Migration
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Seamless transition of your infrastructure to the cloud
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
                Seamlessly transition your infrastructure to the cloud with our expert migration services. We ensure minimal downtime, maximum security, and optimal performance throughout the migration process.
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
                Cloud Platforms We Support
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
