import { ArrowLeft, Printer, Monitor, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CyberCafe() {
  const navigate = useNavigate();

  const services = [
    { name: "Black & White Printing", price: "KSh 10/page", description: "Standard A4 document printing" },
    { name: "Color Printing", price: "KSh 30/page", description: "Full color A4 document printing" },
    { name: "Photocopying (B&W)", price: "KSh 5/page", description: "Black & white document copying" },
    { name: "Photocopying (Color)", price: "KSh 20/page", description: "Color document copying" },
    { name: "Document Scanning", price: "KSh 20/page", description: "Scan to email or USB" },
    { name: "Lamination (A4)", price: "KSh 100", description: "Protect your documents" },
    { name: "Binding (Spiral)", price: "KSh 150", description: "Professional document binding" },
    { name: "Internet Access (per hour)", price: "KSh 50", description: "High-speed browsing" },
    { name: "CV/Resume Typing", price: "KSh 300", description: "Professional CV formatting" },
    { name: "Document Typing (per page)", price: "KSh 50", description: "Fast & accurate typing" },
    { name: "KRA iTax Filing", price: "KSh 500", description: "Tax returns & PIN registration" },
    { name: "HELB Application/Status", price: "KSh 200", description: "Loan application assistance" },
    { name: "NHIF Registration", price: "KSh 300", description: "Registration & card printing" },
    { name: "Passport Photos", price: "KSh 200", description: "4 passport-size photos" },
    { name: "Good Conduct Application", price: "KSh 500", description: "Online application assistance" },
    { name: "Computer Training (Basic)", price: "KSh 3,000", description: "MS Office essentials (1 week)" },
  ];

  const quickServices = [
    "Printing", "Scanning", "Internet", "iTax", "HELB", "NHIF", "CV Writing", "Training"
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
                <Printer className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Cyber Cafe Services
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Complete digital service center
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your one-stop digital service center offering comprehensive cyber cafe services. From document processing to government service assistance, we handle all your digital needs with professional efficiency.
              </p>

              {/* Quick Services Tags */}
              <div className="glass-card p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Monitor className="text-primary" size={24} />
                  Quick Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {quickServices.map((service, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

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

              <div className="mt-12 text-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate('/#contact')}
                >
                  Visit Us
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