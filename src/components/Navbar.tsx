import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartStore } from "@/stores/cartStore";
import ThemeToggle from "@/components/ThemeToggle";
import frimatLogo from "@/assets/frimat-logo.png";
import { 
  Home, 
  Phone,
  Menu,
  X,
  ShoppingCart,
  ChevronRight,
  ChevronDown,
  Monitor,
  Shield,
  Cloud,
  Code,
  HeartPulse,
  ShoppingBag,
  Building2,
  Factory,
  Server,
  Layers,
  Lock,
  Cpu,
  BookOpen,
  FileText,
  FolderOpen,
  HelpCircle,
  Rocket,
  Headphones,
  Users,
  Briefcase,
  Info
} from "lucide-react";

// Mega menu data structure
const megaMenuData = {
  services: {
    title: "Services",
    items: [
      { name: "IT Support", href: "/services/it-support", icon: Monitor, description: "24/7 technical assistance & maintenance" },
      { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield, description: "Protect your digital assets" },
      { name: "Cloud Migration", href: "/services/cloud-migration", icon: Cloud, description: "Seamless cloud transition services" },
      { name: "Custom Development", href: "/services/custom-development", icon: Code, description: "Tailored software solutions" },
    ]
  },
  solutions: {
    title: "Solutions",
    items: [
      { name: "Healthcare", href: "/solutions/healthcare", icon: HeartPulse, description: "Digital health solutions" },
      { name: "Retail & E-commerce", href: "/solutions/retail", icon: ShoppingBag, description: "Modern retail technology" },
      { name: "Finance & Banking", href: "/solutions/finance", icon: Building2, description: "Secure financial systems" },
      { name: "Manufacturing", href: "/solutions/manufacturing", icon: Factory, description: "Industry 4.0 solutions" },
    ]
  },
  technologies: {
    title: "Technologies",
    items: [
      { name: "Cloud Platforms", href: "/technologies/cloud-platforms", icon: Server, description: "AWS, Azure, Google Cloud" },
      { name: "Development Stack", href: "/technologies/development-stack", icon: Layers, description: "Modern frameworks & tools" },
      { name: "Security Tools", href: "/technologies/security-tools", icon: Lock, description: "Enterprise-grade security" },
      { name: "IoT Platforms", href: "/technologies/iot-platforms", icon: Cpu, description: "Connected device solutions" },
    ]
  },
  resources: {
    title: "Resources",
    items: [
      { name: "Blog", href: "#blog", icon: BookOpen, description: "Latest tech insights" },
      { name: "Whitepapers", href: "/resources/whitepapers", icon: FileText, description: "In-depth research & guides" },
      { name: "Case Studies", href: "#portfolio", icon: FolderOpen, description: "Success stories" },
      { name: "FAQs", href: "#faq", icon: HelpCircle, description: "Common questions answered" },
    ]
  }
};

const mainNavItems = [
  { name: "Home", href: "#home", hasDropdown: false },
  { name: "Services", href: "#services", hasDropdown: true, menuKey: "services" },
  { name: "Solutions", href: "#services", hasDropdown: true, menuKey: "solutions" },
  { name: "Tech", href: "#services", hasDropdown: true, menuKey: "technologies" },
  { name: "Case Studies", href: "#portfolio", hasDropdown: false },
  { name: "Resources", href: "#blog", hasDropdown: true, menuKey: "resources" },
  { name: "Contact", href: "#contact", hasDropdown: false },
];

const mobileNavItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Services", href: "#services", icon: Monitor, hasSubmenu: true, menuKey: "services" },
  { name: "Solutions", href: "#services", icon: Building2, hasSubmenu: true, menuKey: "solutions" },
  { name: "Technologies", href: "#services", icon: Cpu, hasSubmenu: true, menuKey: "technologies" },
  { name: "Case Studies", href: "#portfolio", icon: FolderOpen },
  { name: "Resources", href: "#blog", icon: BookOpen, hasSubmenu: true, menuKey: "resources" },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Phone },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { totalItems } = useCart();
  const shopifyCartItems = useCartStore(state => state.items);
  const shopifyTotalItems = shopifyCartItems.reduce((sum, item) => sum + item.quantity, 0);
  const combinedTotalItems = totalItems + shopifyTotalItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      
      const sections = ["home", "about", "services", "shop", "portfolio", "blog", "faq", "contact"];
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

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileMenu(null);
    
    if (href.startsWith('#')) {
      // If we're not on the homepage, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Navigate to the route
      navigate(href);
    }
  };

  const handleDropdownToggle = (menuKey: string) => {
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
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
          {/* Scroll Progress Bar */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-full">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <button onClick={() => handleNavigation('#home')} className="focus:outline-none group">
              <img 
                src={frimatLogo} 
                alt="FRIMAT Technologies" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </button>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <a 
                href="tel:+254112277289"
                className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-300"
              >
                <Phone size={18} />
              </a>
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
          <div className={`relative h-full flex flex-col pt-20 px-6 overflow-y-auto transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-8"
          }`}>
            {/* Theme Toggle */}
            <div className="flex justify-end mb-4">
              <ThemeToggle />
            </div>

            <nav className="flex-1 space-y-2 pb-32">
              {mobileNavItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                const isExpanded = expandedMobileMenu === item.menuKey;
                const menuData = item.menuKey ? megaMenuData[item.menuKey as keyof typeof megaMenuData] : null;

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        if (item.hasSubmenu && item.menuKey) {
                          setExpandedMobileMenu(isExpanded ? null : item.menuKey);
                        } else {
                          handleNavigation(item.href);
                        }
                      }}
                      style={{ animationDelay: `${index * 50}ms` }}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
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
                      {item.hasSubmenu ? (
                        <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      ) : (
                        <ChevronRight size={20} className={isActive ? "text-primary-foreground" : "text-muted-foreground"} />
                      )}
                    </button>

                    {/* Submenu */}
                    {item.hasSubmenu && menuData && (
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 mt-2" : "max-h-0"}`}>
                        <div className="pl-4 space-y-1">
                          {menuData.items.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavigation(subItem.href)}
                                className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-primary/10 transition-colors"
                              >
                                <SubIcon size={18} className="text-primary" />
                                <div className="text-left">
                                  <div className="font-medium text-sm">{subItem.name}</div>
                                  <div className="text-xs text-muted-foreground">{subItem.description}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Additional Links */}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavigation('#contact'); }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-primary/20">
                    <Rocket size={22} className="text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-primary">Get a Demo</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavigation('#contact'); }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-background/50">
                    <Headphones size={22} />
                  </div>
                  <span className="text-lg font-semibold">Support / Help Desk</span>
                </a>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); handleNavigation('#about'); }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-background/50">
                    <Users size={22} />
                  </div>
                  <span className="text-lg font-semibold">Partners</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavigation('#contact'); }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-background/50">
                    <Briefcase size={22} />
                  </div>
                  <span className="text-lg font-semibold">Careers</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

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
        {/* Top Bar */}
        <div className="hidden lg:block border-b border-border/20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="flex items-center gap-6">
                <a href="tel:+254112277289" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} />
                  <span>+254 112 277 289</span>
                </a>
                <span className="text-border">|</span>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('#contact'); }} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Headphones size={14} />
                  <span>Support / Help Desk</span>
                </a>
              </div>
              <div className="flex items-center gap-6">
                <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('#about'); }} className="text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('#contact'); }} className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button onClick={() => handleNavigation('#home')} className="focus:outline-none group">
              <img 
                src={frimatLogo} 
                alt="FRIMAT Technologies" 
                className="h-10 lg:h-12 w-auto transition-all duration-300 group-hover:scale-105" 
              />
            </button>

            {/* Desktop Navigation with Mega Menus */}
            <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
              {mainNavItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const menuData = item.menuKey ? megaMenuData[item.menuKey as keyof typeof megaMenuData] : null;

                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => {
                        if (item.hasDropdown && item.menuKey) {
                          handleDropdownToggle(item.menuKey);
                        } else {
                          handleNavigation(item.href);
                        }
                      }}
                      onMouseEnter={() => {
                        if (item.hasDropdown && item.menuKey) {
                          setActiveDropdown(item.menuKey);
                        }
                      }}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive || activeDropdown === item.menuKey
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.menuKey ? "rotate-180" : ""}`} />
                      )}
                    </button>

                    {/* Mega Menu Dropdown */}
                    {item.hasDropdown && menuData && (
                      <div 
                        className={`absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.menuKey 
                            ? "opacity-100 visible translate-y-0" 
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="p-2">
                          <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {menuData.title}
                          </div>
                          {menuData.items.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavigation(subItem.href)}
                                className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                              >
                                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                  <SubIcon size={18} className="text-primary" />
                                </div>
                                <div className="text-left">
                                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">{subItem.name}</div>
                                  <div className="text-xs text-muted-foreground">{subItem.description}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Phone - visible on smaller screens */}
              <a 
                href="tel:+254112277289"
                className="hidden md:flex lg:hidden items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
              >
                <Phone size={16} />
              </a>

              {/* Theme Toggle - visible on tablet */}
              <div className="hidden md:block lg:hidden">
                <ThemeToggle />
              </div>
              
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

              {/* Get a Demo CTA */}
              <Button 
                onClick={() => handleNavigation('#contact')}
                className="hidden sm:flex rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                <Rocket size={16} className="mr-2" />
                Get a Demo
              </Button>
            </div>
          </nav>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-full">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
