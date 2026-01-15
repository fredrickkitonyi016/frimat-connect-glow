import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-corporate.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0, 0, 0.2, 1] as const,
      },
    }),
  };

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
      
      {/* Modern mesh gradient */}
      <div 
        className="absolute inset-0 z-[2] opacity-60"
        style={{
          background: 'var(--gradient-mesh)',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Leading Technology Partner in Kenya</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
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
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <feature.icon className="text-primary" size={18} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group text-base btn-modern" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base border-primary/30 hover:bg-primary/5 backdrop-blur-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div 
                custom={0}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div ref={projectsCount.ref} className="text-4xl font-bold text-primary mb-2">{projectsCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
              <motion.div 
                custom={1}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div ref={uptimeCount.ref} className="text-4xl font-bold text-primary mb-2">{uptimeCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Support Available</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>
            <div className="space-y-6 mt-12">
              <motion.div 
                custom={2}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div ref={clientsCount.ref} className="text-4xl font-bold text-primary mb-2">{clientsCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '83%' }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
              <motion.div 
                custom={3}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div ref={ratingCount.ref} className="text-4xl font-bold text-primary mb-2">{ratingCount.value}</div>
                <div className="text-sm text-muted-foreground font-medium">Customer Reviews</div>
                <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:hidden"
        >
          {[
            { ref: projectsCount.ref, value: projectsCount.value, label: "Projects" },
            { ref: clientsCount.ref, value: clientsCount.value, label: "Clients" },
            { ref: uptimeCount.ref, value: uptimeCount.value, label: "Support" },
            { ref: ratingCount.ref, value: ratingCount.value, label: "Rating" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card/60 backdrop-blur-md border border-border/30 rounded-xl p-4 text-center"
            >
              <div ref={stat.ref} className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
