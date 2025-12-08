import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Loader2, Minus, Plus } from "lucide-react";
import { storefrontApiRequest, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ShopifyCartDrawer } from "@/components/ShopifyCartDrawer";

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      setIsLoading(true);
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          const productData: ShopifyProduct = { node: data.data.productByHandle };
          setProduct(productData);
          if (productData.node.variants.edges.length > 0) {
            setSelectedVariant(productData.node.variants.edges[0].node.id);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
      setIsLoading(false);
    }
    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;
    
    const variant = product.node.variants.edges.find(v => v.node.id === selectedVariant);
    if (!variant) return;

    addItem({
      product,
      variantId: variant.node.id,
      variantTitle: variant.node.title,
      price: variant.node.price,
      quantity,
      selectedOptions: variant.node.selectedOptions || []
    });

    toast.success(`${product.node.title} added to cart`, {
      position: "top-center"
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f5f5' }}>
        <Loader2 className="h-12 w-12 animate-spin" style={{ color: '#ff6a00' }} />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f5f5f5' }}>
        <h1 className="text-2xl font-bold mb-4" style={{ color: '#333' }}>Product not found</h1>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Button>
        </Link>
      </div>
    );
  }

  const images = product.node.images.edges;
  const currentVariant = product.node.variants.edges.find(v => v.node.id === selectedVariant);
  const price = currentVariant?.node.price || product.node.priceRange.minVariantPrice;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" style={{ color: '#333' }} />
            <span className="font-medium" style={{ color: '#333' }}>Back to Shop</span>
          </Link>
          <ShopifyCartDrawer />
        </div>
      </header>

      {/* Product Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                {images.length > 0 ? (
                  <img
                    src={images[selectedImage]?.node.url}
                    alt={images[selectedImage]?.node.altText || product.node.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingCart className="h-24 w-24" style={{ color: '#ccc' }} />
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                        selectedImage === idx ? 'border-orange-500' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt={img.node.altText || `Image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2" style={{ color: '#333' }}>
                  {product.node.title}
                </h1>
                <p className="text-3xl font-bold" style={{ color: '#ff6a00' }}>
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </p>
              </div>

              {/* Variants */}
              {product.node.variants.edges.length > 1 && (
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
                    Options
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.node.variants.edges.map((variant) => (
                      <button
                        key={variant.node.id}
                        onClick={() => setSelectedVariant(variant.node.id)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                          selectedVariant === variant.node.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        style={{ color: '#333' }}
                        disabled={!variant.node.availableForSale}
                      >
                        {variant.node.title}
                        {!variant.node.availableForSale && ' (Out of stock)'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium" style={{ color: '#333' }}>
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                className="w-full h-14 text-lg text-white"
                style={{ backgroundColor: '#ff6a00' }}
                disabled={!currentVariant?.node.availableForSale}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {currentVariant?.node.availableForSale ? 'Add to Cart' : 'Out of Stock'}
              </Button>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#333' }}>
                  Description
                </h3>
                <p style={{ color: '#666' }}>
                  {product.node.description || "No description available for this product."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
