import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface CallToActionBannerProps {
  onNavigateContact?: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onNavigateContact }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#1A1F26]">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-16 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Background image from user's provided collection */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://i.postimg.cc/ZnkPjM6d/Whats-App-Image-2026-09-21-at-17-25-48.jpg"
              alt="Tu proyecto en las mejores manos"
              className="w-full h-full object-cover filter brightness-50 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F26] via-[#1A1F26]/90 to-black/70" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E8501E] text-[11px] font-bold tracking-[0.2em] uppercase">
                <ShieldCheck className="w-4 h-4" />
                EXCELENCIA GARANTIZADA
              </div>

              <h2 className="text-3xl sm:text-5xl font-extralight text-white leading-[1.15]">
                Tu proyecto en <br />
                <span className="font-bold text-[#E8501E]">las mejores manos</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xl">
                Confía tu obra residencial o comercial a profesionales expertos en Caracas y Lechería. Calidad, diseño y cumplimiento absoluto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onNavigateContact}
                className="group relative inline-flex items-center gap-3 bg-[#E8501E] hover:bg-[#C23E12] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_10px_35px_rgba(232,80,30,0.5)] hover:shadow-[0_15px_45px_rgba(232,80,30,0.7)] hover:scale-105 overflow-hidden cursor-pointer"
              >
                {/* Shining beam animation across button */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                
                <span className="relative z-10">CONTÁCTANOS AHORA</span>
                <div className="relative z-10 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


