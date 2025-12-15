import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartStore } from "@/stores/cartStore";
import ThemeToggle from "@/components/ThemeToggle";
import frimatLogo from "@/assets/frimat-logo.png";
import { 
  Home, 
  Info, 
  Wrench, 
  ShoppingBag, 
  Briefcase, 
  FileText, 
  Phone,
  Menu,
  X,
  Receipt,
  ShoppingCart,
  ChevronRight
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Wrench },
  { name: "Shop", href: "#shop", icon: ShoppingBag },
  { name: "Portfolio", href: "#portfolio", icon: Briefcase },
  { name: "Blog", href: "#blog", icon: FileText },
  { name: "Quotation", href: "#quotation", icon: Receipt },
  { name: "Contact", href: "#contact", icon: Phone },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isMobile = useIsMobile();
  const { totalItems } = useCart();
  const shopifyCartItems = useCartStore(state => state.items);
  const shopifyTotalItems = shopifyCartItems.reduce((sum, item) => sum + item.quantity, 0);
  const combinedTotalItems = totalItems + shopifyTotalItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Mobile View
  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" 
            : "bg-gradient-to-b from-background/90 to-transparent"
        }`}>
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <button onClick={() => scrollToSection('#home')} className="focus:outline-none group">
              <img 
                src={frimatLogo} 
                alt="FRIMAT Technologies" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </button>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
              >
                <ShoppingCart size={20} />
                {combinedTotalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                    {combinedTotalItems}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={`relative h-full flex flex-col pt-20 px-6 transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-8"
          }`}>
            <nav className="flex-1 flex flex-col justify-center space-y-2">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                      isMobileMenuOpen ? "animate-fade-in" : ""
                    } ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${isActive ? "bg-primary-foreground/20" : "bg-background/50"}`}>
                        <Icon size={22} />
                      </div>
                      <span className="text-lg font-semibold">{item.name}</span>
                    </div>
                    <ChevronRight size={20} className={isActive ? "text-primary-foreground" : "text-muted-foreground"} />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border/50 safe-area-pb md:hidden">
          <div className="flex justify-around items-center py-2">
            {navigation.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={20} className={isActive ? "scale-110" : ""} />
                  <span className="text-[10px] font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
      </>
    );
  }

  // Desktop View
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-xl" 
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => scrollToSection('#home')} className="focus:outline-none group">
              <img 
                src={frimatLogo} 
                alt="FRIMAT Technologies" 
                className="h-10 lg:h-12 w-auto transition-all duration-300 group-hover:scale-105" 
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-muted/30 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/30">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden lg:inline">{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 font-medium text-sm"
              >
                <ShoppingCart size={18} />
                <span className="hidden sm:inline">Cart</span>
                {combinedTotalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                    {combinedTotalItems}
                  </span>
                )}
              </button>

              {/* CTA Button */}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="hidden sm:flex rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
