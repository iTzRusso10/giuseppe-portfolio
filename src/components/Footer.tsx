import { Github, Heart, Linkedin, Mail, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-white font-bold">Giuseppe</span>
            </div>
            <p className="text-gray-400 text-sm">
              Frontend Developer che trasforma idee in esperienze digitali
              straordinarie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Link Veloci</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Su di me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Progetti
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">UI/UX Design</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  Consulenza Tecnica
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Rimani Aggiornato</h3>
            <p className="text-gray-400 text-sm mb-3">
              Iscriviti per ricevere aggiornamenti sui miei progetti.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-3 py-2 rounded-l-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none text-sm"
              />
              <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm font-medium">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Giuseppe Russo. Fatto con
            <Heart
              size={16}
              className="inline-block text-red-500 mx-1 mb-0.5"
            />
            usando React & TailwindCSS.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} className="text-white" />
            </a>
            <a
              href="mailto:giuseppe@example.com"
              className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
