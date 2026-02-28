'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { BUSINESS } from '@/lib/constants'
import SectionHeader from '@/components/shared/SectionHeader'

const eventTypes = [
  'Wedding', 'Engagement', 'Reception', 'Housewarming',
  'Birthday Party', 'Corporate Event', 'Traditional Function', 'Other',
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', eventType: '', guestCount: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello DD Catering Services!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Event:* ${formData.eventType}%0A*Guests:* ${formData.guestCount}%0A*Message:* ${formData.message}`
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFDF5 0%, #fff8e7 100%)' }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 50px 50px, rgba(212,175,55,0.1) 2px, transparent 0)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Book Your Event or"
          titleHighlight="Get Free Quote"
          subtitle="Fill out the form below or reach us directly. We respond within minutes — 24 hours a day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: <FaPhone className="text-gold-500 text-lg" />,
                title: 'Call Us',
                value: BUSINESS.phoneFormatted,
                sub: 'Available 24 Hours',
                href: `tel:${BUSINESS.phone}`,
              },
              {
                icon: <FaWhatsapp className="text-green-500 text-lg" />,
                title: 'WhatsApp',
                value: 'Chat Instantly',
                sub: 'Quick responses guaranteed',
                href: `https://wa.me/${BUSINESS.whatsapp}`,
              },
              {
                icon: <FaEnvelope className="text-gold-500 text-lg" />,
                title: 'Email',
                value: BUSINESS.email,
                sub: 'We reply within 2 hours',
                href: `mailto:${BUSINESS.email}`,
              },
              {
                icon: <FaMapMarkerAlt className="text-maroon-500 text-lg" />,
                title: 'Address',
                value: '11/62 Periyar Nagar',
                sub: 'Senneerkuppam, Poonamallee, Chennai 600056',
                href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`,
              },
              {
                icon: <FaClock className="text-gold-500 text-lg" />,
                title: 'Hours',
                value: '24 Hours / 7 Days',
                sub: 'Always available for you',
                href: null,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gold-100 hover:border-gold-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{item.title}</p>
                      <p className="font-semibold text-maroon-700 text-sm">{item.value}</p>
                      <p className="text-gray-500 text-xs">{item.sub}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gold-100">
                    <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{item.title}</p>
                      <p className="font-semibold text-maroon-700 text-sm">{item.value}</p>
                      <p className="text-gray-500 text-xs">{item.sub}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gold-100">
              <h3 className="font-playfair font-bold text-maroon-800 text-xl mb-6">
                Request a Free Quote
              </h3>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-playfair font-bold text-maroon-700 text-xl mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    We&apos;ve received your request. Our team will contact you within minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Event Type *
                      </label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-sm transition-all bg-white"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Guest Count *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 200-300 guests"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your event — date, venue, menu preferences, budget, special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-maroon w-full justify-center py-3.5">
                    <FaPaperPlane className="text-sm" />
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Your details are safe with us. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-gold-200"
        >
          <div className="bg-maroon-700 px-6 py-3 flex items-center gap-3">
            <FaMapMarkerAlt className="text-gold-400" />
            <p className="text-white font-medium text-sm">
              DD Catering Services — 11/62 Periyar Nagar, Senneerkuppam, Poonamallee, Chennai 600056
            </p>
          </div>
          <iframe
            src={BUSINESS.mapEmbedUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DD Catering Services Location"
          />
        </motion.div>
      </div>
    </section>
  )
}
