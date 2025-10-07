import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Smartphone, Code2, Sparkles, RefreshCw, Bell, Cloud, Clock, Wrench } from "lucide-react";

interface MobileAppModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileAppModal = ({ open, onOpenChange }: MobileAppModalProps) => {
  const services = [
    {
      icon: Smartphone,
      name: "Basic Mobile App (Single Platform)",
      price: "KSH 50,000",
      description: "Simple mobile application for iOS or Android with essential features.",
      whatIsDone: [
        "UI/UX design for mobile",
        "5-7 app screens",
        "User authentication",
        "Basic data storage",
        "Push notifications setup",
        "App store submission assistance"
      ],
      toolsUsed: [
        "React Native for cross-platform",
        "Expo for rapid development",
        "Firebase for backend services",
        "AsyncStorage for local data",
        "OneSignal for notifications"
      ],
      timeToComplete: "21-30 business days",
      deliverables: "Published app, source code, admin credentials, user guide"
    },
    {
      icon: Code2,
      name: "Professional Mobile App (Cross-Platform)",
      price: "KSH 100,000",
      description: "Advanced mobile application for both iOS and Android with rich features.",
      whatIsDone: [
        "Custom UI/UX design",
        "10+ app screens",
        "User profiles and authentication",
        "Real-time data synchronization",
        "In-app purchases integration",
        "Social media login",
        "Offline functionality",
        "Push notifications",
        "Analytics integration"
      ],
      toolsUsed: [
        "React Native with TypeScript",
        "Redux for state management",
        "Firebase/Supabase backend",
        "Stripe for payments",
        "Google Analytics/Mixpanel",
        "App Store & Play Store APIs"
      ],
      timeToComplete: "45-60 business days",
      deliverables: "iOS & Android apps, backend system, admin panel, analytics setup, 90-day support"
    },
    {
      icon: Sparkles,
      name: "Enterprise Mobile App",
      price: "KSH 250,000+",
      description: "Full-featured enterprise-grade mobile application with advanced functionality.",
      whatIsDone: [
        "Complex UI/UX with animations",
        "Unlimited screens and features",
        "Multi-user role system",
        "Advanced security features",
        "API integration with existing systems",
        "Custom backend development",
        "Real-time chat and notifications",
        "Data visualization and reports",
        "Offline mode with sync",
        "App maintenance for 6 months"
      ],
      toolsUsed: [
        "React Native/Flutter",
        "Node.js backend",
        "PostgreSQL/MongoDB",
        "Redis for caching",
        "Socket.io for real-time features",
        "AWS/Google Cloud infrastructure",
        "CI/CD pipeline setup"
      ],
      timeToComplete: "90-120 business days",
      deliverables: "Complete mobile solution, backend infrastructure, admin panel, API docs, 6-month support"
    },
    {
      icon: RefreshCw,
      name: "App Redesign & Update",
      price: "KSH 40,000",
      description: "Modernize your existing mobile app with new design and improved performance.",
      whatIsDone: [
        "UI/UX redesign",
        "Performance optimization",
        "Bug fixes and improvements",
        "Update to latest SDK versions",
        "New feature additions",
        "App store resubmission"
      ],
      toolsUsed: [
        "Latest React Native version",
        "Performance profiling tools",
        "Modern design libraries",
        "Testing frameworks"
      ],
      timeToComplete: "14-21 business days",
      deliverables: "Updated app, performance report, new features documentation"
    },
    {
      icon: Bell,
      name: "App Maintenance (Monthly)",
      price: "KSH 10,000/month",
      description: "Keep your mobile app updated, secure, and running smoothly.",
      whatIsDone: [
        "Regular bug fixes",
        "OS compatibility updates",
        "Security patches",
        "Performance monitoring",
        "Crash reporting and fixes",
        "Minor feature updates",
        "App store management"
      ],
      toolsUsed: [
        "Crashlytics for error tracking",
        "App monitoring tools",
        "Version control systems",
        "Testing frameworks"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "Monthly reports, priority support, regular updates"
    },
    {
      icon: Cloud,
      name: "MVP Mobile App",
      price: "KSH 75,000",
      description: "Minimum Viable Product to test your app idea in the market quickly.",
      whatIsDone: [
        "Core feature implementation",
        "Basic UI/UX design",
        "User authentication",
        "Essential functionality only",
        "Beta testing support",
        "Single platform launch"
      ],
      toolsUsed: [
        "React Native/Expo",
        "Firebase for quick backend",
        "Basic analytics",
        "TestFlight/Google Beta"
      ],
      timeToComplete: "21-28 business days",
      deliverables: "MVP app, test version, user feedback tools, roadmap for full version"
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
            Mobile App Development Services
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
                        <Code2 className="w-4 h-4" />
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

export default MobileAppModal;
