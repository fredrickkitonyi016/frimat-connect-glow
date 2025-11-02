import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";
import hpLogo from "@/assets/logos/hp-logo.png";
import acerLogo from "@/assets/logos/acer-logo.png";
import dellLogo from "@/assets/logos/dell-logo.png";
import toshibaLogo from "@/assets/logos/toshiba-logo.png";
import appleLogo from "@/assets/logos/apple-logo.png";
import lenovoLogo from "@/assets/logos/lenovo-logo.png";

// HP Product Images
import hpPavilion15 from "@/assets/products/hp-pavilion-15.jpg";
import hpElitebook840 from "@/assets/products/hp-elitebook-840.jpg";
import hpProbook450 from "@/assets/products/hp-probook-450.jpg";
import hpEnvy13 from "@/assets/products/hp-envy-13.jpg";
import hpOmen15 from "@/assets/products/hp-omen-15.jpg";

// Dell Product Images
import dellInspiron15 from "@/assets/products/dell-inspiron-15.jpg";
import dellXps13 from "@/assets/products/dell-xps-13.jpg";
import dellLatitude5420 from "@/assets/products/dell-latitude-5420.jpg";

// Acer Product Images
import acerAspire5 from "@/assets/products/acer-aspire-5.jpg";
import acerSwift3 from "@/assets/products/acer-swift-3.jpg";
import acerNitro5 from "@/assets/products/acer-nitro-5.jpg";

// Lenovo Product Images
import lenovoThinkpadE14 from "@/assets/products/lenovo-thinkpad-e14.jpg";
import lenovoIdeapad3 from "@/assets/products/lenovo-ideapad-3.jpg";
import lenovoLegion5 from "@/assets/products/lenovo-legion-5.jpg";

// Apple Product Images
import macbookAirM1 from "@/assets/products/macbook-air-m1.jpg";
import macbookPro14 from "@/assets/products/macbook-pro-14.jpg";

// Toshiba Product Images
import toshibaSatellitePro from "@/assets/products/toshiba-satellite-pro.jpg";
import toshibaPortege from "@/assets/products/toshiba-portege.jpg";

