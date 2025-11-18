import { Link, createFileRoute  } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink, Github, Star } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

interface ProjectDetail {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  tags: Array<string>
  github: string
  demo: string
  features: Array<string>
  impact: string
  year: number
  featured: boolean
}

const PROJECTS_DETAIL: Array<ProjectDetail> = [
  {
    id: 1,
    title: 'Platform E-commerce Avanzata',
    description:
      'Una piattaforma e-commerce full-stack con carrello dinamico, pagamenti integrati e dashboard amministrativa.',
    longDescription:
      "Ho creato una piattaforma e-commerce completa con un frontend moderno in React e un backend robusto in Node.js. La piattaforma include un sistema di carrello intelligente, integrazione con Stripe per i pagamenti, gestione dell'inventario e una dashboard amministrativa intuitiva per gestire prodotti, ordini e clienti.",
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Stripe',
      'TailwindCSS',
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Carrello intelligente con persistenza',
      'Sistema di pagamento Stripe',
      'Dashboard amministrativa',
      'Gestione inventario in tempo reale',
      'Notifiche email automatiche',
      'Sistema di recensioni e valutazioni',
    ],
    impact:
      'Il cliente ha visto un aumento del 150% nella conversione e una riduzione del 30% nei tempi di checkout.',
    year: 2024,
    featured: true,
  },
  {
    id: 2,
    title: 'Dashboard Analytics Real-time',
    description:
      'Dashboard interattivo per visualizzare dati in tempo reale con grafici animati e filtri avanzati.',
    longDescription:
      'Una dashboard analitica costruita per visualizzare dati complessi in tempo reale. Utilizza WebSocket per gli aggiornamenti live, D3.js per visualizzazioni personalizzate e un sistema di filtri sofisticato per analizzare i dati da múltipli angoli.',
    image:
      'https://images.unsplash.com/photo-1551288894-20934986f212?w=1000&h=600&fit=crop',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Redis', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Grafici animati in tempo reale',
      'Filtri avanzati multi-dimensionali',
      'Export dati in multipli formati',
      'Dashboard personalizzabile',
      'Alerting automatico',
      'Integrazione API custom',
    ],
    impact:
      "I clienti hanno risparmiato 10 ore settimanali nell'analisi manuale dei dati.",
    year: 2024,
    featured: true,
  },
]

function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen pt-32 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} />
          Torna alla home
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Tutti i Progetti
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una raccolta completa dei miei lavori più significativi e
            innovativi.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {PROJECTS_DETAIL.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full">
                        <Star size={14} className="text-yellow-400" />
                        <span className="text-xs font-medium text-yellow-300">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-blue-400 font-medium">
                      {project.year}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                    <span className="text-sm text-gray-400">
                      {project.tags.length} tecnologie
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h2>

                  <p className="text-gray-300 mb-4">
                    {project.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                      Caratteristiche principali
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-6">
                    <h3 className="text-sm font-semibold text-blue-300 mb-1">
                      Impatto
                    </h3>
                    <p className="text-sm text-gray-300">{project.impact}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-slate-700 border border-slate-600 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-blue-600 text-white transition-colors duration-300 font-medium"
                    >
                      <Github size={18} />
                      Visualizza Codice
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 text-white transition-all duration-300 font-medium"
                    >
                      <ExternalLink size={18} />
                      Visita il Progetto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Interessato a un progetto simile?
          </h2>
          <p className="text-gray-300 mb-6">
            Contattami per discutere di come posso aiutare la tua idea a
            diventare realtà.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Iniziamo a collaborare
          </a>
        </div>
      </div>
    </div>
  )
}
