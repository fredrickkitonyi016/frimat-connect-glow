import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Headphones,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Wrench,
  ShieldCheck,
} from "lucide-react";

interface HelpCentreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  { q: "How quickly can I get support?", a: "Remote support responds within 15 minutes. On-site visits within 2 hours in Nairobi." },
  { q: "Do you offer after-hours support?", a: "Yes — Pro retainer clients get 24/7 emergency support. Otherwise, business hours are 8 AM–6 PM EAT." },
  { q: "What payment methods do you accept?", a: "M-Pesa, bank transfer, cash, and card payments via our POS terminals." },
  { q: "Can I get a custom quote?", a: "Absolutely! Use our contact form or WhatsApp us directly for a tailored quotation." },
];

const quickLinks = [
  { icon: Wrench, label: "IT Support", href: "/services/it-support" },
  { icon: ShieldCheck, label: "Cybersecurity", href: "/services/cybersecurity" },
  { icon: BookOpen, label: "All Services", href: "/services/all" },
];

export default function HelpCentreModal({ isOpen, onClose }: HelpCentreModalProps) {
  const whatsappUrl = "https://wa.me/254112277289?text=" + encodeURIComponent("Hello FRIMAT Technologies! I need help.");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">Help Centre</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Get the support you need — we're here to help
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          {/* Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            <a
              href="tel:+254112277289"
              className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all group"
            >
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground text-sm">Call Us</p>
                <p className="text-xs text-muted-foreground">+254 112 277 289</p>
              </div>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <div>
                <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Chat instantly</p>
              </div>
            </a>
            <a
              href="mailto:info@frimat.co.ke"
              className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/40 transition-all group"
            >
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-xs text-muted-foreground">info@frimat.co.ke</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-semibold text-foreground text-sm">Business Hours</p>
                <p className="text-xs text-muted-foreground">Mon–Sat, 8 AM – 6 PM EAT</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all text-sm font-medium text-foreground"
                >
                  <link.icon className="w-4 h-4 text-primary" />
                  {link.label}
                  <ArrowRight className="w-3 h-3 text-muted-foreground" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Frequently Asked</h4>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-muted/30 border border-border">
                  <p className="font-medium text-foreground text-sm">{faq.q}</p>
                  <p className="text-xs text-muted-foreground mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border"
          >
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Visit Us</p>
              <p className="text-xs text-muted-foreground">Nairobi, Kenya — Moi Avenue, Anniversary Towers</p>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <Button variant="hero" className="flex-1" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
