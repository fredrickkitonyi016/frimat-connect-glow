import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import blogImage from "@/assets/portfolio-1.jpg";

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI-driven economy.",
      image: blogImage,
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      featured: true,
      tags: ["AI", "Machine Learning", "Business Strategy"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every small business should implement to protect against cyber threats and data breaches.",
      image: blogImage,
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      featured: true,
      tags: ["Security", "Best Practices", "SMB"]
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Enterprises",
      excerpt: "Step-by-step guide to successfully migrating your enterprise infrastructure to the cloud with minimal downtime.",
      image: blogImage,
      author: "David Wilson",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Cloud Computing",
      featured: false,
      tags: ["Cloud", "Migration", "Enterprise"]
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Compare the latest web development frameworks and learn how to choose the right technology stack for your project.",
      image: blogImage,
      author: "Emily Rodriguez",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Web Development",
      featured: false,
      tags: ["React", "Vue", "Scalability"]
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: What You Need to Know",
      excerpt: "Understanding edge computing and its impact on performance, latency, and data processing in modern applications.",
      image: blogImage,
      author: "James Liu",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      category: "Edge Computing",
      featured: false,
      tags: ["Edge Computing", "Performance", "IoT"]
    },
    {
      id: 6,
      title: "Mobile App Development Trends for 2024",
      excerpt: "Latest trends in mobile development including cross-platform frameworks, AI integration, and user experience innovations.",
      image: blogImage,
      author: "Anna Thompson",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "Mobile Development",
      featured: false,
      tags: ["Mobile", "React Native", "Flutter"]
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Cloud Computing", "Web Development", "Mobile Development"];

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Tech </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital innovation.
          </p>
        </div>

        {/* Filter Categories */}
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

        {/* Featured Articles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {articles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="glass-card hover-scale group overflow-hidden">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-background text-xs font-bold rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted/20 text-xs rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="glass" className="w-full group">
                  Read More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.filter(article => !article.featured).map((article) => (
            <div key={article.id} className="glass-card hover-scale group overflow-hidden">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{article.author}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-muted/20 text-xs rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="px-2 py-1 bg-muted/20 text-xs rounded-full text-muted-foreground">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated with Tech Insights
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter and never miss the latest tech trends and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 1000+ tech professionals who read our weekly insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}