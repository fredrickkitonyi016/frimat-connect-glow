import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-corporate.jpg";
import { useCountUp } from "@/hooks/useCountUp";

export default function HeroSection() {
  const projectsCount = useCountUp({ end: 20, duration: 3000, enableScrollTrigger: false });
  const clientsCount = useCountUp({ end: 100, suffix: '+', duration: 3500, enableScrollTrigger: false });
  const uptimeCount = useCountUp({ end: 24, suffix: '/7', duration: 2000, enableScrollTrigger: false });
  const ratingCount = useCountUp({ end: 5, suffix: ' Star Rating', duration: 2500, enableScrollTrigger: false });

  const features = [
    { icon: CheckCircle, text: "Trusted by 100+ businesses" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Zap, text: "Fast & reliable solutions" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20 z-[1]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Leading Technology Partner in Kenya</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-foreground">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Business with
                </span>
                <br />
                <span className="text-foreground">Technology</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                FRIMAT Technologies delivers enterprise-grade IT solutions, from web development to cybersecurity, 
                helping businesses across Kenya achieve digital excellence.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="text-primary" size={18} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group text-base" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base border-primary/30 hover:bg-primary/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div ref={projectsCount.ref} className="text-4xl font-bold text-primary mb-2">{projectsCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div ref={uptimeCount.ref} className="text-4xl font-bold text-primary mb-2">{uptimeCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Support Available</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-accent to-secondary rounded-full" />
                </div>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div ref={clientsCount.ref} className="text-4xl font-bold text-primary mb-2">{clientsCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-5/6 bg-gradient-to-r from-secondary to-primary rounded-full" />
                </div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div ref={ratingCount.ref} className="text-4xl font-bold text-primary mb-2">{ratingCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Customer Reviews</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:hidden">
          <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center">
            <div ref={projectsCount.ref} className="text-2xl font-bold text-primary">{projectsCount.value}</div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center">
            <div ref={clientsCount.ref} className="text-2xl font-bold text-primary">{clientsCount.value}</div>
            <div className="text-xs text-muted-foreground">Clients</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center">
            <div ref={uptimeCount.ref} className="text-2xl font-bold text-primary">{uptimeCount.value}</div>
            <div className="text-xs text-muted-foreground">Support</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center">
            <div ref={ratingCount.ref} className="text-2xl font-bold text-primary">{ratingCount.value}</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
