import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Gallery from '@/components/sections/Gallery';
import AreasWeService from '@/components/sections/Areas';
import Reviews from '@/components/sections/Reviews';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mttreecut.co.za/#business',
    name: 'M&T Treecut',
    description: 'Professional tree felling, stump removal, tree pruning, plot clearing and garden services across North West Province, South Africa.',
    image: 'https://mttreecut.co.za/og-image.jpg',
    url: 'https://mttreecut.co.za',
    telephone: '+27790642188',
    email: 'info@mttreecut.co.za',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rustenburg',
      addressLocality: 'Rustenburg',
      addressRegion: 'North West',
      postalCode: '0300',
      addressCountry: 'ZA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.66667,
      longitude: 27.24138
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '17:00'
      }
    ],
    sameAs: [],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mttreecut.co.za'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://mttreecut.co.za/blog'
      }
    ]
  };

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tree Felling & Removal',
    provider: {
      '@type': 'LocalBusiness',
      name: 'M&T Treecut',
      telephone: '+27790642188'
    },
    areaServed: {
      '@type': 'State',
      name: 'North West Province, South Africa'
    },
    description: 'Safe and efficient removal of trees of any size, protecting your property.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        {/* <Gallery /> - Hidden for now, available for later integration */}
        <AreasWeService />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButtons />
    </>
  );
}
