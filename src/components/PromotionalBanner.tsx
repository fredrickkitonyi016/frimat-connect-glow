import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import computerRepairAd from "@/assets/ads/computer-repair-ad.jpg";
import graphicDesignAd from "@/assets/ads/graphic-design-ad.jpg";

const promotions = [
  {
    image: computerRepairAd,
    title: "Computer Repair Services",
    description: "Fast & reliable computer repair at affordable prices",
    link: "/services/it-support",
    cta: "Book Now"
  },
  {
    image: graphicDesignAd,
    title: "Graphic Design Services",
    description: "Professional branding & design solutions",
    link: "/services/creative-design",
    cta: "Learn More"
  }
];

export default function PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Featured Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Special Offers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our premium services designed to help your business thrive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/50 bg-card">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">
                    {promo.description}
                  </p>
                  <Link to={promo.link}>
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="group/btn"
                    >
                      {promo.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/20 blur-2xl" />
                <div className="absolute bottom-20 left-4 w-24 h-24 rounded-full bg-accent/20 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
