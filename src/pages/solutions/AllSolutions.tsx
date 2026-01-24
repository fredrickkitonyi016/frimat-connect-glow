import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  HeartPulse, 
  ShoppingBag, 
  Building2, 
  Factory,
  CheckCircle
} from "lucide-react";

const solutions = [
  {
    icon: HeartPulse,
    gradient: "from-red-500 to-pink-500",
    title: "Healthcare",
    description: "Digital health solutions that transform patient care and streamline medical operations",
    features: ["Electronic Health Records", "Telemedicine Platforms", "Patient Portals", "Medical Billing Systems"],
    href: "/solutions/healthcare"
  },
  {
    icon: ShoppingBag,
    gradient: "from-amber-500 to-orange-500",
    title: "Retail & E-commerce",
    description: "Modern retail technology solutions for seamless omnichannel experiences",
    features: ["POS Systems", "Inventory Management", "Customer Analytics", "Loyalty Programs"],
    href: "/solutions/retail"
  },
  {
    icon: Building2,
    gradient: "from-green-500 to-emerald-500",
    title: "Finance & Banking",
    description: "Secure financial systems that protect assets and enhance customer trust",
    features: ["Core Banking Systems", "Payment Processing", "Fraud Detection", "Regulatory Compliance"],
    href: "/solutions/finance"
  },
  {
    icon: Factory,
    gradient: "from-blue-500 to-indigo-500",
    title: "Manufacturing",
    description: "Industry 4.0 solutions for smart factories and optimized production",
    features: ["IoT Integration", "Predictive Maintenance", "Supply Chain Management", "Quality Control"],
    href: "/solutions/manufacturing"
  }
];

export default function AllSolutions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Industry </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored technology solutions designed for specific industry needs and challenges.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={index}
                  onClick={() => navigate(solution.href)}
                  className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 p-8"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="glass" 
                    className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can tailor our technology to meet your industry-specific requirements.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
