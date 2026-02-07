import { ArrowLeft, Globe, Smartphone, Cloud, Shield, Monitor, ShoppingBag, Printer, Building2, Code, Palette, Database, Server, ArrowRight } from "lucide-react";
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
    features: ["Responsive Design", "CMS Integration", "SEO Optimization", "E-commerce Ready"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android. Built with React Native and Flutter for optimal performance and user experience.",
    icon: Smartphone,
    image: mobileAppService,
    href: "/services/mobile-apps",
    pricing: "Starting from KSh 100,000",
    features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud. DevOps implementation and 24/7 monitoring.",
    icon: Cloud,
    image: cloudService,
    href: "/services/cloud-services",
    pricing: "Starting from KSh 30,000/month",
    features: ["AWS & Azure", "Cloud Migration", "Auto-scaling", "Backup & Recovery"],
    gradient: "from-sky-500 to-indigo-500"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions including security audits, penetration testing, compliance implementation, and risk assessment for businesses.",
    icon: Shield,
    image: cybersecurityService,
    href: "/services/cybersecurity",
    pricing: "Starting from KSh 25,000",
    features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "IT Support",
    description: "24/7 technical support and IT infrastructure management. Help desk, network management, system monitoring, and proactive maintenance.",
    icon: Monitor,
    image: itSupportService,
    href: "/services/it-support",
    pricing: "Starting from KSh 15,000/month",
    features: ["24/7 Support", "Network Management", "System Monitoring", "On-site & Remote"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "E-commerce",
    description: "Complete e-commerce solutions from design to deployment. Shopify, WooCommerce integration, payment processing, and inventory management.",
    icon: ShoppingBag,
    image: ecommerceService,
    href: "/services/ecommerce",
    pricing: "Starting from KSh 75,000",
    features: ["Online Stores", "Payment Integration", "Inventory System", "Analytics"],
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    title: "Cyber Cafe Services",
    description: "Complete digital service center offering printing, scanning, internet access, computer training, and government service assistance.",
    icon: Printer,
    image: itSupportService,
    href: "/services/cyber-cafe",
    pricing: "Starting from KSh 10/page",
    features: ["Printing & Scanning", "Internet Access", "CV Writing", "Government Services"],
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Government Services",
    description: "Expert assistance with Kenyan government online services including KRA iTax, HELB, SHA (NHIF), NSSF, e-Citizen, and Good Conduct applications.",
    icon: Building2,
    image: itSupportService,
    href: "/services/government-services",
    pricing: "KSh 200 - 500",
    features: ["KRA iTax", "HELB Applications", "SHA Registration", "e-Citizen Services"],
    gradient: "from-rose-500 to-red-500"
  },
  {
    title: "Custom Development",
    description: "Bespoke software solutions tailored to your business needs. Enterprise applications, automation tools, and system integrations.",
    icon: Code,
    image: webDevService,
    href: "/services/custom-development",
    pricing: "Project-based",
    features: ["Custom Software", "API Development", "Automation", "System Integration"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Cloud Migration",
    description: "Seamless migration of your existing infrastructure to the cloud. Assessment, planning, execution, and post-migration support.",
    icon: Server,
    image: cloudService,
    href: "/services/cloud-migration",
    pricing: "Starting from KSh 50,000",
    features: ["Assessment", "Migration Planning", "Data Transfer", "Training"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    title: "Creative & Design",
    description: "Professional graphic design, logo creation, branding, and visual identity services. Creating memorable brand experiences that stand out.",
    icon: Palette,
    image: webDevService,
    href: "/services/creative-design",
    pricing: "Starting from KSh 5,000",
    features: ["Logo Design", "Branding", "Print Design", "Social Media Graphics"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Database Solutions",
    description: "Database design, optimization, and management. PostgreSQL, MySQL, MongoDB, and cloud database solutions for scalable applications.",
    icon: Database,
    image: cloudService,
    href: "/services/cloud-services",
    pricing: "Starting from KSh 25,000",
    features: ["Database Design", "Optimization", "Migration", "Backup Systems"],
    gradient: "from-emerald-500 to-teal-500"
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={service.href} className="block h-full">
                    <motion.div 
                      className="glass-card group overflow-hidden h-full relative"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Image with overlay */}
                      <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden">
                        <motion.img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-44 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                        
                        {/* Animated Icon */}
                        <motion.div 
                          className="absolute bottom-3 left-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-primary/20`}>
                            <Icon className="text-white" size={26} />
                          </div>
                        </motion.div>
                        
                        {/* Hover shine effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {service.description}
                          </p>
                        </div>

                        {/* Features with stagger animation */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <motion.span 
                              key={idx}
                              className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + idx * 0.05 }}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>

                        {/* Pricing with glow effect */}
                        <motion.div 
                          className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-accent font-bold">{service.pricing}</span>
                        </motion.div>

                        {/* CTA with arrow animation */}
                        <div className="pt-2">
                          <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary/10 text-primary font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            Learn More
                            <motion.span
                              className="inline-block"
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                            >
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Corner accent */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`} />
                    </motion.div>
                  </Link>
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
