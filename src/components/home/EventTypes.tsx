'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { EVENT_TYPES } from '@/lib/constants'
import SectionHeader from '@/components/shared/SectionHeader'

export default function EventTypes() {
  return (
    <section
      className="section-padding text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1C0505 0%, #2a0000 40%, #4a0000 70%, #2a0000 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-5" style={{ background: '#D4AF37' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-5" style={{ background: '#D4AF37' }} />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Events We Serve"
          title="Catering for All Your"
          titleHighlight="Celebrations"
          subtitle="Whatever the occasion — big or small, traditional or modern — DD Catering Services is your trusted partner for exceptional vegetarian catering."
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {EVENT_TYPES.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-125">
                {event.icon}
              </div>
              <h3 className="font-playfair font-semibold text-white text-sm md:text-base mb-1.5">
                {event.name}
              </h3>
              <p className="text-white/55 text-xs leading-relaxed">
                {event.desc}
              </p>

              {/* Bottom border on hover */}
              <div
                className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Book Now Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)', border: '1px solid rgba(212,175,55,0.3)' }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(212,175,55,0.8) 2px, transparent 0)',
              backgroundSize: '60px 60px',
            }} />

          <h3 className="font-playfair font-bold text-white text-2xl md:text-3xl mb-3 relative z-10">
            Don&apos;t Wait — Book Your Date Today!
          </h3>
          <p className="text-white/65 text-sm md:text-base mb-6 max-w-xl mx-auto relative z-10">
            Popular dates fill up fast. Secure your event date with DD Catering Services and enjoy
            peace of mind knowing your celebration is in expert hands.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <Link href="/contact" className="btn-gold">
              Book Now <FaArrowRight className="text-xs" />
            </Link>
            <a
              href={`https://wa.me/918939615333?text=Hello%20DD%20Catering%2C%20I%20want%20to%20book%20a%20date%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
              style={{ background: '#25D366' }}
            >
              WhatsApp to Book
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
