import { ArrowLeft, Printer, Monitor, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function CyberCafe() {
  const navigate = useNavigate();

  const services = [
    { name: "Black & White Printing", price: "KSh 10/page", description: "Standard A4 document printing", details: "Laser printing, fast turnaround, bulk discounts available. Both-side printing at KSh 18/page." },
    { name: "Color Printing", price: "KSh 30/page", description: "Full color A4 document printing", details: "Vivid color output, glossy/matte paper options, photo printing available. A3 size at KSh 60/page." },
    { name: "Photocopying (B&W)", price: "KSh 5/page", description: "Black & white document copying", details: "ID cards, certificates, documents. Enlargement/reduction available. Bulk rates: 100+ pages at KSh 3/page." },
    { name: "Photocopying (Color)", price: "KSh 20/page", description: "Color document copying", details: "High-quality color reproduction, perfect for photos and certificates. A3 color at KSh 40/page." },
    { name: "Document Scanning", price: "KSh 20/page", description: "Scan to email or USB", details: "PDF or image format, high resolution (300-600 DPI), OCR text recognition available. Bulk scanning discounts." },
    { name: "Lamination (A4)", price: "KSh 100", description: "Protect your documents", details: "Glossy or matte finish, ID cards KSh 50, A3 lamination KSh 200. Perfect for certificates and important documents." },
    { name: "Binding (Spiral)", price: "KSh 150", description: "Professional document binding", details: "Plastic or wire spiral, up to 100 pages included. Hard cover binding at KSh 300. Perfect for reports and theses." },
    { name: "Internet Access (per hour)", price: "KSh 50", description: "High-speed browsing", details: "50+ Mbps fiber connection, private workstations, printing from your session. Day pass at KSh 200." },
    { name: "CV/Resume Typing", price: "KSh 300", description: "Professional CV formatting", details: "Modern templates, ATS-friendly format, professional layout, includes 2 revisions. Cover letter at KSh 150 extra." },
    { name: "Document Typing (per page)", price: "KSh 50", description: "Fast & accurate typing", details: "Reports, letters, assignments. Same-day delivery for up to 10 pages. Formatting and tables included." },
    { name: "KRA iTax Filing", price: "KSh 500", description: "Tax returns & PIN registration", details: "PIN application, nil returns, income tax filing, tax compliance certificate. Includes guidance on tax obligations." },
    { name: "HELB Application/Status", price: "KSh 200", description: "Loan application assistance", details: "New applications, loan status check, clearance certificate, repayment schedule. Includes form filling and submission." },
    { name: "NHIF Registration", price: "KSh 300", description: "Registration & card printing", details: "New member registration, card replacement, dependent addition, and payment processing assistance." },
    { name: "Passport Photos", price: "KSh 200", description: "4 passport-size photos", details: "Blue or white background, meets immigration standards, instant delivery. 8 photos at KSh 350." },
    { name: "Good Conduct Application", price: "KSh 500", description: "Online application assistance", details: "Complete online application, fingerprint guidance, appointment booking, and follow-up assistance." },
    { name: "Computer Training (Basic)", price: "KSh 3,000", description: "MS Office essentials (1 week)", details: "Word, Excel, PowerPoint basics. Flexible scheduling, practice materials, and certificate of completion." },
  ];

  const [expandedService, setExpandedService] = useState<number | null>(null);

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
                    <button
                      onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                      className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 mt-3 font-medium transition-colors"
                    >
                      {expandedService === idx ? (
                        <>Less details <ChevronUp size={16} /></>
                      ) : (
                        <>Learn more <ChevronDown size={16} /></>
                      )}
                    </button>
                    {expandedService === idx && (
                      <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                        <Link
                          to="/#contact"
                          className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 mt-2 font-medium"
                        >
                          Get a quote for this service →
                        </Link>
                      </div>
                    )}
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