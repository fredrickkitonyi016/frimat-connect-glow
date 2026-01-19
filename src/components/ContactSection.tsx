import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Sparkles,
  Phone
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000)
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<ContactForm>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      return;
    }

    // Build WhatsApp message with all form data
    const whatsappNumber = "254112277289";
    const messageLines = [
      `*New Contact Form Submission*`,
      ``,
      `*Name:* ${formData.firstName} ${formData.lastName}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone || 'Not provided'}`,
      `*Service:* ${formData.service || 'Not specified'}`,
      ``,
      `*Message:*`,
      formData.message
    ];
    
    const whatsappMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Complete your message on WhatsApp. We'll respond within 24 hours.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "from-blue-500 to-blue-600", url: "https://facebook.com/frimattechnologies" },
    { icon: Twitter, name: "Twitter", color: "from-sky-500 to-sky-600", url: "https://twitter.com/frimattechnologies" },
    { icon: Linkedin, name: "LinkedIn", color: "from-blue-700 to-blue-800", url: "https://www.linkedin.com/company/frimat-technologies" },
    { icon: Instagram, name: "Instagram", color: "from-pink-500 to-orange-500", url: "https://instagram.com/frimattechnologies" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary" size={24} />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Let's Connect</span>
            <Sparkles className="text-primary" size={24} />
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Send className="text-primary" size={28} />
              Send us a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-input border ${errors.firstName ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:border-primary/50`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name <span className="text-destructive">*</span>
                  </label>
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-input border ${errors.lastName ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:border-primary/50`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName}</p>}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-input border ${errors.email ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:border-primary/50`}
                  placeholder="john.doe@example.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:border-primary/50"
                  placeholder="+254 712 345 678"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all hover:border-primary/50"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="it-support">IT Support</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="cyber-cafe">Cyber Cafe Services</option>
                  <option value="government-services">Government Services</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-input border ${errors.message ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none hover:border-primary/50`}
                  placeholder="Tell us about your project requirements..."
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message via WhatsApp
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Details Card */}
            <div className="glass-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
              
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Phone className="text-accent" size={24} />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <motion.a 
                  href="mailto:frimattechnologies016@gmail.com" 
                  className="flex items-start gap-4 group p-4 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
                    <Mail className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Email</h4>
                    <p className="text-muted-foreground">frimattechnologies016@gmail.com</p>
                    <p className="text-sm text-accent">We reply within 24 hours</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://wa.me/254112277289" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 group p-4 rounded-xl hover:bg-accent/5 transition-all border border-transparent hover:border-accent/20"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                    <MessageSquare className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">WhatsApp</h4>
                    <p className="text-muted-foreground">+254 112 277 289</p>
                    <p className="text-sm text-accent">Available 24/7 for urgent inquiries</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://maps.google.com/?q=Nairobi,Kenya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 group p-4 rounded-xl hover:bg-secondary/5 transition-all border border-transparent hover:border-secondary/20"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-accent shadow-lg">
                    <MapPin className="text-secondary-foreground" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">Office</h4>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                    <p className="text-sm text-accent">Visit by appointment</p>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4 p-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                    <Clock className="text-primary-foreground" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sat - Sun: 10:00 AM - 4:00 PM</p>
                    <p className="text-sm text-accent">East Africa Time (UTC+3)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${social.color} text-white group`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div 
              className="glass-card text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <motion.div 
                  className="p-4 rounded-full bg-gradient-to-br from-accent to-primary w-fit mx-auto mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="text-accent-foreground" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="text-muted-foreground">
                  We value your time. All inquiries receive a response within <span className="text-primary font-semibold">2 hours</span> during business hours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}