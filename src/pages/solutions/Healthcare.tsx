import { Link } from "react-router-dom";
import { HeartPulse, ArrowLeft, CheckCircle, FileText, Users, Stethoscope, Shield, Activity, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: FileText, title: "Electronic Health Records", description: "Secure, compliant EHR systems for better patient care" },
  { icon: Users, title: "Patient Portals", description: "Empower patients with self-service access to their health data" },
  { icon: Stethoscope, title: "Telemedicine", description: "Virtual consultation platforms for remote healthcare delivery" },
  { icon: Shield, title: "HIPAA Compliance", description: "Ensure your systems meet healthcare data protection standards" },
  { icon: Activity, title: "Health Analytics", description: "Data-driven insights for improved healthcare outcomes" },
  { icon: HeartPulse, title: "Medical Device Integration", description: "Connect IoT medical devices for real-time monitoring" },
];

const benefits = [
  "Improved patient outcomes",
  "Reduced administrative burden",
  "Enhanced data security",
  "Streamlined workflows",
  "Better care coordination",
  "Regulatory compliance",
];

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <HeartPulse className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Healthcare Solutions</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Digital health solutions that improve patient care and streamline operations. 
                We help healthcare providers embrace technology while maintaining the highest standards of security and compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Get Started</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Healthcare Solutions</h2>
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

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Benefits for Healthcare Providers</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Healthcare Delivery</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with us to implement cutting-edge healthcare technology solutions.
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
