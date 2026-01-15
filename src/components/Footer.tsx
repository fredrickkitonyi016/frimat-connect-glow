import { 
  Mail, 
  MessageSquare,
  MapPin,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import frimatLogo from "@/assets/frimat-logo.png";
import SocialIconsStack from "./SocialIconsStack";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <button onClick={() => handleNavigation('#home')} className="focus:outline-none mb-4">
                <img src={frimatLogo} alt="FRIMAT Technologies" className="h-12 w-auto" />
              </button>
              <p className="text-muted-foreground leading-relaxed">
                Connecting Innovation. Delivering Solutions.
                <br />
                <span className="text-accent">Where Technology Meets Excellence</span>
              </p>
            </div>
            
            <div className="space-y-3">
              <a href="mailto:frimattechnologies016@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" />
                <span>frimattechnologies016@gmail.com</span>
              </a>
              <a href="https://wa.me/254112277289" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <MessageSquare size={18} className="text-accent" />
                <span>+254112277289</span>
              </a>
              <a href="https://maps.google.com/?q=Nairobi,Kenya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors">
                <MapPin size={18} className="text-secondary" />
                <span>Nairobi, Kenya</span>
              </a>
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
                  <button 
                    onClick={() => handleNavigation(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", href: "/services/web-development" },
                { name: "Mobile Apps", href: "/services/mobile-apps" },
                { name: "Cloud Services", href: "/services/cloud-services" },
                { name: "Cybersecurity", href: "/services/cybersecurity" },
                { name: "IT Support", href: "/services/it-support" },
                { name: "E-commerce", href: "/services/ecommerce" },
                { name: "Government Services", href: "/services/government-services" }
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(service.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Portals */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Government Portals</h4>
            <ul className="space-y-3">
              {[
                { name: "KRA iTax", href: "https://itax.kra.go.ke" },
                { name: "HELB Portal", href: "https://www.helb.co.ke" },
                { name: "SHA (Health)", href: "https://www.sha.go.ke" },
                { name: "e-Citizen", href: "https://www.ecitizen.go.ke" },
                { name: "NSSF Portal", href: "https://www.nssf.or.ke" }
              ].map((portal, index) => (
                <li key={index}>
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {portal.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
              <SocialIconsStack />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} FRIMAT TECHNOLOGIES. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <button onClick={() => navigate('/privacy-policy')} className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => navigate('/terms-of-service')} className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button onClick={() => navigate('/cookies-policy')} className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </button>
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