import { CheckCircle, Users, Zap, Shield, ArrowRight, Target, Eye, Sparkles, Rocket, Heart, Globe, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import frimatLogoWhite from "@/assets/frimat-logo-white.png";

export default function AboutSection() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Zap,
      title: "Singular Invention",
      description: "Bespoke technological instruments, conceived in concert with the particular cadence of your enterprise."
    },
    {
      icon: Users,
      title: "An Assembly of Connoisseurs",
      description: "A confederation of seasoned practitioners whose métier is the patient cultivation of digital excellence."
    },
    {
      icon: Shield,
      title: "Inviolable Foundations",
      description: "Institutional-grade safeguards and an unwavering 99.9 percent continuity, guaranteed in perpetuity."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Hero Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <img 
            src={frimatLogoWhite} 
            alt="FRIMAT Technologies" 
            className="h-16 md:h-20 mx-auto mb-6 dark:invert-0 invert"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-600 via-red-500 to-rose-700 bg-clip-text text-transparent">
              An Atelier for the Reinvention of Enterprise
            </span>
          </h1>
        </div>
      </div>
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
                The Considered Reinvention of Enterprise
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                To dissolve the long-standing distance between rarefied technological invention and the quotidian operations of commerce — equipping institutions to innovate with discernment, to expand with intent, and to flourish, unhurriedly, within the architecture of the digital epoch.
              </p>
              
              {/* Decorative Line */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-20 transition-all duration-500" />
                <span className="text-sm text-primary font-medium">Invent • Illumine • Endure</span>
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
                A Quiet Stewardship of Global Invention
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                To assume an enduring stewardship of technological innovation upon the international stage — counselling enterprises, irrespective of stature, in the deliberate orchestration of their digital ascendancy, and conceiving a future in which technology serves as an instrument of well-considered, boundless possibility.
              </p>
              
              {/* Decorative Line */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-accent to-secondary rounded-full group-hover:w-20 transition-all duration-500" />
                <span className="text-sm text-accent font-medium">Envisage • Compose • Endure</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold">
                <span className="text-foreground">Upon </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  FRIMAT
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a sovereign house of technological invention, devoted to the considered transfiguration of commerce through digital instruments of singular character. Ours is the discipline of translating rarefied innovation into the legible vernacular of enduring enterprise.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Why an Audience with Us?</h3>
              <div className="space-y-3">
                {[
                  "Six years of cultivated tenure within the discipline",
                  "A devoted concierge of stewardship, available without intermission",
                  "Singularly composed solutions, contoured to your particular cadence",
                  "An unbroken ledger of more than thirty-five commissions consummated with distinction"
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
                  Peruse the Repertoire
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Internal Links */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" onClick={() => scrollToSection('#contact')}>
                Initiate Correspondence
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button variant="glass" onClick={() => scrollToSection('#portfolio')}>
                Survey Our Œuvre
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

            {/* What Sets Us Apart - Animated */}
            <motion.div 
              className="glass-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-center text-foreground mb-8">
                That Which Distinguishes Us
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Rocket, title: "Unhurried Velocity", description: "Brisk consummation that yet refuses any concession of refinement.", gradient: "from-primary to-primary/70", border: "border-primary/20 hover:border-primary/40", bg: "from-primary/10 to-primary/5" },
                  { icon: Heart, title: "Patronage Above All", description: "Your ascendancy is the singular axis upon which our endeavours turn.", gradient: "from-accent to-accent/70", border: "border-accent/20 hover:border-accent/40", bg: "from-accent/10 to-accent/5" },
                  { icon: Globe, title: "Cosmopolitan Standards", description: "Work of international register, tempered by an intimate Kenyan sensibility.", gradient: "from-secondary to-secondary/70", border: "border-secondary/20 hover:border-secondary/40", bg: "from-secondary/10 to-secondary/5" },
                  { icon: Lightbulb, title: "Studied Invention", description: "Rarefied instruments, brought to bear upon the contemporary predicament.", gradient: "from-primary to-accent", border: "border-primary/20 hover:border-primary/40", bg: "from-primary/10 to-accent/5" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className={`group p-4 rounded-2xl bg-gradient-to-br ${item.bg} border ${item.border} transition-colors duration-300 cursor-pointer`}
                  >
                    <motion.div 
                      className={`flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.gradient}`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                    <h5 className="text-lg font-semibold text-foreground text-center mb-1">
                      {item.title}
                    </h5>
                    <p className="text-sm text-muted-foreground text-center">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Animated background elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
