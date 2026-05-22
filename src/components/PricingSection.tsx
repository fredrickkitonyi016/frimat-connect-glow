import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Inception",
    price: "KSh 25,000",
    period: "singular commission",
    description: "An assured opening for emergent ventures of refined intent.",
    features: [
      "A composed website of five considered pages",
      "Responsive composition for every device",
      "Discreet contact confluence",
      "Foundational SEO orchestration",
      "One month of attentive stewardship",
      "Cryptographic SSL assurance",
      "Counsel upon domain enrolment"
    ],
    popular: false,
    buttonText: "Commence the Endeavour",
    buttonVariant: "outline" as const
  },
  {
    name: "Atelier",
    price: "KSh 50,000",
    period: "singular commission",
    description: "Appointed for enterprises of evident ambition and ascendant trajectory.",
    features: [
      "A bespoke web composition",
      "Editorial governance suite",
      "Mercantile confluence",
      "Advanced SEO refinement",
      "Three months of attentive stewardship",
      "Unhurried performance calibration",
      "Analytical instrumentation",
      "Social confluence",
      "Epistolary marketing apparatus"
    ],
    popular: true,
    buttonText: "The Connoisseur's Selection",
    buttonVariant: "default" as const
  },
  {
    name: "Imperium",
    price: "KSh 150,000+",
    period: "by considered commission",
    description: "Comprehensive instruments for institutions of considerable stature.",
    features: [
      "A bespoke enterprise composition",
      "Mobile atelier",
      "Stratified security implementation",
      "Sovereign cloud foundation",
      "Twelve months of privileged stewardship",
      "Tutelage of staff included",
      "Round-the-clock vigilance",
      "Elastic architectural composition",
      "API composition",
      "Refinement of data foundations"
    ],
    popular: false,
    buttonText: "Audience with Our Council",
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
              Tariffs of Candour
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the tariff most consonant with your ambitions. No latent levies, no inflorescent surprises — only honest reckoning for considered craftsmanship.
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
                    Most Cherished
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
            <h3 className="text-2xl font-bold text-foreground mb-4">Auxiliary Commissions</h3>
            <p className="text-muted-foreground">
              Should your purpose require something more particular, our ledger of auxiliary commissions and their respective tariffs lies below.
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
            Should you desire a tariff conceived expressly for your endeavour, we should be delighted to confer upon its particulars.
          </p>
          <Button 
            size="lg" 
            className="hover-scale"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Considered Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  );
}