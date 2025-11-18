import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: Array<string>
  github: string
  demo: string
  color: string
}

const PROJECTS: Array<Project> = [
  {
    id: 1,
    title: 'Platform E-commerce Avanzata',
    description:
      'Una piattaforma e-commerce full-stack con carrello dinamico, pagamenti integrati e dashboard amministrativa. Performance ottimizzate con lazy loading e code splitting.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    color: 'from-blue-500',
  },
  {
    id: 2,
    title: 'Dashboard Analytics Real-time',
    description:
      'Dashboard interattivo per visualizzare dati in tempo reale con grafici animati, filtri avanzati e export dati. Costruito con librerie di visualizzazione moderne.',
    image:
      'https://images.unsplash.com/photo-1551288894-20934986f212?w=500&h=300&fit=crop',
    tags: ['React', 'D3.js', 'Recharts', 'WebSocket', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    color: 'from-purple-500',
  },
  {
    id: 3,
    title: 'App Gestione Progetti Collaborativa',
    description:
      'Applicazione collaborativa in tempo reale per la gestione di progetti con Kanban board, assegnazioni team e notifiche push. Scalabile e user-friendly.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    tags: ['React', 'Firebase', 'Framer Motion', 'Redux', 'PWA'],
    github: 'https://github.com',
    demo: 'https://example.com',
    color: 'from-pink-500',
  },
  {
    id: 4,
    title: 'Sistema CMS Headless',
    description:
      'CMS headless personalizzato con editor visuale drag-and-drop, gestione media avanzata e API REST. Perfetto per agenzie e startup.',
    image:
      'https://images.unsplash.com/photo-1555099962-4199f1a02dc5?w=500&h=300&fit=crop',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    color: 'from-orange-500',
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Progetti Realizzati
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selezione dei miei lavori più importanti. Ogni progetto è una
            storia di innovazione e dedizione.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-white transition-colors duration-300 font-medium"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white transition-all duration-300 font-medium"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover gradient overlay */}
              {hoveredId === project.id && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-5 pointer-events-none`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Visualizza tutti i progetti
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
