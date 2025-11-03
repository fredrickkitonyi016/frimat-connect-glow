import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Calendar, CheckCircle2, Clock } from "lucide-react";
import portfolioKra from "@/assets/portfolio-kra.jpg";
import portfolioSacco from "@/assets/portfolio-sacco.jpg";
import portfolioSchool from "@/assets/portfolio-school.jpg";
import portfolioCyber from "@/assets/portfolio-cyber.jpg";
import portfolioPos from "@/assets/portfolio-pos.jpg";
import portfolioRealEstate from "@/assets/portfolio-realestate.jpg";


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  year: string;
  client: string;
  featured: boolean;
  fullDescription?: string;
  results?: string[];
  duration?: string;
}

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = [
    {
      id: 1,
      title: "KRA Tax Portal Integration",
      description: "Built a secure integration system for automated tax filing and compliance tracking. Reduced manual filing time by 70% for small businesses.",
      image: portfolioKra,
      category: "Web Development",
      technologies: ["PHP", "MySQL", "Laravel", "KRA API"],
      year: "2023",
      client: "Nairobi Accounting Services",
      featured: true,
      fullDescription: "Developed a comprehensive integration system that connects directly with KRA iTax portal. The system automates monthly and annual tax returns, VAT submissions, and PAYE calculations. Features include automatic data validation, error checking before submission, and compliance alerts for upcoming deadlines.",
      results: [
        "Reduced tax filing time from 4 hours to 45 minutes per month",
        "Eliminated 95% of manual data entry errors",
        "Automated compliance reminders saved clients Ksh 2M in penalties",
        "Now serving 120+ SMEs across Nairobi"
      ],
      duration: "3 months"
    },
    {
      id: 2,
      title: "Matatu SACCO Management System",
      description: "Complete fleet management solution tracking routes, payments, and driver schedules for 45 vehicles across Nairobi routes.",
      image: portfolioSacco,
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL", "M-Pesa API"],
      year: "2024",
      client: "Eastlands Transporters SACCO",
      featured: true,
      fullDescription: "Built an all-in-one SACCO management platform handling daily collections, route assignments, vehicle maintenance schedules, and driver performance tracking. Integrated M-Pesa for seamless payment processing and SMS notifications for members.",
      results: [
        "Tracking daily collections of Ksh 800K+ across all routes",
        "Reduced cash handling discrepancies by 85%",
        "Automated driver shift scheduling for 90 drivers",
        "Real-time GPS tracking increased route efficiency by 30%"
      ],
      duration: "5 months"
    },
    {
      id: 3,
      title: "School ERP System",
      description: "Fee management, student records, and parent communication portal for a secondary school with 800+ students.",
      image: portfolioSchool,
      category: "Education",
      technologies: ["WordPress", "PHP", "MySQL", "SMS Gateway"],
      year: "2023",
      client: "St. Mary's High School",
      featured: false,
      fullDescription: "Comprehensive school management system covering student admissions, fee payments via M-Pesa, exam grading, report card generation, and parent-teacher communication. Includes student attendance tracking and library management modules.",
      results: [
        "Processing 800+ student records and fee payments",
        "Automated report card generation saves 2 weeks per term",
        "Parent portal engagement at 78%",
        "Reduced fee defaulting through automated SMS reminders"
      ],
      duration: "4 months"
    },
    {
      id: 4,
      title: "Cyber Cafe Billing Software",
      description: "Time tracking and billing system managing 20 workstations with automatic session logs and prepaid card support.",
      image: portfolioCyber,
      category: "Software",
      technologies: ["C#", "Windows Forms", "SQLite", "Receipt Printer"],
      year: "2022",
      client: "TechHub Cyber Cafe",
      featured: false,
      fullDescription: "Desktop application that manages workstation time billing, prepaid card system, printing charges, and generates daily revenue reports. Features automatic session logging, idle time detection, and receipt printing for all transactions.",
      results: [
        "Managing 20 workstations serving 150+ customers daily",
        "Prepaid card system increased customer retention by 40%",
        "Automated billing eliminated revenue leakage of ~Ksh 15K/month",
        "Daily reports streamlined accounting and reduced closing time"
      ],
      duration: "2 months"
    },
    {
      id: 5,
      title: "Hardware Inventory & POS",
      description: "Stock management and point of sale system for computer parts shop. Tracks warranty, suppliers, and generates quotations.",
      image: portfolioPos,
      category: "Retail",
      technologies: ["React", "Firebase", "Thermal Printer", "Barcode Scanner"],
      year: "2024",
      client: "ComputerWorld Kenya",
      featured: false,
      fullDescription: "Full inventory management system with barcode scanning, automatic stock alerts, warranty tracking, supplier management, and integrated quotation generator. POS module handles walk-in sales and generates professional receipts and invoices.",
      results: [
        "Managing inventory of 2,000+ computer parts and accessories",
        "Reduced stock counting time from 8 hours to 30 minutes",
        "Warranty tracking prevented Ksh 300K in lost claims",
        "Professional quotations increased conversion rate by 25%"
      ],
      duration: "3 months"
    },
    {
      id: 6,
      title: "Real Estate Listings Portal",
      description: "Property search website with agent dashboards, WhatsApp integration, and virtual tour embedding for 200+ listings.",
      image: portfolioRealEstate,
      category: "Web Development",
      technologies: ["WordPress", "Elementor", "MySQL", "WhatsApp API"],
      year: "2023",
      client: "Nairobi Properties Ltd",
      featured: true,
      fullDescription: "Modern property listing website with advanced search filters, agent management system, WhatsApp click-to-chat integration, virtual tour embedding, and lead tracking. Mobile-responsive design optimized for Kenya's mobile-first users.",
      results: [
        "Hosting 200+ active property listings across Nairobi",
        "WhatsApp integration increased inquiry rate by 60%",
        "Mobile traffic accounts for 85% of all visits",
        "Agent dashboard reduced listing update time by 70%"
      ],
      duration: "3 months"
    }
  ];

  const categories = ["All", "Web Development", "Education", "Software", "Retail"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "glass" : "nav"}
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.filter(p => p.featured).map((project) => (
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

                <Button 
                  variant="glass" 
                  className="w-full group"
                  onClick={() => setSelectedProject(project)}
                >
                  View Project Details
                  <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(p => !p.featured).map((project) => (
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

                <Button 
                  variant="nav" 
                  className="w-full"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
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

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="text-primary" size={16} />
                  <span className="text-muted-foreground">Year: {selectedProject.year}</span>
                </div>
                {selectedProject.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={16} />
                    <span className="text-muted-foreground">Duration: {selectedProject.duration}</span>
                  </div>
                )}
                <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                  {selectedProject.category}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Client</h3>
                <p className="text-muted-foreground">{selectedProject.client}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {selectedProject.results && selectedProject.results.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-muted/20 text-sm rounded-full text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="glass" className="flex-1">
                  <ExternalLink size={16} className="mr-2" />
                  Visit Project
                </Button>
                <Button variant="nav" className="flex-1">
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}