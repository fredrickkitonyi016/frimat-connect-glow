import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Laptop } from "lucide-react";
import hpLogo from "@/assets/logos/hp-logo.png";
import acerLogo from "@/assets/logos/acer-logo.png";
import dellLogo from "@/assets/logos/dell-logo.png";
import toshibaLogo from "@/assets/logos/toshiba-logo.png";
import appleLogo from "@/assets/logos/apple-logo.png";
import lenovoLogo from "@/assets/logos/lenovo-logo.png";

export default function ShopSection() {
  const products = [
    {
      id: 1,
      name: "HP Pavilion 15",
      brand: "HP",
      description: "Intel Core i5, 8GB RAM, 512GB SSD, 15.6\" FHD Display",
      price: "KSh 65,000",
      originalPrice: "KSh 78,000",
      rating: 4.5,
      reviews: 89,
      logo: hpLogo,
      badge: "Best Seller",
      features: ["Intel Core i5-1135G7", "8GB DDR4 RAM", "512GB NVMe SSD", "Windows 11"]
    },
    {
      id: 2,
      name: "Acer Aspire 5",
      brand: "Acer",
      description: "AMD Ryzen 5, 16GB RAM, 512GB SSD, 15.6\" FHD IPS",
      price: "KSh 72,000",
      originalPrice: "KSh 85,000",
      rating: 4.6,
      reviews: 124,
      logo: acerLogo,
      badge: "Popular",
      features: ["AMD Ryzen 5 5500U", "16GB DDR4 RAM", "512GB SSD", "Backlit Keyboard"]
    },
    {
      id: 3,
      name: "Dell Inspiron 15",
      brand: "Dell",
      description: "Intel Core i7, 16GB RAM, 1TB SSD, 15.6\" FHD Touch",
      price: "KSh 95,000",
      originalPrice: "KSh 115,000",
      rating: 4.8,
      reviews: 156,
      logo: dellLogo,
      badge: "Premium",
      features: ["Intel Core i7-1165G7", "16GB RAM", "1TB SSD", "Touchscreen Display"]
    },
    {
      id: 4,
      name: "MacBook Air M1",
      brand: "Apple",
      description: "Apple M1 Chip, 8GB RAM, 256GB SSD, 13.3\" Retina",
      price: "KSh 125,000",
      originalPrice: "KSh 145,000",
      rating: 4.9,
      reviews: 287,
      logo: appleLogo,
      badge: "Top Rated",
      features: ["Apple M1 Chip", "8GB Unified Memory", "256GB SSD", "macOS Monterey"]
    },
    {
      id: 5,
      name: "Toshiba Satellite Pro",
      brand: "Toshiba",
      description: "Intel Core i3, 8GB RAM, 256GB SSD, 14\" HD Display",
      price: "KSh 48,000",
      originalPrice: "KSh 58,000",
      rating: 4.3,
      reviews: 67,
      logo: toshibaLogo,
      badge: "Budget Pick",
      features: ["Intel Core i3-1005G1", "8GB RAM", "256GB SSD", "Lightweight Design"]
    },
    {
      id: 6,
      name: "Lenovo ThinkPad E14",
      brand: "Lenovo",
      description: "Intel Core i5, 8GB RAM, 512GB SSD, 14\" FHD Business",
      price: "KSh 78,000",
      originalPrice: "KSh 92,000",
      rating: 4.7,
      reviews: 198,
      logo: lenovoLogo,
      badge: "Business Choice",
      features: ["Intel Core i5-1135G7", "8GB DDR4", "512GB SSD", "Military Grade Durability"]
    },
    {
      id: 7,
      name: "HP EliteBook 840",
      brand: "HP",
      description: "Intel Core i7, 16GB RAM, 512GB SSD, 14\" FHD Pro",
      price: "KSh 110,000",
      originalPrice: "KSh 130,000",
      rating: 4.8,
      reviews: 145,
      logo: hpLogo,
      badge: "Professional",
      features: ["Intel Core i7-1185G7", "16GB RAM", "512GB SSD", "Privacy Screen"]
    },
    {
      id: 8,
      name: "Dell XPS 13",
      brand: "Dell",
      description: "Intel Core i7, 16GB RAM, 512GB SSD, 13.4\" FHD+ InfinityEdge",
      price: "KSh 145,000",
      originalPrice: "KSh 165,000",
      rating: 5.0,
      reviews: 234,
      logo: dellLogo,
      badge: "Premium Choice",
      features: ["Intel Core i7-1195G7", "16GB LPDDR4x", "512GB SSD", "InfinityEdge Display"]
    }
  ];

  return (
    <section id="shop" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Tech </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Shop
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of premium tech products and services designed to boost your productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-card hover-scale group overflow-hidden">
              {/* Brand Logo & Badge */}
              <div className="relative mb-6">
                <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center h-32 border border-border/50">
                  <img 
                    src={product.logo} 
                    alt={`${product.brand} logo`}
                    className="max-h-16 max-w-[150px] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-accent to-secondary text-background text-xs font-bold rounded-full shadow-lg">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Laptop size={16} className="text-accent" />
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{product.brand}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Specifications */}
                <div className="space-y-1 bg-background/30 rounded-lg p-3 border border-border/30">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted"} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="pt-2 border-t border-border/30">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-green-500 font-medium">
                    Save {product.originalPrice ? `KSh ${parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))}` : ''}
                  </p>
                </div>

                {/* Add to Cart */}
                <Button variant="hero" className="w-full group">
                  <ShoppingCart className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Shop CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Looking for Specific Specs?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We have a wide range of laptops in stock. Contact us for custom configurations, bulk orders, or specific models.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="glass-card p-4">
                <p className="text-2xl font-bold text-primary mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Models Available</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-2xl font-bold text-accent mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-2xl font-bold text-secondary mb-1">1 Year</p>
                <p className="text-sm text-muted-foreground">Warranty</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-2xl font-bold text-primary mb-1">Fast</p>
                <p className="text-sm text-muted-foreground">Delivery</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <ShoppingCart className="mr-2" size={18} />
                Request Custom Quote
              </Button>
              <Button variant="glass" size="lg">
                Contact Sales: +254112277289
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}