import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does FRIMAT offer?",
    answer: "We offer a full range of digital services: web development, mobile apps, cybersecurity, cloud services, IT support, e-commerce, and KRA tax help. Every project is tailored to your business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the scope. A simple website usually takes 2-4 weeks, while bigger web projects or mobile apps can take 8-16 weeks. We give you a clear timeline at the start and keep you updated throughout."
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes. Every project includes ongoing support — regular updates, security monitoring, bug fixes, and technical help. We build lasting partnerships, not one-time deals."
  },
  {
    question: "How do you handle projects?",
    answer: "Our process is simple: Discovery and planning → Design and prototyping → Development and testing → Launch → Ongoing support. We keep things clear and communicate openly the whole way."
  },
  {
    question: "Do you work with small and large businesses?",
    answer: "Yes, we work with businesses of all sizes — from startups to large companies. Our prices and services adjust to fit your budget and goals. Our cyber cafe also serves individuals and small local businesses."
  },
  {
    question: "How do you protect our data?",
    answer: "Security is a top priority. We use SSL encryption, secure coding practices, regular security audits, and follow data protection laws. Our cybersecurity team makes sure your digital assets stay safe."
  },
  {
    question: "Do you help with KRA tax filing?",
    answer: "Absolutely. Our cyber cafe handles all KRA services — tax filing, compliance advice, and digital certificates — for both individuals and businesses."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with React, Node.js, and Python; iOS and Android development; AWS, Azure, and Google Cloud; and various databases. We stay up-to-date with the latest tech to give you the best solutions."
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
            Quick answers to common questions about our services, process, and how we work.
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
