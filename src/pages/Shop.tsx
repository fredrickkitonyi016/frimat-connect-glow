import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShopSection = lazy(() => import("@/components/ShopSection"));
const FeaturedProductsSection = lazy(() => import("@/components/FeaturedProductsSection"));

export default function Shop() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-6 pt-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">FRIMAT </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tech Shop</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cameras, routers, laptops and accessories — supplied, installed and supported by our team in Nairobi.
          </p>
        </div>
        <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading products…</div>}>
          <FeaturedProductsSection />
          <ShopSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
