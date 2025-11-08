import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { CheckoutModal } from './CheckoutModal';

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-2xl">
              <ShoppingCart className="h-6 w-6" style={{ color: '#ff6a00' }} />
              Shopping Cart ({totalItems})
            </SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
              <ShoppingCart className="h-24 w-24 mb-4" style={{ color: '#ddd' }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#333' }}>
                Your cart is empty
              </h3>
              <p style={{ color: '#666' }}>
                Add items to get started with your order
              </p>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 my-4 h-[calc(100vh-250px)]">
                <div className="space-y-4 pr-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-1 truncate" style={{ color: '#333' }}>
                          {item.name}
                        </h4>
                        <p className="text-sm mb-2" style={{ color: '#666' }}>
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                        <p className="text-lg font-bold mt-2" style={{ color: '#ff6a00' }}>
                          KSh {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <Separator className="my-4" />

              <SheetFooter className="flex-col gap-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span style={{ color: '#333' }}>Total:</span>
                  <span style={{ color: '#ff6a00' }}>
                    KSh {totalPrice.toLocaleString()}
                  </span>
                </div>
                <Button 
                  className="w-full"
                  size="lg"
                  style={{ backgroundColor: '#ff6a00', color: 'white' }}
                  onClick={() => {
                    setShowCheckout(true);
                    onOpenChange(false);
                  }}
                >
                  Proceed to Checkout
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal 
        open={showCheckout} 
        onOpenChange={setShowCheckout}
      />
    </>
  );
};
