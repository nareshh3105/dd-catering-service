'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaGoogle } from 'react-icons/fa'
import { REVIEWS, BUSINESS } from '@/lib/constants'
import SectionHeader from '@/components/shared/SectionHeader'

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(goNext, 4500)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isAutoPlay, currentIndex])

  const visibleReviews = () => {
    const indices = []
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % REVIEWS.length)
    }
    return indices
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Google Reviews"
          title="What Our Clients"
          titleHighlight="Say About Us"
          subtitle={`Rated ${BUSINESS.rating}★ by ${BUSINESS.reviewCount}+ satisfied customers across Chennai. Real reviews from real events.`}
        />

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6 mb-12 flex-wrap"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1,2,3,4,5].map((s) => (
                <FaStar key={s} className="text-gold-500 text-xl" />
              ))}
            </div>
            <p className="font-playfair font-bold text-5xl text-maroon-700">{BUSINESS.rating}</p>
            <p className="text-gray-500 text-sm mt-1">{BUSINESS.reviewCount} Reviews</p>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <FaGoogle className="text-maroon-500 text-2xl" />
            <div>
              <p className="font-semibold text-gray-800">Google Business</p>
              <p className="text-gray-500 text-sm">Verified Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Desktop: 3-card carousel */}
        <div
          className="hidden md:grid grid-cols-3 gap-6 mb-8"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {visibleReviews().map((reviewIdx, pos) => {
            const review = REVIEWS[reviewIdx]
            const isCenter = pos === 0
            return (
              <motion.div
                key={reviewIdx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl p-6 transition-all duration-300 ${
                  isCenter
                    ? 'border-2 shadow-xl scale-105'
                    : 'border shadow-sm opacity-75 hover:opacity-100'
                }`}
                style={{
                  borderColor: isCenter ? '#D4AF37' : '#f0e6c8',
                  background: isCenter
                    ? 'linear-gradient(135deg, #fff8e7 0%, #ffffff 100%)'
                    : '#ffffff',
                }}
              >
                {isCenter && (
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white shadow"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)' }}
                  >
                    ⭐ Featured
                  </div>
                )}

                <FaQuoteLeft className="text-gold-300 text-2xl mb-4" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="text-gold-500 text-sm" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #800000, #a00000)' }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: single card */}
        <div
          className="md:hidden mb-8"
          onTouchStart={() => setIsAutoPlay(false)}
          onTouchEnd={() => setIsAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl p-6 border-2 shadow-xl"
              style={{
                borderColor: '#D4AF37',
                background: 'linear-gradient(135deg, #fff8e7 0%, #ffffff 100%)',
              }}
            >
              <FaQuoteLeft className="text-gold-300 text-2xl mb-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: REVIEWS[currentIndex].rating }).map((_, i) => (
                  <FaStar key={i} className="text-gold-500 text-sm" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                &ldquo;{REVIEWS[currentIndex].text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg, #800000, #a00000)' }}
                >
                  {REVIEWS[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{REVIEWS[currentIndex].name}</p>
                  <p className="text-gray-500 text-xs">{REVIEWS[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => { goPrev(); setIsAutoPlay(false) }}
            className="w-10 h-10 rounded-full border-2 border-gold-300 text-gold-600 flex items-center justify-center hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setIsAutoPlay(false) }}
                className={`rounded-full transition-all ${
                  i === currentIndex ? 'w-6 h-2.5 bg-gold-500' : 'w-2.5 h-2.5 bg-gold-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => { goNext(); setIsAutoPlay(false) }}
            className="w-10 h-10 rounded-full border-2 border-gold-300 text-gold-600 flex items-center justify-center hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  )
}
