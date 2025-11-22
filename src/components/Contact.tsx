import { Mail, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'
import { sendEmail } from '@/hook/send-email'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    await sendEmail(formData)
      .then((result) => {
        if (result.success) {
          setSubmitted(true)
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          setError(result.error || "Errore nell'invio del messaggio")
        }
      })
      .catch((err) => {
        setError(err.message || "Errore nell'invio del messaggio")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section
      id="contact"
      className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Lavoriamo Insieme
          </h2>
          <p className="text-gray-400 text-lg">
            Hai un'idea straordinaria? Sono pronto a trasformarla in realtà.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Card 1 */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">Contattami direttamente</p>
            <a
              href="mailto:russo.giuseppe.dev@gmail.com"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              russo.giuseppe.dev@gmail.com
            </a>
          </div>

          {/* Contact Card 2 */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Messenger</h3>
            <p className="text-gray-400 mb-4">Parla con me in tempo reale</p>
            <a
              href="https://www.linkedin.com/in/giuseppe-russo-792900264/"
              aria-label="LinkedIn"
              target="_blank"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              LinkedIn Message
            </a>
          </div>

          {/* Contact Card 3 */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-pink-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Send className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Modulo</h3>
            <p className="text-gray-400 mb-4">Inviami un messaggio</p>
            <button
              className="text-pink-400 hover:text-pink-300 font-medium transition-colors scroll-smooth"
              onClick={() => {
                const element = document.querySelector('#contact-form')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Scorri giù
            </button>
          </div>
        </div>

        {/* Form */}
        <div
          id="contact-form"
          className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto mb-4">
                <Send className="text-green-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Messaggio inviato!
              </h3>
              <p className="text-gray-400">
                Ti risponderò al più presto possibile. Grazie!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="La tua email"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-medium mb-2"
                >
                  Oggetto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Di cosa si tratta?"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Raccontami del tuo progetto..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {isLoading ? 'Invio in corso...' : 'Invia il messaggio'}
                </span>
                {!isLoading && (
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
            </form>
          )}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            O se preferisci, connettiti con me sui social media
          </p>
          <div className="flex gap-4 justify-center">
            <a
              aria-label="GitHub"
              target="_blank"
              href="https://github.com/iTzRusso10"
              className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-cyan-600 text-white transition-colors duration-300 font-medium"
            >
              GitHub
            </a>
            <a
              aria-label="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/giuseppe-russo-792900264/"
              className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-indigo-600 text-white transition-colors duration-300 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
