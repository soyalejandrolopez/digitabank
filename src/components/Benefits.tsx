export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Facilidad de apertura',
      description: 'Abre tu cuenta digital en pocos pasos, sin necesidad de desplazarte a una sucursal física.',
      color: 'blue',
      metric: '5 minutos',
      metricLabel: 'Tiempo promedio',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Seguridad garantizada',
      description: 'Autenticación biométrica y cifrado de datos para proteger tu información financiera.',
      color: 'green',
      metric: '100%',
      metricLabel: 'Datos cifrados',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Rapidez en el proceso',
      description: 'Validación y aprobación automatizada de cuentas gracias a procesos inteligentes.',
      color: 'purple',
      metric: '60%',
      metricLabel: 'Menos pasos',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Experiencia intuitiva',
      description: 'Interfaz accesible que facilita la navegación desde cualquier dispositivo.',
      color: 'cyan',
      metric: '80%',
      metricLabel: 'Satisfacción',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Soporte 24/7',
      description: 'Chatbots y asesores en línea disponibles las 24 horas para resolver tus dudas.',
      color: 'orange',
      metric: '24/7',
      metricLabel: 'Disponibilidad',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Sin comisiones ocultas',
      description: 'Reducción o eliminación de tarifas por mantenimiento o transacciones digitales.',
      color: 'pink',
      metric: '$0',
      metricLabel: 'Costos ocultos',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Integración total',
      description: 'Conecta tu cuenta con billeteras digitales, pagos en línea y apps de terceros.',
      color: 'indigo',
      metric: '50+',
      metricLabel: 'Integraciones',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Inclusión financiera',
      description: 'Acceso al sistema financiero para usuarios no bancarizados y zonas rurales.',
      color: 'teal',
      metric: '100%',
      metricLabel: 'Cobertura',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; bgLight: string }> = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-100' },
    green: { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-100' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-100' },
    cyan: { bg: 'bg-cyan-500', text: 'text-cyan-500', bgLight: 'bg-cyan-100' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-100' },
    pink: { bg: 'bg-pink-500', text: 'text-pink-500', bgLight: 'bg-pink-100' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-500', bgLight: 'bg-indigo-100' },
    teal: { bg: 'bg-teal-500', text: 'text-teal-500', bgLight: 'bg-teal-100' },
  };

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Beneficios principales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Todo lo que necesitas en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
              una sola plataforma
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            DIGIBANK combina tecnología de punta con una experiencia de usuario excepcional
            para brindarte los mejores servicios bancarios digitales.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gray-200"
              >
                <div className={`w-14 h-14 ${colors.bgLight} ${colors.text} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {benefit.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className={`text-2xl font-bold ${colors.text}`}>
                    {benefit.metric}
                  </div>
                  <div className="text-xs text-gray-500">{benefit.metricLabel}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">
                  DIGIBANK vs Banca Tradicional
                </h3>
                <p className="text-blue-100 mb-6">
                  Nuestra plataforma supera a la competencia en todos los atributos clave
                  que importan a los usuarios.
                </p>
              </div>

              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                {[
                  { label: 'Facilidad', digibank: '10/10', others: '7/10' },
                  { label: 'Rapidez', digibank: '10/10', others: '7/10' },
                  { label: 'Seguridad', digibank: '10/10', others: '8/10' },
                  { label: 'Costos', digibank: '$0', others: 'Variable' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                    <div className="text-xs text-blue-200 mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-cyan-300">{item.digibank}</div>
                    <div className="text-xs text-blue-300">vs {item.others}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
