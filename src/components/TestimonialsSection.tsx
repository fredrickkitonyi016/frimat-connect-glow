import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Grace Wanjiku",
    role: "Owner, Wanjiku Mini Mart",
    company: "Nairobi CBD",
    content: "They installed six cameras in my shop in one day and showed me how to watch them on my phone. Theft stopped completely.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Peter Kimani",
    role: "Manager, Kimani Apartments",
    company: "Kiambu",
    content: "Our WiFi never reached the upper floors. FRIMAT cabled the whole block properly and now every tenant is happy.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Mercy Achieng",
    role: "Teacher",
    company: "Machakos",
    content: "My laptop screen was broken and they fixed it the same afternoon at a fair price. Honest people, good work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Samuel Otieno",
    role: "Director, Otieno Logistics",
    company: "Nairobi",
    content: "They secured our office computers and set up backups. When we had a scare, their support team answered right away.",
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
            Don't just take our word for it. Here's what our clients have to say about working with us.
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