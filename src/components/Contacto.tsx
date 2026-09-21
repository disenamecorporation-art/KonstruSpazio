import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tipoProyecto: 'Remodelación de apartamento',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.mensaje) {
      setError('Por favor complete todos los campos requeridos.');
      return;
    }
    setError('');
    setEnviado(true);

    // Build WhatsApp URL with prefilled message
    const waText = encodeURIComponent(
      `Hola KonstruSpazio, mi nombre es *${formData.nombre}*.\nTeléfono: ${formData.telefono}\nCorreo: ${formData.email}\nTipo de proyecto: ${formData.tipoProyecto}\nMensaje: ${formData.mensaje}`
    );
    const waUrl = `https://wa.me/584164159157?text=${waText}`;

    // Open WhatsApp after short delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-[#141820] text-white relative overflow-hidden">
      {/* Background modern living room blur */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
          alt="Modern room blur"
          className="w-full h-full object-cover filter blur-lg"
        />
        <div className="absolute inset-0 bg-[#141820]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extralight leading-[1.2]">
                ¡Hablemos de <br />
                <span className="text-[#E8501E] font-bold">tu proyecto!</span>
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed mt-4">
                Inicia tu transformación hoy. Nuestros expertos en arquitectura e interiores están listos para hacer realidad tu visión con elegancia y precisión.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#E8501E]/15 rounded-2xl text-[#E8501E] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Teléfonos</span>
                  <a href="tel:04144580779" className="text-white font-medium hover:text-[#E8501E] transition-colors">
                    0414 - 4580779 / 0424 - 8846964
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#E8501E]/15 rounded-2xl text-[#E8501E] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">WhatsApp</span>
                  <a href="https://wa.me/584164159157" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#E8501E] transition-colors">
                    0416 - 4159157
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#E8501E]/15 rounded-2xl text-[#E8501E] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Correo Electrónico</span>
                  <a href="mailto:konstruspazio@gmail.com" className="text-white font-medium hover:text-[#E8501E] transition-colors">
                    konstruspazio@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#E8501E]/15 rounded-2xl text-[#E8501E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Ubicación</span>
                  <span className="text-white font-medium">Caracas | Lechería</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card-dark p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/15 relative">
              {enviado ? (
                <div className="py-16 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-20 h-20 bg-[#E8501E]/20 text-[#E8501E] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje enviado con éxito!</h3>
                  <p className="text-gray-300 max-w-md mx-auto text-sm">
                    Hemos abierto WhatsApp con los datos de tu solicitud para atenderte de inmediato. ¡Gracias por confiar en KonstruSpazio!
                  </p>
                  <button
                    onClick={() => {
                      setEnviado(false);
                      setFormData({ nombre: '', telefono: '', email: '', tipoProyecto: 'Remodelación de apartamento', mensaje: '' });
                    }}
                    className="px-8 py-3 bg-[#E8501E] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#C23E12] transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Cuéntanos los detalles de tu obra</h3>
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/40 text-red-200 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Rodríguez"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8501E] transition-colors"
                      />
                    </div>
                    {/* Teléfono */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej. 0414-1234567"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8501E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Correo */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8501E] transition-colors"
                      />
                    </div>
                    {/* Tipo de proyecto */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                        Tipo de proyecto
                      </label>
                      <select
                        name="tipoProyecto"
                        value={formData.tipoProyecto}
                        onChange={handleChange}
                        className="w-full bg-[#1A1F26] border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#E8501E] transition-colors cursor-pointer"
                      >
                        <option value="Remodelación de apartamento">Remodelación de apartamento</option>
                        <option value="Remodelación de casa">Remodelación de casa</option>
                        <option value="Espacio comercial">Espacio comercial</option>
                        <option value="Diseño de interiores">Diseño de interiores</option>
                        <option value="Obra civil">Obra civil</option>
                        <option value="Mantenimiento y reparaciones">Mantenimiento y reparaciones</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Cuéntanos sobre tu proyecto... *
                    </label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Describe los espacios a remodelar, metros cuadrados estimados o ideas principales..."
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E8501E] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E8501E] hover:bg-[#C23E12] text-white py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#E8501E]/30"
                  >
                    ENVIAR MENSAJE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
