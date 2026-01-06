import { Link } from "react-router-dom";
import { Cloud, ArrowLeft, CheckCircle, Server, Database, Zap, RefreshCw, Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Server, title: "Cloud Assessment", description: "Evaluate your current infrastructure and plan the optimal migration path" },
  { icon: Database, title: "Data Migration", description: "Secure and seamless transfer of your data to cloud platforms" },
  { icon: Zap, title: "Application Modernization", description: "Transform legacy applications for cloud-native environments" },
  { icon: RefreshCw, title: "Hybrid Cloud Solutions", description: "Blend on-premises and cloud resources for optimal flexibility" },
  { icon: Shield, title: "Cloud Security", description: "Implement robust security measures for your cloud environment" },
  { icon: Cloud, title: "Multi-Cloud Strategy", description: "Leverage multiple cloud providers for maximum efficiency" },
];

const cloudProviders = [
  { name: "Amazon Web Services (AWS)", description: "Market-leading cloud platform" },
  { name: "Microsoft Azure", description: "Enterprise-focused cloud solutions" },
  { name: "Google Cloud Platform", description: "Innovation-driven cloud services" },
  { name: "Digital Ocean", description: "Developer-friendly cloud infrastructure" },
];

export default function CloudMigration() {
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
                  <Cloud className="h-12 w-12 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Cloud Migration Services</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Seamlessly transition your infrastructure to the cloud with our expert migration services. 
                We ensure minimal downtime, maximum security, and optimal performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Start Migration</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Migration Services</h2>
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

        {/* Cloud Providers */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cloud Platforms We Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {cloudProviders.map((provider, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{provider.name}</h3>
                      <p className="text-sm text-muted-foreground">{provider.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through a seamless cloud migration journey.
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
