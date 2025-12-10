export default function Security() {
  const securityFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: 'Autenticación biométrica',
      description: 'Reconocimiento facial y huella dactilar para acceso seguro a tu cuenta.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Cifrado de extremo a extremo',
      description: 'Toda tu información está protegida con encriptación AES-256.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Verificación de identidad',
      description: 'Sistema avanzado de IA para validar tu identidad de forma segura.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Alertas en tiempo real',
      description: 'Notificaciones instantáneas de cada movimiento en tu cuenta.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Cumplimiento normativo',
      description: 'Regulados por la Superintendencia Financiera de Colombia.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: 'Fondos protegidos',
      description: 'Tu dinero está protegido por Fogafín hasta $50 millones.',
    },
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Seguridad de la información' },
    { name: 'PCI DSS', description: 'Estándares de pagos' },
    { name: 'SOC 2', description: 'Controles de seguridad' },
    { name: 'GDPR', description: 'Protección de datos' },
  ];

  return (
    <section id="seguridad" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
            Seguridad y confianza
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu dinero está{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              100% seguro
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Utilizamos la tecnología más avanzada para proteger tu información
            y tu dinero. Tu confianza es nuestra prioridad.
          </p>
        </div>

        {/* Security features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Certificaciones y cumplimiento</h3>
              <p className="text-gray-400">Cumplimos con los más altos estándares internacionales</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-white">{cert.name}</div>
                  <div className="text-sm text-gray-400">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regulatory info */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-lg font-semibold mb-2">Regulado por la Superintendencia Financiera de Colombia</h4>
              <p className="text-gray-300 text-sm">
                DIGIBANK opera bajo la supervisión de la Superintendencia Financiera de Colombia,
                garantizando el cumplimiento de todas las normativas del sector financiero colombiano.
                Tu dinero está protegido por Fogafín.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                <div className="text-2xl font-bold text-green-400">$50M</div>
                <div className="text-xs text-gray-400">Protección Fogafín</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-gray-300">
              <strong className="text-green-400">+500,000 usuarios</strong> confían en DIGIBANK para sus operaciones bancarias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
