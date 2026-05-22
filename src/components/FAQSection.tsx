import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which disciplines compose FRIMAT's repertoire?",
    answer: "Ours is a comprehensive armory of digital instruments: web couture, mobile ateliers, cyber bastions, sovereign cloud foundations, perpetual concierge, mercantile architecture, and Kenya Revenue Authority stewardship. Each commission is composed in concert with the particular cadence of the enterprise entrusted to us."
  },
  {
    question: "What is the customary duration of a commission?",
    answer: "Durations are contingent upon scope and intricacy. A composed presentation site is ordinarily consummated within two to four weeks, whilst more elaborate web compositions or mobile ateliers may occupy eight to sixteen weeks. A detailed chronicle of milestones is rendered at the inception of the commission, and you are kept apprised, without interval, throughout the unfolding."
  },
  {
    question: "Is stewardship furnished after the unveiling?",
    answer: "Indeed. A devoted concierge of maintenance accompanies every commission — comprising periodic refinements, vigilant security observation, the redress of imperfections, and attentive technical counsel. Ours is a discipline of enduring patronage, not transient transaction."
  },
  {
    question: "By what process is a commission conducted?",
    answer: "Our process unfolds with patrician composure: Discovery and conception → Composition and prototyping → Construction and examination → Unveiling → Perpetual stewardship. Communication remains transparent and unhurried throughout."
  },
  {
    question: "Do you attend enterprises both modest and grand?",
    answer: "We attend institutions of every stature, from emergent ventures to enterprises of considerable patrimony. Our tariffs and methods are contoured to your particular means and ambitions; our cyber salon, in particular, has long served the discerning individual and the local merchant alike."
  },
  {
    question: "By what means is the sanctity of our data preserved?",
    answer: "Security is the lodestar of our discipline. We deploy SSL cryptography, codified secure practice, periodic forensic audits, and an unbroken concord with statutory data protection. Our cyber bastions division ensures that your digital patrimony remains inviolable."
  },
  {
    question: "Will you attend matters of KRA tax concordance?",
    answer: "Without exception. Our cyber salon attends every dimension of KRA stewardship — the lodging of returns, statutory counsel, and the curation of digital certifications — guiding both individuals and enterprises through the Republic's digital fiscal architecture with composed authority."
  },
  {
    question: "In which technologies do you possess particular distinction?",
    answer: "Our disciplines comprise React, Node.js, and Python; mobile composition for iOS and Android; the cloud firmaments of AWS, Azure, and Google Cloud; and an array of data foundations. We remain attentive to the unfolding currents of invention, that our counsel may forever bear the imprint of contemporaneity."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Inquiries, Considered & Answered
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            That which is most commonly enquired of us, attended with patient candour and intended to illumine our disciplines, our cadence, and our method.
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