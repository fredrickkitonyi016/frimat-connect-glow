import { ArrowLeft, Monitor, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import itSupportImage from "@/assets/services/it-support-service.jpg";
import ServiceDetailModal from "@/components/ServiceDetailModal";

interface ServiceItem {
  name: string;
  price: string;
  description: string;
  details: string;
  features?: string[];
}

export default function ITSupport() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    { 
      name: "Remote IT Support (per hour)", 
      price: "KSh 2,000", 
      description: "Instant remote assistance via TeamViewer/AnyDesk", 
      details: "Quick troubleshooting, software issues, email setup, and configuration. Average response time under 15 minutes.",
      features: ["TeamViewer/AnyDesk Access", "Quick Troubleshooting", "Email Setup", "Software Configuration"]
    },
    { 
      name: "On-site Support (per visit)", 
      price: "KSh 3,500", 
      description: "Technician visit within Nairobi", 
      details: "Hardware diagnostics, network issues, printer setup. Includes first hour; additional hours at KSh 1,500/hr.",
      features: ["Hardware Diagnostics", "Network Issues", "Printer Setup", "On-site Service"]
    },
    { 
      name: "Monthly IT Retainer (Basic)", 
      price: "KSh 15,000/month", 
      description: "10 hours support, email & phone", 
      details: "Priority queue, monthly health check, basic monitoring, and discounted rates on hardware repairs.",
      features: ["10 Hours Support", "Priority Queue", "Monthly Health Check", "Discounted Repairs"]
    },
    { 
      name: "Monthly IT Retainer (Pro)", 
      price: "KSh 35,000/month", 
      description: "Unlimited support, priority response", 
      details: "24/7 emergency line, proactive monitoring, quarterly audits, dedicated account manager, and on-site visits included.",
      features: ["Unlimited Support", "24/7 Emergency Line", "Quarterly Audits", "Dedicated Account Manager"]
    },
    { 
      name: "Computer Repair", 
      price: "KSh 1,500+", 
      description: "Diagnosis & repair (parts extra)", 
      details: "Free diagnosis, motherboard repair, power issues, overheating fixes. 30-day warranty on repairs.",
      features: ["Free Diagnosis", "Motherboard Repair", "Power Issues", "30-Day Warranty"]
    },
    { 
      name: "Laptop Screen Replacement", 
      price: "KSh 8,000+", 
      description: "Screen replacement service", 
      details: "LCD/LED replacement, all brands supported, genuine parts available. Same-day service for common models.",
      features: ["LCD/LED Replacement", "All Brands Supported", "Genuine Parts", "Same-Day Service"]
    },
    { 
      name: "Virus Removal & Cleanup", 
      price: "KSh 2,000", 
      description: "Complete malware removal", 
      details: "Full system scan, malware removal, browser cleanup, and antivirus installation with 1-year license.",
      features: ["Full System Scan", "Malware Removal", "Browser Cleanup", "1-Year Antivirus"]
    },
    { 
      name: "Data Recovery", 
      price: "KSh 5,000+", 
      description: "Recover lost or deleted files", 
      details: "Deleted files, formatted drives, corrupted storage. Price varies by complexity. No data, no charge policy.",
      features: ["Deleted File Recovery", "Formatted Drive Recovery", "Corrupted Storage", "No Data No Charge"]
    },
  ];

  const technologies = [
    "Remote Desktop", "Network Admin", "Hardware Repair", "Windows", "Linux", "macOS", "Active Directory", "Backup Solutions"
  ];

  const features = [
    "Help Desk",
    "Network Management",
    "System Monitoring",
    "Maintenance"
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
            {/* Hero Card - Matching Services Section Style */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border mb-12">
              {/* Header Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={itSupportImage} 
                  alt="IT Support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  IT Support
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  24/7 technical support and IT infrastructure management
                </p>

                {/* Features with bullet points */}
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

            {/* Detailed Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive 24/7 technical assistance and maintenance to keep your business running smoothly. Our expert team ensures your IT infrastructure operates at peak performance with proactive monitoring and rapid response.
              </p>
            </div>

            {/* Services with Pricing */}
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
                  <button
                    className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div className="glass-card p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="text-primary" size={24} />
                Technologies We Support
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

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}