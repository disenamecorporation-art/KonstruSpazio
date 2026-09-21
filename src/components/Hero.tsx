import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  "https://i.postimg.cc/59vSjfMB/Chat-GPT-Image-21-sept-2026-05-29-01-p-m-(1).png",
  "https://i.postimg.cc/2jv73Cfw/Chat-GPT-Image-21-sept-2026-05-30-53-p-m.png",
  "https://i.postimg.cc/nV7GMntQ/Chat-GPT-Image-21-sept-2026-05-32-22-p-m.png",
  "https://i.postimg.cc/Vvy94VXk/Chat-GPT-Image-21-sept-2026-05-38-57-p-m.png",
  "https://i.postimg.cc/ZnkPjM6d/Whats-App-Image-2026-09-21-at-17-25-48.jpg"
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Slider Images with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Luxury Modern Interior ${idx + 1}`}
            className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000 scale-105 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F26] via-[#1A1F26]/95 to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F26] via-transparent to-black/60 z-10" />
      </div>

      {/* Architectural ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E8501E]/10 rounded-full blur-[120px] pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Smaller, refined elegant title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-[1.15]">
            Obras y Remodelaciones <br />
            <span className="font-bold text-[#E8501E]">en Caracas y Lechería</span>
          </h1>

          {/* Smaller refined paragraph */}
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-xl leading-relaxed">
            Transformamos espacios en lugares únicos, funcionales y con estilo. Especialistas en obras y remodelaciones residenciales, comerciales e interiores de alta gama.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#E8501E] hover:bg-[#C23E12] text-white px-7 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_8px_25px_rgba(232,80,30,0.3)] hover:scale-105"
            >
              SOLICITA TU COTIZACIÓN
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-[#E8501E] text-white px-7 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-300 backdrop-blur-md"
            >
              CONOCE NUESTROS SERVICIOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



