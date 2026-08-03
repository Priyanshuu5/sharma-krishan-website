import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutSection } from "@/components/home/AboutSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://kamsco.in/#website",
      "url": "https://kamsco.in/",
      "name": "Kamsco",
      "description": "Expert Chartered Accountants in Noida, Delhi NCR providing taxation, audit, GST registration, RERA compliance, and financial advisory services.",
      "publisher": {
        "@id": "https://kamsco.in/#organization"
      }
    },
    {
      "@type": "AccountingService",
      "@id": "https://kamsco.in/#organization",
      "name": "Kamsco",
      "url": "https://kamsco.in/",
      "telephone": "+91-9876543210",
      "email": "info@kamsco.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123, Business Plaza, Sector 18",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.3179"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "CA Krishan Kumar Sharma"
      },
      "priceRange": "$$",
      "image": "https://kamsco.in/og-image.jpg"
    }
  ]
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Kamsco | Chartered Accountants in Noida, Delhi NCR"
        description="Professional Chartered Accountants in Sector 18, Noida. Expert services for Income Tax Filing, GST, Audit, RERA compliance, and Financial Advisory."
        schemaMarkup={homeSchema}
      />
      <HeroSection />
      <ServicesPreview />
      <AboutSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
