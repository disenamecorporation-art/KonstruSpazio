import React from 'react';
import { ArrowRight, Award, Compass, HeartHandshake, ShieldCheck, Wallet, CheckCircle2 } from 'lucide-react';

export const PorQueElegirnos: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#E8501E]" />,
      title: "Experiencia comprobada",
    },
    {
      icon: <Compass className="w-6 h-6 text-[#E8501E]" />,
      title: "Diseño personalizado",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#E8501E]" />,
      title: "Atención cercana y directa",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E8501E]" />,
      title: "Compromiso con la calidad",
    },
    {
      icon: <Wallet className="w-6 h-6 text-[#E8501E]" />,
      title: "Soluciones a la medida de tu presupuesto",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#E8501E]" />,
      title: "Garantía en cada trabajo",
    },
  ];

  return (
    <section id="por-que-elegirnos" className="py-24 bg-[#FFFFFF] text-[#1A1F26] relative overflow-hidden">
      {/* Subtle gray gradients background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8501E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro & Button */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extralight text-[#1A1F26] leading-[1.2]">
              Tu proyecto en <br />
              <strong className="font-bold text-[#E8501E]">las mejores manos</strong>
            </h2>
            <p className="text-gray-600 font-light text-base leading-relaxed">
              En KonstruSpazio combinamos experiencia, diseño vanguardista y un equipo profesional de excelencia para ofrecerte resultados que superan expectativas.
            </p>
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-[#E8501E] hover:bg-[#C23E12] text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(232,80,30,0.4)] hover:scale-105"
              >
                HABLEMOS DE TU PROYECTO
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center Column: 3x2 Grid of Glass Light Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="glass-card-light p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-[#E8501E]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="p-3 bg-[#E8501E]/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h3 className="text-[#1A1F26] font-semibold text-base leading-snug">
                    {feat.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Worker with White Helmet & Geometric Shapes */}
          <div className="lg:col-span-3 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Geometric Orange Shapes Behind */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E8501E] to-[#C23E12] rounded-3xl transform rotate-6 opacity-80 shadow-xl" />
              <div className="absolute -inset-4 bg-gray-900 rounded-3xl transform -rotate-3 opacity-90 shadow-2xl" />

              {/* Worker Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                  alt="Profesional con casco blanco KonstruSpazio"
                  className="w-full h-[400px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[#E8501E] font-bold text-xs uppercase tracking-wider block mb-1">
                      EXCELENCIA TÉCNICA
                    </span>
                    <p className="text-sm font-light">Supervisión directa en cada fase de obra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
