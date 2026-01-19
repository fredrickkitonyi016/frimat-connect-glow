import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "KSh 25,000",
    period: "one-time",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic Website (5 pages)",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "1 Month Free Support",
      "SSL Certificate",
      "Domain Setup Assistance"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const
  },
  {
    name: "Professional",
    price: "KSh 50,000",
    period: "one-time",
    description: "Ideal for growing businesses",
    features: [
      "Custom Web Application",
      "Content Management System",
      "E-commerce Integration",
      "Advanced SEO Optimization",
      "3 Months Free Support",
      "Performance Optimization",
      "Analytics Integration",
      "Social Media Integration",
      "Email Marketing Setup"
    ],
    popular: true,
    buttonText: "Most Popular",
    buttonVariant: "default" as const
  },
  {
    name: "Enterprise",
    price: "KSh 150,000+",
    period: "project-based",
    description: "Complete solutions for large organizations",
    features: [
      "Custom Enterprise Solution",
      "Mobile App Development",
      "Advanced Security Implementation",
      "Cloud Infrastructure Setup",
      "12 Months Premium Support",
      "Staff Training Included",
      "24/7 Monitoring",
      "Scalable Architecture",
      "API Development",
      "Database Optimization"
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const
  }
];

const additionalServices = [
  { service: "Basic Mobile App", price: "KSh 100,000" },
  { service: "Professional Mobile App", price: "KSh 150,000+" },
  { service: "Cybersecurity Audit", price: "KSh 25,000" },
  { service: "Cloud Migration", price: "KSh 30,000/month" },
  { service: "E-commerce Platform", price: "KSh 75,000" },
  { service: "IT Support (Monthly)", price: "KSh 15,000/month" },
  { service: "Website Maintenance", price: "KSh 8,000/month" },
  { service: "CV Writing", price: "KSh 300 - 800" },
  { service: "Document Scanning", price: "KSh 10/page" },
  { service: "Printing (B&W)", price: "KSh 10/page" },
  { service: "Printing (Color)", price: "KSh 20/page" },
  { service: "KRA iTax Filing", price: "KSh 200 - 500" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises - just honest pricing for quality work.
          </p>
        </motion.div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card relative ${
                plan.popular ? 'border-primary border-2 shadow-lg shadow-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-gradient-to-r from-primary to-accent text-background px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
                  >
                    <Star size={16} />
                    Most Popular
                  </motion.div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * featureIndex }}
                  >
                    <Check className="text-accent flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                variant={plan.buttonVariant}
                className="w-full"
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.popular && <Zap className="mr-2" size={18} />}
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Additional Services</h3>
            <p className="text-muted-foreground">
              Need something specific? Check out our additional services and their pricing.
            </p>
          </div>

          <div className="glass-card">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex justify-between items-center p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="font-medium text-foreground">{item.service}</span>
                  <span className="text-primary font-semibold whitespace-nowrap ml-2">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom quote? We'd love to discuss your project requirements.
          </p>
          <Button 
            size="lg" 
            className="hover-scale"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us for Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}