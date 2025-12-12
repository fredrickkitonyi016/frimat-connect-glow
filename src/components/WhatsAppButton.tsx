import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "254112277289";
  const message = encodeURIComponent("Hello FRIMAT Technologies! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-card text-foreground text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-border">
        Chat with us!
      </span>
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </a>
  );
}
