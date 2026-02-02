import { ArrowLeft, ShoppingBag, Code, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ecommerceImage from "@/assets/services/ecommerce-service.jpg";

export default function Ecommerce() {
  const navigate = useNavigate();

  const services = [
    { name: "Basic Online Store", price: "KSh 50,000", description: "Simple store with up to 50 products", details: "Product catalog, shopping cart, basic checkout, mobile-responsive design, order notifications, and 14-day post-launch support." },
    { name: "Professional E-commerce", price: "KSh 85,000", description: "Full-featured store with inventory system", details: "Unlimited products, stock management, multi-currency, discount codes, customer reviews, wishlist, and analytics dashboard." },
    { name: "Enterprise E-commerce", price: "KSh 180,000", description: "Large scale with multiple vendors/branches", details: "Multi-vendor marketplace, branch management, advanced reporting, API integrations, dedicated account manager, and SLA support." },
    { name: "M-Pesa Integration", price: "KSh 15,000", description: "Add M-Pesa payment to existing store", details: "Daraja API setup, STK push, payment confirmation callbacks, transaction logging, and reconciliation reports." },
    { name: "Shopify Store Setup", price: "KSh 30,000", description: "Complete Shopify store configuration", details: "Theme customization, product upload, payment gateways, shipping setup, apps installation, and staff training session." },
    { name: "WooCommerce Setup", price: "KSh 25,000", description: "WordPress e-commerce store", details: "Theme installation, essential plugins, product import, payment configuration, shipping zones, and email template setup." },
    { name: "Product Photography", price: "KSh 500/product", description: "Professional product images", details: "Studio-quality photos, white background, multiple angles, basic retouching, and web-optimized file delivery." },
    { name: "Store Management (Monthly)", price: "KSh 10,000", description: "Product updates & order support", details: "Product listings, price updates, inventory sync, order processing assistance, and customer inquiry support." },
  ];

  const [expandedService, setExpandedService] = useState<number | null>(null);

  const technologies = [
    "Shopify", "WooCommerce", "Magento", "M-Pesa", "PayPal", "Stripe", "React", "Node.js"
  ];

  const features = [
    "Shopify",
    "WooCommerce",
    "Payment Integration",
    "Inventory Management"
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
                  src={ecommerceImage} 
                  alt="E-commerce"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500">
                      <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  E-commerce
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complete e-commerce solutions from design to deployment
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
                Launch your online store with our comprehensive e-commerce solutions. We handle everything from design and development to payment processing, inventory management, and marketing integrations.
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
                Platforms & Integrations
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