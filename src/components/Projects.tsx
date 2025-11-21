import { useNavigate } from '@tanstack/react-router'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { PROJECTS_DETAIL } from '@/routes/projects'

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const navigate = useNavigate()
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
          {PROJECTS_DETAIL.map((project) => (
            <div
              onClick={() => navigate({ to: '/projects' })}
              key={project.id}
              className="cursor-pointer group relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
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
                    target="_blank"
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-white transition-colors duration-300 font-medium"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">Code</span>
                  </a>

                  <a
                    target="_blank"
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
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
                  className={`absolute inset-0 bg-gradient-to-br  to-transparent opacity-5 pointer-events-none`}
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
