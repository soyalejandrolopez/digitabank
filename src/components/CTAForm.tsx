'use client';

import { useState } from 'react';

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    segment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="cta-form" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">¡Gracias por registrarte!</h2>
            <p className="text-blue-200 mb-8">
              Hemos recibido tu información. Te enviaremos un correo electrónico con los
              próximos pasos para abrir tu cuenta DIGIBANK.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-md mx-auto">
              <p className="text-sm text-blue-200 mb-2">Tu registro:</p>
              <p className="font-semibold">{formData.name}</p>
              <p className="text-blue-200">{formData.email}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta-form" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6">
                Comienza ahora
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Únete a la revolución de la{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  banca digital
                </span>
              </h2>
              <p className="text-blue-200 text-lg mb-8">
                Regístrate ahora y sé de los primeros en disfrutar de una experiencia
                bancaria 100% digital, sin filas y sin complicaciones.
              </p>

              {/* Benefits list */}
              <div className="space-y-4">
                {[
                  'Apertura de cuenta en menos de 5 minutos',
                  'Sin costos de mantenimiento',
                  'Tarjeta débito virtual instantánea',
                  'Soporte 24/7 por chat',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm">100% Seguro</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm">Datos protegidos</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:w-1/2 w-full max-w-md">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Abre tu cuenta gratis
                </h3>
                <p className="text-gray-500 text-sm mb-6 text-center">
                  Completa el formulario y comienza tu experiencia DIGIBANK
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                      placeholder="Ej: María García"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de celular
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                      placeholder="300 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="segment" className="block text-sm font-medium text-gray-700 mb-1">
                      ¿Qué te describe mejor?
                    </label>
                    <select
                      id="segment"
                      name="segment"
                      value={formData.segment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="estudiante">Estudiante universitario</option>
                      <option value="freelancer">Trabajador independiente / Freelancer</option>
                      <option value="profesional">Profesional joven</option>
                      <option value="emprendedor">Emprendedor / Pequeño empresario</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Procesando...</span>
                      </>
                    ) : (
                      <>
                        <span>Crear mi cuenta gratis</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-gray-500 text-center">
                  Al registrarte aceptas nuestros{' '}
                  <a href="#" className="text-blue-600 hover:underline">Términos y Condiciones</a>{' '}
                  y{' '}
                  <a href="#" className="text-blue-600 hover:underline">Política de Privacidad</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
