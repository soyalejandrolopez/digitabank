export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Descarga la app',
      description: 'Descarga DIGIBANK desde App Store o Google Play. Disponible para iOS y Android de forma gratuita.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      time: '30 seg',
    },
    {
      number: '02',
      title: 'Ingresa tus datos',
      description: 'Completa el formulario con tu información básica: nombre, cédula, correo electrónico y número de celular.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      time: '1 min',
    },
    {
      number: '03',
      title: 'Verifica tu identidad',
      description: 'Toma una selfie y una foto de tu documento de identidad. Nuestra IA verificará tu información en segundos.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      time: '2 min',
    },
    {
      number: '04',
      title: '¡Cuenta activa!',
      description: 'Recibe la confirmación instantánea. Tu cuenta está lista para recibir y enviar dinero de inmediato.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      time: '1 min',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Cómo funciona{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              DIGIBANK
            </span>?
          </h2>
          <p className="text-lg text-gray-600">
            Abrir tu cuenta nunca fue tan fácil. Solo necesitas tu celular,
            tu documento de identidad y 5 minutos de tu tiempo.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mt-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 rounded-2xl flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {step.description}
                    </p>

                    {/* Time badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{step.time}</span>
                    </div>
                  </div>

                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <svg className="w-6 h-6 text-gray-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left - Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">
                  Sin papeleos, sin filas, sin complicaciones
                </h3>
                <p className="text-gray-300 mb-6">
                  Olvídate de los trámites engorrosos. Con DIGIBANK todo el proceso
                  es 100% digital, seguro y verificado automáticamente.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {[
                    'Sin visitas a sucursales',
                    'Sin documentos físicos',
                    'Sin esperas innecesarias',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Stats */}
              <div className="flex-shrink-0">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                    5 min
                  </div>
                  <div className="text-gray-300">
                    Tiempo promedio de<br />apertura de cuenta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Solo necesitas:
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '📱', text: 'Smartphone con cámara' },
              { icon: '🪪', text: 'Cédula de ciudadanía' },
              { icon: '📧', text: 'Correo electrónico' },
              { icon: '📞', text: 'Número de celular' },
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <span className="text-xl">{req.icon}</span>
                <span className="text-sm text-gray-700">{req.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
