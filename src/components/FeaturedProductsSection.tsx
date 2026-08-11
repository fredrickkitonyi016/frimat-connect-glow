import { ArrowRight, ShoppingCart, Camera, Wifi, Laptop, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import cctvKit from "@/assets/products/hud-cctv-kit.jpg";
import wifiRouter from "@/assets/products/hud-wifi-router.jpg";
import laptopImg from "@/assets/products/hud-laptop.jpg";
import networkKit from "@/assets/products/hud-network-kit.jpg";

const products = [
  {
    icon: Camera,
    image: cctvKit,
    code: "UNIT-01",
    name: "4K CCTV Camera System",
    detail: "4-camera kit with night vision, DVR and 1TB storage. Installation included.",
    price: "KSh 45,000",
    href: "/services/cybersecurity",
  },
  {
    icon: Wifi,
    image: wifiRouter,
    code: "UNIT-02",
    name: "Enterprise WiFi Router",
    detail: "Dual-band business router with strong coverage for offices and rentals.",
    price: "KSh 12,500",
    href: "/services/it-support",
  },
  {
    icon: Laptop,
    image: laptopImg,
    code: "UNIT-03",
    name: "Refurbished Business Laptop",
    detail: "Core i5, 8GB RAM, 256GB SSD. Tested, cleaned and ready to work.",
    price: "KSh 28,000",
    href: "/shop",
  },
  {
    icon: HardDrive,
    image: networkKit,
    code: "UNIT-04",
    name: "Network & Cabling Kit",
    detail: "Switch, cables and connectors for a neat office network setup.",
    price: "KSh 9,800",
    href: "/services/it-support",
  },
];

export default function FeaturedProductsSection() {
  const navigate = useNavigate();

  return (
    <section id="featured-products" className="py-24 relative overflow-hidden hud-scan">
      <div className="matrix-overlay" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="hud-status mx-auto mb-5">System Status: Operational</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured Hardware &amp; </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Genuine hardware at fair Kenyan prices, supplied and installed by our own technicians.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              onClick={() => navigate(product.href)}
              className="hud-frame group flex flex-col overflow-hidden cursor-pointer rounded-md"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <span className="absolute top-3 left-3 hud-label">{product.code}</span>
                <div className="absolute bottom-3 left-3 p-2 border border-primary/50 bg-background/70 backdrop-blur-sm">
                  <product.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.detail}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xl font-bold text-primary hud-numeric">{product.price}</span>
                  <Button
                    size="sm"
                    variant="glass"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/shop");
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
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
