import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Zap } from "lucide-react";
import productImage from "@/assets/shop-product-1.jpg";

export default function ShopSection() {
  const products = [
    {
      id: 1,
      name: "Smart Tech Bundle",
      description: "Complete package with tablet, wireless accessories, and premium support",
      price: "$299",
      originalPrice: "$399",
      rating: 4.9,
      reviews: 128,
      image: productImage,
      badge: "Best Seller",
      features: ["Premium Hardware", "1 Year Warranty", "24/7 Support"]
    },
    {
      id: 2,
      name: "Cloud Storage Pro",
      description: "Enterprise-grade cloud storage solution with advanced security",
      price: "$49/mo",
      originalPrice: "$69/mo",
      rating: 4.8,
      reviews: 86,
      image: productImage,
      badge: "Popular",
      features: ["100GB Storage", "Team Collaboration", "Advanced Security"]
    },
    {
      id: 3,
      name: "Security Suite",
      description: "Complete cybersecurity package for small to medium businesses",
      price: "$199",
      originalPrice: "$299",
      rating: 5.0,
      reviews: 54,
      image: productImage,
      badge: "New",
      features: ["Threat Protection", "VPN Access", "Monthly Reports"]
    },
    {
      id: 4,
      name: "Development Tools",
      description: "Professional development software suite for modern developers",
      price: "$149",
      originalPrice: "$199",
      rating: 4.7,
      reviews: 92,
      image: productImage,
      badge: "Hot Deal",
      features: ["Code Editor", "Debugging Tools", "Team License"]
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
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-accent to-secondary text-background text-xs font-bold rounded-full">
                    {product.badge}
                  </span>
                </div>
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="glass" size="icon" className="w-8 h-8">
                    <Zap size={16} />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent"></div>
                      <span>{feature}</span>
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
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart */}
                <Button variant="glass" className="w-full group">
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
              Need Something Custom?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find what you're looking for? We create custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Request Custom Quote
              </Button>
              <Button variant="glass" size="lg">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}