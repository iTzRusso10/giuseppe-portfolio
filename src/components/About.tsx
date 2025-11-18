import { Code2, Palette, Zap } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Codice Pulito',
      description:
        'Scrivo codice manutenibile, scalabile e ben documentato che segue i migliori standard industriali.',
    },
    {
      icon: Zap,
      title: 'Performance First',
      description:
        'Optimizzazione è nel mio DNA. Creo applicazioni che caricano velocemente e rispondono istantaneamente.',
    },
    {
      icon: Palette,
      title: 'Design Moderno',
      description:
        'Combino estetica e funzionalità per creare interfacce che sono sia bellissime che intuitive.',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Chi sono
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uno sviluppatore appassionato che ama trasformare visioni in realtà
            digitali.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Passione per l'eccellenza digitale
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Con più di 5 anni di esperienza nello sviluppo frontend, ho avuto
              il privilegio di lavorare con startup innovative e aziende
              consolidate. La mia missione è semplice: creare esperienze
              digitali che non solo funzionano perfettamente, ma che lasciano
              un'impressione duratura negli utenti.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Specializzato in React, TypeScript e tecnologie moderne,
              affrontiamo ogni progetto come una sfida unica. Credo nel power of
              collaboration, nella continuous learning e nella ricerca della
              perfezione in ogni dettaglio.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Competenze principali:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'Next.js',
                    'TailwindCSS',
                    'Node.js',
                    'PostgreSQL',
                    'Git',
                    'UI/UX',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-gray-300">Progetti Completati</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-amber-500/10 border border-indigo-500/20">
              <div className="text-4xl font-bold text-indigo-400 mb-2">30+</div>
              <p className="text-gray-300">Clienti Soddisfatti</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-cyan-500/10 border border-amber-500/20">
              <div className="text-4xl font-bold text-amber-400 mb-2">5+</div>
              <p className="text-gray-300">Anni di Esperienza</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20">
              <div className="text-4xl font-bold text-indigo-400 mb-2">∞</div>
              <p className="text-gray-300">Passione Illimitata</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
