import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Home, 
  Info, 
  Settings, 
  ShoppingBag, 
  Briefcase, 
  FileText, 
  Phone,
  Menu,
  X,
  Receipt
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Settings },
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
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
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

  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass" : "bg-transparent"
        }`}>
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FRIMAT
            </div>
            <Button 
              variant="nav" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 glass-card">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-4 text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={24} />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        <nav className="mobile-nav md:hidden">
          <div className="flex justify-around items-center">
            {navigation.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-item ${isActive ? "active" : ""}`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass backdrop-blur-xl" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FRIMAT TECHNOLOGIES
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-primary glow-primary" 
                      : "text-foreground hover:text-primary hover:glow-primary"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}