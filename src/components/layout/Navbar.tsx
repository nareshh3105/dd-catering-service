'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaBars, FaTimes, FaLeaf } from 'react-icons/fa'
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
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-maroon-900/98 backdrop-blur-md shadow-xl shadow-maroon-900/30'
            : 'bg-gradient-to-b from-black/60 to-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-gold shrink-0"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)' }}
              >
                DD
              </div>
              <div className="hidden sm:block">
                <p className="font-playfair font-bold text-white text-sm leading-tight group-hover:text-gold-400 transition-colors">
                  {BUSINESS.name}
                </p>
                <p className="text-gold-400 text-xs font-medium leading-tight">{BUSINESS.nameTamil}</p>
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
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 mx-3 rounded-full bg-gold-500"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-white/70 text-xs">
                <FaLeaf className="text-green-400 text-xs" />
                <span>Pure Veg</span>
              </div>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 btn-gold text-xs py-2.5 px-5"
              >
                <FaPhone className="text-xs" />
                {BUSINESS.phoneFormatted}
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white transition-all hover:bg-white/20"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars />
                  </motion.span>
                )}
              </AnimatePresence>
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
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 right-0 bottom-0 w-80 max-w-full flex flex-col"
              style={{ background: 'linear-gradient(180deg, #4a0000 0%, #800000 50%, #5a0000 100%)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/15">
                <div>
                  <p className="font-playfair font-bold text-white text-lg">{BUSINESS.name}</p>
                  <p className="text-gold-400 text-sm">{BUSINESS.nameTamil}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 p-5 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                        pathname === link.href
                          ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                          : 'text-white/85 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-gold-400" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="p-5 space-y-3 border-t border-white/15">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center justify-center gap-2 w-full btn-gold"
                >
                  <FaPhone />
                  Call Now — {BUSINESS.phoneFormatted}
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm text-white"
                  style={{ background: '#25D366' }}
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Footer Info */}
              <div className="px-5 pb-6 text-center">
                <p className="text-white/40 text-xs">
                  Open 24 Hours · Pure Vegetarian · 4.8★ Rated
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
