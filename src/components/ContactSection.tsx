import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="it-support">IT Support</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button variant="hero" className="w-full">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Mail className="text-background" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">frimattechnologies016@gmail.com</p>
                    <p className="text-sm text-accent">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-accent">
                    <MessageSquare className="text-background" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+254112277289</p>
                    <p className="text-sm text-accent">Available 24/7 for urgent inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-primary">
                    <MapPin className="text-background" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Office</h4>
                    <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                    <p className="text-sm text-accent">Visit by appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                    <Clock className="text-background" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sat - Sun: 10:00 AM - 4:00 PM</p>
                    <p className="text-sm text-accent">Sri Lanka Standard Time (UTC+5:30)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Facebook, name: "Facebook", color: "from-blue-500 to-blue-600" },
                  { icon: Twitter, name: "Twitter", color: "from-sky-500 to-sky-600" },
                  { icon: Linkedin, name: "LinkedIn", color: "from-blue-700 to-blue-800" },
                  { icon: Instagram, name: "Instagram", color: "from-pink-500 to-orange-500" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button 
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover-scale group`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{social.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="glass-card text-center">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-primary w-fit mx-auto mb-4">
                <Send className="text-background" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-muted-foreground">
                We value your time. All inquiries receive a response within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}