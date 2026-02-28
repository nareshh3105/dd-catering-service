'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { WHY_CHOOSE_US } from '@/lib/constants'
import SectionHeader from '@/components/shared/SectionHeader'

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff8e7 0%, #FFFDF5 100%)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, rgba(212,175,55,0.12) 2px, transparent 0)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Why Us"
          title="Why Choose"
          titleHighlight="DD Catering?"
          subtitle="We don't just serve food — we create memorable dining experiences that reflect the warmth and traditions of Tamil culture."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gold-100 hover:border-gold-300 relative overflow-hidden"
            >
              {/* Hover accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, #D4AF37, #F5D060, #B8960C)' }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.05) 100%)',
                  border: '1px solid rgba(212,175,55,0.3)',
                }}
              >
                {item.icon}
              </div>

              <h3 className="font-playfair font-bold text-maroon-800 text-base mb-2 group-hover:text-maroon-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Number */}
              <div
                className="absolute bottom-4 right-4 text-5xl font-bold opacity-5 font-playfair select-none"
                style={{ color: '#D4AF37' }}
              >
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl border-2"
            style={{
              background: 'linear-gradient(135deg, #fff8e7 0%, #ffffff 100%)',
              borderColor: 'rgba(212,175,55,0.4)',
            }}
          >
            <div className="text-center sm:text-left">
              <p className="font-playfair font-bold text-maroon-800 text-lg">
                Ready to book your event?
              </p>
              <p className="text-gray-600 text-sm">
                Get a free custom quote in minutes — no obligations.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-gold whitespace-nowrap">
                Get Free Quote <FaArrowRight className="text-xs" />
              </Link>
              <a href="tel:08939615333" className="btn-outline-gold whitespace-nowrap">
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
