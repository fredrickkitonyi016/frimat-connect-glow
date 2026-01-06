import { Link } from "react-router-dom";
import { Building2, ArrowLeft, CheckCircle, Shield, CreditCard, BarChart, Users, Lock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: CreditCard, title: "Digital Banking", description: "Modern banking platforms for seamless customer experiences" },
  { icon: Shield, title: "Fraud Detection", description: "AI-powered systems to identify and prevent fraudulent activities" },
  { icon: BarChart, title: "Financial Analytics", description: "Real-time insights for better financial decision making" },
  { icon: Lock, title: "Regulatory Compliance", description: "Systems built to meet CBK and international standards" },
  { icon: Users, title: "Customer Onboarding", description: "Digital KYC and account opening solutions" },
  { icon: Building2, title: "Core Banking", description: "Robust core banking system integration and modernization" },
];

const compliance = [
  "Central Bank of Kenya (CBK)",
  "PCI DSS Compliance",
  "Data Protection Act",
  "AML/CFT Regulations",
  "ISO 27001",
  "SOC 2 Type II",
];

export default function Finance() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <Building2 className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Finance & Banking</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Secure financial technology solutions for banks, SACCOs, and fintech companies. 
                We build systems that are robust, compliant, and designed for the modern financial landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Request Demo</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Speak to Expert
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Financial Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Compliance & Standards</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Modernize Your Financial Services</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with us to build secure, compliant, and innovative financial technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:info@frimat.co.ke">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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
