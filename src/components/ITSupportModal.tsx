import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Headphones, Wrench, Monitor, HardDrive, Wifi, Settings, Clock } from "lucide-react";

interface ITSupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ITSupportModal = ({ open, onOpenChange }: ITSupportModalProps) => {
  const services = [
    {
      icon: Headphones,
      name: "24/7 IT Support (Premium)",
      price: "KSH 25,000/month",
      description: "Round-the-clock IT support for your business operations.",
      whatIsDone: [
        "24/7 helpdesk support",
        "Phone and email support",
        "Remote troubleshooting",
        "System monitoring",
        "Priority response (30 min)",
        "Unlimited support tickets",
        "Monthly system checkup",
        "Preventive maintenance"
      ],
      toolsUsed: [
        "TeamViewer/AnyDesk for remote access",
        "Ticketing system (Freshdesk)",
        "System monitoring tools",
        "Communication platforms",
        "Knowledge base system"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "24/7 support access, monthly reports, priority response, system health reports"
    },
    {
      icon: Monitor,
      name: "Computer Repair & Maintenance",
      price: "KSH 2,500",
      description: "Professional computer repair and maintenance services.",
      whatIsDone: [
        "Hardware diagnostics",
        "Component repair/replacement",
        "Software troubleshooting",
        "Virus & malware removal",
        "System optimization",
        "Driver updates",
        "Data backup before repair"
      ],
      toolsUsed: [
        "Diagnostic software",
        "Hardware testing tools",
        "Antivirus software",
        "System optimization tools",
        "Data recovery tools"
      ],
      timeToComplete: "1-3 business days",
      deliverables: "Repaired computer, diagnostic report, warranty on parts, maintenance tips"
    },
    {
      icon: HardDrive,
      name: "Data Recovery Service",
      price: "KSH 8,000",
      description: "Recover lost or deleted data from various storage devices.",
      whatIsDone: [
        "Storage device diagnosis",
        "Data recovery assessment",
        "File system repair",
        "Deleted file recovery",
        "Corrupted data restoration",
        "Data transfer to new device",
        "Prevention recommendations"
      ],
      toolsUsed: [
        "Data recovery software (EaseUS)",
        "Disk imaging tools",
        "File carving tools",
        "Clean room facilities (if needed)",
        "Backup solutions"
      ],
      timeToComplete: "3-7 business days",
      deliverables: "Recovered data, external storage device, recovery report, backup setup"
    },
    {
      icon: Wifi,
      name: "Network Setup & Support",
      price: "KSH 15,000",
      description: "Professional network installation and configuration.",
      whatIsDone: [
        "Network design and planning",
        "Router/switch configuration",
        "Wi-Fi setup and optimization",
        "Cable installation",
        "Network security setup",
        "Speed optimization",
        "Documentation and training"
      ],
      toolsUsed: [
        "Enterprise routers/switches",
        "Network cables and tools",
        "Wi-Fi analyzers",
        "Network management software",
        "Testing equipment"
      ],
      timeToComplete: "2-3 business days",
      deliverables: "Configured network, Wi-Fi coverage, documentation, admin credentials"
    },
    {
      icon: Settings,
      name: "System Configuration & Setup",
      price: "KSH 5,000",
      description: "Professional setup and configuration of computers and systems.",
      whatIsDone: [
        "Operating system installation",
        "Software installation",
        "Driver installation",
        "System updates",
        "User account setup",
        "Security configuration",
        "Backup setup",
        "Performance optimization"
      ],
      toolsUsed: [
        "Windows/Linux/macOS",
        "Essential software packages",
        "Driver packages",
        "System utilities",
        "Backup software"
      ],
      timeToComplete: "4-6 hours",
      deliverables: "Fully configured system, installed software, user documentation, backup plan"
    },
    {
      icon: Wrench,
      name: "Printer Setup & Repair",
      price: "KSH 2,000",
      description: "Printer installation, configuration, and repair services.",
      whatIsDone: [
        "Printer installation",
        "Driver setup",
        "Network printing configuration",
        "Print quality optimization",
        "Hardware troubleshooting",
        "Cleaning and maintenance",
        "Toner/ink replacement guidance"
      ],
      toolsUsed: [
        "Printer drivers",
        "Diagnostic software",
        "Cleaning tools",
        "Testing utilities",
        "Network configuration tools"
      ],
      timeToComplete: "2-4 hours",
      deliverables: "Working printer, network setup, test prints, maintenance guide"
    },
    {
      icon: Monitor,
      name: "Remote IT Support (Basic)",
      price: "KSH 10,000/month",
      description: "Affordable remote IT support for small businesses.",
      whatIsDone: [
        "Business hours support (9AM-5PM)",
        "Remote troubleshooting",
        "Software installation",
        "System updates",
        "Basic security monitoring",
        "Up to 10 support tickets/month",
        "Email support"
      ],
      toolsUsed: [
        "Remote desktop tools",
        "Ticketing system",
        "Email support platform",
        "Basic monitoring tools",
        "Documentation system"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "Business hours support, monthly reports, remote access, knowledge base"
    },
    {
      icon: HardDrive,
      name: "Server Maintenance",
      price: "KSH 20,000/month",
      description: "Professional server management and maintenance.",
      whatIsDone: [
        "Regular server updates",
        "Performance monitoring",
        "Security patching",
        "Backup verification",
        "Log analysis",
        "Resource optimization",
        "Incident response",
        "Monthly health reports"
      ],
      toolsUsed: [
        "Server monitoring tools",
        "System management software",
        "Security tools",
        "Backup solutions",
        "Performance analyzers"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "Maintained server, uptime monitoring, security updates, monthly reports"
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
            IT Support Services
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
                        <Settings className="w-4 h-4" />
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

export default ITSupportModal;
