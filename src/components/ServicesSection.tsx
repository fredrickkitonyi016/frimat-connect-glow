import { 
  ArrowRight,
  Globe,
  Shield,
  ShoppingBag,
  Building2,
  Camera,
  Wifi,
  Wrench,
  Bitcoin
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import service images
import webDevImage from "@/assets/services/web-dev-service.jpg";
import mobileAppImage from "@/assets/services/mobile-app-service.jpg";
import cloudServiceImage from "@/assets/services/cloud-service.jpg";
import cybersecurityImage from "@/assets/services/cybersecurity-service.jpg";
import itSupportImage from "@/assets/services/it-support-service.jpg";
import ecommerceImage from "@/assets/services/ecommerce-service.jpg";
import AmbientVideoBackground from "./AmbientVideoBackground";
import cctvHudImage from "@/assets/products/hud-cctv-kit.jpg";
import wifiHudImage from "@/assets/products/hud-wifi-router.jpg";
import repairHudImage from "@/assets/products/hud-laptop.jpg";
import networkHudImage from "@/assets/products/hud-network-kit.jpg";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Camera,
      gradient: "from-lime-500 to-cyan-500",
      image: cctvHudImage,
      op: "Deploy Security Grid",
      title: "CCTV & Security Systems",
      description: "Cameras, alarms and access control installed and set up on your phone.",
      features: ["4K camera installation", "Remote phone viewing", "Alarm & access control", "Repairs & upgrades"],
      href: "/services/cybersecurity"
    },
    {
      icon: Wifi,
      gradient: "from-cyan-500 to-lime-500",
      image: wifiHudImage,
      op: "Signal Uplink Online",
      title: "Network & WiFi Solutions",
      description: "Strong, reliable internet for homes, offices, rentals and hotels.",
      features: ["WiFi setup & boosting", "Structured cabling", "Office networks", "Hotspot billing systems"],
      href: "/services/it-support"
    },
    {
      icon: Wrench,
      gradient: "from-emerald-500 to-lime-500",
      image: repairHudImage,
      op: "Diagnostic Mode Initiated",
      title: "Electronics Repair",
      description: "Phone, laptop and TV repairs done fast, with genuine parts.",
      features: ["Phone screens & batteries", "Laptop repairs", "TV & audio repair", "Data recovery"],
      href: "/services/it-support"
    },
    {
      icon: Shield,
      gradient: "from-lime-600 to-emerald-500",
      image: cybersecurityImage,
      op: "Threat Shield Active",
      title: "Cybersecurity",
      description: "Keep your business data, accounts and systems safe from attacks.",
      features: ["Security checks", "Antivirus & firewalls", "Staff training", "Backup & recovery"],
      href: "/services/cybersecurity"
    },
    {
      icon: Bitcoin,
      gradient: "from-cyan-500 to-lime-500",
      image: webDevImage,
      op: "Ledger Protocol Ready",
      title: "Crypto Support",
      description: "Simple, safe guidance on wallets, trading and mining setups.",
      features: ["Wallet setup", "Safe trading basics", "Mining rig support", "Scam protection advice"],
      href: "/book-service"
    },
    {
      icon: ShoppingBag,
      gradient: "from-lime-500 to-cyan-500",
      image: networkHudImage,
      op: "Inventory Grid Synced",
      title: "Tech Retail & Supply",
      description: "Genuine cameras, routers, laptops and accessories at fair prices.",
      features: ["CCTV kits", "Routers & switches", "Laptops & accessories", "Bulk office supply"],
      href: "/shop"
    },
    {
      icon: Globe,
      gradient: "from-cyan-500 to-lime-400",
      image: webDevImage,
      op: "Deploy Web Node",
      title: "Websites & Online Shops",
      description: "Get your business online with a clean, fast website customers trust.",
      features: ["Business websites", "Online stores", "Payment integration", "Hosting & domains"],
      href: "/services/web-development"
    },
    {
      icon: Building2,
      gradient: "from-cyan-500 to-emerald-500",
      image: itSupportImage,
      op: "Portal Access Granted",
      title: "Government & Cyber Services",
      description: "Help with KRA, HELB, SHA, e-Citizen, printing and CV writing.",
      features: ["KRA iTax filing", "HELB applications", "SHA registration", "Printing & scanning"],
      href: "/services/government-services"
    }
  ];


  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <AmbientVideoBackground
        src="https://videos.pexels.com/video-files/7565418/7565418-hd_1920_1080_25fps.mp4"
        overlayOpacity={0.85}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="hud-status mx-auto mb-5">Service Modules: 08 Online</div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Security, internet, repairs and IT — one trusted team for your home, shop or office in Nairobi and beyond.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                onClick={() => navigate(service.href)}
                className="group cursor-pointer hud-frame rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-36 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  
                  {/* Icon overlay */}
                  <span className="absolute top-3 left-4 hud-label">{service.op}</span>
                  <div className="absolute bottom-3 left-4">
                    <div className="p-2 border border-primary/50 bg-background/70 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3">
                    <Button 
                      variant="glass" 
                      className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0"
                      size="default"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/services')}
            className="group"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need Help Today?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free site survey or talk to a technician right now on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/book-service')}
              >
                Book a Free Survey
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
