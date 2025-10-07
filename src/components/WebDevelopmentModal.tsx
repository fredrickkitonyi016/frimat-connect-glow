import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code, Layout, Server, Database, Shield, Zap, Clock, Wrench } from "lucide-react";

interface WebDevelopmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WebDevelopmentModal = ({ open, onOpenChange }: WebDevelopmentModalProps) => {
  const services = [
    {
      icon: Layout,
      name: "Basic Website (5 Pages)",
      price: "KSH 25,000",
      description: "Perfect for small businesses and personal brands looking to establish their online presence.",
      whatIsDone: [
        "Custom homepage design",
        "4 additional pages (About, Services, Contact, Gallery)",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Google Maps integration"
      ],
      toolsUsed: [
        "React.js for frontend",
        "Tailwind CSS for styling",
        "Vite for build optimization",
        "Vercel/Netlify for hosting"
      ],
      timeToComplete: "7-10 business days",
      deliverables: "Live website, source code, hosting setup, basic documentation"
    },
    {
      icon: Code,
      name: "Professional Website (10+ Pages)",
      price: "KSH 50,000",
      description: "Advanced website with custom features and functionality for growing businesses.",
      whatIsDone: [
        "Custom design for 10+ pages",
        "Advanced animations and interactions",
        "Blog/News section with CMS",
        "Newsletter subscription",
        "Advanced SEO optimization",
        "Social media integration",
        "Analytics integration (Google Analytics)"
      ],
      toolsUsed: [
        "React.js/Next.js framework",
        "TypeScript for type safety",
        "Tailwind CSS + custom components",
        "Supabase/Firebase for backend",
        "Content Management System"
      ],
      timeToComplete: "14-21 business days",
      deliverables: "Fully functional website, admin panel, SEO report, hosting, 30-day support"
    },
    {
      icon: Database,
      name: "Dynamic Web Application",
      price: "KSH 100,000+",
      description: "Full-featured web application with user authentication and database integration.",
      whatIsDone: [
        "User registration and login system",
        "Database design and implementation",
        "User dashboard and profiles",
        "CRUD operations for data management",
        "Role-based access control",
        "API development and integration",
        "Admin panel for management"
      ],
      toolsUsed: [
        "React.js with TypeScript",
        "Node.js/Express backend",
        "PostgreSQL/MongoDB database",
        "JWT authentication",
        "RESTful API design",
        "Docker for containerization"
      ],
      timeToComplete: "30-45 business days",
      deliverables: "Complete web app, API documentation, database schema, deployment guide, 60-day support"
    },
    {
      icon: Server,
      name: "Landing Page",
      price: "KSH 15,000",
      description: "High-converting single-page website optimized for marketing campaigns.",
      whatIsDone: [
        "Eye-catching hero section",
        "Features showcase",
        "Testimonials section",
        "Call-to-action buttons",
        "Lead capture forms",
        "Performance optimization"
      ],
      toolsUsed: [
        "React.js for dynamic content",
        "Framer Motion for animations",
        "EmailJS for form handling",
        "Google Analytics for tracking"
      ],
      timeToComplete: "3-5 business days",
      deliverables: "Optimized landing page, conversion tracking setup, A/B testing ready"
    },
    {
      icon: Shield,
      name: "Website Redesign",
      price: "KSH 35,000",
      description: "Modernize your existing website with fresh design and improved functionality.",
      whatIsDone: [
        "Complete design overhaul",
        "Modern UI/UX implementation",
        "Content migration",
        "Performance optimization",
        "Mobile responsiveness upgrade",
        "SEO improvements"
      ],
      toolsUsed: [
        "Modern frameworks (React/Next.js)",
        "Latest design systems",
        "Performance monitoring tools",
        "Migration scripts"
      ],
      timeToComplete: "14-21 business days",
      deliverables: "Redesigned website, migrated content, performance report, training session"
    },
    {
      icon: Zap,
      name: "Website Maintenance (Monthly)",
      price: "KSH 5,000/month",
      description: "Keep your website running smoothly with regular updates and maintenance.",
      whatIsDone: [
        "Regular security updates",
        "Content updates (text, images)",
        "Performance monitoring",
        "Backup and recovery",
        "Bug fixes and troubleshooting",
        "Uptime monitoring"
      ],
      toolsUsed: [
        "Monitoring tools (UptimeRobot)",
        "Backup solutions",
        "Security scanners",
        "Analytics platforms"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "Monthly reports, 24/7 uptime monitoring, priority support"
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
            Web Development Services
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
                        <Code className="w-4 h-4" />
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

export default WebDevelopmentModal;
