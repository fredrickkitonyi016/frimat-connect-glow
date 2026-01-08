import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <AboutSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
