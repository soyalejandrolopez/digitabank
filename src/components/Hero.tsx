'use client';

export default function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('cta-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-2 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              La nueva satisfacción de la banca digital en Colombia
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Abre tu cuenta bancaria en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                menos de 5 minutos
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              DIGIBANK transforma la manera en que accedes a servicios bancarios.
              Sin filas, sin papeleos, 100% digital y desde cualquier lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Abrir mi cuenta gratis
              </button>
              <a
                href="#como-funciona"
                className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Ver cómo funciona
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">5 min</div>
                <div className="text-sm text-blue-200">Apertura</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-blue-200">Digital</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400">$0</div>
                <div className="text-sm text-blue-200">Comisiones</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl" />

                  {/* App content */}
                  <div className="p-6 pt-12">
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-white">DIGIBANK</div>
                      <div className="text-sm text-blue-200">Tu banco digital</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-4">
                      <div className="text-sm text-blue-200 mb-1">Saldo disponible</div>
                      <div className="text-3xl font-bold text-white">$2.450.000</div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {['Transferir', 'Pagar', 'Recargar'].map((action) => (
                        <div key={action} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
                          <div className="w-10 h-10 bg-cyan-500/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                          </div>
                          <div className="text-xs text-white">{action}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                      <div className="text-sm font-medium mb-3 text-white">Últimos movimientos</div>
                      {[
                        { name: 'Nómina', amount: '+$1.800.000' },
                        { name: 'Spotify', amount: '-$16.900' },
                        { name: 'Transferencia', amount: '-$150.000' },
                      ].map((tx, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                          <span className="text-sm text-white">{tx.name}</span>
                          <span className={`text-sm font-medium ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
