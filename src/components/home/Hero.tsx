'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaStar, FaChevronDown } from 'react-icons/fa'
import { BUSINESS } from '@/lib/constants'

export default function Hero() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=Hello%20DD%20Catering%20Services%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20event.`

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&q=85"
          alt="DD Catering Services - Pure Vegetarian South Indian Feast"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(20,2,2,0.6) 0%, rgba(60,0,0,0.55) 40%, rgba(20,2,2,0.88) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="max-w-2xl mx-auto text-center">

          {/* Rating pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(212,175,55,0.12)',
              border: '1px solid rgba(212,175,55,0.3)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <FaStar className="text-gold-400 text-xs" />
            <span className="text-gold-300 text-xs font-medium">
              {BUSINESS.rating}★ Rated · {BUSINESS.reviewCount}+ Reviews · Pure Veg
            </span>
          </motion.div>

          {/* Tamil name */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-gold-400/80 text-base md:text-lg mb-3 tracking-wide"
          >
            {BUSINESS.nameTamil}
          </motion.p>

          {/* Main Heading — simplified */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-playfair font-bold text-white leading-[1.15] mb-6"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl block">Pure Veg Catering</span>
            <span className="text-gold-shimmer text-3xl sm:text-4xl md:text-5xl block mt-2">Authentic Taste &amp; Tradition</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6))' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.6), transparent)' }} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto"
          >
            Weddings · Engagements · Receptions · Housewarmings
            <br />
            <span className="text-white/40 text-xs">Poonamallee, Chennai</span>
          </motion.p>

          {/* CTA Buttons — just 2 main ones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5D060 50%, #B8960C 100%)',
                color: '#1C0505',
                boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
              }}
            >
              <FaPhone className="text-xs" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-0.5 border border-white/25 hover:border-white/40"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
            >
              Get Free Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FaChevronDown className="text-gold-500/60 text-sm" />
        </motion.div>
      </motion.div>
    </section>
  )
}
