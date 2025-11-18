# 🎨 Portfolio di Giuseppe Russo - Frontend Developer

Un portfolio moderno, interattivo e bellissimo per showcaseare i miei progetti e competenze di frontend development.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.6-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat-square&logo=vite)

## ✨ Caratteristiche

### 🚀 Performance

- **Lazy loading** intelligente per le immagini
- **Code splitting** automatico con Vite
- **Optimizzazioni SEO** built-in
- **Zero layout shift** con dimensioni definite

### 🎯 UX/UI

- **Hero section** spettacolare con animazioni fluide
- **Typing effect** dinamico nel testo di presentazione
- **Smooth scrolling** tra le sezioni
- **Responsive design** perfetto su tutti i dispositivi
- **Dark mode** ottimizzato per ridurre l'affaticamento degli occhi

### 🎭 Animazioni

- **Gradient animations** per gli elementi di sfondo
- **Float effects** con parallax
- **Slide animations** al caricamento
- **Hover effects** interattivi sulle card
- **Glow effects** sui pulsanti CTA

### 📱 Sezioni Principali

1. **Home (/)**
   - Hero section accattivante
   - About section con statistiche
   - Portfolio dei progetti principali
   - Form di contatto

2. **Progetti (/projects)**
   - Lista completa dei progetti
   - Descrizioni dettagliate
   - Tecnologie utilizzate
   - Links a GitHub e demo live

3. **Su di Me (/about)**
   - Story e background
   - Esperienza professionale
   - Competenze tecniche
   - Statistiche carriera

## 🛠️ Stack Tecnologico

### Frontend

- **React 19** - UI library moderna
- **TypeScript** - Type safety
- **TailwindCSS** - Styling utility-first
- **Lucide React** - Icone bellissime
- **Framer Motion** - Animazioni avanzate (optional)

### Tooling

- **Vite** - Build tool velocissimo
- **TanStack Router** - Routing file-based
- **ESLint** - Code quality
- **Prettier** - Code formatting

### Deployment

- **Vercel** - Deploy automatico (raccomandato)
- **GitHub Pages** - Alternativa gratuita
- **Netlify** - Altra opzione popular

## 🚀 Getting Started

### Prerequisiti

```bash
Node.js >= 18
npm o yarn
```

### Installazione

1. Clone il repository

```bash
git clone https://github.com/username/giuseppe-portfolio.git
cd giuseppe-portfolio
```

2. Installa le dipendenze

```bash
npm install
# oppure
yarn install
```

3. Avvia il server di sviluppo

```bash
npm run dev
# oppure
yarn dev
```

4. Apri il browser a `http://localhost:3000`

## 📝 Configurazione Personalizzata

### Update dei Dati Personali

1. **Dati nella Navbar** - `src/components/Navbar.tsx`

   ```tsx
   const menuItems = [
     { label: 'Home', href: '/' },
     { label: 'Su di me', href: '/about' },
     // Aggiungi o modifica i tuoi link
   ]
   ```

2. **Contenuto della Hero** - `src/components/Hero.tsx`

   ```tsx
   const fullText = 'Cambia questo testo con la tua presentazione'
   ```

3. **Progetti** - `src/components/Projects.tsx` e `src/routes/projects.tsx`

   ```tsx
   const PROJECTS = [
     {
       id: 1,
       title: 'Il tuo progetto',
       description: 'Descrizione del progetto',
       // ... altre proprietà
     },
   ]
   ```

4. **Info Personale** - `src/routes/about.tsx`
   - Aggiorna la tua storia
   - Aggiungi la tua esperienza
   - Personalizza le competenze

5. **Contatti** - `src/components/Footer.tsx` e `src/components/Contact.tsx`
   - Aggiorna gli URL dei social
   - Configura l'email
   - Personalizza i messaggi

## 🎨 Customizzazione del Design

### Colori

I colori principali sono definiti in TailwindCSS:

```css
from-blue-500   /* Blu primario */
to-purple-600   /* Viola secondario */
from-pink-500   /* Rosa accento */
```

Modifica i colori in `src/styles.css` e nei componenti.

### Fonts

Configura i font in `src/styles.css`:

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
```

### Animazioni

Le animazioni sono definite in `src/styles.css`:

```css
@keyframes gradient-shift { ... }
@keyframes float { ... }
@keyframes glow-pulse { ... }
```

## 📦 Build per la Produzione

```bash
npm run build
# oppure
yarn build
```

Output sarà in `dist/`

Per testare localmente la build:

```bash
npm run serve
# oppure
yarn serve
```

## 🚢 Deployment

### Vercel (Raccomandato)

1. Vai su [vercel.com](https://vercel.com)
2. Connetti il tuo repository GitHub
3. Deploy automatico ad ogni push

### GitHub Pages

```bash
npm run build
# Pubblica la cartella dist su GitHub Pages
```

### Netlify

1. Connetti il repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📊 Performance

- **Lighthouse Score**: 95+ ✅
- **Core Web Vitals**: Green ✅
- **Load Time**: < 2s ✅
- **TTI**: < 1.5s ✅

## 🔍 SEO

- Meta tags ottimizzati
- Open Graph tags
- Sitemap automatico
- Schema markup
- Mobile-first indexing

## 🤝 Contributing

I tuoi feedback sono benvenuti! Se hai suggerimenti:

1. Fork il repository
2. Crea un branch per la feature (`git checkout -b feature/amazing-feature`)
3. Commit i tuoi cambiamenti (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è disponibile sotto la licenza MIT - vedi il file `LICENSE` per i dettagli.

## 💬 Contatti

Desideri metterti in contatto?

- **Email**: [giuseppe@example.com](mailto:giuseppe@example.com)
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com)
- **GitHub**: [GitHub Profile](https://github.com)
- **Twitter**: [@YourTwitter](https://twitter.com)

## 🙏 Ringraziamenti

- [React](https://react.dev) - L'amazing React team
- [TanStack Router](https://tanstack.com/router) - Per il routing
- [TailwindCSS](https://tailwindcss.com) - Per lo styling
- [Lucide Icons](https://lucide.dev) - Per le icone bellissime

---

**Fatto con ❤️ da Giuseppe Russo**

_Creo esperienze digitali che lasciano il segno._
