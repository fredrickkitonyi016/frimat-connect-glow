import { PhoneCall, ClipboardList, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    op: "Signal Received",
    title: "Talk to Us",
    description: "Call, WhatsApp or fill the booking form. Tell us what you need — it takes two minutes.",
  },
  {
    icon: ClipboardList,
    step: "02",
    op: "Diagnostic Mode Initiated",
    title: "Free Site Survey & Quote",
    description: "We visit your home or business in Nairobi and nearby areas, check the site and send a clear quote.",
  },
  {
    icon: Wrench,
    step: "03",
    op: "Deploy Security Grid",
    title: "Fast Installation or Repair",
    description: "Our certified technicians do the work neatly and on time, using genuine parts and quality cable.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    op: "System Status: Operational",
    title: "Support & Warranty",
    description: "You get a 90-day workmanship warranty plus free follow-up support whenever you need help.",
  },
];

export default function HowItWorksSection() {
  const navigate = useNavigate();

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="hud-status mx-auto mb-5">Operations Protocol</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">How It </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps from your first call to a working system you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="glass-card hover-lift group relative overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-4xl font-bold text-primary/15 font-mono">
                {item.step}
              </span>
              <div className="p-3 rounded-md border border-primary/40 bg-primary/10 w-fit mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="hud-label mb-2">{item.op}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="group" onClick={() => navigate('/book-service')}>
            Book a Free Site Survey
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
