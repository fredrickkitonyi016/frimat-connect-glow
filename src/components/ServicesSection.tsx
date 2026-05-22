import { 
  ArrowRight,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Monitor,
  ShoppingBag,
  Printer,
  Building2,
  Code,
  Server,
  Palette,
  Database
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import service images
import webDevImage from "@/assets/services/web-dev-service.jpg";
import mobileAppImage from "@/assets/services/mobile-app-service.jpg";
import cloudServiceImage from "@/assets/services/cloud-service.jpg";
import cybersecurityImage from "@/assets/services/cybersecurity-service.jpg";
import itSupportImage from "@/assets/services/it-support-service.jpg";
import ecommerceImage from "@/assets/services/ecommerce-service.jpg";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      image: webDevImage,
      title: "Web Couture",
      description: "Bespoke digital edifices, composed in the contemporary architectural vernacular.",
      features: ["React & Vue.js ateliers", "Composition from foundation to façade", "Sovereign API confluences", "Studied performance refinement"],
      href: "/services/web-development"
    },
    {
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
      image: mobileAppImage,
      title: "Mobile Ateliers",
      description: "Native and unified mobile compositions for the iOS and Android constellations.",
      features: ["React Native craftsmanship", "Flutter elegance", "iOS sensibilities", "Android disciplines"],
      href: "/services/mobile-apps"
    },
    {
      icon: Cloud,
      gradient: "from-sky-500 to-indigo-500",
      image: cloudServiceImage,
      title: "Sovereign Cloud",
      description: "Elastic cloud foundations and migrations conducted with patrician calm.",
      features: ["AWS & Azure stewardship", "Migrations sans tumult", "DevOps choreography", "Microservice tessellation"],
      href: "/services/cloud-services"
    },
    {
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      image: cybersecurityImage,
      title: "Cyber Bastions",
      description: "Comprehensive safeguards in defence of your digital patrimony.",
      features: ["Forensic security examinations", "Penetration auditing", "Regulatory concordance", "Stratified risk appraisal"],
      href: "/services/cybersecurity"
    },
    {
      icon: Monitor,
      gradient: "from-green-500 to-emerald-500",
      image: itSupportImage,
      title: "Perpetual Concierge",
      description: "A round-the-clock concierge of technical stewardship for your infrastructure.",
      features: ["Attentive help desk", "Network custodianship", "Vigilant system observation", "Methodical maintenance"],
      href: "/services/it-support"
    },
    {
      icon: ShoppingBag,
      gradient: "from-amber-500 to-yellow-500",
      image: ecommerceImage,
      title: "Mercantile Architecture",
      description: "An unbroken e-commerce experience, from initial sketch to graceful deployment.",
      features: ["Shopify ateliers", "WooCommerce craftsmanship", "Payment confluences", "Inventory orchestration"],
      href: "/services/ecommerce"
    },
    {
      icon: Printer,
      gradient: "from-teal-500 to-cyan-500",
      image: itSupportImage,
      title: "Cyber Salon",
      description: "A consummately appointed cyber salon for every quotidian digital errand.",
      features: ["Printing & reprography", "Document digitisation", "Internet hospitality", "Computer tutelage"],
      href: "/services/cyber-cafe"
    },
    {
      icon: Building2,
      gradient: "from-rose-500 to-red-500",
      image: itSupportImage,
      title: "Sovereign Affairs",
      description: "Studied counsel upon the Republic's digital portals and statutory rituals.",
      features: ["KRA iTax submissions", "HELB petitions", "SHA enrolments", "e-Citizen liaison"],
      href: "/services/government-services"
    },
    {
      icon: Code,
      gradient: "from-violet-500 to-purple-500",
      image: webDevImage,
      title: "Bespoke Composition",
      description: "Singularly composed software, conceived to your enterprise's particular cadence.",
      features: ["Bespoke software", "Enterprise instruments", "System confluences", "Modernisation of legacy"],
      href: "/services/custom-development"
    },
    {
      icon: Server,
      gradient: "from-indigo-500 to-blue-500",
      image: cloudServiceImage,
      title: "Cloud Translation",
      description: "An unhurried, unblemished translation of your infrastructure to the cloud firmament.",
      features: ["Migratory cartography", "Discreet data transfer", "Continuity without interruption", "Stewardship post-migration"],
      href: "/services/cloud-migration"
    },
    {
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      image: webDevImage,
      title: "Creative Atelier",
      description: "Refined graphic and brand expression for the discerning enterprise.",
      features: ["Logo composition", "Brand identity", "Marketing instruments", "Social media imagery"],
      href: "/services/creative-design"
    },
    {
      icon: Database,
      gradient: "from-emerald-500 to-teal-500",
      image: cloudServiceImage,
      title: "Data Stewardship",
      description: "Considered custodianship and refinement of your most consequential asset.",
      features: ["Schematic composition", "Performance refinement", "Data translation", "Restoration & assurance"],
      href: "/services/cloud-services"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Repertoire
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the first inspiration to the final unveiling, ours is a comprehensive armory of digital instruments — composed to advance commerce with discernment and to attend to invention with patience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                onClick={() => navigate(service.href)}
                className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-36 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-4">
                    <div className="p-3 rounded-xl bg-white shadow-lg">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3">
                    <Button 
                      variant="glass" 
                      className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0"
                      size="default"
                    >
                      Discover Further
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/services')}
            className="group"
          >
            Survey the Entire Repertoire
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Disposed to Reinvent the Architecture of Your Enterprise?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Permit us a private audience in which to chart, in unhurried detail, the path toward your technological ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Initiate Correspondence
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Survey Our Œuvre
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
