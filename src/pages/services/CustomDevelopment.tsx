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
                  <a href="#contact-section">Start Your Project</a>
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

        {/* Technologies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
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
