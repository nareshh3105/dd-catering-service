'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { BUSINESS } from '@/lib/constants'

const highlights = [
  'Authentic South Indian vegetarian recipes',
  'FSSAI certified, hygienic kitchen standards',
  'Experienced chefs with 10+ years expertise',
  'Serving 500+ events across Chennai',
  'Custom menus for every occasion & budget',
  'Neat, uniformed, and courteous staff',
]

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80"
                alt="DD Catering Services - Traditional South Indian cooking"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay accent */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(135deg, #800000 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)' }}
              >
                {BUSINESS.rating}
              </div>
              <div>
                <p className="font-bold text-maroon-700 text-sm">Google Rating</p>
                <p className="text-gray-500 text-xs">{BUSINESS.reviewCount}+ happy clients</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-4 md:-left-6 bg-maroon-600 rounded-2xl shadow-xl p-4"
            >
              <p className="text-white font-bold text-lg leading-none">500+</p>
              <p className="text-white/70 text-xs">Events Catered</p>
            </motion.div>

            {/* Gold border accent */}
            <div
              className="absolute -bottom-3 -left-3 w-full h-full rounded-3xl -z-10"
              style={{ border: '2px solid rgba(212,175,55,0.3)' }}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.3)',
                color: '#B8960C',
              }}
            >
              About Us
            </span>

            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-maroon-800 mb-4 leading-tight">
              Trusted Pure Veg Catering
              <span className="block text-gold-shimmer">in Poonamallee</span>
            </h2>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
              <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong className="text-maroon-700">DD Catering Services</strong> is one of the most trusted pure
              vegetarian catering services in Poonamallee circle, Chennai. We bring authentic South Indian
              flavors to your most cherished life events.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From elaborate wedding sadyas to intimate housewarming meals — our dedicated team of expert chefs
              prepares every dish with premium ingredients, traditional recipes, and heartfelt hospitality.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <FaCheckCircle className="text-gold-500 mt-0.5 shrink-0 text-sm" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-maroon">
                Our Story <FaArrowRight className="text-xs" />
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn-outline-gold">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
