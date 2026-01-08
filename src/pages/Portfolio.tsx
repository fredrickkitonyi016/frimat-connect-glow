import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
