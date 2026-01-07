import { ArrowLeft, Smartphone, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MobileApps() {
  const navigate = useNavigate();

  const services = [
    { name: "Basic Mobile App (Android)", price: "KSh 80,000", description: "Simple Android app with core features" },
    { name: "Basic Mobile App (iOS)", price: "KSh 90,000", description: "Simple iOS app with core features" },
    { name: "Cross-Platform App", price: "KSh 120,000", description: "React Native/Flutter app for both platforms" },
    { name: "E-commerce Mobile App", price: "KSh 180,000", description: "Full shopping app with M-Pesa integration" },
    { name: "Enterprise Mobile App", price: "KSh 250,000", description: "Complex app with backend & admin panel" },
    { name: "App UI/UX Design", price: "KSh 35,000", description: "Professional mobile app design" },
    { name: "App Store Submission", price: "KSh 10,000", description: "Publishing to Google Play or App Store" },
    { name: "App Maintenance (Monthly)", price: "KSh 15,000", description: "Updates, bug fixes & support" },
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Redux", "GraphQL"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10">
                <Smartphone className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Mobile Apps
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Native and cross-platform mobile applications
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We develop powerful mobile applications that provide seamless user experiences across iOS and Android platforms. Our apps are designed for performance, scalability, and maximum user engagement.
              </p>

              {/* Services with Pricing */}
              <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
                <CheckCircle className="text-accent" size={28} />
                Our Services & Pricing
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className="glass-card p-5 hover:border-primary/50 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{service.name}</h3>
                      <span className="text-primary font-bold whitespace-nowrap ml-2">{service.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="glass-card p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="text-primary" size={24} />
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate('/#contact')}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}