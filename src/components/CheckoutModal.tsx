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
import { CheckCircle, CreditCard, ShieldCheck, Smartphone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type PaymentMethod = 'paystack' | 'mpesa';

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';

export const CheckoutModal = ({ open, onOpenChange }: CheckoutModalProps) => {
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mpesa');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mpesaStatus, setMpesaStatus] = useState<'idle' | 'pending' | 'success'>('idle');

  const generateReference = () => {
    return `FRIMAT-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return false;
    }
    if (paymentMethod === 'paystack' && !formData.email) {
      toast({
        title: 'Email Required',
        description: 'Email is required for Paystack payments.',
        variant: 'destructive',
      });
      return false;
    }
    return true;
  };

  const handlePayWithPaystack = () => {
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
      amount: totalPrice * 100,
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
        resetForm();
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

  const handlePayWithMpesa = async () => {
    setIsSubmitting(true);
    setMpesaStatus('pending');

    try {
      const { data, error } = await supabase.functions.invoke('mpesa-stk-push', {
        body: {
          phone: formData.phone,
          amount: totalPrice,
          orderId: generateReference(),
          accountReference: 'FRIMAT',
        },
      });

      if (error) throw error;

      if (data?.success) {
        toast({
          title: '📱 Check Your Phone!',
          description: 'An M-Pesa payment prompt has been sent to your phone. Enter your PIN to complete.',
        });
        setMpesaStatus('success');
        // Clear cart after a delay (assuming payment will complete)
        setTimeout(() => {
          clearCart();
          resetForm();
          onOpenChange(false);
        }, 5000);
      } else {
        throw new Error(data?.error || 'Failed to initiate M-Pesa payment');
      }
    } catch (error: unknown) {
      console.error('M-Pesa error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Payment failed';
      toast({
        title: 'M-Pesa Payment Failed',
        description: errorMessage,
        variant: 'destructive',
      });
      setMpesaStatus('idle');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (paymentMethod === 'paystack') {
      handlePayWithPaystack();
    } else {
      handlePayWithMpesa();
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', address: '', notes: '' });
    setIsSubmitting(false);
    setMpesaStatus('idle');
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

        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Payment Method</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('mpesa')}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === 'mpesa'
                    ? 'border-green-500 bg-green-500/10 shadow-md'
                    : 'border-border hover:border-muted-foreground/50'
                }`}
              >
                <Smartphone className={`h-8 w-8 ${paymentMethod === 'mpesa' ? 'text-green-500' : 'text-muted-foreground'}`} />
                <span className={`font-semibold text-sm ${paymentMethod === 'mpesa' ? 'text-green-600' : 'text-foreground'}`}>
                  M-Pesa
                </span>
                <span className="text-xs text-muted-foreground">Pay via STK Push</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('paystack')}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === 'paystack'
                    ? 'shadow-md'
                    : 'border-border hover:border-muted-foreground/50'
                }`}
                style={paymentMethod === 'paystack' ? { borderColor: '#ff6a00', backgroundColor: 'rgba(255, 106, 0, 0.1)' } : {}}
              >
                <CreditCard className="h-8 w-8" style={{ color: paymentMethod === 'paystack' ? '#ff6a00' : undefined }} />
                <span className="font-semibold text-sm" style={paymentMethod === 'paystack' ? { color: '#ff6a00' } : {}}>
                  Paystack
                </span>
                <span className="text-xs text-muted-foreground">Card / Bank</span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Information</h3>

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
                <Label htmlFor="email">
                  Email {paymentMethod === 'paystack' ? '*' : '(Optional)'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  required={paymentMethod === 'paystack'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number * {paymentMethod === 'mpesa' && <span className="text-xs text-green-500">(M-Pesa number)</span>}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+254 7XX XXX XXX"
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

          {/* M-Pesa Pending Status */}
          {mpesaStatus === 'pending' && (
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-pulse">
              <Smartphone className="h-6 w-6 text-green-500" />
              <div>
                <p className="font-semibold text-green-600 text-sm">Waiting for M-Pesa confirmation...</p>
                <p className="text-xs text-muted-foreground">Check your phone and enter your M-Pesa PIN</p>
              </div>
            </div>
          )}

          {mpesaStatus === 'success' && (
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <div>
                <p className="font-semibold text-green-600 text-sm">STK Push sent successfully!</p>
                <p className="text-xs text-muted-foreground">Complete the payment on your phone. This dialog will close shortly.</p>
              </div>
            </div>
          )}

          {/* Security Badge */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
            <ShieldCheck className="h-5 w-5 text-green-500 shrink-0" />
            <span>
              {paymentMethod === 'mpesa'
                ? 'M-Pesa payments are processed securely by Safaricom. Your PIN is never shared.'
                : 'Payments are securely processed by Paystack. Your card details are never stored on our servers.'}
            </span>
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
              disabled={isSubmitting || items.length === 0 || mpesaStatus === 'success'}
              className="gap-2"
              style={{
                backgroundColor: paymentMethod === 'mpesa' ? '#4CAF50' : '#ff6a00',
                color: 'white',
              }}
            >
              {isSubmitting ? (
                'Processing...'
              ) : (
                <>
                  {paymentMethod === 'mpesa' ? (
                    <Smartphone className="h-4 w-4" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  Pay KSh {totalPrice.toLocaleString()} via {paymentMethod === 'mpesa' ? 'M-Pesa' : 'Paystack'}
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
