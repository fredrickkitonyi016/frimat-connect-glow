import { ArrowLeft, ShoppingCart, Code, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

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
                <ShoppingCart className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  E-commerce Solutions
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Complete online store solutions
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Launch your online store with our comprehensive e-commerce solutions. We handle everything from design and development to payment processing, inventory management, and marketing integrations.
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
                    {expandedService === idx && (
                      <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                        <Link
                          to="/#contact"
                          className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 mt-2 font-medium"
                        >
                          Get a quote for this service →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="glass-card p-6 mt-8">
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