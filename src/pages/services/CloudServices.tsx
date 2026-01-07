import { ArrowLeft, Cloud, Server, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CloudServices() {
  const navigate = useNavigate();

  const features = [
    "Cloud infrastructure setup and management",
    "AWS, Azure, and Google Cloud expertise",
    "DevOps and CI/CD pipelines",
    "Microservices architecture",
    "Auto-scaling and load balancing",
    "Disaster recovery and backup",
    "Cost optimization strategies",
    "24/7 monitoring and support",
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"
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

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10">
                <Cloud className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Cloud Services
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Scalable cloud infrastructure and migration
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement best practices for security, performance, and cost efficiency.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-accent" size={24} />
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Server className="text-primary" size={24} />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="text-accent" size={20} />
                      <span className="font-semibold">Starting Price</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">KSh 30,000/month</p>
                    <p className="text-sm text-muted-foreground">Timeline: 1-4 weeks</p>
                  </div>
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
