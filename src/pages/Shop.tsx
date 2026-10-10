import { lazy, Suspense, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { shopCategories } from "@/components/ShopSection";

const ShopSection = lazy(() => import("@/components/ShopSection"));
const FeaturedProductsSection = lazy(() => import("@/components/FeaturedProductsSection"));

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const isFiltering = searchQuery.trim() !== "" || activeCategory !== "All";

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

        {/* Prominent search + category filters, directly below the shop header */}
        <div className="container mx-auto px-6 mt-8">
          <div className="max-w-3xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search laptops, cameras, routers, accessories or brands…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-12 pr-4 text-base rounded-lg bg-card/80 border-primary/40 focus-visible:ring-primary"
            />
          </div>
          <div className="max-w-4xl mx-auto mt-5 flex flex-wrap justify-center gap-2">
            {shopCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap border transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card/60 text-foreground border-border hover:border-primary/60 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading products…</div>}>
          {!isFiltering && <FeaturedProductsSection />}
          <ShopSection
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            onSearchChange={setSearchQuery}
            onCategoryChange={setActiveCategory}
          />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
