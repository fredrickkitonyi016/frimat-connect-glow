import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which areas do you serve?",
    answer: "We mainly serve Nairobi and the surrounding counties — Kiambu, Machakos and Kajiado. For bigger jobs we travel further; just ask us when you call."
  },
  {
    question: "How much does a CCTV system cost?",
    answer: "A complete 4K four-camera kit with night vision, DVR, 1TB storage and installation starts at KSh 45,000. The final price depends on how many cameras you need and the size of the building. Site surveys and quotes are free."
  },
  {
    question: "How fast can you come?",
    answer: "For most jobs inside Nairobi we respond the same day. Bookings for nearby counties are usually done within 24 to 48 hours."
  },
  {
    question: "Do you give a warranty?",
    answer: "Yes. Every installation and repair carries a 90-day workmanship warranty, and hardware we sell comes with the manufacturer's warranty."
  },
  {
    question: "What can you repair?",
    answer: "Phones, laptops, desktops, TVs, printers and audio equipment. We use genuine parts, and if we can't fix it you don't pay for the diagnosis."
  },
  {
    question: "Do you sell hardware as well as install it?",
    answer: "Yes. Our shop stocks CCTV kits, routers, switches, laptops, cables and accessories — and our own technicians install what you buy."
  },
  {
    question: "Can you help with crypto?",
    answer: "We help with the practical side: setting up wallets safely, understanding trading basics, supporting mining rigs and avoiding common scams. We do not manage anyone's money."
  },
  {
    question: "How do I pay?",
    answer: "M-Pesa, bank transfer, card or cash. For installations we usually take a deposit for materials and the balance once the system is working."
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
