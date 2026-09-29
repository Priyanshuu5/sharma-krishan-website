import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardCheck, TrendingUp, Calculator, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description: "Statutory audits, internal audits, and compliance audits with rigorous risk assessment, internal controls review, and fraud prevention frameworks.",
    tags: ["Statutory Audit", "Internal Audit", "Risk Assessment", "Fraud Prevention"],
    href: "/services#audit-assurance",
    featured: true,
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Corporate Advisory & Strategic Planning",
    description: "Business structure advisory, mergers & acquisitions, cross-border advisory, fundraising support, and IPO readiness for global listings.",
    tags: ["M&A Advisory", "IPO Readiness", "Cross-Border", "Fundraising"],
    href: "/services#corporate-advisory",
    featured: false,
  },
  {
    number: "03",
    icon: Calculator,
    title: "Taxation Services",
    description: "Income Tax advisory, corporate tax compliance, international tax structuring, and comprehensive GST advisory for domestic and cross-border transactions.",
    tags: ["Income Tax", "Corporate Tax", "International Tax", "GST Advisory"],
    href: "/services#taxation-services",
    featured: false,
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Compliance & Regulatory Services",
    description: "Regulatory reporting, corporate filings, accounting standards compliance (Ind AS, GAAP), and offshore banking regulation management.",
    tags: ["Ind AS / GAAP", "Corporate Filings", "Offshore Banking", "Regulatory Reporting"],
    href: "/services#compliance-regulatory",
    featured: false,
  },
];

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function ServicesPreview() {
  return (
    <section className="py-28 lg:py-36 bg-secondary border-b border-border/40">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header — large editorial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <span className="text-eyebrow text-accent text-[11px]">Services We Offer</span>
            <h2 className="text-headline font-serif text-foreground mt-4 mb-0">
              Comprehensive<br />
              <span className="italic font-light text-foreground/75">Financial & Advisory</span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <div className="w-12 h-[3px] bg-gradient-gold mb-5 rounded-full" />
            <p className="text-muted-foreground text-base font-light leading-relaxed">
              Tailored solutions designed to guarantee regulatory compliance, minimize tax liabilities, and accelerate business growth worldwide.
            </p>
          </div>
        </motion.div>

        {/* Services Grid — asymmetric 2+2 */}
        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={service.href}
                className={`group relative block h-full rounded-lg border transition-all duration-350 overflow-hidden ${
                  service.featured
                    ? "bg-primary border-transparent hover:border-accent/30 shadow-lg"
                    : "bg-card border-border/60 hover:border-accent/30 hover:shadow-card-hover spotlight-border"
                }`}
              >
                {/* Service content */}
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  {/* Number + icon row */}
                  <div className="flex items-start justify-between mb-8">
                    <span className={`font-mono text-4xl font-light leading-none tracking-tighter ${
                      service.featured ? "text-white/15" : "text-foreground/10"
                    }`}>
                      {service.number}
                    </span>
                    <div className={`w-12 h-12 rounded border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      service.featured
                        ? "bg-accent/20 border-accent/30 group-hover:bg-accent group-hover:border-accent"
                        : "bg-accent/8 border-accent/20 group-hover:bg-accent group-hover:border-accent"
                    }`}>
                      <service.icon className={`w-5 h-5 transition-colors ${
                        service.featured
                          ? "text-accent group-hover:text-accent-foreground"
                          : "text-accent group-hover:text-accent-foreground"
                      }`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-serif text-2xl font-medium mb-4 leading-snug transition-colors ${
                    service.featured
                      ? "text-white group-hover:text-accent"
                      : "text-foreground group-hover:text-accent"
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-base leading-relaxed mb-8 flex-1 font-light ${
                    service.featured ? "text-white/65" : "text-muted-foreground"
                  }`}>
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-sm border ${
                          service.featured
                            ? "bg-white/8 border-white/15 text-white/70"
                            : "bg-secondary border-border/60 text-foreground/60"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA arrow link */}
                  <div className={`flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-widest transition-all ${
                    service.featured ? "text-accent" : "text-accent"
                  }`}>
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Featured: decorative corner accent */}
                {service.featured && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/6 rounded-full blur-2xl pointer-events-none" />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-left mt-14"
        >
          <Button asChild size="lg"
            className="bg-primary hover:bg-navy-light text-primary-foreground text-xs uppercase tracking-widest font-bold px-8 py-7 rounded-sm shadow-md">
            <Link to="/services">
              View All Services <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}