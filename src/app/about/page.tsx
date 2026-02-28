import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaCheckCircle, FaLeaf, FaAward, FaHeart, FaPhone, FaArrowRight } from 'react-icons/fa'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us — Our Story & Values',
  description:
    'Learn about DD Catering Services — Chennai\'s trusted pure vegetarian caterer. Our story, commitment to hygiene, quality ingredients, and passion for authentic Tamil cuisine.',
}

const values = [
  {
    icon: '🌿',
    title: 'Pure Vegetarian',
    desc: 'Strictly vegetarian kitchen with zero cross-contamination. FSSAI certified, safe for all dietary preferences.',
  },
  {
    icon: '🧼',
    title: 'Hygiene First',
    desc: 'Sanitized kitchen, regular health checks for staff, fresh daily sourced ingredients, gloved preparation always.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Chefs',
    desc: 'Our chefs carry forward generations of Tamil cooking wisdom, blending tradition with modern culinary excellence.',
  },
  {
    icon: '❤️',
    title: 'Made with Love',
    desc: 'Food cooked with genuine affection reflects in every bite. We believe cooking is an act of love and service.',
  },
  {
    icon: '⏰',
    title: '24/7 Availability',
    desc: 'We are always here — for last-minute bookings, urgent queries, or late-night planning sessions.',
  },
  {
    icon: '🏆',
    title: 'Proven Excellence',
    desc: 'Rated 4.8★ by 68+ clients, we consistently deliver excellence that earns lifetime customers.',
  },
]

const milestones = [
  { year: 'Founded', label: 'Established in Poonamallee', value: 'DD Catering' },
  { year: '500+', label: 'Events Successfully Catered', value: 'Events' },
  { year: '4.8★', label: 'Average Google Rating', value: 'Rating' },
  { year: '68+', label: 'Verified Client Reviews', value: 'Reviews' },
]

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1C0505 0%, #800000 60%, #2a0000 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(212,175,55,0.6) 2px, transparent 0)',
            backgroundSize: '80px 80px',
          }} />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
            Our Story
          </span>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            About DD Catering Services
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>
          <p className="text-xl text-gold-400 font-playfair italic">{BUSINESS.nameTamil}</p>
          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-base leading-relaxed">
            One of the most trusted pure vegetarian catering services in Poonamallee, Chennai —
            bringing authentic taste, warmth, and hospitality to your celebrations.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#B8960C' }}>
                Who We Are
              </span>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-maroon-800 mb-5 leading-tight">
                Serving Chennai with
                <span className="block text-gold-shimmer">Authentic Tamil Flavors</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  <strong className="text-maroon-700">DD Catering Services</strong> was founded with a
                  simple yet powerful mission — to bring the rich traditions of Tamil vegetarian cooking
                  to every celebration in Chennai. What started as a small, passionate catering venture
                  in Poonamallee has grown into one of the most trusted names in pure vegetarian catering.
                </p>
                <p>
                  We believe that food is not just sustenance — it is culture, memory, and love served
                  on a plate. Our team of dedicated chefs, trained in the authentic traditions of Tamil
                  Nadu cooking, craft every dish with premium ingredients, time-honored recipes, and
                  unwavering attention to quality.
                </p>
                <p>
                  From the grand banana leaf sadyas at weddings to the intimate feasts at housewarmings,
                  we have had the honor of being part of thousands of families&apos; most cherished moments.
                  Each event we cater becomes a testimony to our commitment — exceptional food, impeccable
                  hygiene, and heartfelt hospitality.
                </p>
                <p>
                  Today, with a <strong className="text-maroon-700">4.8★ rating</strong> and over
                  <strong className="text-maroon-700"> 68 verified reviews</strong>, we stand proud as
                  a symbol of quality vegetarian catering in the Poonamallee circle and across Chennai.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80"
                  alt="DD Catering Services kitchen and chef"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-gold-100">
                <p className="font-playfair font-bold text-3xl text-maroon-700">4.8★</p>
                <p className="text-gray-500 text-sm">Google Rating</p>
                <p className="text-gold-600 text-xs font-semibold">68+ Reviews</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-maroon-600 rounded-2xl shadow-xl p-4 text-white">
                <p className="font-bold text-xl">500+</p>
                <p className="text-white/70 text-xs">Events Catered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #fff8e7, #FFFDF5)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gold-100">
                <p className="font-playfair font-bold text-3xl text-maroon-700 mb-1">{m.year}</p>
                <p className="text-gray-600 text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#B8960C' }}>
              Our Values
            </span>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-maroon-800 mb-3">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gold-50 to-white border border-gold-100 hover:shadow-md transition-shadow">
                <span className="text-3xl shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-semibold text-maroon-700 mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2a0000 0%, #800000 50%, #4a0000 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(212,175,55,0.5) 2px, transparent 0)', backgroundSize: '80px 80px' }} />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-5">
                Our Commitment to
                <span className="block text-gold-shimmer">Quality & Hygiene</span>
              </h2>
              <div className="space-y-3">
                {[
                  'FSSAI certified food preparation standards',
                  'Fresh ingredients sourced daily from trusted suppliers',
                  'All staff trained in food safety and hygiene protocols',
                  'Fully vegetarian kitchen — zero cross-contamination',
                  'Sanitized equipment and utensils for every event',
                  'Quality checks at every stage of food preparation',
                  'Clean, uniformed serving staff for every occasion',
                  'Regular health screening for all kitchen staff',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-gold-500 shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                alt="Hygienic food preparation"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,5,5,0.4) 0%, transparent 50%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #fff8e7 0%, #FFFDF5 100%)' }}>
        <div className="container-custom text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)', color: '#B8960C' }}>
            Service Area
          </span>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-maroon-800 mb-3">
            We Serve All of Chennai
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base">
            Based in Poonamallee, we cater across Chennai and surrounding regions within 60 km.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Poonamallee', 'Senneerkuppam', 'Porur', 'Avadi', 'Ambattur',
              'Koyambedu', 'Maduravoyal', 'Vanagaram', 'Nerkundram', 'Anna Nagar',
              'Valasaravakkam', 'Mogappair', 'Sriperumbudur', 'Thiruvallur', 'All Chennai',
            ].map((area) => (
              <span key={area}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gold-200 text-maroon-700 hover:bg-gold-50 transition-colors">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-xl mx-auto p-8 rounded-3xl border-2 border-gold-200"
            style={{ background: 'linear-gradient(135deg, #fff8e7 0%, #ffffff 100%)' }}>
            <FaHeart className="text-maroon-500 text-3xl mx-auto mb-4" />
            <h3 className="font-playfair font-bold text-maroon-800 text-2xl mb-3">
              Ready to Create Memories?
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Let us be part of your special day. Contact us for a free consultation and custom quote.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-maroon">
                Get Free Quote <FaArrowRight className="text-xs" />
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn-outline-gold">
                <FaPhone className="text-xs" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
