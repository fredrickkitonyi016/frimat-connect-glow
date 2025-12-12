import { CheckCircle, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const teamCount = useCountUp({ end: 50, suffix: '+', duration: 3000, enableScrollTrigger: false });
  const countriesCount = useCountUp({ end: 1, duration: 2500, enableScrollTrigger: false });
  const uptimePercent = useCountUp({ end: 99.9, suffix: '%', duration: 3500, enableScrollTrigger: false });

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

            {/* Vision Banner */}
            <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 backdrop-blur-sm border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse"></div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                  To be the global leader in technology innovation, empowering businesses of all sizes to achieve 
                  their digital transformation goals and stay ahead in an ever-evolving technological landscape.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                  <span className="font-semibold">Innovating Tomorrow, Today</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Why Choose Us?</h3>
              <div className="space-y-3">
                {[
                  "10+ years of industry experience",
                  "Dedicated support team available 24/7",
                  "Custom solutions tailored to your needs",
                  "Proven track record with 20 successful projects"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" onClick={() => scrollToSection('#services')}>
                Explore Our Services
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
            <div className="glass-card p-8">
              <h4 className="text-2xl font-bold text-center text-foreground mb-6">
                Company Highlights
              </h4>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">2015</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div ref={teamCount.ref} className="text-3xl font-bold text-secondary">{teamCount.value}</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div ref={countriesCount.ref} className="text-3xl font-bold text-accent">{countriesCount.value}</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div>
                  <div ref={uptimePercent.ref} className="text-3xl font-bold text-primary">{uptimePercent.value}</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
