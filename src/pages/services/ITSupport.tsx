import { Link } from "react-router-dom";
import { Monitor, ArrowLeft, CheckCircle, Clock, Users, Headphones, Settings, Wrench, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance whenever you need it" },
  { icon: Headphones, title: "Remote & On-site", description: "Flexible support options tailored to your needs" },
  { icon: Settings, title: "System Maintenance", description: "Proactive maintenance to prevent issues before they occur" },
  { icon: Wrench, title: "Hardware Repairs", description: "Expert diagnosis and repair of all IT equipment" },
  { icon: Users, title: "User Training", description: "Empower your team with technology skills" },
  { icon: Monitor, title: "Network Management", description: "Keep your network running smoothly and securely" },
];

const services = [
  { name: "Remote IT Support (per hour)", price: "KSh 2,000", description: "Instant remote assistance via TeamViewer/AnyDesk" },
  { name: "On-site Support (per visit)", price: "KSh 3,500", description: "Technician visit within Nairobi" },
  { name: "Monthly IT Retainer (Basic)", price: "KSh 15,000/month", description: "10 hours support, email & phone" },
  { name: "Monthly IT Retainer (Pro)", price: "KSh 35,000/month", description: "Unlimited support, priority response" },
  { name: "Computer Repair", price: "KSh 1,500+", description: "Diagnosis & repair (parts extra)" },
  { name: "Laptop Screen Replacement", price: "KSh 8,000+", description: "Screen replacement service" },
  { name: "Virus Removal & Cleanup", price: "KSh 2,000", description: "Complete malware removal" },
  { name: "Data Recovery", price: "KSh 5,000+", description: "Recover lost or deleted files" },
  { name: "Network Setup (Small Office)", price: "KSh 15,000", description: "Up to 10 devices, WiFi included" },
  { name: "Network Setup (Enterprise)", price: "KSh 50,000+", description: "Large scale network infrastructure" },
  { name: "Software Installation", price: "KSh 500/app", description: "Install & configure software" },
  { name: "Windows Installation", price: "KSh 2,500", description: "Fresh OS installation with drivers" },
];

export default function ITSupport() {
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
                  <Monitor className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">IT Support Services</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive 24/7 technical assistance and maintenance to keep your business running smoothly. 
                Our expert team ensures your IT infrastructure operates at peak performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#services-section">View Pricing</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
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

        {/* Services with Pricing */}
        <section id="services-section" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services & Pricing</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transparent, Kenya-friendly pricing for all your IT support needs
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
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

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Support?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help your business thrive with reliable IT support.
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