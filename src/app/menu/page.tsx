'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaLeaf } from 'react-icons/fa'
import { MENU_CATEGORIES } from '@/lib/constants'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Breakfast')

  const currentCategory = MENU_CATEGORIES.find((c) => c.category === activeCategory)

  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0505 0%, #800000 60%, #4a0000 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(212,175,55,0.6) 2px, transparent 0)', backgroundSize: '80px 80px' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
            <FaLeaf className="text-green-400" /> Pure Vegetarian Menu
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Our Authentic
            <span className="block text-gold-shimmer">Vegetarian Menu</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            50+ authentic pure vegetarian dishes across 6 categories — crafted with traditional recipes,
            premium ingredients, and the warmth of Tamil culinary heritage.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #FFFDF5 0%, #fff8e7 100%)' }}>
        <div className="container-custom">

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.category
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gold-300 hover:text-gold-700'
                }`}
                style={
                  activeCategory === cat.category
                    ? { background: 'linear-gradient(135deg, #800000, #a00000)', boxShadow: '0 4px 15px rgba(128,0,0,0.3)' }
                    : {}
                }
              >
                <span>{cat.icon}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <AnimatePresence mode="wait">
            {currentCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <span className="text-4xl">{currentCategory.icon}</span>
                  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-maroon-800 mt-2">
                    {currentCategory.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {currentCategory.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-gold-100 hover:border-gold-300 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                      {/* Hover top accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                        style={{ background: 'linear-gradient(90deg, #D4AF37, #F5D060, #B8960C)' }}
                      />

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{currentCategory.icon}</span>
                        <span className="w-2 h-2 rounded-full bg-green-400 shadow" title="Pure Veg" />
                      </div>

                      <h3 className="font-playfair font-semibold text-maroon-800 text-base mb-1.5 group-hover:text-maroon-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {item.description}
                      </p>

                      {/* Veg indicator */}
                      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-50">
                        <span className="w-3 h-3 border border-green-500 rounded-sm flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        </span>
                        <span className="text-green-600 text-xs font-medium">Pure Vegetarian</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Custom Menu CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto p-8 rounded-3xl border-2 border-gold-200"
              style={{ background: 'linear-gradient(135deg, #fff8e7 0%, #ffffff 100%)' }}>
              <p className="text-3xl mb-4">🍽️</p>
              <h3 className="font-playfair font-bold text-maroon-800 text-2xl mb-3">
                Want a Custom Menu?
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Our menu is fully customizable! Mix and match dishes across categories, add your
                regional favorites, or create an entirely bespoke menu for your event. Contact us
                to discuss your preferences.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-maroon">
                  Customize Menu <FaArrowRight className="text-xs" />
                </Link>
                <a href="tel:08939615333" className="btn-outline-gold">
                  Call for Menu Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Note section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 flex-wrap text-center text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 border border-green-500 rounded-sm flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </span>
              All items are 100% vegetarian
            </span>
            <span>•</span>
            <span>🧄 No onion/garlic options available on request</span>
            <span>•</span>
            <span>💰 Custom pricing based on guest count & menu</span>
            <span>•</span>
            <span>📋 Jain-friendly options available</span>
          </div>
        </div>
      </section>
    </div>
  )
}
