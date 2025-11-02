import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

// Accessory Images
import wirelessMouse from "@/assets/accessories/wireless-mouse.jpg";
import mechanicalKeyboard from "@/assets/accessories/mechanical-keyboard.jpg";
import laptopBag from "@/assets/accessories/laptop-bag.jpg";
import usbHub from "@/assets/accessories/usb-hub.jpg";
import externalHDD from "@/assets/accessories/external-hdd.jpg";
import webcam from "@/assets/accessories/webcam.jpg";
import headphones from "@/assets/accessories/headphones.jpg";
import monitor from "@/assets/accessories/monitor.jpg";
import printer from "@/assets/accessories/printer.jpg";
import ssd from "@/assets/accessories/ssd.jpg";
import ram from "@/assets/accessories/ram.jpg";
import powerbank from "@/assets/accessories/powerbank.jpg";
import coolingPad from "@/assets/accessories/cooling-pad.jpg";
import usbFlash from "@/assets/accessories/usb-flash.jpg";
import hdmiCable from "@/assets/accessories/hdmi-cable.jpg";

// Laptop Product Images
import hpPavilion15 from "@/assets/products/hp-pavilion-15.jpg";
import hpElitebook840 from "@/assets/products/hp-elitebook-840.jpg";
import hpProbook450 from "@/assets/products/hp-probook-450.jpg";
import hpEnvy13 from "@/assets/products/hp-envy-13.jpg";
import hpOmen15 from "@/assets/products/hp-omen-15.jpg";
import dellInspiron15 from "@/assets/products/dell-inspiron-15.jpg";
import dellXps13 from "@/assets/products/dell-xps-13.jpg";
import dellLatitude5420 from "@/assets/products/dell-latitude-5420.jpg";
import acerAspire5 from "@/assets/products/acer-aspire-5.jpg";
import acerSwift3 from "@/assets/products/acer-swift-3.jpg";
import acerNitro5 from "@/assets/products/acer-nitro-5.jpg";
import lenovoThinkpadE14 from "@/assets/products/lenovo-thinkpad-e14.jpg";
import lenovoIdeapad3 from "@/assets/products/lenovo-ideapad-3.jpg";
import lenovoLegion5 from "@/assets/products/lenovo-legion-5.jpg";
import macbookAirM1 from "@/assets/products/macbook-air-m1.jpg";
import macbookPro14 from "@/assets/products/macbook-pro-14.jpg";
import toshibaSatellitePro from "@/assets/products/toshiba-satellite-pro.jpg";
import toshibaPortege from "@/assets/products/toshiba-portege.jpg";

