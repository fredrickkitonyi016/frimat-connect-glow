import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import ShopSection from "@/components/ShopSection";
import ShopifyProductsSection from "@/components/ShopifyProductsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import QuotationGenerator from "@/components/QuotationGenerator";
import Footer from "@/components/Footer";
import { useScrollAnimations, useMouseEffects } from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollAnimations();
  useMouseEffects();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <div className="fade-in">
          <AboutSection />
        </div>
        <div className="fade-in">
          <ServicesSection />
        </div>
        <div className="fade-in">
          <ClientLogosSection />
        </div>
        <div className="fade-in">
          <TestimonialsSection />
        </div>
        <div className="fade-in">
          <TeamSection />
        </div>
        <div className="fade-in">
          <PricingSection />
        </div>
        <ShopifyProductsSection />
        <ShopSection />
        <div className="fade-in">
          <PortfolioSection />
        </div>
        <div className="fade-in">
          <BlogSection />
        </div>
        <div className="fade-in">
          <FAQSection />
        </div>
        <div className="fade-in">
          <ContactSection />
        </div>
        <div className="fade-in">
          <QuotationGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
