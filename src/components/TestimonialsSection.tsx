import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    company: "TechStart Solutions",
    content: "FRIMAT reconstituted our enterprise with an uncommon delicacy of digital invention. Within a mere three months, our cultivated presence upon the web had ascended threefold — quietly, decisively, and to lasting effect.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "IT Director, GlobalCorp",
    company: "GlobalCorp",
    content: "A consummate exercise in cybernetic fortification. The discernment of their council preserved us from latent peril and conferred a tranquillity of mind that has proven, in itself, an asset of incalculable measure.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, E-Commerce Plus",
    company: "E-Commerce Plus",
    content: "The mobile atelier they composed for us surpassed every expectation we had dared entertain. Our patrons engaged with a fervour two-and-a-half times more pronounced, and our commerce ascended with comparable distinction.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Kumar",
    role: "Operations Manager, LogiFlow",
    company: "LogiFlow",
    content: "Their cloud stewardship rendered our operations a study in elegant economy. Forty per cent of expenditure was discreetly relinquished, whilst efficiency was elevated to a register we had not previously inhabited.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              In the Voices of Our Patrons
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Permit our patrons themselves to render the verdict. Their testimonies, gathered below, articulate with rare precision the character of our collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card hover-scale group relative">
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote size={32} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={16} />
                  ))}
                </div>
                
                <p className="text-foreground/90 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}