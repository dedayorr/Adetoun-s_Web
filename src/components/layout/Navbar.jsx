import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Media', to: '/media' },
  { label: 'Books', to: '/books-resources' },
  { label: 'Speaking', to: '/speaking' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
            <span className="font-accent text-gold tracking-[0.2em] text-xs uppercase group-hover:text-amber-brand transition-colors duration-300">
              Esther Adetoun
            </span>
            <span className="font-display text-white text-xl leading-tight tracking-wide">
              Adeyeye
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `nav-link relative pb-1 ${
                    isActive
                      ? 'text-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gold'
                      : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/pray-with-adetoun"
            className="hidden lg:inline-flex btn-primary text-[11px]"
          >
            Join Prayer
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white hover:text-gold transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-navy transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 noise-texture" />
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold via-amber-brand to-rust" />

        <div className="relative h-full flex flex-col px-10 py-8">
          <div className="flex justify-between items-center">
            <span className="font-accent text-gold tracking-[0.2em] text-xs uppercase">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col justify-center flex-1 gap-2">
            {navItems.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-4xl py-3 border-b border-white/5 transition-all duration-200 ${
                    isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`
                }
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/pray-with-adetoun"
            onClick={() => setOpen(false)}
            className="btn-primary self-start"
          >
            Join Prayer Watch
          </Link>
        </div>
      </div>
    </>
  )
}
