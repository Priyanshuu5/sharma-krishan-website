import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://kamsco.in/privacy/#breadcrumb",
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
          "name": "Privacy Policy",
          "item": "https://kamsco.in/privacy"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://kamsco.in/privacy/#webpage",
      "url": "https://kamsco.in/privacy",
      "name": "Privacy Policy | KAMS & Co. Chartered Accountants",
      "description": "Privacy policy for KAMS & Co. Chartered Accountants detailing client confidentiality, data handling, and regulatory compliance standards.",
      "breadcrumb": {
        "@id": "https://kamsco.in/privacy/#breadcrumb"
      }
    }
  ]
};

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | KAMS & Co. Chartered Accountants"
        description="Privacy policy for KAMS & Co. Chartered Accountants. We protect client financial data, audit records, and tax documentation under strict confidentiality."
        schemaMarkup={privacySchema}
      />
      
      <section className="pt-40 pb-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">Legal & Compliance</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-3 mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/75 text-sm md:text-base font-light max-w-2xl font-sans">
            Effective Date: September 30, 2026. KAMS & Co. Chartered Accountants is committed to maintaining strict confidentiality and safeguarding client data.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 font-sans text-sm md:text-base leading-relaxed font-light text-muted-foreground">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">1. Information Collection</h2>
            <p>
              We collect personal and corporate information provided directly by clients during consultations, engagement agreements, tax filings, audits, and document transmissions via our Help Center. This includes names, contact details, PAN, GSTIN, corporate registration details, and financial records necessary for professional advisory services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">2. Professional Standards & Confidentiality</h2>
            <p>
              As an ICAI-registered Chartered Accountancy firm, KAMS & Co. strictly adheres to the Code of Ethics mandated by the Institute of Chartered Accountants of India. All client financial statements, tax records, audit working papers, and strategic information remain strictly confidential.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. Data Security & Storage</h2>
            <p>
              We maintain administrative, technical, and physical safeguards to protect client documents against unauthorized access, loss, or alteration. Submissions uploaded to our online Help Center are transmitted via secure, encrypted channels.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. Information Sharing & Legal Compliance</h2>
            <p>
              We do not sell, rent, or trade client information. Information is disclosed to statutory tax authorities (e.g. Income Tax Department, GSTN, ROC) solely as authorized by the client or required under applicable Indian laws and regulatory mandates.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our data protection practices, please contact our compliance team at{" "}
              <a href="mailto:info@kamsco.in" className="text-accent hover:underline font-medium">info@kamsco.in</a> or by calling{" "}
              <a href="tel:+919782313223" className="text-accent hover:underline font-medium">+91-97823-13223</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
