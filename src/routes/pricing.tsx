import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Check, Sparkles, Star, X, Zap } from 'lucide-react'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
})

interface Package {
  id: string
  name: string
  tagline: string
  subtitle: string
  price: number
  originalPrice?: number
  icon: React.ReactNode
  features: Array<string>
  notIncluded?: Array<string>
  includesAllFrom?: string
  assistance: string
  value?: string
  popular?: boolean
  ctaText: string
}

const PACKAGES: Array<Package> = [
  {
    id: 'base',
    name: 'Pacchetto BASE',
    tagline: 'Essenziale',
    subtitle: 'Sito Essenziale',
    price: 350,
    icon: <Sparkles size={24} />,
    features: [
      '1 pagina',
      'Design responsive',
      'Dominio + Hosting + SSL (12 mesi)',
      'SEO base',
      'Pulsante contatto',
      'Prenotazioni online',
    ],
    notIncluded: ['Pagine extra', 'Analytics', 'Conversione avanzata'],
    assistance: '14 giorni',
    ctaText: 'Richiedi questo pacchetto',
  },
  {
    id: 'standard',
    name: 'Pacchetto SILVER',
    tagline: 'Più Scelto',
    subtitle: 'Presenza Professionale',
    price: 520,
    originalPrice: 640,
    icon: <Star size={24} />,
    features: [
      '3–4 pagine',
      'Design personalizzato',
      'Modulo contatti avanzato',
      'SEO on-page',
      'Google Analytics',
      'Ottimizzazione velocità',
    ],
    includesAllFrom: 'BASE',
    assistance: '60 giorni',
    value: '€820',
    popular: true,
    ctaText: 'Consigliato per la tua attività',
  },
  {
    id: 'pro',
    name: 'Pacchetto GOLD',
    tagline: 'Massimo Valore',
    subtitle: 'Conversione & Brand',
    price: 880,
    originalPrice: 1000,
    icon: <Zap size={24} />,
    features: [
      '5–8 pagine',
      'Design orientato alla conversione',
      'SEO tecnica avanzata',
      'CTA strategiche',
      'WhatsApp / Calendly',
      'Hosting premium + CDN',
    ],
    includesAllFrom: 'SILVER',
    assistance: '6 mesi prioritari',
    value: '€1.350',
    ctaText: 'Per chi vuole il massimo',
  },
]

function PricingPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen pt-32 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft size={20} />
          Torna alla home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            I Miei Pacchetti
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scegli il pacchetto perfetto per le tue esigenze. Tutti includono
            hosting, dominio e supporto.
          </p>
        </div>

        {/* View Toggle */}

        {/* Cards View */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PACKAGES.map((pkg) => {
            const isSilver = pkg.id === 'standard'
            const isGold = pkg.id === 'pro'

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl overflow-visible border transition-all duration-300 ${
                  isSilver
                    ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-2 border-slate-300/60 shadow-lg shadow-slate-300/20 scale-105 animate-border-pulse'
                    : isGold
                      ? 'bg-gradient-to-br from-slate-800 via-yellow-900/10 to-slate-800 border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/20 hover:border-yellow-400/70'
                      : 'bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-cyan-500/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-5 py-1.5 bg-gradient-to-r from-slate-200 to-slate-100 text-slate-800 text-sm font-bold rounded-full whitespace-nowrap shadow-xl shadow-slate-300/50">
                    POPLARE
                  </div>
                )}
                <div className="p-8">
                  {/* Icon & Name */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${
                          isSilver
                            ? 'bg-gradient-to-br from-slate-200 to-slate-400 shadow-lg shadow-slate-300/50'
                            : isGold
                              ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-400/50'
                              : 'bg-gradient-to-br from-cyan-500 to-indigo-600'
                        }`}
                      >
                        {pkg.icon}
                      </div>
                      <div>
                        <h3
                          className={`text-xl font-bold ${pkg.popular ? 'mt-2' : ''} ${
                            isSilver
                              ? 'text-white'
                              : isGold
                                ? 'text-white'
                                : 'text-white'
                          }`}
                        >
                          {isSilver ? (
                            <>
                              Pacchetto{' '}
                              <span className="text-slate-300">SILVER</span>
                            </>
                          ) : isGold ? (
                            <>
                              Pacchetto{' '}
                              <span className="text-yellow-300">GOLD</span>
                            </>
                          ) : (
                            pkg.name
                          )}
                        </h3>
                        <p
                          className={`text-sm ${
                            isSilver
                              ? 'text-white'
                              : isGold
                                ? 'text-yellow-200'
                                : 'text-cyan-400'
                          }`}
                        >
                          {pkg.tagline}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-lg font-semibold mt-2 ${
                        isSilver
                          ? 'text-white'
                          : isGold
                            ? 'text-white'
                            : 'text-white'
                      }`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {pkg.originalPrice && (
                      <p
                        className={`text-sm line-through mb-1 ${
                          isSilver
                            ? 'text-gray-300'
                            : isGold
                              ? 'text-gray-300'
                              : 'text-gray-400'
                        }`}
                      >
                        €{pkg.originalPrice}
                      </p>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">
                        €{pkg.price}
                      </span>
                      <span
                        className={`text-sm ${
                          isSilver
                            ? 'text-white'
                            : isGold
                              ? 'text-white'
                              : 'text-gray-400'
                        }`}
                      >
                        una tantum
                      </span>
                    </div>
                    {pkg.originalPrice && (
                      <p
                        className={`text-xs font-medium mt-1 ${
                          isSilver
                            ? 'text-white'
                            : isGold
                              ? 'text-yellow-200'
                              : 'text-cyan-400'
                        }`}
                      >
                        OFFERTA LANCIO
                      </p>
                    )}
                    {pkg.value && (
                      <p
                        className={`text-sm mt-1 ${
                          isSilver
                            ? 'text-gray-300'
                            : isGold
                              ? 'text-gray-300'
                              : 'text-gray-400'
                        }`}
                      >
                        Valore reale: {pkg.value}
                      </p>
                    )}
                  </div>

                  {/* Include all from */}
                  {pkg.includesAllFrom && (
                    <div
                      className={`mb-4 p-3 rounded-lg ${
                        isSilver
                          ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white '
                          : 'bg-gradient-to-br from-slate-200 to-slate-400'
                      }`}
                    >
                      <p
                        className={`text-sm font-medium ${
                          isSilver ? 'text-white' : 'text-black'
                        }`}
                      >
                        Include tutto del {pkg.includesAllFrom}
                      </p>
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-4">
                    <p
                      className={`text-sm font-semibold mb-3 ${
                        isSilver ? 'text-white' : 'text-white'
                      }`}
                    >
                      {pkg.name === 'Pacchetto BASE' ? 'Include:' : 'Aggiunge:'}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check
                            size={18}
                            className={`mt-0.5 shrink-0 ${
                              isSilver
                                ? 'text-slate-300'
                                : isGold
                                  ? 'text-yellow-300'
                                  : 'text-cyan-400'
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              isSilver
                                ? 'text-white'
                                : isGold
                                  ? 'text-white'
                                  : 'text-gray-300'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included (only for Base) */}
                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-400 mb-3">
                        Non include:
                      </p>
                      <ul className="space-y-2">
                        {pkg.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <X
                              size={18}
                              className="text-gray-600 mt-0.5 shrink-0"
                            />
                            <span className="text-gray-500 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Assistance */}
                  <div
                    className={`mb-6 p-3 rounded-lg border ${
                      isSilver
                        ? 'bg-slate-700/50 border-slate-300/30'
                        : isGold
                          ? 'bg-slate-700/50 border-yellow-400/30'
                          : 'bg-slate-700/50 border-slate-600'
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        isSilver
                          ? 'text-gray-300'
                          : isGold
                            ? 'text-yellow-200'
                            : 'text-gray-400'
                      }`}
                    >
                      Assistenza:
                    </p>
                    <p className="text-white font-medium">{pkg.assistance}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                      isSilver
                        ? 'bg-gradient-to-br from-slate-200 to-slate-400'
                        : isGold
                          ? 'bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900 hover:shadow-lg hover:shadow-yellow-400/50'
                          : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                    }`}
                  >
                    {pkg.ctaText}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Customize Package Block */}
        <div className="mb-16 p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Personalizza il Pacchetto
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Aggiunte */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">➕</span>
                Aggiunte disponibili
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                  <span className="text-gray-300">Pagina extra</span>
                  <span className="text-cyan-400 font-semibold">+€80</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                  <span className="text-gray-300">E-commerce</span>
                  <span className="text-cyan-400 font-semibold">+€490</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                  <span className="text-gray-300">Multilingua</span>
                  <span className="text-cyan-400 font-semibold">+€180</span>
                </li>
              </ul>
            </div>

            {/* Rimozioni */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-gray-500">➖</span>
                Rimozioni (sconto)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                  <span className="text-gray-300">SEO</span>
                  <span className="text-red-400 font-semibold">–€70</span>
                </li>
                <li className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600">
                  <span className="text-gray-300">Analytics</span>
                  <span className="text-red-400 font-semibold">–€40</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table View */}

        {/* CTA Section */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-3">
            Non trovi il pacchetto giusto?
          </h2>
          <p className="text-gray-300 mb-6">
            Contattami per un preventivo personalizzato su misura per le tue
            esigenze.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Richiedi un preventivo
          </a>
        </div>
      </div>
    </div>
  )
}
