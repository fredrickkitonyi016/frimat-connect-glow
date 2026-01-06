import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft, CheckCircle, CreditCard, Package, BarChart, Smartphone, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Globe, title: "E-commerce Platforms", description: "Custom online stores built for conversion and growth" },
  { icon: CreditCard, title: "Payment Integration", description: "Secure payment gateways including M-Pesa and cards" },
  { icon: Package, title: "Inventory Management", description: "Real-time stock tracking and automated reordering" },
  { icon: BarChart, title: "Sales Analytics", description: "Data-driven insights to optimize your retail performance" },
  { icon: Smartphone, title: "Mobile Commerce", description: "Native and PWA shopping apps for on-the-go customers" },
  { icon: ShoppingBag, title: "POS Systems", description: "Modern point-of-sale solutions for physical stores" },
];

const integrations = [
  "M-Pesa & Mobile Money",
  "Shopify & WooCommerce",
  "Inventory Systems",
  "Shipping & Logistics",
  "CRM Platforms",
  "Accounting Software",
];

export default function Retail() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-accent/10">
                  <ShoppingBag className="h-12 w-12 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Retail & E-commerce</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Modern retail technology solutions to grow your business online and offline. 
                From custom e-commerce platforms to integrated POS systems, we help you sell smarter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Launch Your Store</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Retail Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg">
                  <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Integrations We Support</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Retail Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's build a retail technology solution that drives sales and delights customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:info@frimat.co.ke">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
                <a href="tel:+254112277289">
                  <Phone className="mr-2 h-4 w-4" />
                  +254 112 277 289
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
