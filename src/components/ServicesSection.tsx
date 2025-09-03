import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Network, 
  ShoppingCart,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies",
      features: ["React & Vue.js", "Full-Stack Development", "API Integration", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS & Azure", "Cloud Migration", "DevOps", "Microservices"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"]
    },
    {
      icon: Network,
      title: "IT Support",
      description: "24/7 technical support and IT infrastructure management",
      features: ["Help Desk", "Network Management", "System Monitoring", "Maintenance"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Complete e-commerce solutions from design to deployment",
      features: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Management"]
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
            const Icon = service.icon;
            return (
              <div key={index} className="glass-card hover-scale group h-full">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent w-fit">
                      <Icon className="text-background" size={32} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
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
                    <Button variant="glass" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
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
              <Button variant="hero" size="lg">
                Get Free Consultation
              </Button>
              <Button variant="glass" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}