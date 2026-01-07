import { ArrowLeft, Globe, Code, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebDevelopment() {
  const navigate = useNavigate();

  const services = [
    { name: "Basic Website (5 pages)", price: "KSh 25,000", description: "Simple static website with responsive design" },
    { name: "Business Website (10 pages)", price: "KSh 45,000", description: "Professional site with contact forms & SEO" },
    { name: "E-commerce Website", price: "KSh 75,000", description: "Online store with M-Pesa & payment integration" },
    { name: "Custom Web Application", price: "KSh 120,000", description: "Tailored web app with database & user auth" },
    { name: "WordPress Website", price: "KSh 20,000", description: "CMS-based site easy to manage yourself" },
    { name: "Landing Page", price: "KSh 15,000", description: "Single page for campaigns or promotions" },
    { name: "Website Redesign", price: "KSh 30,000", description: "Modernize your existing website" },
    { name: "Website Maintenance (Monthly)", price: "KSh 5,000", description: "Updates, backups & security monitoring" },
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

          <div className="max-w-5xl mx-auto">
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