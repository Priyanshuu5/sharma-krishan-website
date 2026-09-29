import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  ClipboardCheck,
  TrendingUp,
  Calculator,
  ShieldCheck,
  Globe,
  BarChart3,
  FileText,
  Briefcase,
  ArrowRight,
  Layers,
  Scale,
  Building2,
  PieChart,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { cn } from "@/lib/utils";

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kamsco.in/services/#webpage",
      "url": "https://kamsco.in/services",
      "name": "Services | KAMS & Co Chartered Accountants",
      "description": "Comprehensive CA services: Audit & Assurance, Corporate Advisory, Taxation, and Compliance & Regulatory services for businesses worldwide.",
    }
  ]
};

const serviceCategories = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description: "Comprehensive audit services that give your stakeholders confidence in your financial reporting.",
    items: [
      { icon: ClipboardCheck, title: "Statutory Audits", description: "Complete statutory audit services ensuring full compliance with applicable laws and standards." },
      { icon: Layers, title: "Internal Audits", description: "In-depth review of internal processes, controls, and risk management systems." },
      { icon: ShieldCheck, title: "Compliance Audits", description: "Thorough assessment of compliance with regulatory requirements and industry standards." },
      { icon: Scale, title: "Risk Assessment", description: "Identification and evaluation of key business risks to strengthen your financial controls." },
      { icon: BarChart3, title: "Internal Controls", description: "Design and evaluation of robust internal control frameworks to protect your assets." },
      { icon: FileText, title: "Fraud Prevention", description: "Proactive fraud risk assessment and prevention strategies to safeguard your organization." },
    ],
  },
  {
    id: "corporate-advisory",
    title: "Corporate Advisory & Strategic Planning",
    description: "Strategic guidance that helps businesses structure, grow, and expand with confidence.",
    items: [
      { icon: Building2, title: "Business Structure Advisory", description: "Expert guidance on optimal legal and organizational structures for your business goals." },
      { icon: Briefcase, title: "Mergers & Acquisitions", description: "End-to-end M&A advisory including due diligence, valuation, and deal structuring." },
      { icon: Globe, title: "Cross-Border Advisory", description: "Navigating international business structures, regulatory requirements, and tax obligations." },
      { icon: TrendingUp, title: "Fundraising Advisory", description: "Strategic support for raising capital through equity, debt, or hybrid instruments." },
      { icon: BarChart3, title: "IPO Readiness", description: "Preparing businesses for public listings with compliance frameworks and disclosure standards." },
      { icon: PieChart, title: "Global Listing Support", description: "Advisory for listing on global stock exchanges including regulatory and disclosure requirements." },
    ],
  },
  {
    id: "taxation-services",
    title: "Taxation Services",
    description: "Comprehensive tax planning and compliance services for businesses and individuals operating domestically and internationally.",
    items: [
      { icon: Calculator, title: "Income Tax Advisory", description: "Strategic income tax planning to minimize liabilities within legal frameworks." },
      { icon: FileText, title: "Corporate Tax Compliance", description: "End-to-end corporate tax return filing, advance tax management, and assessment support." },
      { icon: TrendingUp, title: "Tax Planning", description: "Proactive tax strategies aligned with your business objectives and risk tolerance." },
      { icon: Globe, title: "International Tax", description: "Cross-border tax structuring, transfer pricing, and DTAA advisory for global businesses." },
      { icon: ShieldCheck, title: "GST Advisory", description: "GST registration, compliance, advisory, and cross-border transaction structuring." },
      { icon: ClipboardCheck, title: "GST Cross-Border Compliance", description: "Expert handling of GST implications for import/export and international transactions." },
    ],
  },
  {
    id: "compliance-regulatory",
    title: "Compliance & Regulatory Services",
    description: "Ensuring your business stays fully compliant with evolving regulations across jurisdictions.",
    items: [
      { icon: FileText, title: "Regulatory Reporting", description: "Accurate and timely preparation of all statutory and regulatory reports required by law." },
      { icon: Building2, title: "Corporate Filings", description: "ROC filings, annual returns, board resolutions, and all corporate secretarial requirements." },
      { icon: Scale, title: "Ind AS Compliance", description: "Adoption and compliance with Indian Accounting Standards for accurate financial reporting." },
      { icon: BarChart3, title: "GAAP Compliance", description: "Preparation and review of financial statements under US GAAP and other international frameworks." },
      { icon: Globe, title: "Offshore Banking Regulations", description: "Advisory on offshore banking compliance, FEMA, and RBI regulations for international operations." },
      { icon: ShieldCheck, title: "Compliance Management", description: "Comprehensive compliance calendar management and proactive regulatory monitoring." },
    ],
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
      }
    }
  }, [location]);

  return (
    <Layout>
      <SEO
        title="Services | KAMS & Co Chartered Accountants"
        description="Comprehensive CA services from KAMS & Co: Audit & Assurance, Corporate Advisory, Taxation Services, and Compliance & Regulatory management for businesses worldwide."
        schemaMarkup={servicesSchema}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(40 20% 98%) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
              Services We Offer
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mt-4 mb-6 leading-tight">
              Financial & Advisory Services
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg leading-relaxed font-sans font-light">
              From statutory audits and international taxation to corporate M&A advisory and offshore compliance — we cover every financial dimension of your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <div className="bg-background">
        {serviceCategories.map((category, catIndex) => (
          <section
            id={category.id}
            key={category.title}
            tabIndex={-1}
            style={{ scrollMarginTop: "6rem" }}
            className={cn(
              "py-24 border-b border-border/40",
              catIndex % 2 === 0 ? "bg-white" : "bg-secondary"
            )}
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 max-w-3xl"
              >
                <span className="text-accent font-semibold text-[10px] uppercase tracking-[0.25em]">
                  {String(catIndex + 1).padStart(2, "0")} — Service Area
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mt-2 mb-4">
                  {category.title}
                </h2>
                <div className="w-12 h-0.5 bg-accent mb-4" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {category.description}
                </p>
              </motion.div>

              {/* Directory-style list layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                {category.items.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="group border-l-2 border-accent/20 pl-5 py-1.5 hover:border-accent transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="w-4 h-4 text-accent/80 flex-shrink-0" />
                      <h3 className="font-serif text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed font-sans font-light">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden text-center">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(40 20% 98%) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground mb-6 leading-tight">
            Need Customized Advisory?
          </h2>
          <p className="text-primary-foreground/75 mb-10 max-w-xl mx-auto text-sm md:text-base font-light font-sans">
            Connect directly with our partners to evaluate your specific requirements and get a tailored solution.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-gold-dark text-accent-foreground hover:text-white text-xs uppercase tracking-wider font-semibold px-8 py-6 rounded-sm shadow-gold active:scale-[0.98]"
          >
            <Link to="/contact">
              Get Professional Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;