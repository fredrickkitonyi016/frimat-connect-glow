import { ArrowLeft, Smartphone, Code, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileApps() {
  const navigate = useNavigate();

  const services = [
    { name: "Basic Mobile App (Android)", price: "KSh 80,000", description: "Simple Android app with core features", details: "Includes user authentication, push notifications, offline mode, and up to 5 core screens. Delivered with source code and Play Store deployment." },
    { name: "Basic Mobile App (iOS)", price: "KSh 90,000", description: "Simple iOS app with core features", details: "Native Swift development with Apple guidelines compliance. Includes TestFlight testing, App Store optimization, and 30-day post-launch support." },
    { name: "Cross-Platform App", price: "KSh 120,000", description: "React Native/Flutter app for both platforms", details: "Single codebase for Android & iOS. Includes responsive design, API integration, state management, and deployment to both stores." },
    { name: "E-commerce Mobile App", price: "KSh 180,000", description: "Full shopping app with M-Pesa integration", details: "Complete shop with cart, checkout, M-Pesa/card payments, order tracking, push notifications, admin dashboard, and inventory management." },
    { name: "Enterprise Mobile App", price: "KSh 250,000", description: "Complex app with backend & admin panel", details: "Custom backend API, admin web portal, role-based access, analytics dashboard, real-time sync, and dedicated support for 90 days." },
    { name: "App UI/UX Design", price: "KSh 35,000", description: "Professional mobile app design", details: "Complete wireframes, interactive prototypes in Figma, design system with components, and handoff documentation for developers." },
    { name: "App Store Submission", price: "KSh 10,000", description: "Publishing to Google Play or App Store", details: "Developer account setup, app screenshots, descriptions, ASO optimization, category selection, and submission handling with review response." },
    { name: "App Maintenance (Monthly)", price: "KSh 15,000", description: "Updates, bug fixes & support", details: "Priority bug fixes, OS compatibility updates, performance monitoring, crash reporting, and up to 5 hours of minor feature enhancements." },
  ];

  const [expandedService, setExpandedService] = useState<number | null>(null);

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Redux", "GraphQL"
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
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10">
                <Smartphone className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Mobile Apps
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Native and cross-platform mobile applications
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We develop powerful mobile applications that provide seamless user experiences across iOS and Android platforms. Our apps are designed for performance, scalability, and maximum user engagement.
              </p>

              {/* Services with Pricing */}
              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
                <CheckCircle className="text-accent" size={28} />
                Our Services & Pricing
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
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
              <div className="glass-card p-6 mt-8">
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

              <div className="mt-12 text-center">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}