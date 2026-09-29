import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://kamsco.in/#website",
      "url": "https://kamsco.in/",
      "name": "KAMS & Co. Chartered Accountants",
      "description": "Expert Chartered Accountants providing taxation, audit, GST compliance, corporate advisory, and financial advisory services worldwide.",
      "publisher": {
        "@id": "https://kamsco.in/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "AccountingService",
      "@id": "https://kamsco.in/#organization",
      "name": "KAMS & Co. Chartered Accountants",
      "alternateName": "Kamsco",
      "url": "https://kamsco.in/",
      "logo": "https://kamsco.in/ca-logo.png",
      "image": "https://kamsco.in/ca-logo.png",
      "telephone": "+91-97823-13223",
      "email": "info@kamsco.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 18",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.3149
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
      "areaServed": ["Noida", "Delhi NCR", "India", "Worldwide"],
      "priceRange": "$$",
      "founders": [
        {
          "@type": "Person",
          "name": "CA Mohan Lal Sharma",
          "jobTitle": "Partner, FCA",
          "alumniOf": "Institute of Chartered Accountants of India"
        },
        {
          "@type": "Person",
          "name": "CA Akanksha Tripathi",
          "jobTitle": "Partner, ACA",
          "alumniOf": "Institute of Chartered Accountants of India"
        },
        {
          "@type": "Person",
          "name": "CA Komal Sharma",
          "jobTitle": "Partner, ACA",
          "alumniOf": "Institute of Chartered Accountants of India"
        },
        {
          "@type": "Person",
          "name": "CA Krishan Kumar Sharma",
          "jobTitle": "Partner, ACA",
          "alumniOf": "Institute of Chartered Accountants of India"
        }
      ]
    }
  ]
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="KAMS & Co. | Chartered Accountants in Noida — Taxation, Audit & Advisory"
        description="KAMS & Co. Chartered Accountants — Expert CA services in taxation, audit, GST compliance, corporate advisory, and international financial planning in Noida and worldwide."
        schemaMarkup={homeSchema}
      />
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseUsSection />
      <ClientsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
