'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)',
            border: '1px solid rgba(212,175,55,0.4)',
            color: '#D4AF37',
          }}
        >
          {badge}
        </motion.span>
      )}

      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-maroon-800'
        }`}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-gold-shimmer inline-block">{titleHighlight}</span>
        )}
      </h2>

      {/* Gold Divider */}
      <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : 'justify-start'}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
      </div>

      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
