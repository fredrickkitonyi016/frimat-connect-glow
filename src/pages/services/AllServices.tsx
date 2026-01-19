import { ArrowLeft, Globe, Smartphone, Cloud, Shield, Monitor, ShoppingBag, Printer, Building2, Code, Palette, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Import service images
import webDevService from "@/assets/services/web-dev-service.jpg";
import mobileAppService from "@/assets/services/mobile-app-service.jpg";
import cloudService from "@/assets/services/cloud-service.jpg";
import cybersecurityService from "@/assets/services/cybersecurity-service.jpg";
import itSupportService from "@/assets/services/it-support-service.jpg";
import ecommerceService from "@/assets/services/ecommerce-service.jpg";

const allServices = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like React, Vue.js, and Laravel. Responsive design, SEO optimization, and performance-focused development.",
    icon: Globe,
    image: webDevService,
    href: "/services/web-development",
    pricing: "Starting from KSh 25,000",
    features: ["Responsive Design", "CMS Integration", "SEO Optimization", "E-commerce Ready"]
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android. Built with React Native and Flutter for optimal performance and user experience.",
    icon: Smartphone,
    image: mobileAppService,
    href: "/services/mobile-apps",
    pricing: "Starting from KSh 100,000",
    features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"]
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud. DevOps implementation and 24/7 monitoring.",
    icon: Cloud,
    image: cloudService,
    href: "/services/cloud-services",
    pricing: "Starting from KSh 30,000/month",
    features: ["AWS & Azure", "Cloud Migration", "Auto-scaling", "Backup & Recovery"]
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions including security audits, penetration testing, compliance implementation, and risk assessment for businesses.",
    icon: Shield,
    image: cybersecurityService,
    href: "/services/cybersecurity",
    pricing: "Starting from KSh 25,000",
    features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"]
  },
  {
    title: "IT Support",
    description: "24/7 technical support and IT infrastructure management. Help desk, network management, system monitoring, and proactive maintenance.",
    icon: Monitor,
    image: itSupportService,
    href: "/services/it-support",
    pricing: "Starting from KSh 15,000/month",
    features: ["24/7 Support", "Network Management", "System Monitoring", "On-site & Remote"]
  },
  {
    title: "E-commerce",
    description: "Complete e-commerce solutions from design to deployment. Shopify, WooCommerce integration, payment processing, and inventory management.",
    icon: ShoppingBag,
    image: ecommerceService,
    href: "/services/ecommerce",
    pricing: "Starting from KSh 75,000",
    features: ["Online Stores", "Payment Integration", "Inventory System", "Analytics"]
  },
  {
    title: "Cyber Cafe Services",
    description: "Complete digital service center offering printing, scanning, internet access, computer training, and government service assistance.",
    icon: Printer,
    image: itSupportService,
    href: "/services/cyber-cafe",
    pricing: "Starting from KSh 10/page",
    features: ["Printing & Scanning", "Internet Access", "CV Writing", "Government Services"]
  },
  {
    title: "Government Services",
    description: "Expert assistance with Kenyan government online services including KRA iTax, HELB, SHA (NHIF), NSSF, e-Citizen, and Good Conduct applications.",
    icon: Building2,
    image: itSupportService,
    href: "/services/government-services",
    pricing: "KSh 200 - 500",
    features: ["KRA iTax", "HELB Applications", "SHA Registration", "e-Citizen Services"]
  },
  {
    title: "Custom Development",
    description: "Bespoke software solutions tailored to your business needs. Enterprise applications, automation tools, and system integrations.",
    icon: Code,
    image: webDevService,
    href: "/services/custom-development",
    pricing: "Project-based",
    features: ["Custom Software", "API Development", "Automation", "System Integration"]
  },
  {
    title: "Cloud Migration",
    description: "Seamless migration of your existing infrastructure to the cloud. Assessment, planning, execution, and post-migration support.",
    icon: Server,
    image: cloudService,
    href: "/services/cloud-migration",
    pricing: "Starting from KSh 50,000",
    features: ["Assessment", "Migration Planning", "Data Transfer", "Training"]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design services including wireframing, prototyping, and visual design. Creating intuitive and beautiful digital experiences.",
    icon: Palette,
    image: webDevService,
    href: "/services/web-development",
    pricing: "Starting from KSh 30,000",
    features: ["Wireframing", "Prototyping", "Visual Design", "User Testing"]
  },
  {
    title: "Database Solutions",
    description: "Database design, optimization, and management. PostgreSQL, MySQL, MongoDB, and cloud database solutions for scalable applications.",
    icon: Database,
    image: cloudService,
    href: "/services/cloud-services",
    pricing: "Starting from KSh 25,000",
    features: ["Database Design", "Optimization", "Migration", "Backup Systems"]
  }
];

export default function AllServices() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${webDevService})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">All </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Comprehensive technology solutions designed to transform your business. From web development to cybersecurity, we offer end-to-end services tailored for Kenyan businesses.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="glass-card group overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="p-2.5 rounded-xl bg-primary/90 backdrop-blur-sm">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                      <span className="text-accent font-bold">{service.pricing}</span>
                    </div>

                    {/* CTA */}
                    <Link to={service.href}>
                      <Button variant="glass" className="w-full group">
                        Learn More
                        <ArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Can't Find What You Need?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                We offer custom solutions tailored to your specific business requirements. Let's discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate('/#contact')}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => navigate('/#portfolio')}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}