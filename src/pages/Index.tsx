import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import { useScrollAnimations, useMouseEffects } from "@/hooks/useScrollAnimations";

// Lazy load below-the-fold components for performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const TechGallerySection = lazy(() => import("@/components/TechGallerySection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ShopSection = lazy(() => import("@/components/ShopSection"));
const ShopifyProductsSection = lazy(() => import("@/components/ShopifyProductsSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

// Loading skeleton for lazy components
const SectionSkeleton = () => (
  <div className="py-24 px-6">
    <div className="container mx-auto">
      <div className="h-12 w-64 skeleton rounded-lg mx-auto mb-8" />
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 skeleton rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  useScrollAnimations();
  useMouseEffects();

  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <AboutSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <ServicesSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TechGallerySection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <TestimonialsSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <TeamSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <PricingSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ShopifyProductsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ShopSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <PortfolioSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <BlogSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <FAQSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <div className="fade-in">
            <ContactSection />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
