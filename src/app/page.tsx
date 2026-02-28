import Hero from '@/components/home/Hero'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesOverview from '@/components/home/ServicesOverview'
import MenuHighlights from '@/components/home/MenuHighlights'
import Reviews from '@/components/home/Reviews'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import EventTypes from '@/components/home/EventTypes'
import GalleryPreview from '@/components/home/GalleryPreview'
import ContactSection from '@/components/home/ContactSection'
import FAQ from '@/components/ui/FAQ'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <MenuHighlights />
      <Reviews />
      <WhyChooseUs />
      <EventTypes />
      <GalleryPreview />
      <ContactSection />
      <FAQ />
    </>
  )
}
