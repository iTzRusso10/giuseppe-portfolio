import { Link, useNavigate } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    // Naviga alla home e poi scrollla a contact
    navigate({ to: '/' }).then(() => {
      setTimeout(() => {
        const element = document.querySelector('#contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    })
  }

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Su di me', href: '/about' },
    { label: 'Progetti', href: '/projects' },
    { label: 'Contatti', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-b from-slate-900 to-transparent backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline">
              Giuseppe
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => {
              const isHashLink = item.href.startsWith('#')
              return isHashLink ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleContactClick}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
            >
              Lavoriamo insieme
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => {
              const isHashLink = item.href.startsWith('#')
              return isHashLink ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  onClick={handleContactClick}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <a
              href="#contact"
              className="block px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-lg font-medium cursor-pointer"
              onClick={handleContactClick}
            >
              Lavoriamo insieme
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
