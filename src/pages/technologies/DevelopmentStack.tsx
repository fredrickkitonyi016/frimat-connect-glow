import { Link } from "react-router-dom";
import { Layers, ArrowLeft, CheckCircle, Code, Database, Globe, Smartphone, Server, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stacks = [
  { 
    category: "Frontend", 
    icon: Globe, 
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"] 
  },
  { 
    category: "Backend", 
    icon: Server, 
    technologies: ["Node.js", "Python", "Go", "Express", "FastAPI", "Django"] 
  },
  { 
    category: "Mobile", 
    icon: Smartphone, 
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "PWA"] 
  },
  { 
    category: "Database", 
    icon: Database, 
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "MySQL"] 
  },
];

const practices = [
  "Clean Architecture",
  "Test-Driven Development",
  "CI/CD Pipelines",
  "Code Reviews",
  "Documentation",
  "Agile Methodology",
];

export default function DevelopmentStack() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-secondary/10">
                  <Layers className="h-12 w-12 text-secondary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Development Stack</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Modern frameworks and tools for building exceptional software. 
                We use cutting-edge technologies to create fast, scalable, and maintainable applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact-section">Start a Project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254112277289">
                    <Phone className="mr-2 h-4 w-4" />
                    Discuss Tech Stack
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stacks */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {stacks.map((stack, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary/10">
                      <stack.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-muted text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Development Best Practices</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {practices.map((practice, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our expert developers are ready to bring your vision to life with the right technology stack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90" asChild>
                <a href="mailto:info@frimat.co.ke">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                <a href="tel:+254112277289">
                  <Phone className="mr-2 h-4 w-4" />
                  +254 112 277 289
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
