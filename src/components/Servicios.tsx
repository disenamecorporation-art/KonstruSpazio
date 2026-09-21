import React, { useState } from 'react';
import { ArrowRight, Home, Building2, Store, Palette, Hammer, Wrench, X } from 'lucide-react';

export const Servicios: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const serviciosList = [
    {
      title: "Remodelación de Apartamentos",
      image: "https://i.postimg.cc/59vSjfMB/Chat-GPT-Image-21-sept-2026-05-29-01-p-m-(1).png",
      icon: <Home className="w-5 h-5 text-[#E8501E]" />,
      desc: "Optimización de espacios, acabados de lujo, renovación de cocinas, baños e instalaciones eléctricas y sanitarias adaptadas a tu estilo de vida.",
    },
    {
      title: "Remodelación de Casas",
      image: "https://i.postimg.cc/2jv73Cfw/Chat-GPT-Image-21-sept-2026-05-30-53-p-m.png",
      icon: <Building2 className="w-5 h-5 text-[#E8501E]" />,
      desc: "Ampliaciones, fachadas, terrazas, áreas sociales y transformación integral de residencias unifamiliares con altos estándares de calidad.",
    },
    {
      title: "Espacios Comerciales",
      image: "https://i.postimg.cc/nV7GMntQ/Chat-GPT-Image-21-sept-2026-05-32-22-p-m.png",
      icon: <Store className="w-5 h-5 text-[#E8501E]" />,
      desc: "Diseño y ejecución de locales comerciales, oficinas y tiendas orientados a potenciar tu marca y maximizar la experiencia del cliente.",
    },
    {
      title: "Diseño de Interiores",
      image: "https://i.postimg.cc/Vvy94VXk/Chat-GPT-Image-21-sept-2026-05-38-57-p-m.png",
      icon: <Palette className="w-5 h-5 text-[#E8501E]" />,
      desc: "Propuestas estéticas personalizadas, iluminación arquitectónica, mobiliario a la medida y selección de texturas y colores exclusivos.",
    },
    {
      title: "Obras Civiles",
      image: "https://i.postimg.cc/ZnkPjM6d/Whats-App-Image-2026-09-21-at-17-25-48.jpg",
      icon: <Hammer className="w-5 h-5 text-[#E8501E]" />,
      desc: "Construcción desde cero, estructuras metálicas y de concreto, cimentaciones y ejecución de proyectos de ingeniería civil con rigor técnico.",
    },
    {
      title: "Mantenimiento y Reparaciones",
      image: "https://i.postimg.cc/59vSjfMB/Chat-GPT-Image-21-sept-2026-05-29-01-p-m-(1).png",
      icon: <Wrench className="w-5 h-5 text-[#E8501E]" />,
      desc: "Servicios preventivos y correctivos para inmuebles residenciales y corporativos, garantizando el perfecto estado de tus instalaciones.",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#FFFFFF] text-[#1A1F26] relative overflow-hidden">
      {/* Subtle decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8501E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extralight text-[#1A1F26] leading-[1.2]">
              Soluciones integrales <br />
              <strong className="font-bold text-[#E8501E]">y remodelación</strong>
            </h2>
            <p className="text-gray-600 font-light text-base leading-relaxed">
              Nos encargamos de cada detalle arquitectónico y constructivo para que tú solo te preocupes por disfrutar el resultado de alta gama.
            </p>
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-[#1A1F26] hover:bg-[#E8501E] text-white px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                VER TODOS LOS SERVICIOS
                <ArrowRight className="w-4 h-4 text-[#E8501E] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: 3x2 Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviciosList.map((srv, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedService(srv)}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

                  {/* Content inside card */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl w-fit mb-3 border border-white/20 group-hover:bg-[#E8501E] group-hover:border-[#E8501E] transition-all duration-300 text-white">
                      {srv.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg sm:text-xl leading-snug group-hover:text-[#E8501E] transition-colors">
                      {srv.title}
                    </h3>
                    <span className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Ver detalles <ArrowRight className="w-3 h-3 text-[#E8501E]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A1F26] text-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#E8501E] transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#E8501E]/20 rounded-2xl text-[#E8501E]">
                {selectedService.icon}
              </div>
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
            </div>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-2xl mb-4 border border-white/10"
            />
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.desc}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 transition-colors"
              >
                Cerrar
              </button>
              <a
                href="#contacto"
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E8501E] hover:bg-[#C23E12] transition-colors text-white"
              >
                Solicitar Cotización
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
