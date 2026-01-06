import { Link } from "react-router-dom";
import { Lock, ArrowLeft, CheckCircle, Shield, Eye, Key, FileSearch, AlertTriangle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tools = [
  { icon: Shield, name: "Firewalls & WAF", description: "Next-gen firewalls and web application firewalls", features: ["Palo Alto", "Fortinet", "Cloudflare WAF", "AWS WAF"] },
  { icon: Eye, name: "SIEM Solutions", description: "Security information and event management", features: ["Splunk", "Microsoft Sentinel", "Elastic SIEM", "QRadar"] },
  { icon: Key, name: "Identity & Access", description: "Identity management and access control", features: ["Okta", "Azure AD", "Auth0", "CyberArk"] },
  { icon: FileSearch, name: "Vulnerability Management", description: "Continuous vulnerability scanning and remediation", features: ["Nessus", "Qualys", "Rapid7", "Acunetix"] },
];

const services = [
  "Penetration Testing",
  "Security Audits",
  "Incident Response",
  "Compliance Management",
  "Security Training",
  "24/7 Monitoring",
];

export default function SecurityTools() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-destructive/10 via-background to-primary/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-destructive/10">
                  <Lock className="h-12 w-12 text-destructive" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Security Tools</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Enterprise-grade security tools and technologies to protect your business. 
                We implement and manage industry-leading security solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Security Assessment</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Line
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Security Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-destructive/50 transition-all hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-destructive/10">
                      <tool.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Security Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-destructive text-destructive-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach. Get a comprehensive security assessment now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:info@frimat.co.ke">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive" asChild>
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
