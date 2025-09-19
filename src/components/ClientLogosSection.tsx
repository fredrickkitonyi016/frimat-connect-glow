import { useCountUp } from "@/hooks/useCountUp";

const clients = [
  {
    name: "TechStart Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    name: "GlobalCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    name: "E-Commerce Plus",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    name: "LogiFlow",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    name: "InnovateTech",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  },
  {
    name: "SecureNet",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
  }
];

export default function ClientLogosSection() {
  const projectsCount = useCountUp({ end: 20, duration: 12000 });
  const countriesCount = useCountUp({ end: 1, duration: 8000 });
  const satisfactionCount = useCountUp({ end: 99.9, suffix: '%', duration: 10000 });

  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
            Trusted by Leading Companies
          </h3>
          <p className="text-muted-foreground">
            Join the growing list of businesses that trust FRIMAT with their technology needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-2 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <span className="text-primary font-bold text-lg">
                    {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span ref={projectsCount.ref}>{projectsCount.value} Projects Completed</span>
            <span className="hidden md:inline">•</span>
            <span ref={countriesCount.ref}>{countriesCount.value} Countries Served</span>
            <span className="hidden md:inline">•</span>
            <span ref={satisfactionCount.ref}>{satisfactionCount.value} Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}