# 🚀 Guida Completa di Installazione e Setup

Benvenuto! Questa guida ti aiuterà a mettere online il tuo portfolio in pochi minuti.

## ⚡ Quick Start (5 minuti)

### 1. Installa le dipendenze
```bash
npm install
# oppure yarn install
# oppure bun install
```

### 2. Avvia il server di sviluppo
```bash
npm run dev
```

Vai a `http://localhost:3000` e dovresti vedere il tuo portfolio!

### 3. Personalizza i tuoi dati
Modifica il file `src/data/portfolio.ts` con le tue informazioni:
```typescript
export const PORTFOLIO_CONFIG = {
  personal: {
    fullName: 'Il tuo nome',
    email: 'il-tuo-email@example.com',
    // ... altri dati
  }
}
```

## 📝 Customizzazione Passo per Passo

### Passo 1: Aggiorna le Informazioni Personali

**File:** `src/data/portfolio.ts`

```typescript
personal: {
  fullName: 'Giuseppe Russo',
  title: 'Frontend Developer',
  email: 'giuseppe@example.com',
  phone: '+39 123 456 7890',
  location: 'Italia',
  bio: 'La tua descrizione breve',
  longBio: 'La tua descrizione lunga...'
}
```

### Passo 2: Aggiorna il Testo della Hero

**File:** `src/components/Hero.tsx`

Modifica la variabile `fullText`:
```typescript
const fullText = 'Cambia questo testo con la tua presentazione'
```

### Passo 3: Aggiungi i Tuoi Progetti

**File:** `src/components/Projects.tsx` e `src/routes/projects.tsx`

Aggiungi i tuoi progetti nell'array `PROJECTS`:
```typescript
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nome del Progetto',
    description: 'Breve descrizione...',
    image: 'URL immagine',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/username/repo',
    demo: 'https://project-demo.com',
    color: 'from-blue-500',
  },
  // Aggiungi altri progetti...
]
```

### Passo 4: Personalizza il Design

**File:** `src/styles.css`

Modifica i colori principali:
```css
/* Cambia questi colori */
from-blue-500   /* Blu primario */
to-purple-600   /* Viola secondario */
from-pink-500   /* Rosa accento */
```

Oppure personalizza il TailwindCSS in `tailwind.config.js`:
```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
      }
    }
  }
}
```

### Passo 5: Aggiungi i Link Sociali

**File:** `src/data/portfolio.ts`

```typescript
social: {
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
  instagram: 'https://instagram.com/username',
}
```

Poi aggiorna i link in:
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`

### Passo 6: Setup del Form di Contatto

**File:** `src/components/Contact.tsx`

Se vuoi integrare un servizio di email:

#### Opzione 1: Formspree
```bash
npm install @formspree/react
```

```typescript
import { useForm } from '@formspree/react'

function Contact() {
  const [state, handleSubmit] = useForm('YOUR_FORM_ID')
  
  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  )
}
```

#### Opzione 2: EmailJS
```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.currentTarget, 'PUBLIC_KEY')
}
```

#### Opzione 3: API Custom
Crea il tuo backend endpoint e chiama:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
})
```

## 🎨 Customizzazione Avanzata

### Aggiungere Animazioni Personalizzate

**File:** `src/styles.css`

```css
@keyframes my-animation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-my-animation {
  animation: my-animation 0.6s ease-out forwards;
}
```

Poi usala nei tuoi componenti:
```tsx
<div className="animate-my-animation">
  Contenuto animato
</div>
```

### Aggiungere Nuove Sezioni

1. Crea un nuovo componente in `src/components/`:
```tsx
export function MySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Il tuo contenuto */}
      </div>
    </section>
  )
}
```

2. Importalo in `src/routes/index.tsx`:
```tsx
import { MySection } from '../components/MySection'

function App() {
  return (
    <main>
      <Hero />
      <MySection /> {/* Nuovo */}
      <About />
      {/* ... */}
    </main>
  )
}
```

### Aggiungere Nuove Rotte

1. Crea un file in `src/routes/`:
```tsx
// src/routes/blog.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

function Blog() {
  return <div>Il mio blog</div>
}
```

2. La rotta è automaticamente disponibile a `/blog`

## 🚀 Deploy

### Deploy su Vercel (Raccomandato)

1. Fai un push del tuo repository su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Clicca "New Project" e importa il repository
4. Vercel configurerà tutto automaticamente
5. Clicca "Deploy"

La tua app sarà live in pochi secondi! 🎉

**Dominio personalizzato:**
1. Vai a "Settings" nel progetto Vercel
2. Sezione "Domains"
3. Aggiungi il tuo dominio personalizzato

### Deploy su Netlify

1. Collegati a [netlify.com](https://netlify.com)
2. Collega il tuo GitHub
3. Seleziona il repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Clicca "Deploy"

### Deploy su GitHub Pages

1. Modifica `vite.config.ts`:
```typescript
export default {
  base: '/repository-name/',
  // ...
}
```

2. Crea workflow GitHub Actions `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📊 Ottimizzazione per il Deployment

### Build Ottimizzato

```bash
npm run build
```

Questo crea una cartella `dist/` pronta per il deployment.

### Analizzare le Dimensioni del Build

```bash
npm install -D rollup-plugin-visualizer
```

Poi aggiungi al `vite.config.ts`:
```typescript
import { visualizer } from 'rollup-plugin-visualizer'

export default {
  plugins: [
    visualizer({
      open: true,
    }),
  ],
}
```

### Misure di Performance

- Comprimi le immagini con [TinyPNG](https://tinypng.com)
- Usa WebP per le immagini modern browsers
- Implementa lazy loading
- Minifica CSS/JS (già fatto da Vite)

## 🔍 SEO Checklist

- [x] Meta tags nel `<head>`
- [x] Open Graph tags
- [x] Sitemap (aggiungi manualmente)
- [x] Mobile responsive
- [x] Fast loading
- [x] Schema markup (opzionale)

Per aggiungere una sitemap, crea `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tuodominio.com/</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://tuodominio.com/about</loc>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://tuodominio.com/projects</loc>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
```

## 🐛 Troubleshooting

### Porta 3000 è occupata?
```bash
npm run dev -- --port 3001
```

### Build fallisce?
```bash
# Pulisci la cache
rm -rf node_modules dist
npm install
npm run build
```

### Stile TailwindCSS non viene applicato?
Assicurati che il file CSS sia importato in `src/routes/__root.tsx`:
```tsx
import appCss from '../styles.css?url'
```

### Componenti non si caricano?
Verifica i path degli import e che i file esistono.

## 📚 Risorse Utili

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TanStack Router](https://tanstack.com/router)
- [Vite Guide](https://vitejs.dev/guide/)

## ❓ Hai Domande?

Se hai problemi o dubbi:
1. Controlla la sezione Troubleshooting
2. Leggi la documentazione dei tool usati
3. Chiedi nel community Discord/GitHub

## ✅ Checklist di Deploy

- [ ] Personalizzate le informazioni personali
- [ ] Aggiornati i progetti
- [ ] Testato il form di contatto
- [ ] Verificato il design su mobile
- [ ] Controllato i link social
- [ ] Build locale eseguito (`npm run build`)
- [ ] Performance testata con Lighthouse
- [ ] Dominio personalizzato configurato
- [ ] Analytics setup (Google Analytics)
- [ ] Deployed! 🎉

---

Buona fortuna con il tuo portfolio! 🚀

