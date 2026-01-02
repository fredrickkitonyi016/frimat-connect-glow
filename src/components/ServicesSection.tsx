import { useState } from "react";
import { 
  ArrowRight,
  X,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Card3D from "@/components/Card3D";
import CyberCafeServicesModal from "@/components/CyberCafeServicesModal";
import WebDevelopmentModal from "@/components/WebDevelopmentModal";
import MobileAppModal from "@/components/MobileAppModal";
import CloudServicesModal from "@/components/CloudServicesModal";
import CybersecurityModal from "@/components/CybersecurityModal";
import ITSupportModal from "@/components/ITSupportModal";
import EcommerceModal from "@/components/EcommerceModal";

// Import service logos
import webDevLogo from "@/assets/logos/web-dev-logo.png";
import mobileAppLogo from "@/assets/logos/mobile-app-logo.png";
import cloudServicesLogo from "@/assets/logos/cloud-services-logo.png";
import cybersecurityLogo from "@/assets/logos/cybersecurity-logo.png";
import itSupportLogo from "@/assets/logos/it-support-logo.png";
import ecommerceLogo from "@/assets/logos/ecommerce-logo.png";
import cyberCafeLogo from "@/assets/logos/cyber-cafe-logo.png";
import kraLogo from "@/assets/logos/kra-logo.png";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showCyberCafeModal, setShowCyberCafeModal] = useState(false);
  const [showWebDevModal, setShowWebDevModal] = useState(false);
  const [showMobileAppModal, setShowMobileAppModal] = useState(false);
  const [showCloudServicesModal, setShowCloudServicesModal] = useState(false);
  const [showCybersecurityModal, setShowCybersecurityModal] = useState(false);
  const [showITSupportModal, setShowITSupportModal] = useState(false);
  const [showEcommerceModal, setShowEcommerceModal] = useState(false);

  const services = [
    {
      logo: webDevLogo,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies",
      features: ["React & Vue.js", "Full-Stack Development", "API Integration", "Performance Optimization"],
      detailedDescription: "Our web development team creates cutting-edge websites and web applications using the latest technologies. We specialize in responsive design, user experience optimization, and scalable architecture.",
      portfolio: ["E-commerce platforms", "Corporate websites", "SaaS applications", "Progressive web apps"],
      pricing: "Starting from KSh 50,000",
      timeline: "2-8 weeks",
      benefits: [
        "Responsive design across all devices",
        "SEO optimized for better visibility",
        "Fast loading times and performance",
        "Secure and scalable architecture",
        "Ongoing maintenance and support"
      ]
    },
    {
      logo: mobileAppLogo,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      detailedDescription: "We develop powerful mobile applications that provide seamless user experiences across iOS and Android platforms. Our apps are designed for performance, scalability, and user engagement.",
      portfolio: ["Business apps", "E-commerce mobile apps", "Social networking apps", "Utility applications"],
      pricing: "Starting from KSh 100,000",
      timeline: "4-12 weeks",
      benefits: [
        "Cross-platform compatibility",
        "Native performance and feel",
        "App store optimization",
        "Push notifications and analytics",
        "Regular updates and maintenance"
      ]
    },
    {
      logo: cloudServicesLogo,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS & Azure", "Cloud Migration", "DevOps", "Microservices"],
      detailedDescription: "Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement best practices for security and performance.",
      portfolio: ["Cloud migrations", "Infrastructure setup", "Disaster recovery", "Auto-scaling solutions"],
      pricing: "Starting from KSh 30,000/month",
      timeline: "1-4 weeks",
      benefits: [
        "Reduced operational costs",
        "Enhanced security and compliance",
        "Automatic scaling and load balancing",
        "24/7 monitoring and support",
        "Disaster recovery and backup"
      ]
    },
    {
      logo: cybersecurityLogo,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      detailedDescription: "Protect your business from cyber threats with our comprehensive security services. We provide proactive security measures, threat detection, and compliance solutions.",
      portfolio: ["Security assessments", "Firewall configuration", "Compliance audits", "Incident response"],
      pricing: "Starting from KSh 25,000",
      timeline: "1-3 weeks",
      benefits: [
        "Proactive threat detection",
        "Compliance with industry standards",
        "24/7 security monitoring",
        "Incident response and recovery",
        "Regular security updates"
      ]
    },
    {
      logo: itSupportLogo,
      title: "IT Support",
      description: "24/7 technical support and IT infrastructure management",
      features: ["Help Desk", "Network Management", "System Monitoring", "Maintenance"],
      detailedDescription: "Keep your business running smoothly with our comprehensive IT support services. We provide round-the-clock technical assistance and proactive system maintenance.",
      portfolio: ["Network setup", "System administration", "Hardware support", "Software troubleshooting"],
      pricing: "Starting from KSh 15,000/month",
      timeline: "Immediate support",
      benefits: [
        "24/7 technical support",
        "Proactive system monitoring",
        "Quick issue resolution",
        "Regular system maintenance",
        "Remote and on-site support"
      ]
    },
    {
      logo: ecommerceLogo,
      title: "E-commerce",
      description: "Complete e-commerce solutions from design to deployment",
      features: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Management"],
      detailedDescription: "Launch your online store with our comprehensive e-commerce solutions. We handle everything from design and development to payment processing and inventory management.",
      portfolio: ["Online stores", "Marketplace integration", "Payment gateways", "Inventory systems"],
      pricing: "Starting from KSh 75,000",
      timeline: "3-6 weeks",
      benefits: [
        "Mobile-optimized shopping experience",
        "Secure payment processing",
        "Inventory management system",
        "SEO and marketing tools",
        "Analytics and reporting"
      ]
    },
    {
      logo: cyberCafeLogo,
      kraLogo: kraLogo,
      title: "Cyber Cafe Services",
      description: "Complete cyber cafe solutions for all your digital needs",
      features: [
        "Printing & Photocopying", 
        "Document Scanning", 
        "Internet Access", 
        "Computer Training",
        "Government Services (KRA iTax, HELB, NHIF)",
        "Data Recovery & Backup",
        "CV Writing & Typing",
        "Lamination & Binding"
      ],
      detailedDescription: "Your one-stop digital service center offering comprehensive cyber cafe services. From document processing to government service assistance, we handle all your digital needs with professional efficiency.",
      portfolio: ["Document services", "Government applications", "Training programs", "Business support"],
      pricing: "Starting from KSh 10 per service",
      timeline: "Immediate service",
      benefits: [
        "Professional document processing",
        "Government service assistance",
        "Computer literacy training",
        "High-speed internet access",
        "Secure data handling",
        "Competitive pricing",
        "Extended operating hours",
        "Expert technical support"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive technology solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card3D 
                key={index} 
                className="h-full"
                glowColor={index % 2 === 0 ? "primary" : "accent"}
              >
                <div className="space-y-6">
                  {/* Logo */}
                  <div className="relative">
                    <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm w-fit shadow-lg">
                      <img 
                        src={service.logo} 
                        alt={`${service.title} logo`}
                        className="w-12 h-12 object-contain"
                      />
                      {/* Show KRA logo for cyber cafe services */}
                      {service.kraLogo && (
                        <img 
                          src={service.kraLogo} 
                          alt="KRA logo"
                          className="w-8 h-8 object-contain absolute -top-1 -right-1 bg-white rounded-full p-1"
                        />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button 
                      variant="glass" 
                      className="w-full group"
                      onClick={() => {
                        const modalMap = [
                          () => setShowWebDevModal(true),
                          () => setShowMobileAppModal(true),
                          () => setShowCloudServicesModal(true),
                          () => setShowCybersecurityModal(true),
                          () => setShowITSupportModal(true),
                          () => setShowEcommerceModal(true),
                          () => setShowCyberCafeModal(true)
                        ];
                        modalMap[index]();
                      }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.querySelector('#quotation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quotation
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Service Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl max-w-4xl w-full animate-scale-in">
              <div className="relative p-4 md:p-6">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-background/80 hover:bg-accent/20 border border-border transition-all z-10"
                >
                  <X size={16} className="text-foreground" />
                </button>

              {(() => {
                const service = services[selectedService];
                return (
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg relative">
                        <img 
                          src={service.logo} 
                          alt={`${service.title} logo`}
                          className="w-16 h-16 object-contain"
                        />
                        {/* Show KRA logo for cyber cafe services */}
                        {service.kraLogo && (
                          <img 
                            src={service.kraLogo} 
                            alt="KRA logo"
                            className="w-10 h-10 object-contain absolute -top-2 -right-2 bg-white rounded-full p-1"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {service.detailedDescription}
                        </p>
                      </div>
                    </div>

                    {/* Service Details Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Benefits */}
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle className="text-accent" size={20} />
                          Key Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Portfolio & Details */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Users className="text-accent" size={20} />
                            What We Deliver
                          </h4>
                          <ul className="space-y-2">
                            {service.portfolio.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pricing & Timeline */}
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-primary/20 border border-primary/30">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="text-primary" size={16} />
                              <span className="font-semibold text-foreground">Timeline</span>
                            </div>
                            <p className="text-foreground font-medium">{service.timeline}</p>
                          </div>
                          <div className="p-4 rounded-xl bg-accent/20 border border-accent/30">
                            <span className="font-semibold text-foreground block mb-1">Pricing</span>
                            <p className="text-xl font-bold text-accent">{service.pricing}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies/Features */}
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-4">
                        Technologies & Features
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50 text-sm font-medium text-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="hero" 
                        className="flex-1"
                        onClick={() => {
                          setSelectedService(null);
                          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Get Quote
                      </Button>
                      <Button 
                        variant="glass" 
                        className="flex-1"
                        onClick={() => {
                          setSelectedService(null);
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                );
              })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Modals */}
      <CyberCafeServicesModal 
        isOpen={showCyberCafeModal}
        onClose={() => setShowCyberCafeModal(false)}
      />
      <WebDevelopmentModal open={showWebDevModal} onOpenChange={setShowWebDevModal} />
      <MobileAppModal open={showMobileAppModal} onOpenChange={setShowMobileAppModal} />
      <CloudServicesModal open={showCloudServicesModal} onOpenChange={setShowCloudServicesModal} />
      <CybersecurityModal open={showCybersecurityModal} onOpenChange={setShowCybersecurityModal} />
      <ITSupportModal open={showITSupportModal} onOpenChange={setShowITSupportModal} />
      <EcommerceModal open={showEcommerceModal} onOpenChange={setShowEcommerceModal} />
    </section>
  );
}