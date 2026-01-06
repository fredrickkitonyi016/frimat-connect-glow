import { Link } from "react-router-dom";
import { Cpu, ArrowLeft, CheckCircle, Wifi, Cloud, BarChart, Lock, Cog, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const platforms = [
  { icon: Cloud, name: "AWS IoT", description: "Comprehensive IoT services from Amazon", features: ["IoT Core", "Greengrass", "IoT Analytics", "Device Management"] },
  { icon: Wifi, name: "Azure IoT", description: "Enterprise IoT platform from Microsoft", features: ["IoT Hub", "Digital Twins", "Edge", "Central"] },
  { icon: Cpu, name: "Google Cloud IoT", description: "Scalable IoT solutions from Google", features: ["Cloud IoT Core", "Edge TPU", "ML Kit", "BigQuery"] },
  { icon: Cog, name: "ThingsBoard", description: "Open-source IoT platform", features: ["Device Management", "Data Collection", "Visualization", "Rule Engine"] },
];

const applications = [
  "Smart Buildings",
  "Industrial Automation",
  "Asset Tracking",
  "Environmental Monitoring",
  "Fleet Management",
  "Predictive Maintenance",
];

export default function IoTPlatforms() {
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
                  <Cpu className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">IoT Platforms</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Connected device solutions that bring the power of IoT to your business. 
                We design, implement, and manage comprehensive IoT ecosystems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Explore IoT Solutions</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Discuss Your Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">IoT Platforms We Work With</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <platform.icon className="h-6 w-6 text-primary" />
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

        {/* Applications */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">IoT Applications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect Your World?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's build an IoT solution that transforms your business operations.
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
