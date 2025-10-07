import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, CreditCard, Package, TrendingUp, Settings, Smartphone, Clock, Wrench } from "lucide-react";

interface EcommerceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EcommerceModal = ({ open, onOpenChange }: EcommerceModalProps) => {
  const services = [
    {
      icon: ShoppingCart,
      name: "Basic E-commerce Store",
      price: "KSH 50,000",
      description: "Start selling online with a professional e-commerce website.",
      whatIsDone: [
        "Product catalog setup (up to 50 products)",
        "Shopping cart functionality",
        "Mobile payment integration (M-Pesa)",
        "Order management system",
        "Customer accounts",
        "Basic inventory tracking",
        "Email notifications",
        "SSL certificate"
      ],
      toolsUsed: [
        "React.js/Next.js framework",
        "Stripe/PayPal integration",
        "M-Pesa API integration",
        "Supabase/Firebase database",
        "Email service (SendGrid)",
        "Responsive design"
      ],
      timeToComplete: "21-30 business days",
      deliverables: "Live store, admin panel, payment gateway, product upload, 60-day support"
    },
    {
      icon: Package,
      name: "Professional E-commerce Platform",
      price: "KSH 120,000",
      description: "Full-featured online store with advanced e-commerce capabilities.",
      whatIsDone: [
        "Unlimited products & categories",
        "Advanced product filters & search",
        "Multiple payment gateways",
        "Shipping calculator integration",
        "Discount & coupon system",
        "Customer reviews & ratings",
        "Wishlist functionality",
        "Advanced inventory management",
        "Sales analytics dashboard",
        "Email marketing integration",
        "SEO optimization"
      ],
      toolsUsed: [
        "Next.js/React commerce",
        "Stripe, PayPal, M-Pesa",
        "Shipment APIs",
        "Advanced database (PostgreSQL)",
        "Redis for caching",
        "Google Analytics",
        "Mailchimp integration"
      ],
      timeToComplete: "45-60 business days",
      deliverables: "Complete store, admin dashboard, analytics, marketing tools, 90-day support"
    },
    {
      icon: CreditCard,
      name: "Payment Gateway Integration",
      price: "KSH 15,000",
      description: "Integrate secure payment processing into your existing website.",
      whatIsDone: [
        "Payment gateway setup",
        "M-Pesa STK Push integration",
        "Card payment processing",
        "Payment verification",
        "Transaction logging",
        "Refund handling",
        "Security compliance"
      ],
      toolsUsed: [
        "M-Pesa API (Daraja)",
        "Stripe/PayPal APIs",
        "PCI-DSS compliance tools",
        "SSL certificates",
        "Payment webhooks"
      ],
      timeToComplete: "5-7 business days",
      deliverables: "Working payment system, transaction logs, testing guide, documentation"
    },
    {
      icon: Smartphone,
      name: "E-commerce Mobile App",
      price: "KSH 150,000",
      description: "Native mobile app for your online store (iOS & Android).",
      whatIsDone: [
        "Mobile app design & development",
        "Product browsing & search",
        "Shopping cart & checkout",
        "Mobile payment integration",
        "Push notifications",
        "Order tracking",
        "User accounts & profiles",
        "In-app customer support",
        "App store submission"
      ],
      toolsUsed: [
        "React Native/Flutter",
        "Mobile payment SDKs",
        "Push notification services",
        "Backend API development",
        "App analytics",
        "Cloud storage"
      ],
      timeToComplete: "60-90 business days",
      deliverables: "iOS & Android apps, backend system, admin panel, app store listings, 90-day support"
    },
    {
      icon: TrendingUp,
      name: "E-commerce SEO & Marketing",
      price: "KSH 25,000",
      description: "Boost your online store's visibility and sales with digital marketing.",
      whatIsDone: [
        "SEO optimization",
        "Product page optimization",
        "Google Shopping setup",
        "Social media integration",
        "Email marketing setup",
        "Content marketing strategy",
        "Conversion rate optimization",
        "Analytics & tracking"
      ],
      toolsUsed: [
        "Google Analytics",
        "Google Search Console",
        "Google Merchant Center",
        "Email marketing platforms",
        "Social media tools",
        "SEO analysis tools"
      ],
      timeToComplete: "10-14 business days",
      deliverables: "SEO report, marketing strategy, configured tools, tracking setup, training"
    },
    {
      icon: Settings,
      name: "Store Maintenance & Updates",
      price: "KSH 15,000/month",
      description: "Keep your e-commerce store running smoothly and up-to-date.",
      whatIsDone: [
        "Product updates (add/remove/edit)",
        "Security updates",
        "Performance optimization",
        "Bug fixes",
        "Backup management",
        "Order management support",
        "Payment gateway maintenance",
        "Monthly reports"
      ],
      toolsUsed: [
        "Store management tools",
        "Monitoring systems",
        "Backup solutions",
        "Analytics platforms",
        "Testing tools"
      ],
      timeToComplete: "Ongoing monthly service",
      deliverables: "Regular updates, monthly reports, priority support, performance optimization"
    },
    {
      icon: Package,
      name: "Marketplace Integration",
      price: "KSH 30,000",
      description: "Connect your store to popular marketplaces and expand your reach.",
      whatIsDone: [
        "Multi-marketplace setup",
        "Product synchronization",
        "Inventory management",
        "Order synchronization",
        "Price management",
        "Automated listing",
        "Centralized dashboard"
      ],
      toolsUsed: [
        "Marketplace APIs",
        "Integration platforms",
        "Inventory sync tools",
        "Order management system",
        "Analytics dashboard"
      ],
      timeToComplete: "14-21 business days",
      deliverables: "Connected marketplaces, sync system, central dashboard, training documentation"
    },
    {
      icon: ShoppingCart,
      name: "Custom E-commerce Features",
      price: "From KSH 20,000",
      description: "Add custom functionality to meet your unique business needs.",
      whatIsDone: [
        "Custom feature development",
        "Third-party integrations",
        "Workflow automation",
        "Custom reporting",
        "API development",
        "Custom checkout flow",
        "Subscription services",
        "Multi-vendor support"
      ],
      toolsUsed: [
        "Custom development stack",
        "API frameworks",
        "Integration tools",
        "Automation platforms",
        "Testing frameworks"
      ],
      timeToComplete: "Varies by complexity",
      deliverables: "Custom features, documentation, testing, integration support"
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
            E-commerce Solutions
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
                        <ShoppingCart className="w-4 h-4" />
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

export default EcommerceModal;
