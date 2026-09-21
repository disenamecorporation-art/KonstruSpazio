import React from 'react';
import { Compass, Layers, Wrench, Trophy } from 'lucide-react';

export const ProcesoExclusivo: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Compass className="w-6 h-6 text-[#E8501E]" />,
      title: "Diseño & Visión",
      desc: "Conceptualizamos cada espacio adaptado a tus requerimientos estéticos y funcionales de alta gama."
    },
    {
      number: "02",
      icon: <Layers className="w-6 h-6 text-[#E8501E]" />,
      title: "Planificación",
      desc: "Cronogramas precisos, selección de materiales exclusivos y presupuestos detallados sin sorpresas."
    },
    {
      number: "03",
      icon: <Wrench className="w-6 h-6 text-[#E8501E]" />,
      title: "Ejecución",
      desc: "Obras impecables bajo supervisión técnica constante y estrictos estándares de calidad."
    },
    {
      number: "04",
      icon: <Trophy className="w-6 h-6 text-[#E8501E]" />,
      title: "Entrega Final",
      desc: "Acabados perfectos listos para habitar y disfrutar con total tranquilidad y garantía."
    }
  ];

  return (
    <section className="py-24 bg-[#151921] relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(#E8501E_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extralight text-white leading-[1.2]">
            Nuestro Método <span className="font-bold text-[#E8501E]">Constructivo</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            Un proceso riguroso y transparente diseñado para garantizar resultados excepcionales en cada obra y remodelación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#E8501E]/40 transition-all duration-500 group relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-6 text-2xl font-extralight text-white/10 group-hover:text-[#E8501E]/30 transition-colors">
                {item.number}
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E8501E]/10 flex items-center justify-center border border-[#E8501E]/20 group-hover:bg-[#E8501E] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="text-base font-light text-white tracking-wide group-hover:text-[#E8501E] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-[10px] tracking-widest text-gray-500 uppercase font-semibold">
                <span>KonstruSpazio Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
