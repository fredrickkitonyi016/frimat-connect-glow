import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { CheckCircle, CreditCard, ShieldCheck } from 'lucide-react';

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';

export const CheckoutModal = ({ open, onOpenChange }: CheckoutModalProps) => {
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateReference = () => {
    return `FRIMAT-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  };

  const handlePayWithPaystack = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    if (!PAYSTACK_PUBLIC_KEY || PAYSTACK_PUBLIC_KEY.includes('xxxx')) {
      toast({
        title: 'Payment Not Configured',
        description: 'Paystack has not been configured yet. Please contact support.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: totalPrice * 100, // Paystack expects amount in cents
      currency: 'KES',
      ref: generateReference(),
      metadata: {
        custom_fields: [
          { display_name: 'Customer Name', variable_name: 'customer_name', value: formData.name },
          { display_name: 'Phone', variable_name: 'phone', value: formData.phone },
          { display_name: 'Address', variable_name: 'address', value: formData.address },
          { display_name: 'Notes', variable_name: 'notes', value: formData.notes },
          { display_name: 'Items', variable_name: 'items', value: JSON.stringify(items.map(i => ({ name: i.name, qty: i.quantity, price: i.price }))) },
        ],
      },
      callback: (response) => {
        toast({
          title: '🎉 Payment Successful!',
          description: `Transaction ref: ${response.reference}. We'll contact you shortly.`,
        });
        clearCart();
        setFormData({ name: '', email: '', phone: '', address: '', notes: '' });
        setIsSubmitting(false);
        onOpenChange(false);
      },
      onClose: () => {
        setIsSubmitting(false);
        toast({
          title: 'Payment Cancelled',
          description: 'You cancelled the payment. Your cart is still intact.',
        });
      },
    });

    handler.openIframe();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2" style={{ color: '#ff6a00' }}>
            <CreditCard className="h-6 w-6" />
            Secure Checkout
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handlePayWithPaystack} className="space-y-6">
          {/* Order Summary */}
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <h3 className="font-semibold mb-3 text-foreground">
              Order Summary ({items.length} items)
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="text-foreground font-medium">
                    KSh {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold text-lg">
              <span className="text-foreground">Total:</span>
              <span style={{ color: '#ff6a00' }}>
                KSh {totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              Contact Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+254 700 000 000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address *</Label>
              <Textarea
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter your delivery address"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special instructions or requests"
                rows={3}
              />
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
            <ShieldCheck className="h-5 w-5 text-green-500 shrink-0" />
            <span>Payments are securely processed by <strong>Paystack</strong>. Your card details are never stored on our servers.</span>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="gap-2"
              style={{ backgroundColor: '#ff6a00', color: 'white' }}
            >
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Pay KSh {totalPrice.toLocaleString()}
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
