import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaLeaf, FaStar, FaEnvelope } from 'react-icons/fa'
import { BUSINESS, NAV_LINKS, SERVICES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(180deg, #1C0505 0%, #2a0000 50%, #1C0505 100%)' }}
    >
      {/* Top Gold Bar */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg, #D4AF37, #F5D060, #B8960C, #D4AF37)' }} />

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-gold"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8960C)' }}
              >
                DD
              </div>
              <div>
                <p className="font-playfair font-bold text-white text-base leading-tight">{BUSINESS.name}</p>
                <p className="text-gold-400 text-sm">{BUSINESS.nameTamil}</p>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              One of the best pure vegetarian catering services in Poonamallee, Chennai. Authentic taste, hygienic preparation, and exceptional hospitality since years.
            </p>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400">
                <FaStar className="text-xs" /> {BUSINESS.rating}★ Rated
              </span>
              <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400">
                <FaLeaf className="text-xs" /> Pure Veg
              </span>
              <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70">
                <FaClock className="text-xs" /> 24 Hours
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-white text-base mb-5 pb-2 border-b border-gold-500/30">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-semibold text-white text-base mb-5 pb-2 border-b border-gold-500/30">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-white/65 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-xs">{s.icon}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-semibold text-white text-base mb-5 pb-2 border-b border-gold-500/30">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-start gap-3 text-white/65 text-sm hover:text-gold-400 transition-colors group"
                >
                  <FaPhone className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-400" />
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Phone / WhatsApp</p>
                    {BUSINESS.phoneFormatted}
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/65 text-sm hover:text-green-400 transition-colors group"
                >
                  <FaWhatsapp className="mt-0.5 shrink-0 text-green-500 group-hover:text-green-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-white/65 text-sm hover:text-gold-400 transition-colors group"
                >
                  <FaEnvelope className="mt-0.5 shrink-0 text-gold-500 group-hover:text-gold-400" />
                  <span className="break-all">{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/65 text-sm">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-gold-500" />
                  <p className="leading-relaxed">{BUSINESS.address}</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/65 text-sm">
                  <FaClock className="shrink-0 text-gold-500" />
                  <span>{BUSINESS.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/45 text-xs text-center md:text-left">
            © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.nameTamil} · All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Pure Vegetarian Catering · Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  )
}
