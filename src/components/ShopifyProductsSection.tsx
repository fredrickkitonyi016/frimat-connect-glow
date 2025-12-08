import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Loader2 } from "lucide-react";
import { fetchShopifyProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function ShopifyProductsSection() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      const fetchedProducts = await fetchShopifyProducts(50);
      setProducts(fetchedProducts);
      setIsLoading(false);
    }
    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error("No variant available for this product");
      return;
    }

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });

    toast.success(`${product.node.title} added to cart`, {
      position: "top-center"
    });
  };

  if (isLoading) {
    return (
      <section id="shopify-products" className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#333' }}>
              Our Products
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
              Powered by Shopify
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin" style={{ color: '#ff6a00' }} />
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="shopify-products" className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#333' }}>
              Our Products
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
              Powered by Shopify
            </p>
          </div>
          <div className="text-center py-20">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4" style={{ color: '#999' }} />
            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#333' }}>No products found</h3>
            <p style={{ color: '#666' }}>
              Tell me what products you'd like to sell, and I'll create them for you!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shopify-products" className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#333' }}>
            Our Products
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
            Browse our collection powered by Shopify
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => {
            const price = product.node.priceRange.minVariantPrice;
            const image = product.node.images.edges[0]?.node;
            
            return (
              <Card
                key={product.node.id}
                className="bg-white rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link to={`/product/${product.node.handle}`}>
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {image ? (
                      <img
                        src={image.url}
                        alt={image.altText || product.node.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingCart className="h-12 w-12" style={{ color: '#ccc' }} />
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-3 space-y-2">
                  <Link to={`/product/${product.node.handle}`}>
                    <h4 
                      className="font-medium text-sm line-clamp-2 min-h-[2.5rem] hover:underline cursor-pointer" 
                      style={{ color: '#333' }}
                    >
                      {product.node.title}
                    </h4>
                  </Link>

                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold" style={{ color: '#ff6a00' }}>
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs line-clamp-2" style={{ color: '#666' }}>
                    {product.node.description || "No description available"}
                  </p>

                  <Button
                    className="w-full text-xs h-8 text-white"
                    style={{ backgroundColor: '#ff6a00' }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
