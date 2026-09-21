import React from 'react';
import { FileEdit, PackageCheck, Users, Clock } from 'lucide-react';

export const Beneficios: React.FC = () => {
  const benefits = [
    {
      icon: <FileEdit className="w-7 h-7 text-[#E8501E]" />,
      title: "Diseño & Planificación",
      desc: "Convertimos tus ideas en proyectos arquitectónicos de alta gama.",
    },
    {
      icon: <PackageCheck className="w-7 h-7 text-[#E8501E]" />,
      title: "Materiales Exclusivos",
      desc: "Trabajamos con los estándares más altos y acabados de lujo.",
    },
    {
      icon: <Users className="w-7 h-7 text-[#E8501E]" />,
      title: "Equipo Experto",
      desc: "Profesionales dedicados a la perfección en cada detalle.",
    },
    {
      icon: <Clock className="w-7 h-7 text-[#E8501E]" />,
      title: "Puntualidad Absoluta",
      desc: "Entrega garantizada en los plazos establecidos sin excepciones.",
    },
  ];

  return (
    <section className="bg-[#12161C] py-20 border-y border-white/10 relative z-20 shadow-[inset_0_20px_40px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#E8501E]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8501E]/5 rounded-full blur-2xl group-hover:bg-[#E8501E]/15 transition-all" />
              
              <div className="p-4 bg-[#E8501E]/10 rounded-2xl w-fit mb-6 border border-[#E8501E]/20 group-hover:bg-[#E8501E] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-white font-light text-lg mb-3 tracking-wide group-hover:text-[#E8501E] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

