import React from 'react';
import { ArrowLeft, CheckCircle2, Home, Building2, Store, Palette, Hammer, Wrench } from 'lucide-react';

interface ServiciosPageProps {
  onBackToHome: () => void;
  onNavigateContact: () => void;
}

export const ServiciosPage: React.FC<ServiciosPageProps> = ({ onBackToHome, onNavigateContact }) => {
  const serviciosDetallados = [
    {
      title: "Remodelación de Apartamentos",
      subtitle: "Transformación integral de espacios verticales de alta gama",
      image: "https://i.postimg.cc/59vSjfMB/Chat-GPT-Image-21-sept-2026-05-29-01-p-m-(1).png",
      icon: <Home className="w-6 h-6 text-[#E8501E]" />,
      desc: "Optimizamos cada metro cuadrado de tu apartamento con un diseño contemporáneo, acabados de lujo, renovación total de cocinas, baños, iluminación arquitectónica e instalaciones eléctricas y sanitarias.",
      detalles: [
        "Diseño 3D previo y distribución inteligente de espacios",
        "Instalación de pisos de mármol, porcelanato y madera",
        "Reconversión de sistemas eléctricos y climatización",
        "Carpintería a la medida y muebles empotrados"
      ]
    },
    {
      title: "Remodelación de Casas",
      subtitle: "Ampliación, fachadas y confort residencial unifamiliar",
      image: "https://i.postimg.cc/2jv73Cfw/Chat-GPT-Image-21-sept-2026-05-30-53-p-m.png",
      icon: <Building2 className="w-6 h-6 text-[#E8501E]" />,
      desc: "Especialistas en la renovación y modernización de casas y villas en Caracas y Lechería. Diseñamos áreas sociales exteriores, piscinas, fachadas vanguardistas y espacios interiores conectados con la naturaleza.",
      detalles: [
        "Diseño y construcción de áreas sociales y terrazas",
        "Fachadas vanguardistas con piedra, madera y vidrio",
        "Impermeabilización avanzada de techos y muros",
        "Optimización de jardines y paisajismo"
      ]
    },
    {
      title: "Espacios Comerciales & Oficinas",
      subtitle: "Arquitectura corporativa que potencia tu marca",
      image: "https://i.postimg.cc/nV7GMntQ/Chat-GPT-Image-21-sept-2026-05-32-22-p-m.png",
      icon: <Store className="w-6 h-6 text-[#E8501E]" />,
      desc: "Creamos oficinas ejecutivas, tiendas y locales comerciales diseñados para impresionar a tus clientes y maximizar la productividad de tu equipo de trabajo bajo normativas ergonómicas y estéticas.",
      detalles: [
        "Identidad visual integrada en el diseño interior",
        "Salas de juntas ejecutivas y puestos operativos",
        "Iluminación comercial y sistemas de seguridad",
        "Ejecución express en horarios nocturnos si se requiere"
      ]
    },
    {
      title: "Diseño de Interiores Exclusivo",
      subtitle: "Estética, texturas y mobiliario de alta gama",
      image: "https://i.postimg.cc/Vvy94VXk/Chat-GPT-Image-21-sept-2026-05-38-57-p-m.png",
      icon: <Palette className="w-6 h-6 text-[#E8501E]" />,
      desc: "Nuestro equipo curaduría de interiores selecciona cada elemento decorativo, paleta cromática, textiles y luminarias para que tu hogar refleje sofisticación y personalidad única.",
      detalles: [
        "Curaduría de arte, alfombras y accesorios decorativos",
        "Selección de mobiliario importado y nacional de diseño",
        "Diseño de iluminación ambiental y técnica",
        "Asesoría integral de estilo"
      ]
    },
    {
      title: "Obras Civiles e Ingeniería",
      subtitle: "Estructuras sólidas, cimentaciones y ejecución técnica",
      image: "https://i.postimg.cc/ZnkPjM6d/Whats-App-Image-2026-09-21-at-17-25-48.jpg",
      icon: <Hammer className="w-6 h-6 text-[#E8501E]" />,
      desc: "Desarrollo de proyectos de construcción desde cero con ingenieros calificados, supervisión constante, cálculo estructural riguroso y control de calidad en cada colado de concreto y armado.",
      detalles: [
        "Construcción de edificaciones y muros de contención",
        "Estructuras metálicas y de concreto armado",
        "Cálculo y supervisión de ingeniería civil",
        "Cumplimiento de normativas antisísmicas"
      ]
    },
    {
      title: "Mantenimiento & Reparaciones",
      subtitle: "Preservación del valor de tu inmueble con máxima eficiencia",
      image: "https://i.postimg.cc/59vSjfMB/Chat-GPT-Image-21-sept-2026-05-29-01-p-m-(1).png",
      icon: <Wrench className="w-6 h-6 text-[#E8501E]" />,
      desc: "Servicios especializados de mantenimiento preventivo y correctivo para mantener tus instalaciones impecables y operativas los 365 días del año.",
      detalles: [
        "Impermeabilización de losas y paredes contra filtraciones",
        "Pintura general exterior e interior con recubrimientos premium",
        "Reparación de sistemas hidrosanitarios y eléctricos",
        "Planes de mantenimiento corporativo y residencial"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F26] text-white pt-28 pb-20">
      {/* Top Bar / Back to home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#E8501E] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Inicio
        </button>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-4">
          Nuestros <span className="font-bold text-[#E8501E]">Servicios</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
          Soluciones integrales de arquitectura, diseño interior y construcción de alta gama en Caracas y Lechería. Cada servicio está respaldado por nuestro estándar de excelencia.
        </p>
      </div>

      {/* Detailed Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {serviciosDetallados.map((servicio, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column */}
            <div className={`lg:col-span-6 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group ${
              idx % 2 === 1 ? 'lg:order-2' : ''
            }`}>
              <img
                src={servicio.image}
                alt={servicio.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-[#E8501E] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-2">
                  KonstruSpazio Pro
                </span>
                <p className="text-white text-sm font-light">{servicio.subtitle}</p>
              </div>
            </div>

            {/* Content Column */}
            <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="w-12 h-12 rounded-xl bg-[#E8501E]/10 flex items-center justify-center border border-[#E8501E]/20">
                {servicio.icon}
              </div>

              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-wide">
                {servicio.title}
              </h2>

              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {servicio.desc}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8501E]">Características Clave:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicio.detalles.map((detalle, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-[#E8501E] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 font-light leading-snug">{detalle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onNavigateContact}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8501E] hover:bg-[#C23E12] text-white rounded-xl text-xs font-bold uppercase tracking-[0.15em] transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  SOLICITAR ESTE SERVICIO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
