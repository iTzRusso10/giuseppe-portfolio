import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const FULL_TEXT =
  'Frontend Developer che trasforma idee in esperienze digitali straordinarie'

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    setIsMounted(true)

    // Reset per iniziare l'animazione
    setDisplayedText('')
    currentIndexRef.current = 0

    const interval = setInterval(() => {
      if (currentIndexRef.current < FULL_TEXT.length) {
        setDisplayedText(FULL_TEXT.slice(0, currentIndexRef.current + 1))
        currentIndexRef.current += 1
      } else {
        clearInterval(interval)
      }
    }, 70)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 pt-20 flex items-center justify-center overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto py-10 px-4 sm:py-0 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 inline-block animate-slide-down">
          <div className="px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 backdrop-blur-sm">
            <span className="text-sm font-medium bg-linear-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              ✨ Ciao, sono Giuseppe Russo
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-white">Creo </span>
          <span className="gradient-text">esperienze digitali</span>
          <br />
          <span className="text-white">che lasciano il segno</span>
        </h1>

        {/* Typing text - SOLO QUESTA PARTE CAMBIA */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 min-h-8">
          {!isMounted ? (
            // Durante SSR mostra testo completo
            FULL_TEXT
          ) : (
            // Sul client mostra animazione
            <>
              {displayedText}
              {displayedText.length < FULL_TEXT.length && (
                <span className="inline-block w-1 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
              )}
            </>
          )}
        </p>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          Specializzato in React, TypeScript e design moderno. Trasformo
          concetti complessi in interfacce intuitive e performanti che i tuoi
          clienti ameranno.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            href="#contact"
            className="px-8 py-4 bg-linear-to-r from-cyan-500 to-indigo-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
          >
            Iniziamo un progetto
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#projects')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-8 py-4 border-2 border-cyan-500/50 text-white rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
          >
            Visualizza i miei progetti
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-4 justify-center animate-slide-up"
          style={{ animationDelay: '1s' }}
        >
          <a
            href="https://github.com"
            className="p-3 rounded-lg bg-gray-800 hover:bg-cyan-500 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={20} className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            className="p-3 rounded-lg bg-gray-800 hover:bg-indigo-500 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-white" />
          </a>
          <a
            href="mailto:giuseppe@example.com"
            className="p-3 rounded-lg bg-gray-800 hover:bg-amber-500 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
