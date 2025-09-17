import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    company: "TechStart Solutions",
    content: "FRIMAT transformed our business with their innovative web development solutions. Our online presence increased by 300% within just 3 months.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "IT Director, GlobalCorp",
    company: "GlobalCorp",
    content: "Outstanding cybersecurity implementation. Their team's expertise saved us from potential threats and gave us peace of mind.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, E-Commerce Plus",
    company: "E-Commerce Plus",
    content: "The mobile app they developed exceeded our expectations. User engagement increased by 250% and sales are through the roof!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Kumar",
    role: "Operations Manager, LogiFlow",
    company: "LogiFlow",
    content: "FRIMAT's cloud services streamlined our operations. We reduced costs by 40% while improving efficiency dramatically.",
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
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with FRIMAT.
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