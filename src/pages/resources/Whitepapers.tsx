import { Link } from "react-router-dom";
import { FileText, ArrowLeft, Download, Clock, Users, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whitepapers = [
  {
    title: "The Complete Guide to Cloud Migration for SMEs",
    description: "A comprehensive roadmap for small and medium enterprises looking to transition their infrastructure to the cloud.",
    category: "Cloud Computing",
    readTime: "15 min read",
    pages: "24 pages",
  },
  {
    title: "Cybersecurity Best Practices for 2024",
    description: "Stay ahead of emerging threats with our latest security recommendations and implementation strategies.",
    category: "Cybersecurity",
    readTime: "20 min read",
    pages: "32 pages",
  },
  {
    title: "Digital Transformation in East African Markets",
    description: "Insights into the unique challenges and opportunities for digital transformation in the region.",
    category: "Digital Strategy",
    readTime: "12 min read",
    pages: "18 pages",
  },
  {
    title: "Building Scalable E-commerce Platforms",
    description: "Technical guide to creating e-commerce solutions that grow with your business.",
    category: "E-commerce",
    readTime: "18 min read",
    pages: "28 pages",
  },
  {
    title: "IoT Implementation for Manufacturing",
    description: "Step-by-step guide to implementing IoT solutions in manufacturing environments.",
    category: "IoT",
    readTime: "22 min read",
    pages: "36 pages",
  },
  {
    title: "Financial Technology Compliance Guide",
    description: "Navigate regulatory requirements for fintech applications in Kenya and beyond.",
    category: "Fintech",
    readTime: "25 min read",
    pages: "40 pages",
  },
];

export default function Whitepapers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Whitepapers & Guides</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                In-depth research, technical guides, and industry insights from our experts. 
                Download our whitepapers to stay informed about the latest technology trends.
              </p>
            </div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg flex flex-col">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                    {paper.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{paper.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{paper.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {paper.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {paper.pages}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact-section">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Get New Whitepapers First</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter and be the first to receive our latest research and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-80"
                />
                <Button size="lg">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Research?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We can create tailored research and analysis for your specific business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:info@frimat.co.ke">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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
