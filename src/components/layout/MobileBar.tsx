'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

export default function MobileBar() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=Hello%20DD%20Catering%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20catering%20services.`

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      {/* Top accent line */}
      <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #D4AF37, #F5D060, #D4AF37)' }} />

      <div
        className="flex items-stretch"
        style={{ background: 'linear-gradient(180deg, #2a0000, #1C0505)' }}
      >
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white/90 hover:bg-white/10 active:bg-white/15 transition-colors border-r border-white/10"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)' }}
          >
            <FaPhone className="text-xs text-white" />
          </div>
          <span className="text-xs font-semibold text-gold-400">Call Now</span>
        </a>

        {/* Get Quote - Center (Larger) */}
        <Link
          href="/contact"
          className="flex-[1.4] flex flex-col items-center justify-center py-2 gap-1 text-white transition-colors relative"
          style={{ background: 'linear-gradient(135deg, #800000, #a00000)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg -mt-5"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #F5D060, #B8960C)' }}
          >
            <FaCalendarAlt className="text-sm text-maroon-900" />
          </div>
          <span className="text-xs font-bold text-white">Get Free Quote</span>
        </Link>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white/90 hover:bg-white/10 active:bg-white/15 transition-colors border-l border-white/10"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: '#25D366' }}
          >
            <FaWhatsapp className="text-sm text-white" />
          </div>
          <span className="text-xs font-semibold text-green-400">WhatsApp</span>
        </a>
      </div>

      {/* Safe area spacing for iPhones */}
      <div className="h-safe-area-inset-bottom" style={{ background: '#1C0505' }} />
    </motion.div>
  )
}
