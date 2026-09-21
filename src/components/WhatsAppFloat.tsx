import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/584144680779?text=Hola,%20deseo%20más%20información%20sobre%20sus%20servicios%20de%20remodelación."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat por WhatsApp"
    >
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E8501E] rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E8501E] rounded-full" />
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
};
