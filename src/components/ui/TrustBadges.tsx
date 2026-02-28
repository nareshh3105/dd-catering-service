'use client'

import { motion } from 'framer-motion'
import { FaStar, FaClock, FaLeaf } from 'react-icons/fa'
import { BUSINESS } from '@/lib/constants'

interface TrustBadgesProps {
  variant?: 'light' | 'dark'
}

export default function TrustBadges({ variant = 'dark' }: TrustBadgesProps) {
  const badges = [
    {
      icon: <FaStar className="text-gold-500" />,
      value: `${BUSINESS.rating}★`,
      label: `${BUSINESS.reviewCount}+ Reviews`,
    },
    {
      icon: <FaClock className="text-gold-500" />,
      value: '24/7',
      label: 'Available Always',
    },
    {
      icon: <FaLeaf className="text-green-500" />,
      value: '100%',
      label: 'Pure Vegetarian',
    },
  ]

  const isDark = variant === 'dark'

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full ${
            isDark
              ? 'bg-white/10 border border-white/25 backdrop-blur-sm'
              : 'bg-gold-50 border border-gold-200'
          }`}
        >
          <span className="text-lg">{badge.icon}</span>
          <div>
            <p className={`text-sm font-bold leading-tight ${isDark ? 'text-white' : 'text-maroon-700'}`}>
              {badge.value}
            </p>
            <p className={`text-xs ${isDark ? 'text-white/70' : 'text-gray-500'}`}>{badge.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
