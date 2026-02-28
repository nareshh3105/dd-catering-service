'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeader from '@/components/shared/SectionHeader'

const highlights = [
  { emoji: '🍚', name: 'Elai Sapad', desc: 'Grand banana leaf feast', tag: 'Signature' },
  { emoji: '🍮', name: 'Mysore Pak', desc: 'Ghee-rich gram flour sweet', tag: 'Popular' },
  { emoji: '🫓', name: 'Kuzhi Paniyaram', desc: 'Crispy fermented rice balls', tag: 'Traditional' },
  { emoji: '🍛', name: 'Vegetable Biryani', desc: 'Fragrant basmati with veggies', tag: 'Bestseller' },
  { emoji: '🥣', name: 'Payasam', desc: 'Traditional jaggery kheer', tag: 'Festive' },
  { emoji: '🫔', name: 'Adai Avial', desc: 'Lentil crepe with stew', tag: 'Heritage' },
  { emoji: '🍯', name: 'Kesari', desc: 'Saffron semolina dessert', tag: 'Sweet' },
  { emoji: '🥘', name: 'Sambar Rice', desc: 'Aromatic lentil rice stew', tag: 'Classic' },
]

const tagColors: Record<string, string> = {
  Signature: 'bg-maroon-50 text-maroon-600 border-maroon-200',
  Popular: 'bg-orange-50 text-orange-600 border-orange-200',
  Traditional: 'bg-amber-50 text-amber-700 border-amber-200',
  Bestseller: 'bg-green-50 text-green-700 border-green-200',
  Festive: 'bg-purple-50 text-purple-600 border-purple-200',
  Heritage: 'bg-rose-50 text-rose-600 border-rose-200',
  Sweet: 'bg-pink-50 text-pink-600 border-pink-200',
  Classic: 'bg-blue-50 text-blue-600 border-blue-200',
}

export default function MenuHighlights() {
  return (
    <section
      className="section-padding text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2a0000 0%, #800000 50%, #4a0000 100%)' }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, rgba(212,175,55,0.6) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(212,175,55,0.6) 2px, transparent 0)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Our Specialties"
          title="Featured Menu"
          titleHighlight="Highlights"
          subtitle="A curated selection of our most beloved traditional dishes. Every item crafted with premium ingredients and authentic Tamil recipes."
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-4 border border-white/15 hover:bg-white/15 hover:border-gold-500/40 transition-all duration-300 cursor-default"
            >
              {/* Tag */}
              <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full border font-medium ${tagColors[item.tag] || 'bg-white/10 text-white border-white/20'}`}>
                {item.tag}
              </span>

              {/* Emoji */}
              <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:animate-float inline-block">
                {item.emoji}
              </div>

              <h3 className="font-playfair font-semibold text-white text-sm md:text-base mb-1 leading-tight">
                {item.name}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm mb-5">
            Explore our full menu with 50+ vegetarian dishes across 6 categories
          </p>
          <Link href="/menu" className="btn-gold">
            View Full Menu <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
