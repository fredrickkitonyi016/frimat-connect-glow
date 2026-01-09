import { Link } from "react-router-dom";
import { Cloud, ArrowLeft, CheckCircle, Server, Database, Zap, RefreshCw, Shield, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const features = [
  { icon: Server, title: "Cloud Assessment", description: "Evaluate your current infrastructure and plan the optimal migration path" },
  { icon: Database, title: "Data Migration", description: "Secure and seamless transfer of your data to cloud platforms" },
  { icon: Zap, title: "Application Modernization", description: "Transform legacy applications for cloud-native environments" },
  { icon: RefreshCw, title: "Hybrid Cloud Solutions", description: "Blend on-premises and cloud resources for optimal flexibility" },
  { icon: Shield, title: "Cloud Security", description: "Implement robust security measures for your cloud environment" },
  { icon: Cloud, title: "Multi-Cloud Strategy", description: "Leverage multiple cloud providers for maximum efficiency" },
];

const services = [
  { name: "Cloud Readiness Assessment", price: "KSh 20,000", description: "Evaluate your migration readiness", details: "Infrastructure audit, application compatibility check, cost analysis, migration roadmap, and executive presentation." },
  { name: "Small Business Migration", price: "KSh 45,000", description: "Up to 5 servers/applications", details: "Full migration with data transfer, DNS updates, testing, 2-week post-migration support, and rollback plan." },
  { name: "Medium Business Migration", price: "KSh 120,000", description: "Up to 20 servers/applications", details: "Phased migration approach, minimal downtime, staff training, monitoring setup, and 30-day support." },
  { name: "Enterprise Migration", price: "KSh 300,000+", description: "Large scale infrastructure migration", details: "Dedicated project manager, custom migration strategy, 24/7 support during migration, and 90-day post-migration care." },
  { name: "Database Migration", price: "KSh 30,000", description: "Migrate databases to cloud", details: "Schema migration, data transfer, performance optimization, replication setup, and zero-downtime strategies." },
  { name: "Email Migration (Google/O365)", price: "KSh 500/mailbox", description: "Migrate to cloud email", details: "Full mailbox migration, calendar, contacts, user training, and MX record configuration." },
  { name: "Application Containerization", price: "KSh 40,000/app", description: "Dockerize legacy applications", details: "Dockerfile creation, container optimization, orchestration setup, CI/CD integration, and documentation." },
  { name: "Cloud Architecture Design", price: "KSh 50,000", description: "Design optimal cloud infrastructure", details: "High-availability design, cost optimization, security best practices, scalability planning, and architecture diagrams." },
  { name: "Hybrid Cloud Setup", price: "KSh 80,000", description: "Connect on-premise to cloud", details: "VPN/Direct Connect setup, identity federation, data sync, hybrid networking, and seamless user experience." },
  { name: "Cloud Training (Team)", price: "KSh 25,000", description: "Train your team on cloud tools", details: "Hands-on workshops, console navigation, cost management, security basics, and certification guidance." },
  { name: "Post-Migration Support (Monthly)", price: "KSh 20,000/month", description: "Ongoing support & optimization", details: "24/7 monitoring, performance tuning, security updates, cost reviews, and unlimited support tickets." },
  { name: "Disaster Recovery Setup", price: "KSh 35,000", description: "Cloud-based backup & recovery", details: "Automated backups, cross-region replication, recovery testing, documented procedures, and compliance support." },
];

const cloudProviders = [
  { name: "Amazon Web Services (AWS)", description: "Market-leading cloud platform" },
  { name: "Microsoft Azure", description: "Enterprise-focused cloud solutions" },
  { name: "Google Cloud Platform", description: "Innovation-driven cloud services" },
  { name: "Digital Ocean", description: "Developer-friendly cloud infrastructure" },
];

export default function CloudMigration() {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
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
                  <a href="#services-section">View Pricing</a>
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

        {/* Services with Pricing */}
        <section id="services-section" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services & Pricing</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Affordable cloud migration solutions for Kenyan businesses
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col gap-2 p-5 rounded-xl bg-background border border-border hover:border-accent/50 transition-all">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <span className="text-primary font-bold whitespace-nowrap">{service.price}</span>
                  </div>
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 ml-8 font-medium transition-colors"
                  >
                    {expandedService === index ? <>Less details <ChevronUp size={16} /></> : <>Learn more <ChevronDown size={16} /></>}
                  </button>
                  {expandedService === index && (
                    <div className="ml-8 pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground">{service.details}</p>
                      <Link to="/#contact" className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 mt-2 font-medium">
                        Get a quote →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cloud Platforms We Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {cloudProviders.map((provider, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
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