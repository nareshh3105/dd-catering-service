'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaTimes, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa'
import { GALLERY_IMAGES } from '@/lib/constants'

const categories = ['All', 'Food', 'Events', 'Sweets', 'Decor']

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeFilter === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter)

  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null))
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null))

  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2a0000 0%, #800000 60%, #1C0505 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(212,175,55,0.6) 2px, transparent 0)', backgroundSize: '80px 80px' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
            Photo Gallery
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Our Culinary
            <span className="block text-gold-shimmer">Showcase</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            A visual journey through our food, events, and celebrations. Every image tells the story
            of flavors crafted with love and tradition.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #FFFDF5 0%, #fff8e7 100%)' }}>
        <div className="container-custom">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gold-300'
                }`}
                style={
                  activeFilter === cat
                    ? { background: 'linear-gradient(135deg, #800000, #a00000)' }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence>
              {filtered.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4"
                    style={{ background: 'linear-gradient(to top, rgba(28,5,5,0.8) 0%, transparent 60%)' }}
                  >
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-white shadow"
                      style={{ background: 'rgba(212,175,55,0.85)' }}>
                      {img.category}
                    </span>
                    <p className="text-white text-xs text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-14">
            <h3 className="font-playfair font-bold text-maroon-800 text-2xl mb-3">
              Impressed by Our Work?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Book us for your event and let us create beautiful memories together.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-maroon">
                Book Your Event <FaArrowRight className="text-xs" />
              </Link>
              <a href="tel:08939615333" className="btn-outline-gold">
                Call for Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain rounded-2xl"
                sizes="90vw"
              />
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 hover:bg-gray-100 transition-colors"
              >
                <FaTimes />
              </button>
              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 hover:bg-gray-100 transition-colors"
              >
                <FaChevronLeft />
              </button>
              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-800 hover:bg-gray-100 transition-colors"
              >
                <FaChevronRight />
              </button>
              {/* Caption */}
              <div className="absolute -bottom-10 left-0 right-0 text-center">
                <p className="text-white/60 text-sm">{filtered[lightboxIndex].alt}</p>
                <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
