import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, Code2, Trophy, Users, Zap } from 'lucide-react'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'Chi sono | Giuseppe Russo' },
      { name: 'description', content: 'Scopri chi sono e cosa faccio.' },
      { property: 'og:title', content: 'Chi sono | Giuseppe Russo' },
      { property: 'og:description', content: 'Scopri chi sono e cosa faccio.' },
    ],
    links: [{ rel: 'canonical', href: 'https://giusepperussodev.it/about' }],
  }),
  component: AboutPage,
})

interface SkillCategory {
  name: string
  skills: Array<string>
  icon: React.ReactNode
}

function AboutPage() {
  const skillCategories: Array<SkillCategory> = [
    {
      name: 'Frontend',
      skills: [
        'React 19',
        'TypeScript',
        'Next.js',
        'TailwindCSS',
        'Framer Motion',
        'Vite',
      ],
      icon: <Code2 size={24} />,
    },
    {
      name: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'GraphQL',
        'REST APIs',
      ],
      icon: <Code2 size={24} />,
    },
    {
      name: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Webpack'],
      icon: <Zap size={24} />,
    },
    {
      name: 'Soft Skills',
      skills: [
        'Problem Solving',
        'Team Work',
        'Communication',
        'Project Management',
        'Mentoring',
      ],
      icon: <Users size={24} />,
    },
  ]

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'GBrain SRL',
      period: '2019 - Presente',
      description:
        'Guido il team frontend nella creazione di applicazioni scalabili e performanti.',
    },
  ]

  const navigate = useNavigate()

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate({ to: '/' }).then(() => {
      setTimeout(() => {
        const element = document.querySelector('#contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    })
  }

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
            Su di Me
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La mia storia, il mio journey e la mia passione per la tecnologia.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              La Mia Storia
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Ho iniziato il mio viaggio nella tecnologia 5 anni fa con una
                semplice curiosità: come funzionano le cose su internet? Questa
                domanda mi ha portato a imparare HTML, CSS e JavaScript, e non
                mi sono più fermato.
              </p>
              <p>
                Ogni progetto che affronto è un'opportunità per imparare
                qualcosa di nuovo. Che sia un'architettura complessa, una
                libreria innovativa o semplicemente un approccio migliore a un
                problema, rimango sempre uno studente.
              </p>
              <p>
                Oggi, amo aiutare le persone a realizzare le loro visioni
                attraverso il codice. Per me, lo sviluppo è un'arte che combina
                logica, creatività e passion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
              <Trophy size={32} className="text-blue-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-400 text-sm">Progetti Realizzati</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
              <Users size={32} className="text-purple-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <p className="text-gray-400 text-sm">Clienti Soddisfatti</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20">
              <Zap size={32} className="text-pink-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <p className="text-gray-400 text-sm">Anni di Esperienza</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <Code2 size={32} className="text-orange-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400 text-sm">Dedizione</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">
            Esperienza Professionale
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Competenze</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800 border border-slate-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <h2 className="text-2xl font-bold text-white mb-3">
            Pronto a Collaborare?
          </h2>
          <p className="text-gray-300 mb-6">
            Contattami per discutere del tuo prossimo grande progetto.
          </p>
          <a
            onClick={handleContactClick}
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Iniziamo una Conversazione
          </a>
        </div>
      </div>
    </div>
  )
}
