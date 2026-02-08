import { ArrowLeft, Cloud, Server, CheckCircle, ArrowRight } from "lucide-react";
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

export default function CloudServices() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    { 
      name: "Cloud Setup & Configuration", 
      price: "KSh 25,000", 
      description: "Initial cloud infrastructure setup", 
      details: "VPC creation, security groups, IAM policies, monitoring setup, and documentation. Includes 1-hour training on cloud console management.",
      features: ["VPC Creation", "Security Groups", "IAM Policies", "1-Hour Training"]
    },
    { 
      name: "Cloud Migration (Small)", 
      price: "KSh 40,000", 
      description: "Migrate small business to cloud", 
      details: "Up to 3 servers migration, data transfer, DNS configuration, testing, and 7-day post-migration support with rollback plan.",
      features: ["Up to 3 Servers", "Data Transfer", "DNS Configuration", "7-Day Support"]
    },
    { 
      name: "Cloud Migration (Enterprise)", 
      price: "KSh 150,000", 
      description: "Full enterprise cloud migration", 
      details: "Comprehensive assessment, phased migration plan, zero-downtime strategy, staff training, and 30-day dedicated support.",
      features: ["Phased Migration", "Zero Downtime", "Staff Training", "30-Day Support"]
    },
    { 
      name: "Cloud Hosting (Monthly)", 
      price: "KSh 8,000", 
      description: "Managed cloud hosting with support", 
      details: "Server management, 99.9% uptime SLA, daily backups, SSL certificates, performance monitoring, and 24/7 emergency support.",
      features: ["99.9% Uptime SLA", "Daily Backups", "SSL Certificates", "24/7 Support"]
    },
    { 
      name: "DevOps Setup", 
      price: "KSh 50,000", 
      description: "CI/CD pipelines & automation setup", 
      details: "GitHub/GitLab integration, automated testing, Docker containerization, Kubernetes orchestration, and deployment automation.",
      features: ["GitHub/GitLab Integration", "Docker Containers", "Kubernetes", "Auto Deployment"]
    },
    { 
      name: "Cloud Security Audit", 
      price: "KSh 30,000", 
      description: "Security assessment & recommendations", 
      details: "Vulnerability scanning, compliance check, access review, encryption audit, and detailed report with remediation roadmap.",
      features: ["Vulnerability Scan", "Compliance Check", "Encryption Audit", "Remediation Report"]
    },
    { 
      name: "Backup & Disaster Recovery", 
      price: "KSh 20,000", 
      description: "Automated backup solutions", 
      details: "Automated daily backups, cross-region replication, recovery testing, RTO/RPO planning, and disaster recovery documentation.",
      features: ["Daily Backups", "Cross-Region Replication", "Recovery Testing", "RTO/RPO Planning"]
    },
    { 
      name: "Cloud Optimization", 
      price: "KSh 25,000", 
      description: "Cost optimization & performance tuning", 
      details: "Resource right-sizing, reserved instance recommendations, auto-scaling setup, and monthly cost analysis with up to 40% savings.",
      features: ["Resource Right-Sizing", "Reserved Instances", "Auto-Scaling", "Up to 40% Savings"]
    },
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"
  ];

  const features = [
    "AWS & Azure",
    "Cloud Migration",
    "DevOps",
    "Microservices"
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
                  alt="Cloud Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Cloud Services
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Scalable cloud infrastructure and migration services
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
                Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement best practices for security, performance, and cost efficiency.
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
                <Server className="text-primary" size={24} />
                Platforms We Support
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
