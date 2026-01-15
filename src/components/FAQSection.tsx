import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does FRIMAT offer?",
    answer: "We offer comprehensive technology solutions including web development, mobile app development, cybersecurity, cloud services, IT support, e-commerce solutions, and KRA tax services. Our team specializes in creating custom solutions tailored to your business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications or mobile apps can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive maintenance and support packages. This includes regular updates, security monitoring, bug fixes, and technical support. We believe in long-term partnerships with our clients and ensure your technology solutions continue to perform optimally."
  },
  {
    question: "What is your development process?",
    answer: "Our development process follows industry best practices: Discovery & Planning → Design & Prototyping → Development & Testing → Deployment → Maintenance. We maintain transparent communication throughout and provide regular updates on project progress."
  },
  {
    question: "Do you work with small businesses or only large corporations?",
    answer: "We work with businesses of all sizes! From startups and small businesses to large corporations, we tailor our solutions to fit your budget and requirements. Our cyber cafe services are particularly popular with local businesses and individuals."
  },
  {
    question: "How do you ensure the security of our data?",
    answer: "Security is our top priority. We implement industry-standard security measures including SSL encryption, secure coding practices, regular security audits, and compliance with data protection regulations. Our cybersecurity team ensures your digital assets are protected."
  },
  {
    question: "Can you help with KRA tax compliance?",
    answer: "Absolutely! Our cyber cafe offers comprehensive KRA services including tax return filing, compliance assistance, and digital certificate management. We help individuals and businesses navigate Kenya's digital tax requirements efficiently."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Node.js, Python, mobile development (iOS/Android), cloud platforms (AWS, Azure, Google Cloud), and various databases. We stay updated with the latest tech trends to provide cutting-edge solutions."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card hover-scale border border-border/50 rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}