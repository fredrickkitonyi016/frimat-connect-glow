import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, MapPin, ShieldCheck, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  "CCTV Installation",
  "Network & WiFi Setup",
  "Electronics Repair",
  "Cybersecurity",
  "Crypto Support",
  "Buy Hardware",
  "Something Else",
];

const areas = ["Nairobi", "Kiambu", "Machakos", "Kajiado"];

export default function BookService() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: serviceOptions[0],
    area: areas[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Please add your name and phone number" });
      return;
    }
    const text = `Hello FRIMAT Technologies! I would like to book a service.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AArea: ${form.area}%0ADetails: ${form.message || "-"}`;
    window.open(`https://wa.me/254112277289?text=${text}`, "_blank", "noopener,noreferrer");
    toast({ title: "Booking sent", description: "We will get back to you shortly on WhatsApp." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Book a </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Free Site Survey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us what you need and we will visit, advise and give you a clear quote — no cost, no pressure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="lg:col-span-2 glass-card space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g. James Mwangi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="07XX XXX XXX"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Area</label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {areas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tell Us More</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How many cameras? How big is the office? Any faults?"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send My Booking
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your request opens WhatsApp so we can reply fast. You can also call us directly.
              </p>
            </form>

            <div className="space-y-6">
              <div className="glass-card space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Reach Us Directly</h2>
                <a href="tel:+254112277289" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" />
                  <span>0112 277 289</span>
                </a>
                <a href="https://wa.me/254112277289" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <MessageSquare size={18} className="text-accent" />
                  <span>Chat on WhatsApp</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} className="text-secondary" />
                  <span>Nairobi, Kiambu, Machakos &amp; Kajiado</span>
                </div>
              </div>

              <div className="glass-card space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-primary flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">90-day workmanship warranty on every installation and repair.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-accent flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">Same-day response for most jobs within Nairobi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
