import { ArrowLeft, Globe, Code, Zap, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebDevelopment() {
  const navigate = useNavigate();

  const features = [
    "Custom website design and development",
    "React, Vue.js, and modern frameworks",
    "Full-stack development with APIs",
    "E-commerce integration",
    "Performance optimization",
    "SEO-friendly architecture",
    "Responsive mobile-first design",
    "CMS integration (WordPress, Strapi)",
  ];

  const technologies = [
    "React", "Vue.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS"
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
                <Globe className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Web Development
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Custom web applications built with modern frameworks
                </p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our web development team creates cutting-edge websites and web applications using the latest technologies. We specialize in responsive design, user experience optimization, and scalable architecture that grows with your business.
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
                    <Code className="text-primary" size={24} />
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
                    <p className="text-2xl font-bold text-foreground">KSh 50,000</p>
                    <p className="text-sm text-muted-foreground">Timeline: 2-8 weeks</p>
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
