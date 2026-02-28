'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { BUSINESS } from '@/lib/constants'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=Hello%20DD%20Catering%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20catering%20services%20for%20my%20event.`

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-8 md:right-6 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                style={{ background: 'linear-gradient(135deg, #800000, #a00000)' }}
              >
                DD
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">DD Catering Services</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Typically replies instantly
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-700">
                👋 Hello! How can we help you? Get a free quote for your event catering today!
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: '#25D366' }}
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all"
        style={{
          background: isOpen ? '#6B7280' : '#25D366',
          animation: isOpen ? 'none' : 'pulseGold 2s ease-in-out infinite',
        }}
        aria-label="Chat on WhatsApp"
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
              <FaTimes className="text-xl" />
            </motion.span>
          ) : (
            <motion.span
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaWhatsapp className="text-2xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
