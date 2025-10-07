import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Lock, Eye, AlertTriangle, FileCheck, UserCheck, Clock, Wrench } from "lucide-react";

interface CybersecurityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CybersecurityModal = ({ open, onOpenChange }: CybersecurityModalProps) => {
  const services = [
    {
      icon: Shield,
      name: "Security Audit & Assessment",
      price: "KSH 35,000",
      description: "Comprehensive security evaluation of your digital infrastructure.",
      whatIsDone: [
        "Vulnerability scanning",
        "Penetration testing",
        "Security configuration review",
        "Risk assessment",
        "Compliance check",
        "Detailed security report",
        "Remediation recommendations"
      ],
      toolsUsed: [
        "Nessus for vulnerability scanning",
        "Metasploit for penetration testing",
        "OWASP ZAP for web security",
        "Burp Suite for API testing",
        "Network analyzers (Wireshark)"
      ],
      timeToComplete: "7-10 business days",
      deliverables: "Security report, vulnerability list, remediation plan, risk assessment document"
    },
    {
      icon: Lock,
      name: "Website Security Hardening",
      price: "KSH 20,000",
      description: "Strengthen your website's defenses against cyber threats.",
      whatIsDone: [
        "SSL/TLS certificate setup",
        "Web Application Firewall (WAF)",
        "DDoS protection configuration",
        "Security headers implementation",
        "Input validation & sanitization",
        "SQL injection prevention",
        "XSS protection",
        "Regular security updates"
      ],
      toolsUsed: [
        "Let's Encrypt/CloudFlare SSL",
        "CloudFlare WAF",
        "Security plugins",
        "Code security scanners",
        "ModSecurity rules"
      ],
      timeToComplete: "5-7 business days",
      deliverables: "Hardened website, SSL certificate, WAF configuration, security documentation"
    },
    {
      icon: Eye,
      name: "Security Monitoring & Incident Response",
      price: "KSH 25,000/month",
      description: "24/7 security monitoring with rapid incident response.",
      whatIsDone: [
        "Real-time threat monitoring",
        "Intrusion detection",
        "Log analysis",
        "Anomaly detection",
        "Incident investigation",
        "Security alerts",
        "Monthly security reports",
        "Incident response support"
      ],
      toolsUsed: [
        "SIEM systems",
        "IDS/IPS (Snort, Suricata)",
        "Log management (Splunk)",
        "Security monitoring dashboards",
        "Automated alerting systems"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "24/7 monitoring, incident reports, security dashboards, monthly analysis"
    },
    {
      icon: AlertTriangle,
      name: "Data Breach Response",
      price: "KSH 50,000",
      description: "Emergency response and recovery from security breaches.",
      whatIsDone: [
        "Breach investigation",
        "Damage assessment",
        "Containment and isolation",
        "Malware removal",
        "System restoration",
        "Security patch implementation",
        "Forensic analysis",
        "Prevention strategy"
      ],
      toolsUsed: [
        "Forensic analysis tools",
        "Malware scanners",
        "Recovery tools",
        "Evidence collection tools",
        "Security hardening tools"
      ],
      timeToComplete: "24-48 hours emergency response",
      deliverables: "Forensic report, restored systems, security improvements, prevention plan"
    },
    {
      icon: FileCheck,
      name: "Compliance & Policy Development",
      price: "KSH 30,000",
      description: "Develop security policies and ensure regulatory compliance.",
      whatIsDone: [
        "Security policy creation",
        "Compliance assessment (GDPR, PCI-DSS)",
        "Data protection strategy",
        "Access control policies",
        "Incident response plan",
        "Security awareness training",
        "Documentation & procedures"
      ],
      toolsUsed: [
        "Compliance frameworks",
        "Policy templates",
        "Risk assessment tools",
        "Documentation systems",
        "Training platforms"
      ],
      timeToComplete: "10-14 business days",
      deliverables: "Security policies, compliance report, training materials, implementation guide"
    },
    {
      icon: UserCheck,
      name: "Network Security Setup",
      price: "KSH 40,000",
      description: "Secure your network infrastructure from unauthorized access.",
      whatIsDone: [
        "Firewall configuration",
        "VPN setup",
        "Network segmentation",
        "Access control lists",
        "Intrusion prevention system",
        "Secure Wi-Fi setup",
        "Network monitoring",
        "Security audit"
      ],
      toolsUsed: [
        "pfSense/Fortinet firewalls",
        "OpenVPN/WireGuard",
        "Network scanners (Nmap)",
        "IPS systems",
        "Network monitoring tools"
      ],
      timeToComplete: "7-10 business days",
      deliverables: "Secured network, firewall rules, VPN access, monitoring dashboard, documentation"
    },
    {
      icon: Shield,
      name: "Email Security & Anti-Phishing",
      price: "KSH 15,000",
      description: "Protect your email systems from phishing and malware attacks.",
      whatIsDone: [
        "Email filtering setup",
        "Anti-spam configuration",
        "Phishing protection",
        "Email encryption",
        "SPF/DKIM/DMARC setup",
        "Malware scanning",
        "Employee training"
      ],
      toolsUsed: [
        "Email security gateways",
        "Anti-spam filters",
        "Email authentication tools",
        "Phishing simulators",
        "Encryption tools"
      ],
      timeToComplete: "3-5 business days",
      deliverables: "Secured email system, anti-phishing setup, training materials, monitoring tools"
    },
    {
      icon: Lock,
      name: "Backup & Disaster Recovery",
      price: "KSH 20,000",
      description: "Implement robust backup systems and recovery procedures.",
      whatIsDone: [
        "Backup strategy planning",
        "Automated backup setup",
        "Disaster recovery plan",
        "Backup testing",
        "Redundancy implementation",
        "Recovery procedures",
        "Documentation"
      ],
      toolsUsed: [
        "Cloud backup solutions",
        "Backup automation tools",
        "Recovery software",
        "Testing frameworks",
        "Monitoring systems"
      ],
      timeToComplete: "5-7 business days",
      deliverables: "Backup system, recovery plan, tested procedures, monitoring dashboard"
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
            Cybersecurity Services
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
                        <Shield className="w-4 h-4" />
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

export default CybersecurityModal;
