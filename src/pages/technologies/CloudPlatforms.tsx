import { Link } from "react-router-dom";
import { Server, ArrowLeft, CheckCircle, Cloud, Database, Shield, Zap, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const platforms = [
  { icon: Cloud, name: "Amazon Web Services", description: "Comprehensive cloud services with global infrastructure", features: ["EC2 & Lambda", "S3 Storage", "RDS Databases", "CloudFront CDN"] },
  { icon: Server, name: "Microsoft Azure", description: "Enterprise-focused cloud computing platform", features: ["Virtual Machines", "Azure SQL", "Active Directory", "DevOps Services"] },
  { icon: Database, name: "Google Cloud Platform", description: "Innovation-driven cloud with AI/ML capabilities", features: ["Compute Engine", "BigQuery", "Cloud AI", "Kubernetes Engine"] },
  { icon: Globe, name: "Digital Ocean", description: "Developer-friendly cloud infrastructure", features: ["Droplets", "Managed Databases", "App Platform", "Kubernetes"] },
];

const services = [
  { icon: Shield, title: "Cloud Security", description: "Enterprise-grade security across all cloud platforms" },
  { icon: Zap, title: "Cloud Optimization", description: "Cost optimization and performance tuning" },
  { icon: Database, title: "Data Management", description: "Scalable database solutions and data lakes" },
  { icon: Server, title: "Infrastructure as Code", description: "Automated, reproducible cloud infrastructure" },
];

export default function CloudPlatforms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-accent/10">
                  <Server className="h-12 w-12 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Cloud Platforms</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Expert implementation and management of leading cloud platforms. 
                We help you leverage AWS, Azure, Google Cloud, and more for scalable, reliable infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Start Your Cloud Journey</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Free Assessment
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Platforms We Work With</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <platform.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {platform.features.map((feature, idx) => (
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Cloud Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-xl bg-background border border-border text-center">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Leverage the Cloud?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our certified cloud architects design the perfect solution for your business.
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
