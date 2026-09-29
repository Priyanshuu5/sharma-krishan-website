import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://kamsco.in/terms/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kamsco.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms of Service",
          "item": "https://kamsco.in/terms"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://kamsco.in/terms/#webpage",
      "url": "https://kamsco.in/terms",
      "name": "Terms of Service | KAMS & Co. Chartered Accountants",
      "description": "Terms of service for KAMS & Co. Chartered Accountants governing professional engagement, site usage, and advisory services.",
      "breadcrumb": {
        "@id": "https://kamsco.in/terms/#breadcrumb"
      }
    }
  ]
};

const TermsOfService = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service | KAMS & Co. Chartered Accountants"
        description="Terms of Service for KAMS & Co. Chartered Accountants detailing professional service terms, engagement scopes, and website usage."
        schemaMarkup={termsSchema}
      />

      <section className="pt-40 pb-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">Legal & Engagement Terms</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-3 mb-4">Terms of Service</h1>
          <p className="text-primary-foreground/75 text-sm md:text-base font-light max-w-2xl font-sans">
            Effective Date: September 30, 2026. Please read these terms governing the use of our website and professional engagement agreements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 font-sans text-sm md:text-base leading-relaxed font-light text-muted-foreground">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">1. Scope of Professional Services</h2>
            <p>
              KAMS & Co. provides audit & assurance, taxation advisory, corporate compliance, and financial consulting services subject to executed Engagement Letters and applicable regulations of the Institute of Chartered Accountants of India (ICAI).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">2. Website Content Disclaimer</h2>
            <p>
              Information published on this website is for general informational and educational purposes only and does not constitute formal tax, legal, or financial advice. Formal advisory services require a signed engagement agreement.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. Client Obligations</h2>
            <p>
              Clients agree to provide accurate, complete, and timely financial information and documentation necessary for KAMS & Co. to perform statutory audit filings, tax returns, and regulatory compliance duties.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>
              All branding, text, graphic layouts, and original content on this website are the exclusive property of KAMS & Co. Chartered Accountants and protected under copyright laws.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. Governance & Jurisdiction</h2>
            <p>
              These Terms of Service and any professional engagements are governed by the laws of India. Courts in Gautam Buddha Nagar / Noida, Uttar Pradesh shall have exclusive jurisdiction over any legal proceedings.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
