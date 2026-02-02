import { ArrowLeft, Globe, Code, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import webDevImage from "@/assets/services/web-dev-service.jpg";

export default function WebDevelopment() {
  const navigate = useNavigate();

  const services = [
    { name: "Basic Website (5 pages)", price: "KSh 25,000", description: "Simple static website with responsive design", details: "Home, About, Services, Contact, and one custom page. Mobile-responsive, fast loading, SSL certificate, and basic SEO setup included." },
    { name: "Business Website (10 pages)", price: "KSh 45,000", description: "Professional site with contact forms & SEO", details: "Full business site with blog, team profiles, testimonials, contact forms, Google Maps, Analytics integration, and on-page SEO optimization." },
    { name: "E-commerce Website", price: "KSh 75,000", description: "Online store with M-Pesa & payment integration", details: "Up to 100 products, shopping cart, M-Pesa/card checkout, order management, inventory tracking, customer accounts, and email notifications." },
    { name: "Custom Web Application", price: "KSh 120,000", description: "Tailored web app with database & user auth", details: "Custom features, user registration/login, database design, admin dashboard, API development, and role-based access control." },
    { name: "WordPress Website", price: "KSh 20,000", description: "CMS-based site easy to manage yourself", details: "Premium theme customization, essential plugins, training session on content management, and 14-day support after launch." },
    { name: "Landing Page", price: "KSh 15,000", description: "Single page for campaigns or promotions", details: "High-converting design, call-to-action optimization, lead capture form, analytics tracking, and A/B testing setup." },
    { name: "Website Redesign", price: "KSh 30,000", description: "Modernize your existing website", details: "Modern UI refresh, improved UX, mobile optimization, speed optimization, content migration, and SEO preservation." },
    { name: "Website Maintenance (Monthly)", price: "KSh 5,000", description: "Updates, backups & security monitoring", details: "Weekly backups, security patches, plugin/theme updates, uptime monitoring, and 2 hours of content updates per month." },
  ];

  const [expandedService, setExpandedService] = useState<number | null>(null);

  const technologies = [
    "React", "Vue.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS"
  ];

  const features = [
    "React & Vue.js",
    "Full-Stack Development",
    "API Integration",
    "Performance Optimization"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>

          <div className="max-w-5xl mx-auto">
            {/* Hero Card - Matching Services Section Style */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border mb-12">
              {/* Header Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={webDevImage} 
                  alt="Web Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Web Development
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Custom web applications built with modern frameworks and technologies
                </p>

                {/* Features with bullet points */}
                <div className="space-y-3 pt-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-base">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our web development team creates cutting-edge websites and web applications using the latest technologies. We specialize in responsive design, user experience optimization, and scalable architecture that grows with your business.
              </p>
            </div>

            {/* Services with Pricing */}
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="text-accent" size={28} />
              Our Services & Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service, idx) => (
                <div key={idx} className="glass-card p-5 hover:border-primary/50 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">{service.name}</h3>
                    <span className="text-primary font-bold whitespace-nowrap ml-2">{service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <button
                    onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-3 font-medium transition-colors"
                  >
                    {expandedService === idx ? (
                      <>Less details <ChevronUp size={16} /></>
                    ) : (
                      <>Learn more <ChevronDown size={16} /></>
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedService === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pt-3 border-t border-border">
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                          <Link
                            to="/#contact"
                            className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 mt-2 font-medium"
                          >
                            Get a quote for this service →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="glass-card p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="text-primary" size={24} />
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}