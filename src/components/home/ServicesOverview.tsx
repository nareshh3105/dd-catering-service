'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaUsers } from 'react-icons/fa'
import { SERVICES } from '@/lib/constants'
import SectionHeader from '@/components/shared/SectionHeader'

export default function ServicesOverview() {
  return (
    <section className="section-padding pattern-bg overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff8e7 0%, #FFFDF5 100%)' }}>
      <div className="container-custom">
        <SectionHeader
          badge="What We Offer"
          title="Catering Services for"
          titleHighlight="Every Occasion"
          subtitle="From grand weddings to intimate housewarmings — we bring authentic vegetarian flavors and warm hospitality to all your life's celebrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 card-hover border border-gold-100/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-60 transition-opacity"
                  style={{ background: 'linear-gradient(to top, rgba(28,5,5,0.8) 0%, transparent 60%)' }}
                />
                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-2xl w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg"
                    style={{ background: 'rgba(212,175,55,0.9)', backdropFilter: 'blur(8px)' }}
                  >
                    {service.icon}
                  </span>
                </div>
                {/* Tamil name */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-gold-400 text-xs font-medium">{service.titleTamil}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-playfair font-bold text-maroon-800 text-xl mb-2 group-hover:text-maroon-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Guest Count + CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <FaUsers className="text-gold-500" />
                    <span>{service.guests} guests</span>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-1.5 text-xs font-semibold text-maroon-600 hover:text-gold-600 transition-colors group/link"
                  >
                    Get Quote
                    <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-maroon">
            View All Services <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
