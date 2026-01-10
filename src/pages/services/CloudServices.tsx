import { ArrowLeft, Cloud, Server, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CloudServices() {
  const navigate = useNavigate();

  const services = [
    { name: "Cloud Setup & Configuration", price: "KSh 25,000", description: "Initial cloud infrastructure setup", details: "VPC creation, security groups, IAM policies, monitoring setup, and documentation. Includes 1-hour training on cloud console management." },
    { name: "Cloud Migration (Small)", price: "KSh 40,000", description: "Migrate small business to cloud", details: "Up to 3 servers migration, data transfer, DNS configuration, testing, and 7-day post-migration support with rollback plan." },
    { name: "Cloud Migration (Enterprise)", price: "KSh 150,000", description: "Full enterprise cloud migration", details: "Comprehensive assessment, phased migration plan, zero-downtime strategy, staff training, and 30-day dedicated support." },
    { name: "Cloud Hosting (Monthly)", price: "KSh 8,000", description: "Managed cloud hosting with support", details: "Server management, 99.9% uptime SLA, daily backups, SSL certificates, performance monitoring, and 24/7 emergency support." },
    { name: "DevOps Setup", price: "KSh 50,000", description: "CI/CD pipelines & automation setup", details: "GitHub/GitLab integration, automated testing, Docker containerization, Kubernetes orchestration, and deployment automation." },
    { name: "Cloud Security Audit", price: "KSh 30,000", description: "Security assessment & recommendations", details: "Vulnerability scanning, compliance check, access review, encryption audit, and detailed report with remediation roadmap." },
    { name: "Backup & Disaster Recovery", price: "KSh 20,000", description: "Automated backup solutions", details: "Automated daily backups, cross-region replication, recovery testing, RTO/RPO planning, and disaster recovery documentation." },
    { name: "Cloud Optimization", price: "KSh 25,000", description: "Cost optimization & performance tuning", details: "Resource right-sizing, reserved instance recommendations, auto-scaling setup, and monthly cost analysis with up to 40% savings." },
  ];

  const [expandedService, setExpandedService] = useState<number | null>(null);

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"
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
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10">
                <Cloud className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Cloud Services
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Scalable cloud infrastructure and migration
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement best practices for security, performance, and cost efficiency.
              </p>

              {/* Services with Pricing */}
              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
                <CheckCircle className="text-accent" size={28} />
                Our Services & Pricing
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className="glass-card p-5 hover:border-primary/50 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{service.name}</h3>
                      <span className="text-primary font-bold whitespace-nowrap ml-2">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <button
                      onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                      className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-3 font-medium transition-colors"
                    >
                      {expandedService === idx ? (
                        <>Less details <ChevronUp size={16} /></>
                      ) : (
                        <>Learn more <ChevronDown size={16} /></>
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedService === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-3 border-t border-border">
                            <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                            <Link
                              to="/#contact"
                              className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 mt-2 font-medium"
                            >
                              Get a quote for this service →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="glass-card p-6 mt-8">
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

              <div className="mt-12 text-center">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}