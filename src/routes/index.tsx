import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
