'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock,
  FaEnvelope, FaPaperPlane, FaCheckCircle, FaLeaf,
  FaStar,
} from 'react-icons/fa'
import { BUSINESS } from '@/lib/constants'
import type { Metadata } from 'next'

const eventTypes = [
  'Wedding', 'Engagement', 'Reception', 'Housewarming',
  'Birthday Party', 'Corporate Event', 'Seemantham',
  'Sashtiabdapoothi', 'Namakaranam', 'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', eventType: '',
    eventDate: '', guestCount: '', venue: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const msg = [
      `*DD Catering — Event Enquiry*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email || 'N/A'}`,
      `*Event Type:* ${formData.eventType}`,
      `*Event Date:* ${formData.eventDate || 'TBD'}`,
      `*Guest Count:* ${formData.guestCount}`,
      `*Venue:* ${formData.venue || 'TBD'}`,
      `*Message:* ${formData.message || 'No additional message'}`,
    ].join('\n')

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', phone: '', email: '', eventType: '', eventDate: '', guestCount: '', venue: '', message: '' })
      }, 5000)
    }, 500)
  }

  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0505 0%, #800000 60%, #2a0000 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(212,175,55,0.6) 2px, transparent 0)', backgroundSize: '80px 80px' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
            Contact Us
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Plan Your Event
            <span className="block text-gold-shimmer">Get Free Quote</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            Fill out the form below or reach us directly. We&apos;re available 24 hours and respond
            to all inquiries within minutes.
          </p>
          {/* Quick Trust */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              { icon: <FaStar className="text-gold-400 text-xs" />, text: '4.8★ Rated' },
              { icon: <FaLeaf className="text-green-400 text-xs" />, text: '100% Pure Veg' },
              { icon: <FaClock className="text-gold-400 text-xs" />, text: 'Available 24/7' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs text-white/80"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                {b.icon}{b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #FFFDF5 0%, #fff8e7 100%)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Contact Info */}
            <div className="space-y-4">
              <h2 className="font-playfair font-bold text-maroon-800 text-2xl mb-6">
                Reach Us Directly
              </h2>

              {/* Quick Action Buttons */}
              <a href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gold-200 hover:border-gold-400 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)' }}>
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Call Anytime</p>
                  <p className="font-bold text-maroon-700">{BUSINESS.phoneFormatted}</p>
                  <p className="text-gray-500 text-xs">Available 24 hours, 7 days</p>
                </div>
              </a>

              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-green-200 hover:border-green-400 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: '#25D366' }}>
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">WhatsApp</p>
                  <p className="font-bold text-green-700">Chat Instantly</p>
                  <p className="text-gray-500 text-xs">Quick replies guaranteed</p>
                </div>
              </a>

              <a href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-gold-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg, #800000, #a00000)' }}>
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                  <p className="font-bold text-maroon-700 text-sm break-all">{BUSINESS.email}</p>
                  <p className="text-gray-500 text-xs">We reply within 2 hours</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: 'linear-gradient(135deg, #800000, #a00000)' }}>
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Our Address</p>
                  <p className="font-medium text-maroon-700 text-sm leading-relaxed">{BUSINESS.address}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-gold-600 text-xs font-medium hover:text-gold-700 mt-1 inline-block">
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-5 rounded-2xl border border-gold-200"
                style={{ background: 'linear-gradient(135deg, #fff8e7 0%, #ffffff 100%)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <FaClock className="text-gold-500" />
                  <h3 className="font-semibold text-maroon-700">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {[
                    ['Monday – Sunday', '24 Hours'],
                    ['Holidays', 'Open Always'],
                    ['Emergency Bookings', 'Call Anytime'],
                  ].map(([day, time]) => (
                    <div key={day} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{day}</span>
                      <span className="font-semibold text-maroon-700">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form (spans 2 cols) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gold-100">
                <h2 className="font-playfair font-bold text-maroon-800 text-2xl mb-6">
                  Book Your Event / Get Free Quote
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                    <h3 className="font-playfair font-bold text-maroon-700 text-2xl mb-2">
                      Enquiry Sent Successfully!
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Your message has been sent via WhatsApp. Our team will contact you within minutes.
                    </p>
                    <p className="text-gold-600 font-semibold">
                      Thank you for choosing DD Catering Services! 🙏
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input type="text" required placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <input type="tel" required placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input type="email" placeholder="your@email.com (optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Event Type *
                        </label>
                        <select required
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all bg-white">
                          <option value="">Select event type</option>
                          {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Event Date
                        </label>
                        <input type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Guest Count *
                        </label>
                        <input type="text" required placeholder="e.g. 200-300 guests"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Venue / Location
                        </label>
                        <input type="text" placeholder="Event venue or area"
                          value={formData.venue}
                          onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Message / Special Requirements
                      </label>
                      <textarea rows={4} placeholder="Tell us about your event — menu preferences, special dietary needs, budget range, any specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none text-sm transition-all resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="btn-maroon w-full justify-center py-4 text-base disabled:opacity-70">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Enquiry via WhatsApp
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-xs">
                      🔒 Your details are secure. We never share or sell your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-gold-200">
            <div className="px-6 py-3 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #800000, #a00000)' }}>
              <FaMapMarkerAlt className="text-gold-400" />
              <p className="text-white font-medium text-sm">
                DD Catering Services — {BUSINESS.address}
              </p>
            </div>
            <iframe
              src={BUSINESS.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DD Catering Services Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
