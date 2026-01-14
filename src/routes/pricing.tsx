import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Check, Sparkles, Star, X, Zap } from 'lucide-react'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

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

interface Addon {
  id: string
  name: string
  price: number
}

const ADDONS: Array<Addon> = [
  { id: 'extra-page', name: 'Pagina extra', price: 80 },
  { id: 'ecommerce', name: 'E-commerce', price: 490 },
  { id: 'multilingual', name: 'Multilingua', price: 180 },
]

const PACKAGES: Array<Package> = [
  {
    id: 'base',
    name: 'Pacchetto BASE',
    tagline: 'Vetrina semplice',
    subtitle: 'Per farti trovare e contattare',
    price: 350,
    icon: <Sparkles size={24} />,
    features: [
      '1 pagina unica (Home, Chi sei, Servizi, Contatti tutto in una schermata)',
      'Ottimizzato per smartphone e tablet',
      'Dominio + hosting + sito sicuro (SSL) per 12 mesi',
      'Impostazioni base per farti trovare su Google (SEO)',
      'Pulsante “Chiama” con 1 click',
      'Elenco dei servizi principali con una breve descrizione (senza pagina dedicata e senza dettagli per ognuno)',
    ],
    notIncluded: [
      'Più pagine dedicate (Servizi / Chi sono / ecc.)',
      'Tasto WhatsApp fisso',
      'Prenotazioni online',
      'Statistiche visite (Analytics)',
      'Struttura pensata per aumentare richieste/clienti',
    ],
    assistance: '14 giorni',
    ctaText: 'Voglio il BASE',
  },
  {
    id: 'standard',
    name: 'Pacchetto SILVER',
    tagline: 'Il più scelto',
    subtitle: 'Professionale + WhatsApp',
    price: 520,
    originalPrice: 640,
    icon: <Star size={24} />,
    features: [
      '3–4 pagine dedicate: più ordine e più chiarezza (in schermate separate)',
      'Grafica personalizzata in base al tuo stile',
      'Pagina Servizi (foto e descrizioni dettagliate per ogni servizio)',
      'Modulo contatti completo (richieste più chiare e ordinate)',
      'Tasto WhatsApp fisso: ti scrivono subito senza cercare il numero',
      'Statistiche visite con Google Analytics',
      'Sito più veloce (carica in fretta)',
    ],
    includesAllFrom: 'BASE',
    assistance: '60 giorni',
    value: '€820',
    popular: true,
    ctaText: 'Consigliato: voglio il SILVER',
  },
  {
    id: 'pro',
    name: 'Pacchetto GOLD',
    tagline: 'Massimo valore',
    subtitle: 'Più richieste + prenotazioni online',
    price: 880,
    originalPrice: 1000,
    icon: <Zap size={24} />,
    features: [
      '5–8 pagine utili: più spazio per convincere e aumentare fiducia',
      'Struttura pensata per far contattare di più (sezioni e testi messi nei punti giusti)',
      'CTA chiare e ripetute: “Prenota”, “Richiedi info”, “Preventivo” dove serve',
      'Prenotazioni online: scelgono giorno/ora anche quando sei occupato',
      'SEO tecnica avanzata (base più solida per Google e prestazioni)',
      'Hosting premium + CDN (ancora più velocità e stabilità)',
    ],
    includesAllFrom: 'SILVER',
    assistance: '6 mesi prioritari',
    value: '€1.350',
    ctaText: 'Voglio il massimo (GOLD)',
  },
]

