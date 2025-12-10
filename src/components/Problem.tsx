export default function Problem() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Procesos lentos y burocráticos',
      description: 'Abrir una cuenta puede tomar días o incluso semanas, con múltiples visitas a sucursales físicas.',
      stat: '68%',
      statLabel: 'debe ir presencialmente',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Exceso de documentación',
      description: 'Formularios interminables, documentos físicos y requisitos innecesarios que frustran a los usuarios.',
      stat: '75%',
      statLabel: 'siente frustración',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: 'Plataformas no optimizadas',
      description: 'Interfaces confusas, errores frecuentes y falta de soporte adecuado durante el proceso digital.',
      stat: '80%',
      statLabel: 'quiere 100% digital',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Desconfianza en la seguridad',
      description: 'La falta de transparencia y procesos confusos genera desconfianza al compartir datos personales.',
      stat: '60%',
      statLabel: 'desconfía del proceso',
    },
  ];

  return (
    <section id="problema" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            El problema actual
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué abrir una cuenta bancaria en Colombia es tan{' '}
            <span className="text-red-500">complicado</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Los usuarios de servicios bancarios digitales en Colombia enfrentan
            plataformas no optimizadas cuando intentan abrir una cuenta en línea,
            generando frustración y pérdida de tiempo valioso.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 text-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
                  {problem.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{problem.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-500">{problem.stat}</span>
                    <span className="text-sm text-gray-500">{problem.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-full px-6 py-3">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">
              <strong className="text-red-600">Dato importante:</strong> El 80% de los usuarios encuestados desea un proceso 100% digital sin trámites presenciales.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
