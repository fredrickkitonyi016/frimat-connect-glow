import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import portfolioImage from "@/assets/portfolio-1.jpg";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "KRA Tax Portal Integration",
      description: "Built a secure integration system for automated tax filing and compliance tracking. Reduced manual filing time by 70% for small businesses.",
      image: portfolioImage,
      category: "Web Development",
      technologies: ["PHP", "MySQL", "Laravel", "KRA API"],
      year: "2023",
      client: "Nairobi Accounting Services",
      featured: true
    },
    {
      id: 2,
      title: "Matatu SACCO Management System",
      description: "Complete fleet management solution tracking routes, payments, and driver schedules for 45 vehicles across Nairobi routes.",
      image: portfolioImage,
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL", "M-Pesa API"],
      year: "2024",
      client: "Eastlands Transporters SACCO",
      featured: true
    },
    {
      id: 3,
      title: "School ERP System",
      description: "Fee management, student records, and parent communication portal for a secondary school with 800+ students.",
      image: portfolioImage,
      category: "Education",
      technologies: ["WordPress", "PHP", "MySQL", "SMS Gateway"],
      year: "2023",
      client: "St. Mary's High School",
      featured: false
    },
    {
      id: 4,
      title: "Cyber Cafe Billing Software",
      description: "Time tracking and billing system managing 20 workstations with automatic session logs and prepaid card support.",
      image: portfolioImage,
      category: "Software",
      technologies: ["C#", "Windows Forms", "SQLite", "Receipt Printer"],
      year: "2022",
      client: "TechHub Cyber Cafe",
      featured: false
    },
    {
      id: 5,
      title: "Hardware Inventory & POS",
      description: "Stock management and point of sale system for computer parts shop. Tracks warranty, suppliers, and generates quotations.",
      image: portfolioImage,
      category: "Retail",
      technologies: ["React", "Firebase", "Thermal Printer", "Barcode Scanner"],
      year: "2024",
      client: "ComputerWorld Kenya",
      featured: false
    },
    {
      id: 6,
      title: "Real Estate Listings Portal",
      description: "Property search website with agent dashboards, WhatsApp integration, and virtual tour embedding for 200+ listings.",
      image: portfolioImage,
      category: "Web Development",
      technologies: ["WordPress", "Elementor", "MySQL", "WhatsApp API"],
      year: "2023",
      client: "Nairobi Properties Ltd",
      featured: true
    }
  ];

  const categories = ["All", "Web Development", "Education", "Software", "Retail"];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "glass" : "nav"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id} className="glass-card hover-scale group overflow-hidden">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button variant="glass" size="sm">
                      <ExternalLink size={16} />
                    </Button>
                    <Button variant="glass" size="sm">
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-background text-xs font-bold rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Client: {project.client}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted/20 text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="glass" className="w-full group">
                  View Project Details
                  <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.id} className="glass-card hover-scale group overflow-hidden">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button variant="glass" size="sm">
                      <ExternalLink size={16} />
                    </Button>
                    <Button variant="glass" size="sm">
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground">{project.year}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted/20 text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted/20 text-xs rounded-full text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}