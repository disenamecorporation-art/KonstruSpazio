import React from 'react';
import { Award, ShieldCheck, Cpu } from 'lucide-react';

export const ArquitecturaSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-[#151921] relative overflow-hidden border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8501E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Manifesto */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E8501E] text-[11px] font-bold tracking-[0.2em] uppercase">
              MANIFIESTO KONSURSPAZIO
            </div>

            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight text-white leading-[1.15]">
              Arquitectura que trasciende <br />
              <span className="font-bold text-[#E8501E]">el tiempo y la forma</span>
            </h2>

            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Cada proyecto que emprendemos en Caracas y Lechería es una obra maestra de ingeniería y diseño interior. Combinamos funcionalidad milimétrica con estética contemporánea para crear espacios que inspiran y perduran.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-light text-white mb-1">+15</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Años de Trayectoria</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-light text-white mb-1">100%</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Garantía Estructural</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-light text-[#E8501E] mb-1">VIP</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Atención Exclusiva</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-end feature cards layout */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#E8501E]/40 transition-all duration-500 group space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8501E]/10 flex items-center justify-center text-[#E8501E] group-hover:bg-[#E8501E] group-hover:text-white transition-all duration-500">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-white tracking-wide">Excelencia Certificada</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Estándares internacionales en cada proceso de construcción, remodelación y acabado de lujo.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#E8501E]/40 transition-all duration-500 group space-y-4 sm:translate-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#E8501E]/10 flex items-center justify-center text-[#E8501E] group-hover:bg-[#E8501E] group-hover:text-white transition-all duration-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-white tracking-wide">Respaldo Absoluto</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Seguridad jurídica, contratos transparentes y cumplimiento riguroso en plazos de entrega.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
