import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaUsers, FaArrowRight, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { SERVICES, BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Catering Services — Wedding, Engagement, Reception & More',
  description:
    'DD Catering Services offers wedding catering, engagement catering, reception catering, housewarming catering, corporate catering, and traditional Tamil function catering in Chennai.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2a0000 0%, #800000 60%, #1C0505 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(212,175,55,0.6) 2px, transparent 0)', backgroundSize: '80px 80px' }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
            Our Services
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5">
            Premium Catering for
            <span className="block text-gold-shimmer">Every Celebration</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            From intimate housewarmings to grand weddings with thousands of guests — we deliver
            authentic pure vegetarian catering with excellence, hygiene, and warm hospitality.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{ background: 'linear-gradient(to top, rgba(28,5,5,0.6) 0%, transparent 60%)' }}
                    />
                    {/* Icon overlay */}
                    <div className="absolute top-5 left-5">
                      <span className="text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg"
                        style={{ background: 'rgba(212,175,55,0.9)', backdropFilter: 'blur(8px)' }}>
                        {service.icon}
                      </span>
                    </div>
                    {/* Tamil name */}
                    <div className="absolute bottom-5 left-5">
                      <p className="text-gold-400 font-playfair italic text-lg">{service.titleTamil}</p>
                    </div>
                  </div>
                  {/* Guest count badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gold-100">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-gold-500" />
                      <div>
                        <p className="font-bold text-maroon-700 text-sm leading-none">{service.guests}</p>
                        <p className="text-gray-500 text-xs">guests served</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#B8960C' }}>
                    {service.icon} {service.title}
                  </span>
                  <h2 className="font-playfair font-bold text-3xl md:text-4xl text-maroon-800 mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <FaCheckCircle className="text-gold-500 shrink-0 text-sm" />
                        <span className="text-gray-700 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-maroon">
                      Get Quote <FaArrowRight className="text-xs" />
                    </Link>
                    <a href={`tel:${BUSINESS.phone}`} className="btn-outline-gold">
                      <FaPhone className="text-xs" /> Call Now
                    </a>
                    <a
                      href={`https://wa.me/${BUSINESS.whatsapp}?text=Hello%20DD%20Catering%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                      style={{ background: '#25D366' }}
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0505 0%, #800000 50%, #2a0000 100%)' }}>
        <div className="container-custom text-center relative z-10">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
            Not Sure Which Package Fits?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-base">
            Call us or WhatsApp us. Our team will understand your requirements and suggest the perfect
            custom catering package for your event.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-gold">
              <FaPhone className="text-xs" /> Call {BUSINESS.phoneFormatted}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
              style={{ background: '#25D366' }}
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
            <Link href="/contact" className="btn-outline-gold">
              Fill Enquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