export default function ShopSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);

  const ictAccessories = [
    { name: "Wireless Mouse", category: "Peripherals", specs: "2.4GHz, Ergonomic Design", price: "KSh 1,500", original: "KSh 2,500", description: "Comfortable wireless mouse with long battery life" },
    { name: "USB Keyboard", category: "Peripherals", specs: "Mechanical, RGB Backlit", price: "KSh 3,500", original: "KSh 5,000", description: "High-quality mechanical keyboard with RGB lighting" },
    { name: "Laptop Bag", category: "Accessories", specs: "15.6 inch, Water Resistant", price: "KSh 2,000", original: "KSh 3,500", description: "Durable and stylish laptop bag with multiple compartments" },
    { name: "USB-C Hub", category: "Accessories", specs: "7-in-1, HDMI, USB 3.0", price: "KSh 2,500", original: "KSh 4,000", description: "Multi-port hub with HDMI, USB, and SD card reader" },
    { name: "External Hard Drive", category: "Storage", specs: "1TB, USB 3.0", price: "KSh 5,500", original: "KSh 7,500", description: "Portable external storage with fast transfer speeds" },
    { name: "Webcam", category: "Peripherals", specs: "1080p, Auto Focus", price: "KSh 4,500", original: "KSh 6,500", description: "HD webcam perfect for video calls and streaming" },
    { name: "Headphones", category: "Audio", specs: "Wireless, Noise Canceling", price: "KSh 6,000", original: "KSh 9,000", description: "Premium wireless headphones with active noise cancellation" },
    { name: "Monitor", category: "Displays", specs: "24 inch, Full HD, IPS", price: "KSh 15,000", original: "KSh 22,000", description: "High-quality IPS monitor with vibrant colors" },
    { name: "Printer", category: "Office", specs: "All-in-One, WiFi", price: "KSh 12,000", original: "KSh 18,000", description: "Multi-function printer with wireless connectivity" },
    { name: "SSD", category: "Storage", specs: "512GB, NVMe", price: "KSh 7,000", original: "KSh 10,000", description: "High-speed solid state drive for faster performance" },
    { name: "RAM", category: "Components", specs: "16GB, DDR4", price: "KSh 5,500", original: "KSh 8,000", description: "Memory upgrade for improved multitasking" },
    { name: "Power Bank", category: "Accessories", specs: "20000mAh, Fast Charge", price: "KSh 3,000", original: "KSh 4,500", description: "High-capacity power bank for on-the-go charging" },
    { name: "USB Flash Drive", category: "Storage", specs: "64GB, USB 3.0", price: "KSh 800", original: "KSh 1,500", description: "Compact and fast flash storage" },
    { name: "HDMI Cable", category: "Cables", specs: "2m, 4K Support", price: "KSh 600", original: "KSh 1,200", description: "High-quality HDMI cable for crystal clear display" },
    { name: "Cooling Pad", category: "Accessories", specs: "Dual Fan, LED", price: "KSh 2,500", original: "KSh 4,000", description: "Laptop cooling pad to prevent overheating" },
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    const found = ictAccessories.find(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResult(found || {
      name: searchQuery,
      category: "ICT Accessories",
      specs: "Contact us for specifications",
      price: "Contact for pricing",
      original: "",
      description: "This item is available. Please contact us for more details and pricing information."
    });
  };

  return (
    <section id="shop" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Tech </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Shop
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Discover our curated selection of premium laptops from top brands, all at competitive prices.
          </p>
        </div>

        {/* ICT Accessories Search */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Search ICT Accessories
            </h3>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for keyboards, mice, monitors, cables, etc..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch} variant="hero">
                <Search className="mr-2" size={18} />
                Search
              </Button>
            </div>
          </div>

          {/* Search Result Display */}
          {searchResult && (
            <div className="glass-card p-6 mt-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">{searchResult.name}</h4>
                  <p className="text-sm text-muted-foreground">{searchResult.category}</p>
                </div>
                <button 
                  onClick={() => setSearchResult(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{searchResult.specs}</p>
              <p className="text-foreground mb-4">{searchResult.description}</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">{searchResult.price}</span>
                {searchResult.original && (
                  <span className="text-sm text-muted-foreground line-through">{searchResult.original}</span>
                )}
              </div>
              <Button variant="hero" className="w-full">
                <ShoppingCart className="mr-2" size={18} />
                Add to Cart
              </Button>
            </div>
          )}
        </div>

        {/* HP Series Showcase */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <img src={hpLogo} alt="HP" className="h-8 sm:h-10 md:h-12 object-contain" />
              <div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-foreground">HP Laptops</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Explore our complete HP collection</p>
              </div>
            </div>

            {/* HP Budget Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-secondary rounded"></div>
                HP Budget Series - Affordable Computing
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "HP 240 G7", specs: "i3-7020U, 4GB, 500GB HDD", price: "KSh 18,000", original: "KSh 28,000", image: hpPavilion15 },
                  { model: "HP 250 G7", specs: "i3-1005G1, 4GB, 1TB HDD", price: "KSh 22,000", original: "KSh 32,000", image: hpPavilion15 },
                  { model: "HP 14s-cf3000", specs: "Celeron N4020, 4GB, 128GB", price: "KSh 15,000", original: "KSh 25,000", image: hpPavilion15 },
                  { model: "HP 15-dw3000", specs: "i3-1115G4, 4GB, 256GB SSD", price: "KSh 28,000", original: "KSh 38,000", image: hpPavilion15 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h5 className="font-bold text-foreground mb-2 text-sm sm:text-base">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-base sm:text-lg font-bold text-secondary">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full text-xs sm:text-sm">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="mb-8">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded"></div>
                HP Pavilion Series
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "HP Pavilion 14", specs: "i3-1115G4, 8GB, 256GB SSD", price: "KSh 55,000", original: "KSh 68,000", image: hpPavilion15 },
                  { model: "HP Pavilion 15", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 65,000", original: "KSh 78,000", image: hpPavilion15 },
                  { model: "HP Pavilion 15 Touch", specs: "i5-1235U, 16GB, 512GB SSD", price: "KSh 82,000", original: "KSh 95,000", image: hpPavilion15 },
                  { model: "HP Pavilion x360", specs: "i7-1255U, 16GB, 512GB SSD", price: "KSh 95,000", original: "KSh 115,000", image: hpPavilion15 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HP EliteBook Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-accent rounded"></div>
                HP EliteBook Series - Business Class
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "HP EliteBook 840 G8", specs: "i5-1135G7, 8GB, 256GB SSD", price: "KSh 85,000", original: "KSh 105,000", image: hpElitebook840 },
                  { model: "HP EliteBook 840 G9", specs: "i7-1185G7, 16GB, 512GB SSD", price: "KSh 110,000", original: "KSh 130,000", image: hpElitebook840 },
                  { model: "HP EliteBook 850 G8", specs: "i7-1165G7, 16GB, 512GB SSD", price: "KSh 115,000", original: "KSh 135,000", image: hpElitebook840 },
                  { model: "HP EliteBook x360", specs: "i7-1260P, 16GB, 1TB SSD", price: "KSh 145,000", original: "KSh 170,000", image: hpElitebook840 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-accent">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HP ProBook Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-secondary rounded"></div>
                HP ProBook Series - Professional
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "HP ProBook 440 G8", specs: "i5-1135G7, 8GB, 256GB SSD", price: "KSh 68,000", original: "KSh 82,000", image: hpProbook450 },
                  { model: "HP ProBook 450 G8", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 75,000", original: "KSh 90,000", image: hpProbook450 },
                  { model: "HP ProBook 450 G9", specs: "i7-1255U, 16GB, 512GB SSD", price: "KSh 95,000", original: "KSh 112,000", image: hpProbook450 },
                  { model: "HP ProBook 455 G9", specs: "Ryzen 7, 16GB, 512GB SSD", price: "KSh 88,000", original: "KSh 105,000", image: hpProbook450 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-secondary">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HP Envy Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded"></div>
                HP Envy Series - Premium Design
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "HP Envy 13", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 92,000", original: "KSh 108,000", image: hpEnvy13 },
                  { model: "HP Envy 14", specs: "i7-1195G7, 16GB, 512GB SSD", price: "KSh 125,000", original: "KSh 145,000", image: hpEnvy13 },
                  { model: "HP Envy x360 13", specs: "Ryzen 7, 16GB, 512GB SSD", price: "KSh 105,000", original: "KSh 125,000", image: hpEnvy13 },
                  { model: "HP Envy 17", specs: "i7-1255U, 16GB, 1TB SSD", price: "KSh 148,000", original: "KSh 175,000", image: hpEnvy13 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-background/60 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden hover:border-primary/70 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HP Omen Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-secondary rounded"></div>
                HP Omen Series - Gaming Performance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "HP Omen 15", specs: "i5-11400H, RTX 3050, 16GB", price: "KSh 135,000", original: "KSh 165,000", image: hpOmen15 },
                  { model: "HP Omen 15 RTX 3060", specs: "i7-11800H, RTX 3060, 16GB", price: "KSh 165,000", original: "KSh 195,000", image: hpOmen15 },
                  { model: "HP Omen 16", specs: "i7-12700H, RTX 3070, 16GB", price: "KSh 195,000", original: "KSh 235,000", image: hpOmen15 },
                  { model: "HP Omen 17", specs: "i9-12900H, RTX 3080, 32GB", price: "KSh 285,000", original: "KSh 340,000", image: hpOmen15 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-background/60 to-accent/10 backdrop-blur-sm border border-accent/30 rounded-lg overflow-hidden hover:border-accent/70 transition-all hover:shadow-lg hover:shadow-accent/20">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-accent">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HP Refurbished Series */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary via-accent to-secondary rounded"></div>
                HP Refurbished - Great Value
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "HP EliteBook 840 G7", specs: "i5-10210U, 8GB, 256GB SSD", price: "KSh 48,000", original: "KSh 75,000", image: hpElitebook840, badge: "Certified" },
                  { model: "HP ProBook 450 G7", specs: "i5-10210U, 8GB, 256GB SSD", price: "KSh 42,000", original: "KSh 65,000", image: hpProbook450, badge: "Excellent" },
                  { model: "HP Pavilion 15 G6", specs: "i7-8565U, 16GB, 512GB SSD", price: "KSh 52,000", original: "KSh 70,000", image: hpPavilion15, badge: "Certified" },
                  { model: "HP Envy 13 G5", specs: "i7-8550U, 8GB, 256GB SSD", price: "KSh 55,000", original: "KSh 78,000", image: hpEnvy13, badge: "Very Good" },
                ].map((item, idx) => (
                  <div key={idx} className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                        {item.badge}
                      </span>
                    </div>
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dell Series Showcase */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="glass-card p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <img src={dellLogo} alt="Dell" className="h-8 sm:h-10 md:h-12 object-contain" />
              <div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-foreground">Dell Laptops</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Precision engineered for performance</p>
              </div>
            </div>

            {/* Dell Budget Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-secondary rounded"></div>
                Dell Budget Series - Value for Money
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "Dell Inspiron 14 3000", specs: "i3-1005G1, 4GB, 1TB HDD", price: "KSh 25,000", original: "KSh 35,000", image: dellInspiron15 },
                  { model: "Dell Vostro 3400", specs: "i3-1115G4, 4GB, 256GB SSD", price: "KSh 28,000", original: "KSh 40,000", image: dellInspiron15 },
                  { model: "Dell Inspiron 15 3501", specs: "i3-1005G1, 4GB, 256GB SSD", price: "KSh 22,000", original: "KSh 33,000", image: dellInspiron15 },
                  { model: "Dell Latitude 3190", specs: "Celeron N4120, 4GB, 128GB", price: "KSh 18,000", original: "KSh 28,000", image: dellLatitude5420 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h5 className="font-bold text-foreground mb-2 text-sm sm:text-base">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-base sm:text-lg font-bold text-secondary">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full text-xs sm:text-sm">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="mb-8">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded"></div>
                Dell Inspiron Series - Everyday Computing
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "Dell Inspiron 15 3000", specs: "i3-1115G4, 8GB, 256GB SSD", price: "KSh 52,000", original: "KSh 65,000", image: dellInspiron15 },
                  { model: "Dell Inspiron 15 3520", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 68,000", original: "KSh 82,000", image: dellInspiron15 },
                  { model: "Dell Inspiron 15 5000", specs: "i5-1235U, 16GB, 512GB SSD", price: "KSh 85,000", original: "KSh 98,000", image: dellInspiron15 },
                  { model: "Dell Inspiron 16 Plus", specs: "i7-12700H, 16GB, 512GB SSD", price: "KSh 115,000", original: "KSh 135,000", image: dellInspiron15 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dell XPS Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded"></div>
                Dell XPS Series - Premium Ultrabooks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "Dell XPS 13 9310", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 125,000", original: "KSh 148,000", image: dellXps13 },
                  { model: "Dell XPS 13 Plus", specs: "i7-1260P, 16GB, 512GB SSD", price: "KSh 165,000", original: "KSh 195,000", image: dellXps13 },
                  { model: "Dell XPS 15 9520", specs: "i7-12700H, 16GB, 1TB SSD", price: "KSh 195,000", original: "KSh 230,000", image: dellXps13 },
                  { model: "Dell XPS 17 9720", specs: "i9-12900HK, RTX 3050, 32GB", price: "KSh 285,000", original: "KSh 335,000", image: dellXps13 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-background/60 to-accent/5 backdrop-blur-sm border border-accent/30 rounded-lg overflow-hidden hover:border-accent/70 transition-all hover:shadow-lg hover:shadow-accent/20">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dell Latitude Series */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-secondary rounded"></div>
                Dell Latitude Series - Business Ready
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "Dell Latitude 3420", specs: "i5-1135G7, 8GB, 256GB SSD", price: "KSh 72,000", original: "KSh 88,000", image: dellLatitude5420 },
                  { model: "Dell Latitude 5420", specs: "i5-1145G7, 16GB, 512GB SSD", price: "KSh 95,000", original: "KSh 115,000", image: dellLatitude5420 },
                  { model: "Dell Latitude 7420", specs: "i7-1185G7, 16GB, 512GB SSD", price: "KSh 125,000", original: "KSh 148,000", image: dellLatitude5420 },
                  { model: "Dell Latitude 9420", specs: "i7-1185G7, 16GB, 1TB SSD", price: "KSh 155,000", original: "KSh 185,000", image: dellLatitude5420 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-secondary">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dell Refurbished Series */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-accent via-primary to-secondary rounded"></div>
                Dell Refurbished - Quality Assured
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { model: "Dell Latitude 5410", specs: "i5-10310U, 8GB, 256GB SSD", price: "KSh 45,000", original: "KSh 72,000", image: dellLatitude5420, badge: "Certified" },
                  { model: "Dell Inspiron 15 5000", specs: "i5-8265U, 8GB, 256GB SSD", price: "KSh 38,000", original: "KSh 60,000", image: dellInspiron15, badge: "Very Good" },
                  { model: "Dell XPS 13 9360", specs: "i7-8550U, 16GB, 512GB SSD", price: "KSh 68,000", original: "KSh 95,000", image: dellXps13, badge: "Excellent" },
                  { model: "Dell Latitude 7490", specs: "i7-8650U, 16GB, 512GB SSD", price: "KSh 58,000", original: "KSh 85,000", image: dellLatitude5420, badge: "Certified" },
                ].map((item, idx) => (
                  <div key={idx} className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-semibold">
                        {item.badge}
                      </span>
                    </div>
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-foreground mb-2">{item.model}</h5>
                      <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-accent">{item.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{item.original}</span>
                      </div>
                      <Button size="sm" variant="hero" className="w-full">
                        <ShoppingCart size={14} className="mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