function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    contactMethod: 'email' as 'email' | 'whatsapp',
    selectedPackage: '',
    selectedAddons: [] as Array<string>,
  })

  const handleWhatsAppClick = (e: React.MouseEvent, packageName: string) => {
    e.preventDefault()
    setFormData((prev) => ({ ...prev, selectedPackage: packageName }))
    setIsModalOpen(true)
    setIsSuccess(false)
  }

  const handleAddonToggle = (addonId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedAddons: prev.selectedAddons.includes(addonId)
        ? prev.selectedAddons.filter((id) => id !== addonId)
        : [...prev.selectedAddons, addonId],
    }))
  }

  const calculateTotal = () => {
    const pkg = PACKAGES.find((p) => p.name === formData.selectedPackage)
    const basePrice = pkg?.price || 0
    const addonsPrice = formData.selectedAddons.reduce((sum, addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId)
      return sum + (addon?.price || 0)
    }, 0)
    return basePrice + addonsPrice
  }

  const getSelectedPackagePrice = () => {
    const pkg = PACKAGES.find((p) => p.name === formData.selectedPackage)
    return pkg?.price || 0
  }

  const getAddonsTotal = () => {
    return formData.selectedAddons.reduce((sum, addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId)
      return sum + (addon?.price || 0)
    }, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui puoi inviare i dati al server
    console.log('Form data:', formData)
    setIsSuccess(true)
  }

  const resetAndCloseModal = () => {
    setIsSuccess(false)
    setFormData({
      firstName: '',
      lastName: '',
      contact: '',
      contactMethod: 'email',
      selectedPackage: '',
      selectedAddons: [],
    })
    setIsModalOpen(false)
  }

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
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
                    POPOLARE
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
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

                  {/* CTA */}
                  <a
                    onClick={(e) => handleWhatsAppClick(e, pkg.name)}
                    className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 mt-auto cursor-pointer ${
                      isSilver
                        ? 'bg-gradient-to-br from-slate-200 to-slate-400 hover:bg-slate-300/80 hover:shadow-lg hover:shadow-slate-300/50'
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
          <button
            onClick={() => {
              setIsModalOpen(true)
              setIsSuccess(false)
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Richiedi un preventivo
          </button>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => {
          if (!open) resetAndCloseModal()
          else setIsModalOpen(open)
        }}
      >
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  Richiedi Preventivo
                </DialogTitle>
              </DialogHeader>

              <DialogFooter></DialogFooter>
              <div className="space-y-6 mt-6">
                {/* Package Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Seleziona Pacchetto <span className="text-red-400">*</span>
                  </label>
                  <div className="grid gap-3">
                    {PACKAGES.map((pkg) => {
                      const isSelected = formData.selectedPackage === pkg.name
                      const isSilver = pkg.id === 'standard'
                      const isGold = pkg.id === 'pro'

                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              selectedPackage: pkg.name,
                            })
                          }
                          className={`relative p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            isSelected
                              ? isSilver
                                ? 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 border-slate-300 shadow-lg shadow-slate-300/30'
                                : isGold
                                  ? 'bg-gradient-to-br from-slate-700 via-yellow-900/20 to-slate-700 border-yellow-400 shadow-lg shadow-yellow-400/30'
                                  : 'bg-gradient-to-br from-slate-700 to-slate-600 border-cyan-500 shadow-lg shadow-cyan-500/30'
                              : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {/* Icon */}
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                                isSilver
                                  ? 'bg-gradient-to-br from-slate-200 to-slate-400'
                                  : isGold
                                    ? 'bg-gradient-to-br from-yellow-300 to-yellow-500'
                                    : 'bg-gradient-to-br from-cyan-500 to-indigo-600'
                              }`}
                            >
                              <div className="text-white">{pkg.icon}</div>
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                              <div className="flex items-baseline gap-2 mb-1">
                                <h3
                                  className={`text-lg font-bold ${
                                    isSilver
                                      ? 'text-slate-200'
                                      : isGold
                                        ? 'text-yellow-300'
                                        : 'text-cyan-400'
                                  }`}
                                >
                                  {pkg.id === 'base'
                                    ? 'BASE'
                                    : pkg.id === 'standard'
                                      ? 'SILVER'
                                      : 'GOLD'}
                                </h3>
                                {pkg.popular && (
                                  <span className="text-xs px-2 py-0.5 bg-slate-300 text-slate-800 rounded-full font-semibold">
                                    Popolare
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-300">
                                {pkg.subtitle}
                              </p>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div
                                className={`text-2xl font-bold ${
                                  isSilver
                                    ? 'text-white'
                                    : isGold
                                      ? 'text-yellow-300'
                                      : 'text-cyan-400'
                                }`}
                              >
                                €{pkg.price}
                              </div>
                              {pkg.originalPrice && (
                                <div className="text-xs text-gray-400 line-through">
                                  €{pkg.originalPrice}
                                </div>
                              )}
                            </div>

                            {/* Selected Indicator */}
                            {isSelected && (
                              <div
                                className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${
                                  isSilver
                                    ? 'bg-slate-300'
                                    : isGold
                                      ? 'bg-yellow-400'
                                      : 'bg-cyan-500'
                                }`}
                              >
                                <Check size={16} className="text-white" />
                              </div>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Mario"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Cognome <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Rossi"
                    />
                  </div>
                </div>

                {/* Contact Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferisco ricevere il preventivo via:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, contactMethod: 'email' })
                      }
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        formData.contactMethod === 'email'
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      📧 Email
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, contactMethod: 'whatsapp' })
                      }
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        formData.contactMethod === 'whatsapp'
                          ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      💬 WhatsApp
                    </button>
                  </div>
                </div>

                {/* Contact Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {formData.contactMethod === 'email'
                      ? 'Indirizzo Email'
                      : 'Numero di Telefono'}{' '}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type={formData.contactMethod === 'email' ? 'email' : 'tel'}
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder={
                      formData.contactMethod === 'email'
                        ? 'mario.rossi@example.com'
                        : '+39 123 456 7890'
                    }
                  />
                </div>

                {/* Addons Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Aggiunte opzionali:
                  </label>
                  <div className="space-y-2">
                    {ADDONS.map((addon) => (
                      <label
                        key={addon.id}
                        className="flex items-center justify-between p-3 bg-slate-700/50 border border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.selectedAddons.includes(addon.id)}
                            onChange={() => handleAddonToggle(addon.id)}
                            className="w-5 h-5 rounded border-slate-500 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-800"
                          />
                          <span className="text-white font-medium">
                            {addon.name}
                          </span>
                        </div>
                        <span className="text-cyan-400 font-semibold">
                          +€{addon.price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Total Price */}
                {formData.selectedPackage && (
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Prezzo pacchetto:</span>
                      <span className="text-white font-semibold">
                        €{getSelectedPackagePrice()}
                      </span>
                    </div>
                    {formData.selectedAddons.length > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Aggiunte:</span>
                        <span className="text-white font-semibold">
                          +€{getAddonsTotal()}
                        </span>
                      </div>
                    )}
                    <div className="h-px bg-cyan-500/30 my-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-white">
                        Totale preventivo:
                      </span>
                      <span className="text-2xl font-bold text-cyan-400">
                        €{calculateTotal()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <DialogFooter>
                  <button
                    type="submit"
                    disabled={!formData.selectedPackage}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Richiedi Preventivo
                  </button>
                </DialogFooter>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-400" />
              </div>
              <DialogTitle className="text-3xl font-bold text-white mb-4">
                Grazie per averci contattato!
              </DialogTitle>
              <p className="text-gray-300 text-lg mb-2">
                Riceverai il preventivo personalizzato via{' '}
                {formData.contactMethod === 'email' ? 'email' : 'WhatsApp'}{' '}
                entro 24 ore.
              </p>
              <p className="text-gray-400 mb-8">
                Ti contatteremo all'indirizzo:{' '}
                <span className="text-cyan-400 font-semibold">
                  {formData.contact}
                </span>
              </p>
              <button
                onClick={resetAndCloseModal}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Chiudi
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
