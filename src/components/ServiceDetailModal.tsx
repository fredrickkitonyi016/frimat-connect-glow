import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    price: string;
    description: string;
    details: string;
    features?: string[];
    icon?: React.ReactNode;
  } | null;
}

export default function ServiceDetailModal({ 
  isOpen, 
  onClose, 
  service 
}: ServiceDetailModalProps) {
  const navigate = useNavigate();

  if (!service) return null;

  const handleGetQuote = () => {
    onClose();
    navigate('/#contact');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-card border-border overflow-hidden">
        <DialogHeader className="pb-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl font-bold text-foreground mb-1">
                {service.name}
              </DialogTitle>
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold">
                {service.price}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 pt-4">
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Detailed Info */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-xl bg-primary/5 border border-primary/20"
          >
            <h4 className="font-semibold text-foreground mb-2">What's Included</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.details}
            </p>
          </motion.div>

          {/* Features if provided */}
          {service.features && service.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h4 className="font-semibold text-foreground">Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <Button 
              variant="hero" 
              className="flex-1"
              onClick={handleGetQuote}
            >
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
