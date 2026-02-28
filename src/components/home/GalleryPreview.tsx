'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaExpand } from 'react-icons/fa'
import { GALLERY_IMAGES } from '@/lib/constants'
import SectionHeader from '@/components/shared/SectionHeader'

export default function GalleryPreview() {
  const preview = GALLERY_IMAGES.slice(0, 6)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Our Gallery"
          title="Glimpses of Our"
          titleHighlight="Culinary Art"
          subtitle="Every dish tells a story. Every event creates memories. Explore our gallery of beautifully crafted vegetarian spreads."
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {preview.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}
              style={{ minHeight: index === 0 ? '280px' : '180px' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
                style={{ background: 'rgba(28,5,5,0.65)' }}
              >
                <FaExpand className="text-white text-xl mb-2" />
                <p className="text-white text-xs font-semibold px-3 text-center">{img.alt}</p>
                <span
                  className="mt-2 px-3 py-1 rounded-full text-xs text-white font-medium"
                  style={{ background: 'rgba(212,175,55,0.8)' }}
                >
                  {img.category}
                </span>
              </div>

              {/* Category badge (always visible) */}
              <div className="absolute top-3 left-3">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-medium text-white shadow"
                  style={{ background: 'rgba(128,0,0,0.75)', backdropFilter: 'blur(4px)' }}
                >
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-5">See more of our work — food, events, and decorations</p>
          <Link href="/gallery" className="btn-maroon">
            View Full Gallery <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
