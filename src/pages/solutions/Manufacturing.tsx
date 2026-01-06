import { Link } from "react-router-dom";
import { Factory, ArrowLeft, CheckCircle, Cog, BarChart, Cpu, Truck, Settings, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Cog, title: "Smart Manufacturing", description: "IoT-enabled production systems for efficiency and quality" },
  { icon: BarChart, title: "Production Analytics", description: "Real-time monitoring and predictive maintenance insights" },
  { icon: Cpu, title: "Automation Solutions", description: "Robotics and process automation for improved productivity" },
  { icon: Truck, title: "Supply Chain", description: "End-to-end visibility and optimization of your supply chain" },
  { icon: Settings, title: "ERP Integration", description: "Seamless integration with SAP, Oracle, and other ERP systems" },
  { icon: Factory, title: "Digital Twin", description: "Virtual replicas for simulation and optimization" },
];

const capabilities = [
  "Predictive Maintenance",
  "Quality Control Systems",
  "Real-time Production Monitoring",
  "Inventory Optimization",
  "Energy Management",
  "Compliance Tracking",
];

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-secondary/10">
                  <Factory className="h-12 w-12 text-secondary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Manufacturing Solutions</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Industry 4.0 solutions that transform your manufacturing operations. 
                Embrace smart manufacturing with IoT, automation, and data-driven insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Transform Your Factory</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Industry 4.0 Solutions</h2>
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

        {/* Capabilities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Industry 4.0?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how smart manufacturing can revolutionize your operations.
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
