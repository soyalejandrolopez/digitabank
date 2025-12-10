export default function ValueProposition() {
  return (
    <section id="propuesta" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Nuestra propuesta de valor
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            La solución que los colombianos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              necesitan
            </span>
          </h2>
        </div>

        {/* Main value proposition card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left content */}
                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    DIGIBANK: Tu cuenta bancaria en minutos, no en días
                  </h3>

                  <p className="text-blue-100 text-lg mb-8">
                    Nuestra plataforma de apertura de cuentas digitales ayuda a los{' '}
                    <strong className="text-white">usuarios de servicios bancarios en Colombia</strong>{' '}
                    quienes desean abrir su cuenta de forma rápida para{' '}
                    <strong className="text-cyan-400">reducir la frustración de procesos largos</strong>{' '}
                    y permitir el acceso inmediato a servicios financieros desde cualquier lugar.
                  </p>

                  {/* Value highlights */}
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Ahorro de tiempo',
                        description: 'De días a minutos. Proceso completamente automatizado.',
                      },
                      {
                        title: 'Reducción de esfuerzo',
                        description: 'Sin visitas presenciales ni documentos físicos.',
                      },
                      {
                        title: 'Accesibilidad total',
                        description: 'Disponible 24/7 desde cualquier dispositivo.',
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <p className="text-blue-200 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Visual */}
                <div className="lg:w-1/2">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-4">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold">Proceso simplificado</h4>
                    </div>

                    {/* Process steps */}
                    <div className="space-y-4">
                      {[
                        { step: '01', text: 'Ingresa tus datos básicos', time: '1 min' },
                        { step: '02', text: 'Verificación biométrica', time: '2 min' },
                        { step: '03', text: 'Confirmación automática', time: '1 min' },
                        { step: '04', text: '¡Cuenta lista para usar!', time: '1 min' },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 bg-white/10 rounded-xl p-4"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/30 text-cyan-400 rounded-lg flex items-center justify-center font-bold text-sm">
                            {item.step}
                          </div>
                          <div className="flex-1">
                            <span className="text-white">{item.text}</span>
                          </div>
                          <div className="flex-shrink-0 text-sm text-cyan-400 font-medium">
                            {item.time}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
                      <span className="text-blue-200">Tiempo total:</span>
                      <span className="text-2xl font-bold text-cyan-400">~5 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional value propositions */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Para jóvenes',
              description: 'Abre tu primera cuenta digital sin complicaciones. Ideal para universitarios y adultos jóvenes que buscan independencia financiera.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
            },
            {
              title: 'Para freelancers',
              description: 'Gestiona tus ingresos y pagos de manera eficiente. Recibe pagos nacionales e internacionales sin complicaciones.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: 'Para pequeñas empresas',
              description: 'Soluciones financieras ágiles para tu negocio. Apertura de cuenta empresarial rápida y sin trámites complicados.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
