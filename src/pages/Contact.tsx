import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactSection = lazy(() => import("@/components/ContactSection"));

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-6 pt-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Talk to </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FRIMAT</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Call 0112 277 289, message us on WhatsApp, or send the form below. We serve Nairobi, Kiambu, Machakos and Kajiado.
          </p>
        </div>
        <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading…</div>}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
