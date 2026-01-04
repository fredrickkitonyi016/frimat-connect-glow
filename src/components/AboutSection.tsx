import { CheckCircle, Users, Zap, Shield, ArrowRight, Target, Eye, Sparkles, Calendar, Globe, Clock, Award } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const projectsCount = useCountUp({ end: 35, suffix: '+', duration: 2500, enableScrollTrigger: true });
  const clientsCount = useCountUp({ end: 100, suffix: '+', duration: 3000, enableScrollTrigger: true });
  const experienceYears = useCountUp({ end: 6, suffix: '', duration: 2000, enableScrollTrigger: true });
  const satisfactionRate = useCountUp({ end: 98, suffix: '%', duration: 3500, enableScrollTrigger: true });

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Zap,
      title: "Innovative Solutions",
      description: "Cutting-edge technology solutions tailored to your business needs"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in tech industry"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/30">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Transforming Businesses Through Technology
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                To bridge the gap between cutting-edge technology and practical business applications, 
                empowering organizations to innovate, grow, and thrive in the digital age. We deliver 
                solutions that create lasting value and drive measurable results.
              </p>
              
              {/* Decorative Line */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-20 transition-all duration-500" />
                <span className="text-sm text-primary font-medium">Innovate • Inspire • Impact</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-accent/10 via-background to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-accent/30">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Vision</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                Leading Global Technology Innovation
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be the global leader in technology innovation, empowering businesses of all sizes 
                to achieve their digital transformation goals and stay ahead in an ever-evolving 
                technological landscape. We envision a future where technology enables limitless possibilities.
              </p>
              
              {/* Decorative Line */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-accent to-secondary rounded-full group-hover:w-20 transition-all duration-500" />
                <span className="text-sm text-accent font-medium">Dream • Build • Achieve</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold">
                <span className="text-foreground">About </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  FRIMAT
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a leading technology company dedicated to transforming businesses through innovative digital solutions. 
                Our mission is to bridge the gap between cutting-edge technology and practical business applications.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Why Choose Us?</h3>
              <div className="space-y-3">
                {[
                  "6 years of industry experience",
                  "Dedicated support team available 24/7",
                  "Custom solutions tailored to your needs",
                  "Proven track record with 35+ successful projects"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Explore Services Link */}
              <button 
                onClick={() => scrollToSection('#services')}
                className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-300 mt-4"
              >
                <span className="relative">
                  Explore Our Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" onClick={() => scrollToSection('#contact')}>
                Get in Touch
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button variant="glass" onClick={() => scrollToSection('#portfolio')}>
                View Our Work
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="glass-card hover-scale group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                        <Icon className="text-background" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Company Stats */}
            <div className="glass-card p-8 relative overflow-hidden group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h4 className="text-2xl font-bold text-center text-foreground mb-8 relative z-10">
                Company Highlights
              </h4>
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {/* Projects Completed */}
                <div className="group/stat p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-primary/70 group-hover/stat:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div ref={projectsCount.ref} className="text-3xl font-bold text-primary text-center">{projectsCount.value}</div>
                  <div className="text-sm text-muted-foreground text-center mt-1">Projects Completed</div>
                </div>
                
                {/* Happy Clients */}
                <div className="group/stat p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-accent to-accent/70 group-hover/stat:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div ref={clientsCount.ref} className="text-3xl font-bold text-accent text-center">{clientsCount.value}</div>
                  <div className="text-sm text-muted-foreground text-center mt-1">Happy Clients</div>
                </div>
                
                {/* Years Experience */}
                <div className="group/stat p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 group-hover/stat:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div ref={experienceYears.ref} className="text-3xl font-bold text-secondary text-center">{experienceYears.value}</div>
                  <div className="text-sm text-muted-foreground text-center mt-1">Years Experience</div>
                </div>
                
                {/* Client Satisfaction */}
                <div className="group/stat p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-accent group-hover/stat:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div ref={satisfactionRate.ref} className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">{satisfactionRate.value}</div>
                  <div className="text-sm text-muted-foreground text-center mt-1">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
