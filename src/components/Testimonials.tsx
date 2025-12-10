export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carolina Martínez',
      role: 'Estudiante universitaria',
      location: 'Bogotá',
      image: 'CM',
      rating: 5,
      text: 'Necesitaba abrir mi primera cuenta para recibir mi beca y con DIGIBANK lo hice en menos de 5 minutos desde mi celular. Sin filas, sin ir al banco. ¡Increíble!',
      highlight: 'Menos de 5 minutos',
    },
    {
      name: 'Andrés Felipe Gómez',
      role: 'Diseñador freelance',
      location: 'Medellín',
      image: 'AG',
      rating: 5,
      text: 'Como freelancer recibo pagos de diferentes clientes. DIGIBANK me permite gestionar todo desde la app, sin comisiones ocultas y con transferencias instantáneas.',
      highlight: 'Sin comisiones ocultas',
    },
    {
      name: 'María José Rodríguez',
      role: 'Emprendedora',
      location: 'Cali',
      image: 'MR',
      rating: 5,
      text: 'Abrí la cuenta para mi pequeño negocio de repostería. El proceso fue súper fácil y ahora mis clientes pueden pagarme directo a la cuenta.',
      highlight: 'Fácil para mi negocio',
    },
    {
      name: 'Juan David López',
      role: 'Trabajador independiente',
      location: 'Barranquilla',
      image: 'JL',
      rating: 5,
      text: 'Intenté abrir cuenta en tres bancos tradicionales y siempre había un problema. Con DIGIBANK todo funcionó a la primera, 100% digital.',
      highlight: '100% digital',
    },
    {
      name: 'Laura Valentina Pérez',
      role: 'Profesional joven',
      location: 'Ibagué',
      image: 'LP',
      rating: 5,
      text: 'La verificación biométrica me dio mucha confianza. Sé que mi cuenta está segura y puedo hacer todas mis operaciones desde el celular.',
      highlight: 'Seguridad garantizada',
    },
    {
      name: 'Diego Alejandro Torres',
      role: 'Estudiante de posgrado',
      location: 'Bucaramanga',
      image: 'DT',
      rating: 5,
      text: 'Vivo en una zona alejada del centro y el banco más cercano queda a una hora. DIGIBANK solucionó todos mis problemas bancarios.',
      highlight: 'Acceso desde cualquier lugar',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              usuarios
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Miles de colombianos ya disfrutan de una experiencia bancaria digital
            simple, rápida y segura con DIGIBANK.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-3 py-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-medium">{testimonial.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500K+', label: 'Usuarios activos' },
                { value: '4.8/5', label: 'Calificación promedio' },
                { value: '98%', label: 'Satisfacción' },
                { value: '5 min', label: 'Tiempo de apertura' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App store ratings */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { store: 'App Store', rating: '4.8', reviews: '12.5K' },
            { store: 'Google Play', rating: '4.7', reviews: '28.3K' },
          ].map((app, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-md">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                {i === 0 ? (
                  <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                )}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{app.store}</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{app.rating}</span>
                  <span className="text-xs text-gray-400">({app.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
