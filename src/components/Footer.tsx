import React from 'react';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12161D] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Logo & Slogan */}
          <div className="space-y-4 lg:col-span-2">
            <img
              src="https://i.postimg.cc/qqdW8LwW/image-Photoroom-(51).png"
              alt="Konstru Spazio Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-400 font-light text-sm max-w-sm">
              Construyendo espacios, creando historias. Especialistas en obras y remodelaciones residenciales y comerciales de alto nivel.
            </p>
          </div>

          {/* Col 2: Contact quick info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8501E]">Ubicación y Contacto</h4>
            <p className="text-gray-300 text-sm font-light">Caracas | Lechería</p>
            <p className="text-gray-300 text-sm font-light">konstruspazio@gmail.com</p>
            <p className="text-gray-300 text-sm font-light">Tel: 0414-4680779</p>
          </div>

          {/* Col 3: Social & Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8501E]">Síguenos</h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/konstruspazio?utm_source=qr&stkn=enc5Nm5hcms4eWh5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#E8501E] rounded-full transition-colors text-white border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@konstruspazio?_r=1&_t=ZS-99tL2Imnuvk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#E8501E] rounded-full transition-colors text-white border border-white/10"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/584144680779"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#E8501E] rounded-full transition-colors text-white border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <p>© 2025 KonstruSpazio. Hecho por Legaint Corporation. Todos los derechos reservados.</p>
          <a
            href="#inicio"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#E8501E] transition-colors cursor-pointer"
          >
            Volver arriba <ArrowUp className="w-4 h-4 text-[#E8501E]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

