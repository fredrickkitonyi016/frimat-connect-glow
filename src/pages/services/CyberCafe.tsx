import { ArrowLeft, Printer, Monitor, CheckCircle, ChevronDown, ChevronUp, ExternalLink, FileText, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import service images
import itSupportService from "@/assets/services/it-support-service.jpg";

// Government service quick links
const governmentPortals = [
  {
    name: "KRA iTax",
    icon: FileText,
    url: "https://itax.kra.go.ke",
    price: "KSh 500",
    description: "Tax returns & PIN registration",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "HELB",
    icon: GraduationCap,
    url: "https://www.helb.co.ke",
    price: "KSh 200",
    description: "Student loans & clearance",
    color: "from-green-500 to-green-600"
  },
  {
    name: "SHA",
    icon: Heart,
    url: "https://www.sha.go.ke",
    price: "KSh 300",
    description: "Health insurance (formerly NHIF)",
    color: "from-red-500 to-red-600"
  }
];

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
    { name: "SHA Registration", price: "KSh 300", description: "Health insurance registration", details: "New member registration (formerly NHIF), card replacement, dependent addition, and payment processing assistance." },
    { name: "Passport Photos", price: "KSh 200", description: "4 passport-size photos", details: "Blue or white background, meets immigration standards, instant delivery. 8 photos at KSh 350." },
    { name: "Good Conduct Application", price: "KSh 500", description: "Online application assistance", details: "Complete online application, fingerprint guidance, appointment booking, and follow-up assistance." },
    { name: "Computer Training (Basic)", price: "KSh 3,000", description: "MS Office essentials (1 week)", details: "Word, Excel, PowerPoint basics. Flexible scheduling, practice materials, and certificate of completion." },
  ];

  const [expandedService, setExpandedService] = useState<number | null>(null);

  const quickServices = [
    "Printing", "Scanning", "Internet", "iTax", "HELB", "SHA", "CV Writing", "Training"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${itSupportService})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>

          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm">
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
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Your one-stop digital service center offering comprehensive cyber cafe services. 
              From document processing to government service assistance, we handle all your digital needs with professional efficiency.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Government Services Quick Access */}
            <div className="glass-card p-8 -mt-10 relative z-20 mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="text-primary" size={28} />
                Government Services Portal
              </h3>
              <p className="text-muted-foreground mb-6">
                Quick access to Kenya's essential government services. Click to visit the portal or get our professional assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {governmentPortals.map((portal, idx) => {
                  const Icon = portal.icon;
                  return (
                    <div 
                      key={idx}
                      className="relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all group"
                    >
                      <div className={`bg-gradient-to-r ${portal.color} p-4`}>
                        <div className="flex items-center justify-between">
                          <Icon className="text-white" size={24} />
                          <span className="text-white/90 text-sm font-medium">{portal.price}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mt-2">{portal.name}</h4>
                        <p className="text-white/80 text-sm">{portal.description}</p>
                      </div>
                      <div className="p-4 bg-card flex gap-2">
                        <a 
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="glass" size="sm" className="w-full">
                            Visit Portal
                            <ExternalLink size={14} className="ml-1" />
                          </Button>
                        </a>
                        <Button 
                          variant="hero" 
                          size="sm"
                          onClick={() => navigate('/#contact')}
                        >
                          Get Help
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  variant="glass"
                  onClick={() => navigate('/services/government-services')}
                >
                  View All Government Services →
                </Button>
              </div>
            </div>

            {/* Quick Services Tags */}
            <div className="glass-card p-6 mb-12">
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
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
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
                  <AnimatePresence>
                    {expandedService === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pt-3 border-t border-border">
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                          <Link
                            to="/#contact"
                            className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent/80 mt-2 font-medium"
                          >
                            Get a quote for this service →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
      </main>
      <Footer />
    </div>
  );
}