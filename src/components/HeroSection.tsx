import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import { useCountUp } from "@/hooks/useCountUp";

export default function HeroSection() {
  const projectsCount = useCountUp({ end: 20, duration: 3000, enableScrollTrigger: false });
  const clientsCount = useCountUp({ end: 100, suffix: '+', duration: 3500, enableScrollTrigger: false });
  const uptimeCount = useCountUp({ end: 24, suffix: '/7', duration: 2000, enableScrollTrigger: false });
  const ratingCount = useCountUp({ end: 5, suffix: ' Star Rating', duration: 2500, enableScrollTrigger: false });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Tech Particles */}
      <div className="tech-particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="fade-in space-y-8">
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full">
            <Sparkles className="text-accent" size={20} />
            <span className="text-sm font-medium text-foreground">Innovation Powered by Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FRIMAT
            </span>
            <br />
            <span className="text-foreground">TECHNOLOGIES</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connecting Innovation. Delivering Solutions.
            <br />
            <span className="text-lg text-accent">Where Technology Meets Excellence</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="#services">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="group" asChild>
              <Link to="/auth">
                Sign Up
                <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="glass-card text-center p-6 hover-scale">
              <div ref={projectsCount.ref} className="text-3xl font-bold text-primary mb-2">{projectsCount.value}</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glass-card text-center p-6 hover-scale">
              <div ref={clientsCount.ref} className="text-3xl font-bold text-primary mb-2">{clientsCount.value}</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="glass-card text-center p-6 hover-scale">
              <div ref={uptimeCount.ref} className="text-3xl font-bold text-primary mb-2">{uptimeCount.value}</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="glass-card text-center p-6 hover-scale">
              <div ref={ratingCount.ref} className="text-3xl font-bold text-primary mb-2">{ratingCount.value}</div>
              <div className="text-sm text-muted-foreground">Customer Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}