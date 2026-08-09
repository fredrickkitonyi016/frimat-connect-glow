import { ArrowRight, ShoppingCart, Camera, Wifi, Laptop, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    icon: Camera,
    name: "4K CCTV Camera System",
    detail: "4-camera kit with night vision, DVR and 1TB storage. Installation included.",
    price: "KSh 45,000",
  },
  {
    icon: Wifi,
    name: "Enterprise WiFi Router",
    detail: "Dual-band business router with strong coverage for offices and rentals.",
    price: "KSh 12,500",
  },
  {
    icon: Laptop,
    name: "Refurbished Business Laptop",
    detail: "Core i5, 8GB RAM, 256GB SSD. Tested, cleaned and ready to work.",
    price: "KSh 28,000",
  },
  {
    icon: HardDrive,
    name: "Network & Cabling Kit",
    detail: "Switch, cables and connectors for a neat office network setup.",
    price: "KSh 9,800",
  },
];

export default function FeaturedProductsSection() {
  const navigate = useNavigate();

  return (
    <section id="featured-products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured Products &amp; </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Genuine hardware at fair Kenyan prices, supplied and installed by our own technicians.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.name} className="glass-card hover-lift group flex flex-col">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent w-fit mb-4">
                <product.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.detail}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-xl font-bold text-primary font-mono">{product.price}</span>
                <Button size="sm" variant="glass" onClick={() => navigate('/shop')}>
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="hero" size="lg" className="group" onClick={() => navigate('/shop')}>
            Visit the Shop
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="lg" onClick={() => navigate('/book-service')}>
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
