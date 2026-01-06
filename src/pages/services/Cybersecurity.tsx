import { Link } from "react-router-dom";
import { Shield, ArrowLeft, CheckCircle, Lock, Eye, AlertTriangle, FileSearch, ShieldCheck, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Lock, title: "Network Security", description: "Protect your network from unauthorized access and cyber threats" },
  { icon: Eye, title: "Threat Monitoring", description: "24/7 surveillance to detect and respond to security incidents" },
  { icon: AlertTriangle, title: "Vulnerability Assessment", description: "Identify and address security weaknesses before attackers do" },
  { icon: FileSearch, title: "Security Audits", description: "Comprehensive review of your security posture and practices" },
  { icon: ShieldCheck, title: "Compliance", description: "Ensure adherence to industry regulations and standards" },
  { icon: Shield, title: "Incident Response", description: "Rapid response and recovery from security breaches" },
];

const threats = [
  "Ransomware Attacks",
  "Phishing & Social Engineering",
  "Data Breaches",
  "Malware & Viruses",
  "DDoS Attacks",
  "Insider Threats",
];

export default function Cybersecurity() {
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
                  <Shield className="h-12 w-12 text-destructive" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Cybersecurity Services</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Protect your digital assets with enterprise-grade security solutions. 
                Our comprehensive cybersecurity services safeguard your business from evolving cyber threats.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Get Security Assessment</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Hotline
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Security Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-destructive/50 transition-all hover:shadow-lg">
                  <div className="p-3 rounded-xl bg-destructive/10 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Threats We Protect Against */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Threats We Protect Against</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {threats.map((threat, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{threat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-destructive text-destructive-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Wait for a Breach</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get a comprehensive security assessment today and protect your business from cyber threats.
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
