import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "KES 15,000",
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
    price: "KES 45,000",
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
    price: "KES 150,000+",
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
  { service: "Mobile App Development", price: "KES 80,000 - 200,000" },
  { service: "Cybersecurity Audit", price: "KES 25,000" },
  { service: "Cloud Migration", price: "KES 35,000+" },
  { service: "KRA Tax Services", price: "KES 2,000 - 5,000" },
  { service: "IT Support (Monthly)", price: "KES 15,000/month" },
  { service: "Website Maintenance", price: "KES 8,000/month" }
];

export default function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises - just honest pricing for quality work.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card hover-scale relative ${
                plan.popular ? 'border-primary border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-background px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star size={16} />
                    Most Popular
                  </div>
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
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-accent flex-shrink-0" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.buttonVariant}
                className="w-full"
                size="lg"
              >
                {plan.popular && <Zap className="mr-2" size={18} />}
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Additional Services</h3>
            <p className="text-muted-foreground">
              Need something specific? Check out our additional services and their pricing.
            </p>
          </div>

          <div className="glass-card">
            <div className="grid md:grid-cols-2 gap-6">
              {additionalServices.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-background/50 border border-border/50">
                  <span className="font-medium text-foreground">{item.service}</span>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom quote? We'd love to discuss your project requirements.
          </p>
          <Button size="lg" className="hover-scale">
            Contact Us for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}