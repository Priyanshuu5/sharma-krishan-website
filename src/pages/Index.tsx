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
      "name": "KAMS & Co Chartered Accountants",
      "description": "Expert Chartered Accountants providing taxation, audit, GST compliance, corporate advisory, and financial advisory services worldwide.",
      "publisher": {
        "@id": "https://kamsco.in/#organization"
      }
    },
    {
      "@type": "AccountingService",
      "@id": "https://kamsco.in/#organization",
      "name": "KAMS & Co Chartered Accountants",
      "url": "https://kamsco.in/",
      "telephone": "+91-97823-13223",
      "founders": [
        {
          "@type": "Person",
          "name": "CA Mohan Lal Sharma",
          "jobTitle": "Partner, FCA"
        },
        {
          "@type": "Person",
          "name": "CA Akanksha Tripathi",
          "jobTitle": "Partner, ACA"
        },
        {
          "@type": "Person",
          "name": "CA Komal Sharma",
          "jobTitle": "Partner, ACA"
        }
      ],
      "priceRange": "$$",
    }
  ]
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="KAMS & Co | Chartered Accountants — Taxation, Audit & Financial Advisory"
        description="KAMS & Co Chartered Accountants — Expert services in taxation, audit, GST compliance, corporate advisory, and international financial planning worldwide."
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
