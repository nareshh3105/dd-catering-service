'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { FAQS } from '@/lib/constants'
import SectionHeader from '@/components/shared/SectionHeader'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-cream pattern-bg">
      <div className="container-custom">
        <SectionHeader
          badge="Common Questions"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know about our catering services. Can't find an answer? Call us 24/7."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="rounded-2xl overflow-hidden border border-gold-200/50 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gold-50/50"
              >
                <span
                  className={`font-semibold text-sm md:text-base leading-snug transition-colors ${
                    openIndex === index ? 'text-maroon-600' : 'text-gray-900'
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? 'bg-maroon-600 text-white'
                      : 'bg-gold-100 text-gold-700'
                  }`}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-xs" />
                  ) : (
                    <FaPlus className="text-xs" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-gold-100">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions? We&apos;re here to help.</p>
          <a href="tel:08939615333" className="btn-maroon">
            Call Us 24/7 — 08939615333
          </a>
        </motion.div>
      </div>
    </section>
  )
}
