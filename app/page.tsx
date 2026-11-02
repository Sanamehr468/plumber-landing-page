import Script from 'next/script'
import Header from '../components/Header'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import Services from '../components/sections/Services'
import EmergencyBand from '../components/sections/EmergencyBand'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'
import Projects from '../components/sections/Projects'
import Testimonials from '../components/sections/Testimonials'
import AreasPricing from '../components/sections/AreasPricing'
import FaqCta from '../components/sections/FaqCta'
import Footer from '../components/Footer'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PlumbingBusiness',
    name: 'FlowRight Plumbing',
    telephone: '(000) 123-4567',
    email: 'hello@flowright.com',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1247'
    }
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#0A1128] text-[#F8FAFC] font-sans overflow-x-hidden min-h-screen selection:bg-[#00E5FF] selection:text-[#0A1128]">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <EmergencyBand />
          <WhyChooseUs />
          <HowItWorks />
          <Projects />
          <Testimonials />
          <AreasPricing />
          <FaqCta />
        </main>
        <Footer />
      </div>
    </>
  )
}
