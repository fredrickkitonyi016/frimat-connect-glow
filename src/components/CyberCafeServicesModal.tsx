import { X, CheckCircle, Clock, Wrench, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import cyberCafeLogo from "@/assets/logos/cyber-cafe-logo.png";
import kraLogo from "@/assets/logos/kra-logo.png";

interface CyberCafeService {
  name: string;
  description: string;
  detailedDescription: string;
  price: string;
  whatIsDone: string[];
  toolsUsed: string[];
  timeToComplete: string;
}

interface CyberCafeServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CyberCafeServicesModal({ isOpen, onClose }: CyberCafeServicesModalProps) {
  if (!isOpen) return null;

  const cyberCafeServices: CyberCafeService[] = [
    {
      name: "Printing & Photocopying",
      description: "High-quality printing and copying services for all your document needs",
      detailedDescription: "Professional printing and photocopying services with multiple format options. We handle black & white, color printing, and bulk copying with fast turnaround times.",
      price: "KSh 10 per page (B&W), KSh 20 per page (Color)",
      whatIsDone: [
        "Document printing (single/double-sided)",
        "Color and black & white photocopying",
        "Bulk printing for reports and projects",
        "ID card and passport photo printing",
        "Photo printing in various sizes"
      ],
      toolsUsed: ["HP LaserJet Printers", "Canon Multifunction Copiers", "Photo Printers", "High-quality paper stocks"],
      timeToComplete: "Immediate to 30 minutes (depending on volume)"
    },
    {
      name: "Document Scanning",
      description: "Convert your physical documents to digital format with professional scanning",
      detailedDescription: "Transform your paper documents into high-quality digital files. We offer various scanning options including OCR for searchable PDFs.",
      price: "KSh 10 per page, KSh 50 per book/bulk document",
      whatIsDone: [
        "Document scanning to PDF/JPEG",
        "Book and multi-page document scanning",
        "ID card and certificate scanning",
        "OCR conversion for editable text",
        "Image enhancement and cleanup"
      ],
      toolsUsed: ["High-resolution flatbed scanners", "Document feeders", "OCR software", "Image editing tools"],
      timeToComplete: "5-20 minutes (depending on pages)"
    },
    {
      name: "Internet Access",
      description: "High-speed internet access for browsing, research, and online services",
      detailedDescription: "Reliable high-speed internet connection for all your online needs. Secure browsing environment with comfortable workstations.",
      price: "KSh 50 per hour, KSh 300 per day",
      whatIsDone: [
        "Unlimited high-speed browsing",
        "Email access and management",
        "Online research and downloads",
        "Video streaming and calls",
        "Access to online portals and services"
      ],
      toolsUsed: ["High-speed fiber internet", "Modern computers", "Secure network", "Comfortable workstations"],
      timeToComplete: "Available anytime during operating hours"
    },
    {
      name: "Computer Training",
      description: "Comprehensive computer literacy and software training programs",
      detailedDescription: "Learn essential computer skills from basics to advanced applications. Personalized training sessions tailored to your learning pace.",
      price: "KSh 1,000 per hour, KSh 5,000 per week (5 sessions)",
      whatIsDone: [
        "Basic computer operations and typing",
        "Microsoft Office Suite (Word, Excel, PowerPoint)",
        "Internet and email usage",
        "Social media and online communication",
        "Graphic design basics (Photoshop, Canva)"
      ],
      toolsUsed: ["Latest software versions", "Practice exercises", "Study materials", "One-on-one instruction"],
      timeToComplete: "1-4 weeks (depending on course level)"
    },
    {
      name: "Government Services (KRA iTax, HELB, NHIF)",
      description: "Expert assistance with government online services and applications",
      detailedDescription: "Navigate government portals with ease. We provide professional assistance for tax returns, loan applications, and registration services.",
      price: "KSh 200-500 per service (depending on complexity)",
      whatIsDone: [
        "KRA PIN application and iTax filing",
        "HELB loan applications and inquiries",
        "NHIF registration and contributions",
        "NSSF registration and statements",
        "eCitizen services and payments",
        "Huduma Number applications"
      ],
      toolsUsed: ["Government portals access", "Secure form filling", "Document preparation", "Payment processing"],
      timeToComplete: "15-45 minutes per service"
    },
    {
      name: "Data Recovery & Backup",
      description: "Professional data recovery and secure backup solutions",
      detailedDescription: "Protect your valuable data with our backup services and recover lost files from damaged storage devices.",
      price: "KSh 500-2,000 (depending on data size and complexity)",
      whatIsDone: [
        "Hard drive and flash drive recovery",
        "Deleted file recovery",
        "Data backup to cloud or external drives",
        "Phone and tablet data recovery",
        "Corrupted file repair"
      ],
      toolsUsed: ["Data recovery software", "External storage devices", "Cloud backup systems", "Specialized recovery tools"],
      timeToComplete: "30 minutes to 3 days (depending on damage level)"
    },
    {
      name: "CV Writing & Typing",
      description: "Professional CV writing and document typing services",
      detailedDescription: "Create impressive CVs and professionally typed documents that stand out. Our experienced writers help showcase your skills effectively.",
      price: "KSh 300-800 (CV), KSh 50 per page (typing)",
      whatIsDone: [
        "Professional CV writing and formatting",
        "Cover letter creation",
        "Document typing and editing",
        "Resume updates and improvements",
        "Application letter preparation"
      ],
      toolsUsed: ["Microsoft Word", "Professional CV templates", "Grammar checking tools", "Formatting software"],
      timeToComplete: "30 minutes to 2 hours (depending on complexity)"
    },
    {
      name: "Lamination & Binding",
      description: "Protect and present your documents professionally",
      detailedDescription: "Professional document finishing services to protect important papers and create polished presentations for reports and projects.",
      price: "KSh 50-100 (lamination), KSh 150-300 (binding)",
      whatIsDone: [
        "Document lamination (A4, A3 sizes)",
        "ID card and certificate lamination",
        "Spiral binding for reports",
        "Thermal binding for presentations",
        "Comb binding services"
      ],
      toolsUsed: ["Laminating machines", "Spiral binding machines", "Thermal binders", "Professional finishing materials"],
      timeToComplete: "10-30 minutes"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl max-w-6xl w-full animate-scale-in">
          <div className="relative p-4 md:p-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-2 rounded-full bg-background/80 hover:bg-accent/20 border border-border transition-all z-10"
            >
              <X size={16} className="text-foreground" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg relative">
                <img 
                  src={cyberCafeLogo} 
                  alt="Cyber Cafe Services logo"
                  className="w-16 h-16 object-contain"
                />
                <img 
                  src={kraLogo} 
                  alt="KRA logo"
                  className="w-10 h-10 object-contain absolute -top-2 -right-2 bg-white rounded-full p-1"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Cyber Cafe Services
                </h3>
                <p className="text-lg text-muted-foreground">
                  Your one-stop digital service center offering comprehensive cyber cafe services. From document processing to government service assistance, we handle all your digital needs with professional efficiency.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                Our Services
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cyberCafeServices.map((service, index) => (
                  <div key={index} className="glass-card p-4 space-y-4">
                    <div>
                      <h5 className="text-xl font-bold text-foreground mb-2">
                        {service.name}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {service.detailedDescription}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="p-3 rounded-xl bg-accent/20 border border-accent/30">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="text-accent" size={16} />
                        <span className="font-semibold text-foreground text-sm">Pricing</span>
                      </div>
                      <p className="text-foreground font-bold">{service.price}</p>
                    </div>

                    {/* Time */}
                    <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="text-primary" size={16} />
                        <span className="font-semibold text-foreground text-sm">Time to Complete</span>
                      </div>
                      <p className="text-foreground font-medium text-sm">{service.timeToComplete}</p>
                    </div>

                    {/* What is Done */}
                    <div>
                      <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="text-accent" size={16} />
                        What We Do
                      </h6>
                      <ul className="space-y-1.5">
                        {service.whatIsDone.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent mt-2"></div>
                            <span className="text-xs text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools Used */}
                    <div>
                      <h6 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Wrench className="text-primary" size={16} />
                        Tools & Equipment
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        {service.toolsUsed.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full bg-secondary/30 border border-secondary/50 text-xs font-medium text-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6 mt-6 border-t border-border">
              <Button 
                variant="hero" 
                className="flex-1"
                onClick={() => {
                  onClose();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Quote
              </Button>
              <Button 
                variant="glass" 
                className="flex-1"
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
