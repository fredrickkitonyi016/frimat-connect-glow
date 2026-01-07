import { Link } from "react-router-dom";
import { Code, ArrowLeft, CheckCircle, Smartphone, Globe, Database, Palette, Cog, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Globe, title: "Web Applications", description: "Custom web apps built with modern frameworks and technologies" },
  { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android" },
  { icon: Database, title: "Backend Systems", description: "Scalable APIs and database solutions for your applications" },
  { icon: Palette, title: "UI/UX Design", description: "Beautiful, intuitive interfaces that users love" },
  { icon: Cog, title: "System Integration", description: "Connect your existing systems for seamless workflows" },
  { icon: Code, title: "Custom Software", description: "Tailored solutions for unique business challenges" },
];

const services = [
  { name: "Custom Web App (Basic)", price: "KSh 80,000", description: "Simple web application with database" },
  { name: "Custom Web App (Advanced)", price: "KSh 200,000", description: "Complex app with multiple modules" },
  { name: "Enterprise Software", price: "KSh 500,000+", description: "Large-scale business systems" },
  { name: "API Development", price: "KSh 40,000", description: "RESTful or GraphQL API" },
  { name: "Database Design", price: "KSh 25,000", description: "Optimized database architecture" },
  { name: "System Integration", price: "KSh 50,000", description: "Connect existing systems" },
  { name: "UI/UX Design", price: "KSh 35,000", description: "Complete interface design" },
  { name: "MVP Development", price: "KSh 100,000", description: "Minimum viable product for startups" },
  { name: "Legacy System Upgrade", price: "KSh 80,000+", description: "Modernize old software" },
  { name: "Technical Consultation (per day)", price: "KSh 15,000", description: "Expert advice & planning" },
  { name: "Code Review & Audit", price: "KSh 20,000", description: "Review existing codebase" },
  { name: "Maintenance & Support (Monthly)", price: "KSh 25,000", description: "Ongoing development support" },
];

const technologies = [
  "React & Next.js",
  "Node.js & Python",
  "React Native & Flutter",
  "PostgreSQL & MongoDB",
  "AWS & Google Cloud",
  "Docker & Kubernetes",
];

export default function CustomDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-secondary/10">
                  <Code className="h-12 w-12 text-secondary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Custom Development</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your ideas into powerful software solutions. Our expert developers 
                create custom applications tailored to your unique business requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#services-section">View Pricing</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Discuss Your Idea
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What We Build</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all hover:shadow-lg">
                  <div className="p-3 rounded-xl bg-secondary/10 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-secondary" />
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
              Custom software development at competitive Kenyan rates
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between gap-4 p-5 rounded-xl bg-background border border-border hover:border-secondary/50 transition-all">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <span className="text-primary font-bold whitespace-nowrap">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with custom software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90" asChild>
                <a href="mailto:info@frimat.co.ke">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
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