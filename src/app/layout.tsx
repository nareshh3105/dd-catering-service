import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileBar from '@/components/layout/MobileBar'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { BUSINESS } from '@/lib/constants'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DD Catering Services | Best Pure Veg Catering in Poonamallee, Chennai',
    template: '%s | DD Catering Services Chennai',
  },
  description:
    'DD Catering Services — One of the best pure vegetarian catering services in Poonamallee, Chennai. Specializing in weddings, engagements, receptions, and housewarmings. Authentic Tamil flavors, hygienic preparation, 24-hour service. Call 08939615333.',
  keywords: [
    'best vegetarian catering in Poonamallee',
    'wedding catering Chennai',
    'pure veg catering services Chennai',
    'engagement catering Chennai',
    'housewarming catering Poonamallee',
    'DD Catering Services',
    'Tamil vegetarian catering',
    'catering service Senneerkuppam',
    'reception catering Chennai',
    'traditional Tamil catering',
  ],
  authors: [{ name: 'DD Catering Services' }],
  creator: 'DD Catering Services',
  publisher: 'DD Catering Services',
  metadataBase: new URL('https://ddcateringservices.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ddcateringservices.in',
    siteName: 'DD Catering Services',
    title: 'DD Catering Services | Best Pure Veg Catering in Poonamallee, Chennai',
    description:
      'Premium pure vegetarian catering for weddings, engagements, receptions & housewarmings. Authentic Tamil flavors. 4.8★ rated. Available 24 hours. Poonamallee, Chennai.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'DD Catering Services - Pure Veg Catering Chennai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DD Catering Services | Best Pure Veg Catering in Chennai',
    description:
      'Premium pure vegetarian catering in Chennai. Weddings, engagements, receptions & more. 4.8★ rated. Call 08939615333.',
    images: ['https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: BUSINESS.name,
  alternateName: BUSINESS.nameTamil,
  description:
    'One of the best pure vegetarian catering services in Poonamallee, Chennai. Specializing in weddings, engagements, receptions, housewarmings, and traditional Tamil functions.',
  url: 'https://ddcateringservices.in',
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11/62 Periyar Nagar, Senneerkuppam',
    addressLocality: 'Poonamallee',
    addressRegion: 'Tamil Nadu',
    postalCode: BUSINESS.pincode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0553,
    longitude: 80.0648,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  servesCuisine: ['South Indian', 'Tamil', 'Vegetarian'],
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  hasMap: 'https://maps.google.com/?q=11/62+Periyar+Nagar+Senneerkuppam+Poonamallee+Chennai',
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased bg-cream">
        <Navbar />
        <main className="min-h-screen mobile-pb">{children}</main>
        <Footer />
        <MobileBar />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
