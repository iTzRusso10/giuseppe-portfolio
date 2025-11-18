/**
 * Portfolio Configuration File
 * Personalizza tutti i tuoi dati in questo file
 */

export const PORTFOLIO_CONFIG = {
  // Informazioni Personali
  personal: {
    fullName: 'Giuseppe Russo',
    title: 'Frontend Developer',
    email: 'giuseppe@example.com',
    phone: '+39 123 456 7890',
    location: 'Italia',
    bio: 'Frontend Developer che trasforma idee in esperienze digitali straordinarie',
    longBio: `Specializzato in React, TypeScript e design moderno. Con più di 5 anni di esperienza,
      ho avuto il privilegio di lavorare con startup innovative e aziende consolidate.
      La mia missione è semplice: creare esperienze digitali che non solo funzionano perfettamente,
      ma che lasciano un'impressione duratura negli utenti.`,
  },

  // Social Media
  social: {
    github: 'https://github.com/giusepperusso',
    linkedin: 'https://linkedin.com/in/giusepperusso',
    twitter: 'https://twitter.com/giusepperusso',
    instagram: 'https://instagram.com/giusepperusso',
  },

  // Competenze
  skills: {
    frontend: [
      'React 19',
      'TypeScript',
      'Next.js',
      'TailwindCSS',
      'Framer Motion',
      'Vite',
    ],
    backend: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
      'REST APIs',
    ],
    tools: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Webpack'],
    soft: [
      'Problem Solving',
      'Team Work',
      'Communication',
      'Project Management',
      'Mentoring',
    ],
  },

  // Esperienza Professionale
  experience: [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Startup XYZ',
      period: '2023 - Presente',
      description:
        'Guido il team frontend nella creazione di applicazioni scalabili e performanti.',
      achievements: [
        'Ridotto il bundle size del 40%',
        'Implementato sistema di design component-based',
        'Mentoring di 3 junior developer',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Agency ABC',
      period: '2021 - 2023',
      description:
        'Sviluppato 15+ progetti per clienti internazionali, dal design al deployment.',
      achievements: [
        'Aumentato le conversioni del 150% in un e-commerce',
        'Creato sistema di CMS headless',
        'Setup CI/CD pipeline con GitHub Actions',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'Web Solutions Ltd',
      period: '2019 - 2021',
      description:
        'Inizio della mia carriera con focus su frontend development e UI/UX.',
      achievements: [
        'Imparato React da zero',
        'Realizzato 10+ landing pages',
        'Collaborato con designer sul UI/UX',
      ],
    },
  ],

  // Statistiche
  stats: [
    { label: 'Progetti Completati', value: '50+' },
    { label: 'Clienti Soddisfatti', value: '30+' },
    { label: 'Anni di Esperienza', value: '5+' },
    { label: 'Dedizione', value: '100%' },
  ],

  // Servizi
  services: [
    {
      icon: '💻',
      title: 'Web Development',
      description:
        'Creo applicazioni web moderne, scalabili e performanti con le ultime tecnologie.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Disegno interfacce intuitive e belle che gli utenti amano utilizzare.',
    },
    {
      icon: '🚀',
      title: 'Consulenza Tecnica',
      description:
        'Aiuto i team nella scelta delle tecnologie giuste per i loro progetti.',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description:
        'Ottimizzo il caricamento e le performance delle applicazioni web.',
    },
  ],

  // Certificazioni
  certifications: [
    {
      name: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: '2023',
      url: 'https://example.com',
    },
    {
      name: 'TypeScript Professional',
      issuer: 'Udemy',
      date: '2022',
      url: 'https://example.com',
    },
    {
      name: 'Web Development Bootcamp',
      issuer: 'The Complete JavaScript Course',
      date: '2019',
      url: 'https://example.com',
    },
  ],

  // Meta tags per SEO
  seo: {
    title: 'Giuseppe Russo | Frontend Developer',
    description:
      'Frontend Developer specializzato in React, TypeScript e design moderno. Trasformo idee in esperienze digitali straordinarie.',
    keywords: [
      'frontend developer',
      'react developer',
      'web developer',
      'UI developer',
      'javascript developer',
    ],
    author: 'Giuseppe Russo',
    ogImage: 'https://example.com/og-image.jpg',
  },

  // Colori del tema
  colors: {
    primary: 'from-blue-500',
    secondary: 'to-purple-600',
    accent: 'from-pink-500',
  },
}

export default PORTFOLIO_CONFIG