export default function ShopSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Comprehensive product database - Accessories + Laptops
  const allProducts = [
    // ICT Accessories
    { name: "Wireless Mouse", category: "Peripherals", brand: "Accessories", specs: "2.4GHz, Ergonomic Design", price: "KSh 1,500", original: "KSh 2,500", description: "Comfortable wireless mouse with long battery life and precise tracking", image: wirelessMouse },
    { name: "Mechanical RGB Keyboard", category: "Peripherals", brand: "Accessories", specs: "Mechanical, RGB Backlit", price: "KSh 3,500", original: "KSh 5,000", description: "High-quality mechanical keyboard with customizable RGB lighting and durable switches", image: mechanicalKeyboard },
    { name: "Laptop Bag 15.6\"", category: "Accessories", brand: "Accessories", specs: "15.6 inch, Water Resistant", price: "KSh 2,000", original: "KSh 3,500", description: "Durable and stylish laptop bag with multiple compartments and padded protection", image: laptopBag },
    { name: "USB-C Hub 7-in-1", category: "Accessories", brand: "Accessories", specs: "7-in-1, HDMI, USB 3.0", price: "KSh 2,500", original: "KSh 4,000", description: "Multi-port hub with HDMI 4K, USB 3.0 ports, and SD card reader for enhanced connectivity", image: usbHub },
    { name: "External Hard Drive 1TB", category: "Storage", brand: "Accessories", specs: "1TB, USB 3.0", price: "KSh 5,500", original: "KSh 7,500", description: "Portable external storage with fast USB 3.0 transfer speeds and reliable data backup", image: externalHDD },
    { name: "HD Webcam 1080p", category: "Peripherals", brand: "Accessories", specs: "1080p, Auto Focus", price: "KSh 4,500", original: "KSh 6,500", description: "Full HD webcam perfect for video calls, streaming, and online meetings with auto-focus", image: webcam },
    { name: "Wireless Headphones", category: "Audio", brand: "Accessories", specs: "Wireless, Noise Canceling", price: "KSh 6,000", original: "KSh 9,000", description: "Premium wireless headphones with active noise cancellation and superior sound quality", image: headphones },
    { name: "24\" IPS Monitor", category: "Displays", brand: "Accessories", specs: "24 inch, Full HD, IPS", price: "KSh 15,000", original: "KSh 22,000", description: "High-quality IPS monitor with vibrant colors, wide viewing angles, and slim bezels", image: monitor },
    { name: "WiFi All-in-One Printer", category: "Office", brand: "Accessories", specs: "All-in-One, WiFi", price: "KSh 12,000", original: "KSh 18,000", description: "Multi-function printer with wireless connectivity, scanning, and copying capabilities", image: printer },
    { name: "NVMe SSD 512GB", category: "Storage", brand: "Accessories", specs: "512GB, NVMe", price: "KSh 7,000", original: "KSh 10,000", description: "High-speed NVMe solid state drive for lightning-fast boot times and data access", image: ssd },
    { name: "DDR4 RAM 16GB", category: "Components", brand: "Accessories", specs: "16GB, DDR4", price: "KSh 5,500", original: "KSh 8,000", description: "High-performance memory upgrade for improved multitasking and system responsiveness", image: ram },
    { name: "Power Bank 20000mAh", category: "Accessories", brand: "Accessories", specs: "20000mAh, Fast Charge", price: "KSh 3,000", original: "KSh 4,500", description: "High-capacity power bank with fast charging for multiple device charges on the go", image: powerbank },
    { name: "Laptop Cooling Pad", category: "Accessories", brand: "Accessories", specs: "Dual Fan, LED", price: "KSh 2,500", original: "KSh 4,000", description: "Ergonomic laptop cooling pad with dual LED fans to prevent overheating and improve performance", image: coolingPad },
    { name: "USB Flash Drive 64GB", category: "Storage", brand: "Accessories", specs: "64GB, USB 3.0", price: "KSh 800", original: "KSh 1,500", description: "Compact and fast USB 3.0 flash storage for portable data transfer", image: usbFlash },
    { name: "HDMI Cable 2m", category: "Cables", brand: "Accessories", specs: "2m, 4K Support", price: "KSh 600", original: "KSh 1,200", description: "Premium braided HDMI cable with 4K support and gold-plated connectors", image: hdmiCable },

    // HP Laptops - Budget Series
    { name: "HP 240 G7", category: "Laptops", brand: "HP", specs: "i3-7020U, 4GB, 500GB HDD", price: "KSh 18,000", original: "KSh 28,000", description: "Affordable HP laptop ideal for basic computing tasks and students", image: hpPavilion15 },
    { name: "HP 250 G7", category: "Laptops", brand: "HP", specs: "i3-1005G1, 4GB, 1TB HDD", price: "KSh 22,000", original: "KSh 32,000", description: "Entry-level HP laptop with ample storage for everyday use", image: hpPavilion15 },
    { name: "HP 14s-cf3000", category: "Laptops", brand: "HP", specs: "Celeron N4020, 4GB, 128GB", price: "KSh 15,000", original: "KSh 25,000", description: "Compact and portable HP laptop perfect for light tasks", image: hpPavilion15 },
    { name: "HP 15-dw3000", category: "Laptops", brand: "HP", specs: "i3-1115G4, 4GB, 256GB SSD", price: "KSh 28,000", original: "KSh 38,000", description: "Modern HP laptop with SSD for faster performance", image: hpPavilion15 },

    // HP Pavilion Series
    { name: "HP Pavilion 14", category: "Laptops", brand: "HP", specs: "i3-1115G4, 8GB, 256GB SSD", price: "KSh 55,000", original: "KSh 68,000", description: "Stylish and portable HP Pavilion for everyday productivity", image: hpPavilion15 },
    { name: "HP Pavilion 15", category: "Laptops", brand: "HP", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 65,000", original: "KSh 78,000", description: "Versatile HP Pavilion with balanced performance and storage", image: hpPavilion15 },
    { name: "HP Pavilion 15 Touch", category: "Laptops", brand: "HP", specs: "i5-1235U, 16GB, 512GB SSD", price: "KSh 82,000", original: "KSh 95,000", description: "Touchscreen HP Pavilion for interactive computing experience", image: hpPavilion15 },
    { name: "HP Pavilion x360", category: "Laptops", brand: "HP", specs: "i7-1255U, 16GB, 512GB SSD", price: "KSh 95,000", original: "KSh 115,000", description: "Convertible HP Pavilion with 360-degree hinge for multiple modes", image: hpPavilion15 },

    // HP EliteBook Series
    { name: "HP EliteBook 840 G8", category: "Laptops", brand: "HP", specs: "i5-1135G7, 8GB, 256GB SSD", price: "KSh 85,000", original: "KSh 105,000", description: "Professional HP EliteBook for business productivity", image: hpElitebook840 },
    { name: "HP EliteBook 840 G9", category: "Laptops", brand: "HP", specs: "i7-1185G7, 16GB, 512GB SSD", price: "KSh 110,000", original: "KSh 130,000", description: "Premium HP EliteBook with enhanced security and performance", image: hpElitebook840 },
    { name: "HP EliteBook 850 G8", category: "Laptops", brand: "HP", specs: "i7-1165G7, 16GB, 512GB SSD", price: "KSh 115,000", original: "KSh 135,000", description: "Larger screen HP EliteBook for professionals", image: hpElitebook840 },
    { name: "HP EliteBook x360", category: "Laptops", brand: "HP", specs: "i7-1260P, 16GB, 1TB SSD", price: "KSh 145,000", original: "KSh 170,000", description: "Convertible HP EliteBook with enterprise-grade features", image: hpElitebook840 },

    // HP ProBook Series
    { name: "HP ProBook 440 G8", category: "Laptops", brand: "HP", specs: "i5-1135G7, 8GB, 256GB SSD", price: "KSh 68,000", original: "KSh 82,000", description: "Reliable HP ProBook for small business professionals", image: hpProbook450 },
    { name: "HP ProBook 450 G8", category: "Laptops", brand: "HP", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 75,000", original: "KSh 90,000", description: "Popular HP ProBook with excellent value for money", image: hpProbook450 },
    { name: "HP ProBook 450 G9", category: "Laptops", brand: "HP", specs: "i7-1255U, 16GB, 512GB SSD", price: "KSh 95,000", original: "KSh 112,000", description: "Latest generation HP ProBook with powerful performance", image: hpProbook450 },
    { name: "HP ProBook 455 G9", category: "Laptops", brand: "HP", specs: "Ryzen 7, 16GB, 512GB SSD", price: "KSh 88,000", original: "KSh 105,000", description: "AMD-powered HP ProBook for efficient multitasking", image: hpProbook450 },

    // HP Envy Series
    { name: "HP Envy 13", category: "Laptops", brand: "HP", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 92,000", original: "KSh 108,000", description: "Premium ultraportable HP Envy with sleek design", image: hpEnvy13 },
    { name: "HP Envy 14", category: "Laptops", brand: "HP", specs: "i7-1195G7, 16GB, 512GB SSD", price: "KSh 125,000", original: "KSh 145,000", description: "Creator-focused HP Envy with stunning display", image: hpEnvy13 },
    { name: "HP Envy x360 13", category: "Laptops", brand: "HP", specs: "Ryzen 7, 16GB, 512GB SSD", price: "KSh 105,000", original: "KSh 125,000", description: "Convertible HP Envy with AMD performance", image: hpEnvy13 },
    { name: "HP Envy 17", category: "Laptops", brand: "HP", specs: "i7-1255U, 16GB, 1TB SSD", price: "KSh 148,000", original: "KSh 175,000", description: "Large-screen HP Envy for multimedia and creativity", image: hpEnvy13 },

    // HP Omen Series
    { name: "HP Omen 15", category: "Laptops", brand: "HP", specs: "i5-11400H, RTX 3050, 16GB", price: "KSh 135,000", original: "KSh 165,000", description: "Entry-level gaming laptop with RTX graphics", image: hpOmen15 },
    { name: "HP Omen 15 RTX 3060", category: "Laptops", brand: "HP", specs: "i7-11800H, RTX 3060, 16GB", price: "KSh 165,000", original: "KSh 195,000", description: "Mid-range gaming powerhouse for smooth gameplay", image: hpOmen15 },
    { name: "HP Omen 16", category: "Laptops", brand: "HP", specs: "i7-12700H, RTX 3070, 16GB", price: "KSh 195,000", original: "KSh 235,000", description: "High-performance gaming laptop with latest gen specs", image: hpOmen15 },
    { name: "HP Omen 17", category: "Laptops", brand: "HP", specs: "i9-12900H, RTX 3080, 32GB", price: "KSh 285,000", original: "KSh 340,000", description: "Ultimate gaming machine with top-tier components", image: hpOmen15 },

    // Dell Laptops
    { name: "Dell Inspiron 15 3000", category: "Laptops", brand: "Dell", specs: "i3-1115G4, 8GB, 256GB SSD", price: "KSh 48,000", original: "KSh 62,000", description: "Affordable Dell Inspiron for everyday computing", image: dellInspiron15 },
    { name: "Dell Inspiron 15 5000", category: "Laptops", brand: "Dell", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 68,000", original: "KSh 85,000", description: "Mid-range Dell Inspiron with solid performance", image: dellInspiron15 },
    { name: "Dell Inspiron 15 7000", category: "Laptops", brand: "Dell", specs: "i7-1165G7, 16GB, 512GB SSD", price: "KSh 88,000", original: "KSh 105,000", description: "Premium Dell Inspiron for demanding tasks", image: dellInspiron15 },
    { name: "Dell XPS 13", category: "Laptops", brand: "Dell", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 125,000", original: "KSh 150,000", description: "Iconic Dell XPS with InfinityEdge display", image: dellXps13 },
    { name: "Dell XPS 13 Plus", category: "Laptops", brand: "Dell", specs: "i7-1260P, 16GB, 1TB SSD", price: "KSh 165,000", original: "KSh 195,000", description: "Next-gen Dell XPS with modern design", image: dellXps13 },
    { name: "Dell Latitude 5420", category: "Laptops", brand: "Dell", specs: "i5-1135G7, 8GB, 256GB SSD", price: "KSh 78,000", original: "KSh 95,000", description: "Business-class Dell Latitude with durability", image: dellLatitude5420 },
    { name: "Dell Latitude 7420", category: "Laptops", brand: "Dell", specs: "i7-1185G7, 16GB, 512GB SSD", price: "KSh 115,000", original: "KSh 138,000", description: "Premium Dell Latitude for enterprise users", image: dellLatitude5420 },

    // Acer Laptops
    { name: "Acer Aspire 5", category: "Laptops", brand: "Acer", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 58,000", original: "KSh 72,000", description: "Popular Acer Aspire for general use", image: acerAspire5 },
    { name: "Acer Aspire 7", category: "Laptops", brand: "Acer", specs: "i7-1165G7, 16GB, 512GB SSD", price: "KSh 75,000", original: "KSh 92,000", description: "Powerful Acer Aspire for productivity", image: acerAspire5 },
    { name: "Acer Swift 3", category: "Laptops", brand: "Acer", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 68,000", original: "KSh 85,000", description: "Ultraportable Acer Swift for mobility", image: acerSwift3 },
    { name: "Acer Swift 5", category: "Laptops", brand: "Acer", specs: "i7-1165G7, 16GB, 1TB SSD", price: "KSh 95,000", original: "KSh 115,000", description: "Premium lightweight Acer Swift laptop", image: acerSwift3 },
    { name: "Acer Nitro 5", category: "Laptops", brand: "Acer", specs: "i5-11400H, RTX 3050, 16GB", price: "KSh 115,000", original: "KSh 140,000", description: "Budget gaming laptop with solid specs", image: acerNitro5 },
    { name: "Acer Nitro 5 RTX 3060", category: "Laptops", brand: "Acer", specs: "i7-11800H, RTX 3060, 16GB", price: "KSh 145,000", original: "KSh 175,000", description: "Mid-tier gaming Acer Nitro for gamers", image: acerNitro5 },

    // Lenovo Laptops
    { name: "Lenovo IdeaPad 3", category: "Laptops", brand: "Lenovo", specs: "i3-1115G4, 8GB, 256GB SSD", price: "KSh 45,000", original: "KSh 58,000", description: "Budget-friendly Lenovo IdeaPad for students", image: lenovoIdeapad3 },
    { name: "Lenovo IdeaPad 5", category: "Laptops", brand: "Lenovo", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 62,000", original: "KSh 78,000", description: "Mid-range Lenovo IdeaPad with good value", image: lenovoIdeapad3 },
    { name: "Lenovo ThinkPad E14", category: "Laptops", brand: "Lenovo", specs: "i5-1135G7, 8GB, 256GB SSD", price: "KSh 72,000", original: "KSh 88,000", description: "Professional Lenovo ThinkPad for business", image: lenovoThinkpadE14 },
    { name: "Lenovo ThinkPad E15", category: "Laptops", brand: "Lenovo", specs: "i7-1165G7, 16GB, 512GB SSD", price: "KSh 95,000", original: "KSh 115,000", description: "Larger screen Lenovo ThinkPad for productivity", image: lenovoThinkpadE14 },
    { name: "Lenovo Legion 5", category: "Laptops", brand: "Lenovo", specs: "Ryzen 7, RTX 3060, 16GB", price: "KSh 155,000", original: "KSh 185,000", description: "Gaming laptop with AMD and NVIDIA power", image: lenovoLegion5 },
    { name: "Lenovo Legion 7", category: "Laptops", brand: "Lenovo", specs: "i7-12700H, RTX 3070, 32GB", price: "KSh 195,000", original: "KSh 235,000", description: "Premium Lenovo Legion for serious gamers", image: lenovoLegion5 },

    // Apple MacBooks
    { name: "MacBook Air M1", category: "Laptops", brand: "Apple", specs: "M1 Chip, 8GB, 256GB SSD", price: "KSh 125,000", original: "KSh 155,000", description: "Revolutionary Apple MacBook Air with M1 chip", image: macbookAirM1 },
    { name: "MacBook Air M2", category: "Laptops", brand: "Apple", specs: "M2 Chip, 8GB, 512GB SSD", price: "KSh 165,000", original: "KSh 195,000", description: "Latest MacBook Air with improved M2 performance", image: macbookAirM1 },
    { name: "MacBook Pro 14 M1 Pro", category: "Laptops", brand: "Apple", specs: "M1 Pro, 16GB, 512GB SSD", price: "KSh 235,000", original: "KSh 285,000", description: "Professional MacBook Pro for creators", image: macbookPro14 },
    { name: "MacBook Pro 14 M2 Pro", category: "Laptops", brand: "Apple", specs: "M2 Pro, 16GB, 1TB SSD", price: "KSh 285,000", original: "KSh 340,000", description: "Cutting-edge MacBook Pro with M2 Pro chip", image: macbookPro14 },

    // Toshiba Laptops
    { name: "Toshiba Satellite Pro", category: "Laptops", brand: "Toshiba", specs: "i5-1135G7, 8GB, 512GB SSD", price: "KSh 58,000", original: "KSh 72,000", description: "Reliable Toshiba Satellite for business use", image: toshibaSatellitePro },
    { name: "Toshiba Portege", category: "Laptops", brand: "Toshiba", specs: "i7-1165G7, 16GB, 512GB SSD", price: "KSh 85,000", original: "KSh 105,000", description: "Ultra-portable Toshiba Portege for professionals", image: toshibaPortege },
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    const found = allProducts.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(found.length > 0 ? found : [
      {
        name: searchQuery,
        category: "ICT Products",
        brand: "General",
        specs: "Contact us for specifications",
        price: "Contact for pricing",
        original: "",
        description: "This item is available. Please contact us for more details, specifications, and pricing information.",
        image: null
      }
    ]);
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
            Search our complete inventory of laptops and ICT accessories from top brands
          </p>
        </div>

        {/* Universal Product Search */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Search Products - Laptops & Accessories
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Find laptops, keyboards, mice, monitors, storage, cables, and more
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for HP laptops, wireless mouse, monitors, SSDs, cables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch} variant="hero" size="lg">
                <Search className="mr-2" size={18} />
                Search
              </Button>
            </div>
          </div>

          {/* Search Results Display */}
          {searchResults.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-foreground">
                  Found {searchResults.length} {searchResults.length === 1 ? 'Product' : 'Products'}
                </h4>
                <button 
                  onClick={() => {
                    setSearchResults([]);
                    setSearchQuery("");
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Clear Results ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {searchResults.map((item, idx) => (
                  <div key={idx} className="glass-card p-4 hover:shadow-lg transition-all">
                    {item.image && (
                      <div className="aspect-video overflow-hidden rounded-lg bg-muted mb-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                        />
                      </div>
                    )}
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.brand}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">{item.category}</span>
                    </div>
                    <h5 className="font-bold text-foreground mb-2">{item.name}</h5>
                    <p className="text-xs text-muted-foreground mb-3">{item.specs}</p>
                    <p className="text-sm text-foreground/80 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                      {item.original && (
                        <span className="text-sm text-muted-foreground line-through">{item.original}</span>
                      )}
                    </div>
                    <Button variant="hero" className="w-full">
                      <ShoppingCart className="mr-2" size={16} />
                      Add to Cart
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Shop CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We have an extensive inventory beyond what's listed. Contact us for custom configurations, bulk orders, or specific models.
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
