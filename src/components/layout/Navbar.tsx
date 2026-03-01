'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaTimes, FaLeaf } from 'react-icons/fa'
import { NAV_LINKS, BUSINESS } from '@/lib/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-maroon-900/95 backdrop-blur-lg shadow-lg'
            : 'bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)', boxShadow: '0 2px 10px rgba(212,175,55,0.4)' }}
              >
                DD
              </div>
              <div className="hidden sm:block">
                <p className="font-playfair font-bold text-white text-sm leading-tight">
                  {BUSINESS.name}
                </p>
                <p className="text-gold-400/80 text-[11px] font-medium">{BUSINESS.nameTamil}</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-gold-400'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold-500"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-white/60 text-xs">
                <FaLeaf className="text-green-400 text-[10px]" />
                <span>Pure Veg</span>
              </div>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-gold text-xs py-2 px-5"
              >
                <FaPhone className="text-[10px]" />
                {BUSINESS.phoneFormatted}
              </a>
            </div>

            {/* Mobile Hamburger — custom CSS lines for perfect alignment */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 active:bg-white/20 transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              <div className="w-[18px] flex flex-col items-center gap-[5px]">
                <span className={`block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-3 h-[2px] bg-gold-400 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 right-0 bottom-0 w-[280px] max-w-[85vw] flex flex-col"
              style={{ background: 'linear-gradient(180deg, #3a0000 0%, #600000 50%, #3a0000 100%)' }}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div>
                  <p className="font-playfair font-bold text-white text-base">{BUSINESS.name}</p>
                  <p className="text-gold-400/70 text-xs">{BUSINESS.nameTamil}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              <nav className="flex-1 py-4 px-4 space-y-0.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        pathname === link.href
                          ? 'bg-gold-500/15 text-gold-400 border border-gold-500/25'
                          : 'text-white/80 hover:bg-white/8'
                      }`}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-4 space-y-2 border-t border-white/10">
                <a href={`tel:${BUSINESS.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)', color: '#1C0505' }}>
                  <FaPhone className="text-xs" /> Call — {BUSINESS.phoneFormatted}
                </a>
                <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm text-white"
                  style={{ background: '#25D366' }}>
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              <div className="px-4 pb-5 text-center">
                <p className="text-white/30 text-[11px]">Open 24 Hours · Pure Veg · 4.8★</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
