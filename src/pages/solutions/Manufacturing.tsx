import { ArrowLeft, Factory, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cloudServiceImage from "@/assets/services/cloud-service.jpg";

export default function Manufacturing() {
  const navigate = useNavigate();

  const features = [
    "Smart Manufacturing",
    "Production Analytics",
    "Automation Solutions",
    "Supply Chain"
  ];

  const capabilities = [
    "Predictive Maintenance",
    "Quality Control Systems",
    "Real-time Production Monitoring",
    "Inventory Optimization",
    "Energy Management",
    "Compliance Tracking",
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
                  src={cloudServiceImage} 
                  alt="Manufacturing Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-6">
                  <div className="p-4 rounded-xl bg-white shadow-lg">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                      <Factory className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Manufacturing Solutions
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Industry 4.0 solutions for smart manufacturing
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
                Industry 4.0 solutions that transform your manufacturing operations. Embrace smart manufacturing with IoT, automation, and data-driven insights.
              </p>
            </div>

            {/* Capabilities */}
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="text-accent" size={28} />
              Key Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {capabilities.map((capability, idx) => (
                <div key={idx} className="glass-card p-5 hover:border-primary/50 transition-all flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Transform Your Factory
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}