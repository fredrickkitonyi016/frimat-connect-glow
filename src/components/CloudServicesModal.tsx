import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cloud, Server, Database, HardDrive, Shield, Zap, Clock, Wrench } from "lucide-react";

interface CloudServicesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CloudServicesModal = ({ open, onOpenChange }: CloudServicesModalProps) => {
  const services = [
    {
      icon: Cloud,
      name: "Cloud Migration Service",
      price: "KSH 30,000",
      description: "Seamlessly migrate your existing infrastructure to the cloud.",
      whatIsDone: [
        "Current infrastructure assessment",
        "Migration strategy planning",
        "Data transfer and migration",
        "Application configuration",
        "Testing and validation",
        "Post-migration support"
      ],
      toolsUsed: [
        "AWS/Google Cloud/Azure",
        "Migration tools (CloudEndure)",
        "Data transfer services",
        "Monitoring dashboards",
        "Backup solutions"
      ],
      timeToComplete: "10-14 business days",
      deliverables: "Migrated infrastructure, documentation, access credentials, 30-day support"
    },
    {
      icon: Server,
      name: "Cloud Server Setup",
      price: "KSH 15,000",
      description: "Professional cloud server configuration and deployment.",
      whatIsDone: [
        "Server instance creation",
        "Operating system installation",
        "Security configuration",
        "SSL certificate installation",
        "Domain configuration",
        "Firewall setup",
        "Basic monitoring setup"
      ],
      toolsUsed: [
        "AWS EC2/Google Compute/DigitalOcean",
        "Ubuntu/CentOS Linux",
        "Nginx/Apache web server",
        "Let's Encrypt SSL",
        "CloudFlare CDN"
      ],
      timeToComplete: "2-3 business days",
      deliverables: "Configured server, root access, SSL certificate, monitoring dashboard"
    },
    {
      icon: Database,
      name: "Database Cloud Hosting",
      price: "KSH 12,000",
      description: "Set up and manage your database in the cloud with automatic backups.",
      whatIsDone: [
        "Database instance setup",
        "Database configuration",
        "Automated backup scheduling",
        "Performance optimization",
        "Security hardening",
        "Monitoring and alerts"
      ],
      toolsUsed: [
        "AWS RDS/Google Cloud SQL",
        "PostgreSQL/MySQL/MongoDB",
        "Automated backup tools",
        "Database monitoring tools",
        "Query optimization tools"
      ],
      timeToComplete: "3-5 business days",
      deliverables: "Cloud database, backup system, connection credentials, performance report"
    },
    {
      icon: HardDrive,
      name: "Cloud Storage Solution",
      price: "KSH 8,000",
      description: "Secure cloud storage setup for files, backups, and media.",
      whatIsDone: [
        "Storage bucket creation",
        "Access control setup",
        "CDN integration",
        "Backup automation",
        "File versioning",
        "Usage monitoring"
      ],
      toolsUsed: [
        "AWS S3/Google Cloud Storage",
        "CloudFlare R2",
        "Backup automation scripts",
        "CDN configuration",
        "Access management tools"
      ],
      timeToComplete: "1-2 business days",
      deliverables: "Cloud storage, access keys, CDN setup, usage dashboard"
    },
    {
      icon: Shield,
      name: "Cloud Security Setup",
      price: "KSH 25,000",
      description: "Comprehensive security configuration for your cloud infrastructure.",
      whatIsDone: [
        "Security audit",
        "Firewall configuration",
        "DDoS protection setup",
        "SSL/TLS implementation",
        "Access control policies",
        "Intrusion detection",
        "Security monitoring",
        "Compliance setup"
      ],
      toolsUsed: [
        "AWS WAF/CloudFlare",
        "Security groups",
        "IAM policies",
        "SSL certificates",
        "SIEM tools",
        "Vulnerability scanners"
      ],
      timeToComplete: "5-7 business days",
      deliverables: "Secured infrastructure, security report, monitoring dashboard, compliance docs"
    },
    {
      icon: Zap,
      name: "Cloud Infrastructure Setup",
      price: "KSH 50,000",
      description: "Complete cloud infrastructure design and implementation.",
      whatIsDone: [
        "Infrastructure architecture design",
        "Multi-server setup",
        "Load balancer configuration",
        "Auto-scaling setup",
        "Database cluster",
        "CDN integration",
        "Monitoring and logging",
        "Disaster recovery plan"
      ],
      toolsUsed: [
        "AWS/Google Cloud/Azure",
        "Terraform for IaC",
        "Kubernetes/Docker",
        "Load balancers",
        "Monitoring tools (Prometheus)",
        "Logging (ELK Stack)"
      ],
      timeToComplete: "14-21 business days",
      deliverables: "Complete infrastructure, architecture docs, monitoring dashboards, 60-day support"
    },
    {
      icon: Server,
      name: "Cloud Maintenance (Monthly)",
      price: "KSH 8,000/month",
      description: "Ongoing management and optimization of your cloud infrastructure.",
      whatIsDone: [
        "Regular security updates",
        "Performance monitoring",
        "Cost optimization",
        "Backup verification",
        "Resource scaling",
        "24/7 uptime monitoring",
        "Monthly reports"
      ],
      toolsUsed: [
        "Cloud management consoles",
        "Monitoring tools",
        "Cost analysis tools",
        "Automation scripts",
        "Alerting systems"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "Monthly reports, 24/7 monitoring, priority support, optimization recommendations"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    onOpenChange(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cloud Services
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="glass-card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        What is Done:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {service.whatIsDone.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Cloud className="w-4 h-4" />
                        Tools & Technologies:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {service.toolsUsed.map((tool, i) => (
                          <li key={i}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-semibold">Time to Complete:</span>
                        <span className="text-muted-foreground">{service.timeToComplete}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Deliverables:</strong> {service.deliverables}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 mt-6 sticky bottom-0 bg-background/95 backdrop-blur-sm py-4">
            <Button onClick={() => scrollToSection('pricing')} className="flex-1">
              Get Quote
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" className="flex-1">
              Contact Us
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CloudServicesModal;
