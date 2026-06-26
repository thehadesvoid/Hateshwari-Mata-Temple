import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { useScrolled } from '../hooks/useScrolled'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brown/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-3">
          <span className="font-cinzel text-gold text-2xl" aria-hidden="true">🕉</span>
          <div className="leading-none">
            <span className="block font-cinzel text-cream text-sm tracking-[0.25em] uppercase">Mata Hateshwari</span>
            <span className="block font-cinzel text-gold/60 text-xs tracking-[0.3em] uppercase">Hatkoti Mandir</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNav(link.href)} className="font-cinzel text-xs tracking-widest text-cream/80 hover:text-gold transition-colors duration-200 uppercase">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => handleNav('#donate')} className="hidden md:block btn-primary text-xs" aria-label="Offer Seva">
          Offer Seva
        </button>

        <button className="md:hidden text-cream text-2xl p-2" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brown/98 backdrop-blur-md border-t border-gold/20"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNav(link.href)} className="font-cinzel text-sm tracking-widest text-cream/80 hover:text-gold transition-colors duration-200 uppercase w-full text-left">
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => handleNav('#donate')} className="btn-primary text-xs w-full justify-center mt-2">
                  Offer Seva
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
