'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaCalendarAlt, FaStar, FaLeaf, FaClock, FaChevronDown } from 'react-icons/fa'
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
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(28,5,5,0.75) 0%, rgba(80,0,0,0.7) 40%, rgba(28,5,5,0.92) 100%)',
          }}
        />
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, rgba(212,175,55,0.5) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(212,175,55,0.5) 2px, transparent 0)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-24 pb-20 md:pt-28 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
            style={{
              background: 'rgba(212,175,55,0.12)',
              borderColor: 'rgba(212,175,55,0.4)',
            }}
          >
            <FaLeaf className="text-green-400 text-xs" />
            <span className="text-gold-300 text-xs font-semibold tracking-widest uppercase">
              Pure Vegetarian Catering
            </span>
            <FaLeaf className="text-green-400 text-xs" />
          </motion.div>

          {/* Business Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-gold-400 text-lg md:text-xl mb-2 tracking-wide"
          >
            {BUSINESS.nameTamil}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-playfair font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Pure Veg Catering
            <br />
            <span className="text-gold-shimmer inline-block">Authentic Taste</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-normal italic text-white/85">
              &amp; Tradition
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/80 text-base md:text-lg leading-relaxed mb-3 max-w-xl mx-auto"
          >
            One of the <span className="text-gold-400 font-semibold">best pure veg catering services</span> in
            Poonamallee, Chennai — serving weddings, engagements, receptions &amp; housewarmings with
            authentic South Indian flavors.
          </motion.p>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-white/50 text-sm mb-8"
          >
            📍 Poonamallee, Chennai · Tamil Nadu
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn-gold flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
            >
              <FaPhone />
              Call Now
            </a>
            <Link
              href="/contact"
              className="btn-maroon flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
            >
              <FaCalendarAlt />
              Get Free Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#25D366', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              <FaWhatsapp className="text-base" />
              WhatsApp
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { icon: <FaStar className="text-gold-400 text-xs" />, text: `${BUSINESS.rating}★ Rated (${BUSINESS.reviewCount}+ reviews)` },
              { icon: <FaLeaf className="text-green-400 text-xs" />, text: '100% Pure Vegetarian' },
              { icon: <FaClock className="text-gold-400 text-xs" />, text: 'Available 24 Hours' },
            ].map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium text-white/80"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaChevronDown className="text-gold-500 text-lg" />
        </motion.div>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-20 left-4 md:left-8 w-12 h-12 opacity-30"
        style={{ borderTop: '2px solid #D4AF37', borderLeft: '2px solid #D4AF37' }} />
      <div className="absolute top-20 right-4 md:right-8 w-12 h-12 opacity-30"
        style={{ borderTop: '2px solid #D4AF37', borderRight: '2px solid #D4AF37' }} />
      <div className="absolute bottom-16 left-4 md:left-8 w-12 h-12 opacity-30"
        style={{ borderBottom: '2px solid #D4AF37', borderLeft: '2px solid #D4AF37' }} />
      <div className="absolute bottom-16 right-4 md:right-8 w-12 h-12 opacity-30"
        style={{ borderBottom: '2px solid #D4AF37', borderRight: '2px solid #D4AF37' }} />
    </section>
  )
}
