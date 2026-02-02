import { ArrowLeft, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cybersecurityImage from "@/assets/services/cybersecurity-service.jpg";

export default function Finance() {
  const navigate = useNavigate();

  const features = [
    "Digital Banking",
    "Fraud Detection",
    "Financial Analytics",
    "Regulatory Compliance"
  ];

  const compliance = [
    "Central Bank of Kenya (CBK)",
    "PCI DSS Compliance",
    "Data Protection Act",
    "AML/CFT Regulations",
    "ISO 27001",
    "SOC 2 Type II",
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
            {/* Hero Card - Matching Services Section Style */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border mb-12">
              {/* Header Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={cybersecurityImage} 
                  alt="Finance & Banking Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Finance & Banking
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Secure financial technology for modern banking
                </p>

                {/* Features with bullet points */}
                <div className="space-y-3 pt-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-base">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Secure financial technology solutions for banks, SACCOs, and fintech companies. We build systems that are robust, compliant, and designed for the modern financial landscape.
              </p>
            </div>

            {/* Compliance */}
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="text-accent" size={28} />
              Compliance & Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {compliance.map((item, idx) => (
                <div key={idx} className="glass-card p-5 hover:border-primary/50 transition-all flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}