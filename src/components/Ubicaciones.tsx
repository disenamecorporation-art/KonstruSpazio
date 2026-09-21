import React from 'react';
import { MapPin, Building, Waves } from 'lucide-react';

export const Ubicaciones: React.FC = () => {
  const ubicacionesList = [
    {
      city: "Caracas",
      subtitle: "Capital y Zona Metropolitana",
      image: "https://i.postimg.cc/59vSjfMB/Chat-GPT-Image-21-sept-2026-05-29-01-p-m-(1).png",
      icon: <Building className="w-5 h-5 text-[#E8501E]" />,
    },
    {
      city: "Lechería",
      subtitle: "Zona Oriental y Costera",
      image: "https://i.postimg.cc/nV7GMntQ/Chat-GPT-Image-21-sept-2026-05-32-22-p-m.png",
      icon: <Waves className="w-5 h-5 text-[#E8501E]" />,
    },
  ];

  return (
    <section className="py-24 bg-[#1A1F26] text-white relative overflow-hidden">
      {/* Background aerial city blur */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&q=80&w=1600"
          alt="City aerial background"
          className="w-full h-full object-cover filter blur-lg"
        />
        <div className="absolute inset-0 bg-[#1A1F26]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extralight leading-[1.2]">
              Trabajamos en <br />
              <span className="text-[#E8501E] font-bold">Caracas y Lechería</span>
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              Estamos presentes en las zonas más exclusivas, listos para elevar el estándar arquitectónico de tus espacios residenciales y comerciales.
            </p>
            <div className="pt-2 flex items-center gap-3 text-sm text-gray-400">
              <span className="w-3 h-3 rounded-full bg-[#E8501E] inline-block"></span>
              <span>Cobertura integral residencias y comercios</span>
            </div>
          </div>

          {/* Right Column: 2 Large City Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ubicacionesList.map((loc, idx) => (
                <div
                  key={idx}
                  className="group relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-500 hover:-translate-y-2"
                >
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl border border-white/25 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[#E8501E] text-xs font-semibold uppercase tracking-wider mb-1">
                        <MapPin className="w-4 h-4" />
                        {loc.subtitle}
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        {loc.city}
                      </h3>
                    </div>
                    <div className="p-3 bg-white/10 rounded-2xl text-white group-hover:bg-[#E8501E] transition-colors">
                      {loc.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
