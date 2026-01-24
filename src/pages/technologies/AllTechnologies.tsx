import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, 
  Server, 
  Layers, 
  Lock, 
  Cpu,
  CheckCircle
} from "lucide-react";

const technologies = [
  {
    icon: Server,
    gradient: "from-sky-500 to-blue-500",
    title: "Cloud Platforms",
    description: "Enterprise-grade cloud infrastructure powered by leading providers",
    features: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Multi-Cloud Strategy"],
    href: "/technologies/cloud-platforms"
  },
  {
    icon: Layers,
    gradient: "from-purple-500 to-violet-500",
    title: "Development Stack",
    description: "Modern frameworks and tools for building scalable applications",
    features: ["React & Next.js", "Node.js & Python", "TypeScript", "GraphQL & REST APIs"],
    href: "/technologies/development-stack"
  },
  {
    icon: Lock,
    gradient: "from-red-500 to-orange-500",
    title: "Security Tools",
    description: "Enterprise-grade security solutions to protect your digital assets",
    features: ["Firewalls & WAF", "SIEM Systems", "Penetration Testing", "Compliance Automation"],
    href: "/technologies/security-tools"
  },
  {
    icon: Cpu,
    gradient: "from-teal-500 to-cyan-500",
    title: "IoT Platforms",
    description: "Connected device solutions for smart operations and monitoring",
    features: ["Sensor Networks", "Edge Computing", "Real-time Analytics", "Device Management"],
    href: "/technologies/iot-platforms"
  }
];

export default function AllTechnologies() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology stack powering modern digital solutions.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={index}
                  onClick={() => navigate(tech.href)}
                  className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 p-8"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tech.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tech.features.map((feature, featureIndex) => (
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
                Ready to Leverage These Technologies?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Let our experts help you choose the right technology stack for your project.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Get Started
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
