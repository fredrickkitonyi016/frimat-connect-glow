import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  Package,
  Heart,
  Share2,
  Check
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ProductDetailsModalProps {
  product: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProductDetailsModal = ({ product, open, onOpenChange }: ProductDetailsModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const images = [product.image, product.image, product.image]; // In a real app, products would have multiple images

  const handleAddToCart = () => {
    const priceValue = parseFloat(product.price.replace(/[^\d.]/g, ''));
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: `${product.brand}-${product.name}`.replace(/\s+/g, '-').toLowerCase(),
        name: product.name,
        price: priceValue,
        image: product.image,
        category: product.category,
      });
    }
  };

  const handleWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} saved to your wishlist`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Product link copied to clipboard",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount && (
                <Badge 
                  className="absolute top-4 left-4 text-white"
                  style={{ backgroundColor: '#ff4747' }}
                >
                  -{product.discount}% OFF
                </Badge>
              )}
              {product.tag && (
                <Badge 
                  className="absolute top-4 right-4 text-white"
                  style={{ backgroundColor: '#ff6a00' }}
                >
                  {product.tag}
                </Badge>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-primary' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold" style={{ color: '#333' }}>
                {product.name}
              </DialogTitle>
              <p className="text-sm" style={{ color: '#666' }}>
                Brand: <span className="font-semibold">{product.brand}</span> | 
                Category: <span className="font-semibold">{product.category}</span>
              </p>
            </DialogHeader>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5"
                    fill={i < Math.floor(parseFloat(product.rating)) ? '#ffd700' : 'none'}
                    style={{ color: '#ffd700' }}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: '#333' }}>
                {product.rating}
              </span>
              <span className="text-sm" style={{ color: '#666' }}>
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold" style={{ color: '#ff6a00' }}>
                {product.price}
              </span>
              {product.original && (
                <>
                  <span className="text-xl line-through" style={{ color: '#999' }}>
                    {product.original}
                  </span>
                  <Badge variant="secondary" style={{ backgroundColor: '#ff6a00', color: 'white' }}>
                    Save {product.discount}%
                  </Badge>
                </>
              )}
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2" style={{ color: '#333' }}>
                Product Description
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold mb-2" style={{ color: '#333' }}>
                Specifications
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4" style={{ color: '#ff6a00' }} />
                  <span style={{ color: '#666' }}>{product.specs}</span>
                </div>
                {product.category === "Laptops" && (
                  <>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" style={{ color: '#ff6a00' }} />
                      <span style={{ color: '#666' }}>Display: 15.6" Full HD</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" style={{ color: '#ff6a00' }} />
                      <span style={{ color: '#666' }}>Battery Life: Up to 8 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" style={{ color: '#ff6a00' }} />
                      <span style={{ color: '#666' }}>Weight: 1.8kg</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-6 w-6 mb-2" style={{ color: '#ff6a00' }} />
                <span className="text-xs font-medium" style={{ color: '#333' }}>Free Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-6 w-6 mb-2" style={{ color: '#ff6a00' }} />
                <span className="text-xs font-medium" style={{ color: '#333' }}>Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Package className="h-6 w-6 mb-2" style={{ color: '#ff6a00' }} />
                <span className="text-xs font-medium" style={{ color: '#333' }}>Secure Package</span>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium" style={{ color: '#333' }}>Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  className="flex-1 gap-2"
                  size="lg"
                  style={{ backgroundColor: '#ff6a00', color: 'white' }}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWishlist}
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Contact for Quote */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                const section = document.querySelector('#contact');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                  onOpenChange(false);
                }
              }}
            >
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
