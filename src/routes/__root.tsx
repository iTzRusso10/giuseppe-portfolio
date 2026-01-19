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
        title:
          'Giuseppe Russo | Web Developer Freelance | React & TypeScript',
      },
      {
        name: 'description',
        content:
          'Web Developer freelance. Realizzo siti web professionali con React e TypeScript. Preventivo gratuito in 24h. Portfolio e contatti.',
      },
      {
        name: 'keywords',
        content:
          'web developer calabria, sviluppatore react freelance, siti web professionali, typescript developer',
      },
      // Open Graph
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Giuseppe Russo | Web Developer Freelance',
      },
      {
        property: 'og:description',
        content:
          'Realizzo siti web professionali con React e TypeScript. Preventivo gratuito in 24h.',
      },
      {
        property: 'og:image',
        content: 'https://giusepperussodev.it/og-image.jpg', // usa immagine 1200x630px
      },
      {
        property: 'og:url',
        content: 'https://giusepperussodev.it',
      },
      {
        property: 'og:site_name',
        content: 'Giuseppe Russo Portfolio',
      },
      {
        property: 'og:locale',
        content: 'it_IT',
      },
      // Twitter Cards
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Giuseppe Russo | Web Developer Freelance',
      },
      {
        name: 'twitter:description',
        content: 'Realizzo siti web professionali con React e TypeScript',
      },
      {
        name: 'twitter:image',
        content: 'https://giusepperussodev.it/og-image.jpg',
      },
      // SEO
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large',
      },
      {
        name: 'author',
        content: 'Giuseppe Russo',
      },
      // Mobile
      {
        name: 'theme-color',
        content: '#0891b2', // cyan-600 del tuo tema
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      // Canonical URL
      {
        rel: 'canonical',
        href: 'https://giusepperussodev.it',
      },
      // Favicon e App Icons
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      // Performance: Preconnect a domini esterni
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
    scripts: [
      // JSON-LD Schema.org per SEO
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Giuseppe Russo',
          jobTitle: 'Web Developer Freelance',
          url: 'https://giusepperussodev.it',
          sameAs: [
            'https://github.com/iTzRusso10',
            'https://www.linkedin.com/in/giuseppe-russo-792900264/', 
          ],
          image: 'https://giusepperussodev.it/profile.jpg',
          description: 'Web Developer specializzato in React e TypeScript',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Calabria',
            addressCountry: 'IT',
          },
          email: 'russo.giuseppe.dev@gmail.com',
          telephone: '+39-347-269-3212',
        }),
      },
      // Schema WebSite per searchbox
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Giuseppe Russo Portfolio',
          url: 'https://giusepperussodev.it',
          description:
            'Portfolio professionale di Giuseppe Russo, Web Developer freelance',
          inLanguage: 'it-IT',
        }),
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
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          Torna alla home
        </a>
      </div>
    </div>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inizializzazione EmailJS più robusta con error handling
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      try {
        emailjs.init(publicKey)
        console.log('✅ EmailJS inizializzato correttamente')
      } catch (error) {
        console.error('❌ Errore inizializzazione EmailJS:', error)
      }
    } else {
      console.warn(
        '⚠️ VITE_EMAILJS_PUBLIC_KEY non configurata - form contatti non funzionerà',
      )
    }
  }, [])

  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Skip to main content per accessibilità */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg"
        >
          Salta al contenuto principale
        </a>
        <Scripts />
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
