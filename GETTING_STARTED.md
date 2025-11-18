# 🚀 Guida Veloce - Inizia Subito!

Benvenuto! In 10 minuti avrai il tuo portfolio online e bellissimo.

## ⏱️ Step 1: Installazione (2 minuti)

```bash
# Entra nella cartella del progetto
cd /Users/giusepperusso/Desktop/Projects/giuseppe-portfolio

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri il browser a **`http://localhost:3000`** 🎉

## ✏️ Step 2: Personalizzazione (5 minuti)

### Modifica il tuo nome e descrizione

Apri `src/data/portfolio.ts`:

```typescript
export const PORTFOLIO_CONFIG = {
  personal: {
    fullName: 'Cambia in: Il Tuo Nome',
    title: 'Cambia in: Il Tuo Titolo',
    email: 'cambia@example.com',
    // ... continua
  },
}
```

### Modifica il testo della Hero

Apri `src/components/Hero.tsx`:

```typescript
const fullText = 'Cambia questo testo con la tua presentazione!'
```

### Aggiungi i tuoi social link

Sempre in `src/data/portfolio.ts`:

```typescript
social: {
  github: 'https://github.com/il-tuo-username',
  linkedin: 'https://linkedin.com/in/il-tuo-username',
  twitter: 'https://twitter.com/il-tuo-username',
}
```

## 🎨 Step 3: Aggiungi i Tuoi Progetti (3 minuti)

Apri `src/components/Projects.tsx` e modifica l'array `PROJECTS`:

```typescript
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nome del Tuo Progetto',
    description: 'Descrizione breve',
    image: 'https://images.unsplash.com/...', // URL immagine
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/...',
    demo: 'https://project-demo.com',
    color: 'from-blue-500', // Colore theme
  },
  // Aggiungi altri progetti...
]
```

## ✅ Verifica il Risultato

Torna al browser e vedi il risultato in tempo reale!

- Il sito si aggiorna automaticamente quando salvi i file
- Controlla da mobile o tablet per il responsive design

## 🚢 Step 4: Deploy Online

### Opzione A: Vercel (Consigliato - 1 click)

1. Fai un push su GitHub
2. Vai a [vercel.com](https://vercel.com)
3. Clicca "Import Project"
4. Seleziona il repository
5. Clicca "Deploy" ✨

Il tuo portfolio è online in 30 secondi!

### Opzione B: Netlify

1. Push su GitHub
2. Vai a [netlify.com](https://netlify.com)
3. Collega il repository
4. Deploy automatico ✨

### Opzione C: GitHub Pages

```bash
# Build per il deploy
npm run build

# Segui le istruzioni su GitHub Pages
```

## 🎯 Checklist Finale

- [ ] Ho installato le dipendenze
- [ ] Ho personalizzato i miei dati
- [ ] Ho aggiunto i miei progetti
- [ ] Ho visto il sito che gira localmente
- [ ] Ho deployato online
- [ ] Ho condiviso il link con gli amici

## 💡 Cose da Sapere

### File Importanti da Modificare

| File                          | Cosa Modificare        |
| ----------------------------- | ---------------------- |
| `src/data/portfolio.ts`       | Dati personali, social |
| `src/components/Hero.tsx`     | Testo presentazione    |
| `src/components/Projects.tsx` | Progetti principali    |
| `src/components/Footer.tsx`   | Link social nel footer |
| `src/styles.css`              | Colori e animazioni    |

### Comandi Utili

```bash
npm run dev       # Avvia in sviluppo
npm run build     # Build per produzione
npm run serve     # Preview del build
npm run lint      # Controlla codice
npm run check     # Formatta + lint
```

### Colori Principal

Puoi cambiarli in `src/styles.css`:

- `from-blue-500` - Blu primario
- `to-purple-600` - Viola secondario
- `from-pink-500` - Rosa accento

## 🎓 Prossimi Step Opzionali

Dopo aver completato i passi base:

1. **Aggiungi Google Analytics**
   - Traccia visite e comportamento utenti
2. **Migliora il Form di Contatto**
   - Integra Formspree o EmailJS
   - Ricevi email dai visitatori

3. **Aggiungi un Blog**
   - Scrivi articoli sui tuoi progetti
   - Migliora la SEO

4. **Personalizza il Design**
   - Cambia i colori
   - Aggiungi animazioni custom

5. **Aggiungi Dark Mode**
   - Toggle tra light/dark theme

## ❓ Domande Comuni

**Q: Quando salvo, il browser non si aggiorna?**
A: Ricarica la pagina manualmente (Cmd+R o F5)

**Q: Come aggiungo immagini ai miei progetti?**
A: Usa URL di immagini da servizi come:

- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- O carica sul tuo server

**Q: Posso cambiare i colori?**
A: Sì! Modifica `src/styles.css` o usa i colori TailwindCSS

**Q: Come faccio il deploy?**
A: Usa Vercel (più facile), Netlify, o GitHub Pages

**Q: Il sito non carica correttamente?**
A: Cancella la cache del browser (Cmd+Shift+Delete)

## 🆘 Troubleshooting Veloce

### "Errore: porta già in uso"

```bash
npm run dev -- --port 3001
```

### "Import errors"

```bash
rm -rf node_modules dist
npm install
npm run dev
```

### "Stile non si applica"

- Controlla l'import di `styles.css` in `__root.tsx`
- Riavvia il dev server

### "Build fallisce"

```bash
npm run check  # Formatta e linta il codice
npm run build  # Prova di nuovo
```

## 🎉 Sei Pronto!

Se hai completato tutti i step, il tuo portfolio è online e bello!

**Prossimo passo:** Condividilo con il mondo! 🌍

---

**Hai bisogno di aiuto?**

- Leggi `README_PORTFOLIO.md` per la documentazione completa
- Leggi `INSTALLATION.md` per setup avanzato
- Leggi `TIPS_AND_TRICKS.md` per migliamenti

**Fatto bene, Giuseppe! 🚀**
