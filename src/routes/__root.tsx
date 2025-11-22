import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import appCss from '../styles.css?url'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Giuseppe Russo | Frontend Developer',
      },
      {
        name: 'description',
        content:
          'Frontend Developer specializzato in React, TypeScript e design moderno. Trasformo idee in esperienze digitali straordinarie.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-indigo-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 mb-8">Pagina non trovata</p>
        <a
          href="/"
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg"
        >
          Torna alla home
        </a>
      </div>
    </div>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        <Scripts />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
