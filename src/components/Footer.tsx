import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MessageSquare,
  MapPin,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                FRIMAT TECHNOLOGIES
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Connecting Innovation. Delivering Solutions.
                <br />
                <span className="text-accent">Where Technology Meets Excellence</span>
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>frimattechnologies016@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageSquare size={18} className="text-accent" />
                <span>+94 11 227 7289</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-secondary" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Services",
                "Cybersecurity",
                "IT Support",
                "E-commerce Solutions"
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-6">Stay Connected</h4>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="glass" size="sm">
                  <Mail size={16} />
                </Button>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-foreground mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, color: "hover:text-blue-500" },
                  { icon: Twitter, color: "hover:text-sky-500" },
                  { icon: Linkedin, color: "hover:text-blue-700" },
                  { icon: Instagram, color: "hover:text-pink-500" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button 
                      key={index}
                      className={`p-2 rounded-lg bg-muted/20 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <Icon size={20} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 FRIMAT TECHNOLOGIES. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Scroll to Top */}
            <Button 
              variant="glass" 
              size="icon"
              onClick={scrollToTop}
              className="hover-scale"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}