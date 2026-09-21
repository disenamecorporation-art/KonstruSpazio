import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';

export const Proyectos: React.FC = () => {
  const proyectosList = [
    {
      title: "Diseño y Ejecución Residencial",
      location: "Caracas",
      image: "https://i.postimg.cc/59vSjfMB/Chat-GPT-Image-21-sept-2026-05-29-01-p-m-(1).png",
    },
    {
      title: "Penthouse Exclusivo",
      location: "Lechería",
      image: "https://i.postimg.cc/2jv73Cfw/Chat-GPT-Image-21-sept-2026-05-30-53-p-m.png",
    },
    {
      title: "Remodelación Arquitectónica",
      location: "Caracas",
      image: "https://i.postimg.cc/nV7GMntQ/Chat-GPT-Image-21-sept-2026-05-32-22-p-m.png",
    },
    {
      title: "Residencia de Lujo",
      location: "Lechería",
      image: "https://i.postimg.cc/Vvy94VXk/Chat-GPT-Image-21-sept-2026-05-38-57-p-m.png",
    },
    {
      title: "Obra Civil y Acabados",
      location: "Caracas / Lechería",
      image: "https://i.postimg.cc/ZnkPjM6d/Whats-App-Image-2026-09-21-at-17-25-48.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % proyectosList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [proyectosList.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % proyectosList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + proyectosList.length) % proyectosList.length);
  };

  const currentProject = proyectosList[currentIndex];

  return (
    <section id="proyectos" className="py-24 bg-[#1A1F26] text-white relative overflow-hidden">
      {/* Background with blurred luxury interior */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600"
          alt="Background Blur"
          className="w-full h-full object-cover filter blur-md"
        />
        <div className="absolute inset-0 bg-[#1A1F26]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extralight leading-[1.2]">
              Más que obras, creamos espacios <br />
              <span className="text-[#E8501E] font-bold">para vivir y crecer</span>
            </h2>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              Cada proyecto es una nueva oportunidad para demostrar nuestra pasión por la calidad constructiva, el diseño vanguardista y la exclusividad.
            </p>
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-[#E8501E] hover:bg-[#C23E12] text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(232,80,30,0.4)] hover:scale-105"
              >
                VER GALERÍA DE PROYECTOS
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Coverflow Style Slider */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-white/15">
              <img
                key={currentIndex}
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-all duration-700 animate-in fade-in duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Glassmorphism Caption Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-8 glass-card p-5 sm:p-6 rounded-2xl border border-white/20 shadow-xl flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[#E8501E] text-xs font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4" />
                    {currentProject.location}
                  </div>
                  <h3 className="text-white text-lg sm:text-2xl font-semibold">
                    {currentProject.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/10 hover:bg-[#E8501E] transition-colors text-white border border-white/20"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/10 hover:bg-[#E8501E] transition-colors text-white border border-white/20"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E8501E]" />
                Proyecto Destacado {currentIndex + 1} / {proyectosList.length}
              </div>
            </div>

            {/* Pagination Indicators (4 dots) */}
            <div className="flex justify-center items-center gap-3 mt-6">
              {proyectosList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#E8501E]' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Ir al proyecto ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
