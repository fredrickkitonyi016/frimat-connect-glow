import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aiBusinessImage from "@/assets/blog/ai-business.jpg";
import cybersecurityImage from "@/assets/blog/cybersecurity.jpg";
import cloudComputingImage from "@/assets/blog/cloud-computing.jpg";
import webDevImage from "@/assets/blog/web-development.jpg";
import edgeComputingImage from "@/assets/blog/edge-computing.jpg";
import mobileDevImage from "@/assets/blog/mobile-development.jpg";

export default function BlogSection() {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const articles = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore how artificial intelligence is reshaping industries and what businesses need to know to stay competitive in the AI-driven economy.",
      image: aiBusinessImage,
      author: "Fredrick Kitonyi",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      featured: true,
      tags: ["AI", "Machine Learning", "Business Strategy"]
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Kenyan SMEs",
      excerpt: "Essential security measures every small business should implement to protect against cyber threats and data breaches in the digital age.",
      image: cybersecurityImage,
      author: "Sylvester Karanja",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      category: "Cybersecurity",
      featured: true,
      tags: ["Security", "Best Practices", "SMB"]
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for East African Enterprises",
      excerpt: "Step-by-step guide to successfully migrating your enterprise infrastructure to the cloud with minimal downtime and maximum ROI.",
      image: cloudComputingImage,
      author: "FRIMAT Team",
      date: "Jan 10, 2025",
      readTime: "12 min read",
      category: "Cloud Computing",
      featured: true,
      tags: ["Cloud", "Migration", "Enterprise"]
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Compare the latest web development frameworks and learn how to choose the right technology stack for your project.",
      image: webDevImage,
      author: "Fredrick Kitonyi",
      date: "Jan 8, 2025",
      readTime: "10 min read",
      category: "Web Development",
      featured: false,
      tags: ["React", "Vue", "Scalability"]
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: What You Need to Know",
      excerpt: "Understanding edge computing and its impact on performance, latency, and data processing in modern applications.",
      image: edgeComputingImage,
      author: "Sylvester Karanja",
      date: "Jan 5, 2025",
      readTime: "7 min read",
      category: "Edge Computing",
      featured: false,
      tags: ["Edge Computing", "Performance", "IoT"]
    },
    {
      id: 6,
      title: "Mobile App Development Trends for 2025",
      excerpt: "Latest trends in mobile development including cross-platform frameworks, AI integration, and user experience innovations.",
      image: mobileDevImage,
      author: "FRIMAT Team",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      category: "Mobile Development",
      featured: false,
      tags: ["Mobile", "React Native", "Flutter"]
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const nextFeatured = useCallback(() => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredArticles.length);
  }, [featuredArticles.length]);

  const prevFeatured = useCallback(() => {
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  }, [featuredArticles.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextFeatured();
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextFeatured]);

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Cloud Computing", "Web Development", "Mobile Development"];

  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Tech </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital innovation.
          </p>
        </motion.div>

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

        {/* Featured Article Carousel */}
        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="glass-card overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeaturedIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={featuredArticles[currentFeaturedIndex].image} 
                    alt={featuredArticles[currentFeaturedIndex].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-background text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium rounded-full">
                      {featuredArticles[currentFeaturedIndex].category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4 p-4 lg:p-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{featuredArticles[currentFeaturedIndex].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{featuredArticles[currentFeaturedIndex].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredArticles[currentFeaturedIndex].readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-foreground">
                    {featuredArticles[currentFeaturedIndex].title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {featuredArticles[currentFeaturedIndex].excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredArticles[currentFeaturedIndex].tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-muted/20 text-xs rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="glass" className="w-fit group">
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Button
                variant="glass"
                size="icon"
                onClick={prevFeatured}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Button
                variant="glass"
                size="icon"
                onClick={nextFeatured}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4 pb-4">
              {featuredArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeaturedIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentFeaturedIndex 
                      ? 'w-8 bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.div 
              key={article.id} 
              className="glass-card hover-scale group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
                  {article.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
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
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
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
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button 
                variant="glass"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
              </Button>
              <Button 
                variant="nav"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}