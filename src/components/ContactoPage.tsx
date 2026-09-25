import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, ArrowLeft } from 'lucide-react';

interface ContactoPageProps {
  onBackToHome: () => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({ onBackToHome }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: 'Caracas',
    servicio: 'Remodelación Residencial',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep submitted state or reset after
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      {/* Top Bar / Back to home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-[#E8501E] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Inicio
        </button>
      </div>

      {/* Header section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center flex flex-col items-center">
        <img
          src="https://i.postimg.cc/qqdW8LwW/image-Photoroom-(51).png"
          alt="Konstru Spazio Logo"
          className="h-14 w-auto mb-6 object-contain"
        />
        <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-gray-900 mb-4">
          Contacto & <span className="font-bold text-[#E8501E]">Ubicación</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          Estamos a tu entera disposición para materializar proyectos arquitectónicos de alta gama en Caracas y Lechería. Visítanos o escríbenos directamente.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm relative">
            <h2 className="text-2xl font-light text-gray-900 mb-2">Envíanos un mensaje</h2>
            <p className="text-xs text-gray-500 mb-8">Completa el formulario y un especialista se pondrá en contacto contigo de inmediato.</p>

            {formSubmitted ? (
              <div className="bg-[#E8501E]/10 border border-[#E8501E]/30 rounded-2xl p-8 text-center space-y-4 my-12">
                <CheckCircle2 className="w-12 h-12 text-[#E8501E] mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-gray-900">¡Mensaje enviado con éxito!</h3>
                <p className="text-xs text-gray-600">Gracias por contactar a KonstruSpazio. Te responderemos a la brevedad posible.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#1A1F26] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#E8501E] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej. Roberto Mendoza"
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#E8501E] focus:ring-1 focus:ring-[#E8501E] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#E8501E] focus:ring-1 focus:ring-[#E8501E] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">Teléfono de contacto</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="0414-0000000"
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#E8501E] focus:ring-1 focus:ring-[#E8501E] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">Ciudad de interés</label>
                    <select
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#E8501E] focus:ring-1 focus:ring-[#E8501E] transition-all"
                    >
                      <option value="Caracas">Caracas</option>
                      <option value="Lecheria">Lechería</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">Servicio requerido</label>
                  <select
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#E8501E] focus:ring-1 focus:ring-[#E8501E] transition-all"
                  >
                    <option value="Remodelación Residencial">Remodelación Residencial</option>
                    <option value="Construcción de Obras">Construcción de Obras</option>
                    <option value="Diseño de Interiores">Diseño de Interiores</option>
                    <option value="Locales Comerciales">Locales Comerciales</option>
                    <option value="Impermeabilización & Pintura">Impermeabilización & Pintura</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-2">Cuéntanos sobre tu proyecto</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Detalles, ubicación exacta, metros cuadrados aproximados..."
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#E8501E] focus:ring-1 focus:ring-[#E8501E] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E8501E] hover:bg-[#C23E12] text-white rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  ENVIAR SOLICITUD
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact info & Google Maps */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Contact details cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8501E]/10 flex items-center justify-center text-[#E8501E]">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Teléfonos Directos</h3>
                <div className="space-y-1 text-sm text-gray-600 font-light">
                  <p>0414-4680779</p>
                  <p>0424-8846964</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8501E]/10 flex items-center justify-center text-[#E8501E]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">WhatsApp Oficial</h3>
                <p className="text-sm text-gray-600 font-light">0414-4680779</p>
                <a
                  href="https://wa.me/584144680779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold text-[#E8501E] hover:underline pt-1"
                >
                  Abrir Chat Directo &rarr;
                </a>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8501E]/10 flex items-center justify-center text-[#E8501E]">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Correo Electrónico</h3>
                <p className="text-sm text-gray-600 font-light">konstruspazio@gmail.com</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8501E]/10 flex items-center justify-center text-[#E8501E]">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Horario de Atención</h3>
                <p className="text-sm text-gray-600 font-light">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              </div>

            </div>

            {/* Google Maps embedded */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-[320px] relative bg-gray-100">
              <iframe
                title="Google Maps Caracas y Lecheria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.167814321156!2d-66.87919!3d10.48059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI4JzUwLjIiTiA2NsKwNTMnNDUuMSJX!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full grayscale contrast-125"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-gray-200 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#E8501E] animate-ping" />
                <div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Sedes Principales</p>
                  <p className="text-[11px] text-gray-600">Caracas | Lechería, Venezuela</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
