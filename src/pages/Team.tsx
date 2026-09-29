import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://kamsco.in/team/#breadcrumb",
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
          "name": "Our Team",
          "item": "https://kamsco.in/team"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://kamsco.in/team/#webpage",
      "url": "https://kamsco.in/team",
      "name": "Our Expert CA Team | KAMS & Co. Chartered Accountants",
      "description": "Meet the Chartered Accountant partners at KAMS & Co. — CA Mohan Lal Sharma, CA Akanksha Tripathi, CA Komal Sharma, and CA Krishan Kumar Sharma.",
      "breadcrumb": { "@id": "https://kamsco.in/team/#breadcrumb" }
    },
    {
      "@type": "Person",
      "name": "CA Mohan Lal Sharma",
      "jobTitle": "Partner, FCA",
      "worksFor": { "@id": "https://kamsco.in/#organization" },
      "telephone": "+91-97823-13223",
      "knowsAbout": ["GST Consultancy", "Accounting Advisory", "Income Tax Planning", "Tax Authority Representation"]
    },
    {
      "@type": "Person",
      "name": "CA Akanksha Tripathi",
      "jobTitle": "Partner, ACA",
      "worksFor": { "@id": "https://kamsco.in/#organization" },
      "telephone": "+91-98872-22002",
      "knowsAbout": ["Financial Auditing", "Financial Statement Preparation", "Cost Controlling", "Internal Control Systems"]
    },
    {
      "@type": "Person",
      "name": "CA Komal Sharma",
      "jobTitle": "Partner, ACA",
      "worksFor": { "@id": "https://kamsco.in/#organization" },
      "knowsAbout": ["International Taxation", "Cross-Border Accounting", "Offshore Account Management"]
    },
    {
      "@type": "Person",
      "name": "CA Krishan Kumar Sharma",
      "jobTitle": "Partner, ACA",
      "worksFor": { "@id": "https://kamsco.in/#organization" },
      "knowsAbout": ["Corporate Tax Compliance", "Financial Advisory", "Business Structuring", "Regulatory Compliance"]
    }
  ]
};

const partners = [
  {
    name: "Mohan Lal Sharma",
    fullName: "CA Mohan Lal Sharma",
    title: "Partner",
    credentials: "F.C.A. (India), M.COM., B. COM.",
    experience: "Post Qualification Experience of 5+ Years",
    initials: "MS",
    image: "/mohan.webp",
    phone: "+91-97823-13223",
    phoneHref: "tel:+919782313223",
    specializations: [
      "GST Consultancy & Compliances",
      "Accounting Consultancy",
      "Income Tax Planning & Compliances",
      "Representation Before Various Tax Authorities",
    ],
    usp: "Deep understanding of the Accounting & Controls landscape and experience in helping organizations to operate smoothly.",
    qualifications: ["FCA", "M.Com.", "B.Com."],
    accentDark: true,
  },
  {
    name: "Akanksha Tripathi",
    fullName: "CA Akanksha Tripathi",
    title: "Partner",
    credentials: "A.C.A. (India), B.COM.",
    experience: "Post Qualification Experience of 4 Years",
    initials: "AT",
    image: "/akanksha.webp",
    phone: "+91-98872-22002",
    phoneHref: "tel:+919887222002",
    specializations: [
      "Auditing",
      "Financial statement preparation",
      "Cost Controlling and Reduction",
      "Internal control",
      "Accounting services",
    ],
    usp: "Strong attention to detail and experience with financial audits across industries.",
    qualifications: ["ACA", "B.Com."],
    accentDark: false,
  },
  {
    name: "Komal Sharma",
    fullName: "CA Komal Sharma",
    title: "Partner",
    credentials: "A.C.A. (India), B.COM.",
    experience: "Post Qualification Experience of 3 Years",
    initials: "KS",
    image: "/komal.webp",
    phone: null,
    phoneHref: null,
    specializations: [
      "Managing complex offshore accounts",
      "International Taxation",
      "Cross-border accounting",
    ],
    usp: "Expertise in managing offshore organization structures and multi-jurisdictional tax planning.",
    qualifications: ["ACA", "B.Com."],
    accentDark: true,
  },
  {
    name: "Krishan Kumar Sharma",
    fullName: "CA Krishan Kumar Sharma",
    title: "Partner",
    credentials: "A.C.A. (India), B.COM.",
    experience: "Post Qualification Experience of 5+ Years",
    initials: "KR",
    image: "/krishan.webp",
    imageClassName: "scale-125 origin-top",
    phone: null,
    phoneHref: null,
    specializations: [
      "Corporate Tax Compliance",
      "Financial Advisory & Planning",
      "Business Structuring & Advisory",
      "Regulatory Compliance Management",
    ],
    usp: "Extensive expertise in corporate advisory and financial planning, helping businesses build robust compliance frameworks for long-term growth.",
    qualifications: ["ACA", "B.Com."],
    accentDark: false,
  },
];

const Team = () => {
  return (
    <Layout>
      <SEO
        title="Our Expert CA Team | KAMS & Co. Chartered Accountants"
        description="Meet the four expert Chartered Accountant partners at KAMS & Co. — CA Mohan Lal Sharma, CA Akanksha Tripathi, CA Komal Sharma, and CA Krishan Kumar Sharma."
        schemaMarkup={teamSchema}
      />

      {/* Hero Banner */}
      <section
        className="pt-28 lg:pt-32 pb-10 lg:pb-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #00365c 0%, #00487a 50%, #005a96 100%)" }}
      >
        <div className="absolute inset-0 pattern-dots opacity-[0.06] text-white pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold opacity-70" />
        <div className="absolute top-0 right-0 w-[500px] h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-eyebrow text-accent text-[11px] font-bold uppercase tracking-widest">Our Partners</span>
            <h1 className="text-display font-serif text-white mt-3 mb-4 leading-[1.04]">
              Meet the <span className="italic font-light text-accent">Team</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Four dedicated Chartered Accountants with complementary expertise — united by a commitment to delivering world-class financial services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <div className="bg-background">
        {partners.map((partner, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={partner.name}
              className={`py-10 lg:py-14 border-b border-border/40 ${isEven ? "bg-background" : "bg-secondary"
                }`}
            >
              <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-start ${!isEven ? "lg:[direction:rtl] [direction:ltr]" : ""
                    }`}
                >
                  {/* Avatar column */}
                  <div className="lg:col-span-4 lg:[direction:ltr]">
                    <div className="bg-primary rounded-2xl text-center relative overflow-hidden shadow-xl border border-white/10 flex flex-col">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-accent/8 rounded-full blur-2xl pointer-events-none" />

                      {/* Top Media: Full space photo or monogram */}
                      {partner.image ? (
                        <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-navy-lighter group">
                          <img
                            src={partner.image}
                            alt={`CA ${partner.name} - Partner at KAMS & Co.`}
                            width="400"
                            height="400"
                            loading="lazy"
                            decoding="async"
                            className={`w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 ${partner.imageClassName || ""}`}
                          />
                          {/* Gradient transition to card content */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                        </div>
                      ) : (
                        <div className="pt-10 pb-2 relative z-10">
                          <div className="absolute inset-0 pattern-dots opacity-[0.04] text-white pointer-events-none" />
                          <div
                            className={`w-28 h-28 mx-auto rounded-xl flex items-center justify-center shadow-gold animate-float ${partner.accentDark ? "bg-gradient-gold" : "bg-navy-lighter border border-white/20"
                              }`}
                            style={{ animationDelay: `${index * 0.6}s` }}
                          >
                            <span className="font-serif font-bold text-4xl text-white">{partner.initials}</span>
                          </div>
                        </div>
                      )}

                      {/* Content under photo/monogram */}
                      <div className="p-8 relative z-10 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-eyebrow text-accent text-[10px]">{partner.title}</span>
                          <h3 className="font-serif text-2xl text-white font-medium mt-2 mb-1">
                            CA {partner.name}
                          </h3>
                          <p className="text-white/50 text-sm font-sans mb-6">{partner.credentials}</p>

                          {/* Qualification badges */}
                          <div className="flex justify-center flex-wrap gap-2 mb-6">
                            {partner.qualifications.map((q) => (
                              <span key={q}
                                className="px-3 py-1.5 bg-white/8 border border-white/15 text-white/75 text-[10px] uppercase tracking-wider font-semibold rounded-sm">
                                {q}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          {/* Experience */}
                          <div className="border-t border-white/10 pt-5 mb-4">
                            <p className="text-eyebrow text-white/35 text-[9px] mb-1">Experience</p>
                            <p className="text-white/70 text-sm font-sans font-light">{partner.experience}</p>
                          </div>

                          {/* Phone */}
                          {partner.phone && (
                            <a href={partner.phoneHref!}
                              className="inline-flex items-center gap-2 text-accent hover:text-gold-light transition-colors text-sm font-semibold">
                              <Phone className="w-3.5 h-3.5" />
                              {partner.phone}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detail column */}
                  <div className="lg:col-span-8 lg:[direction:ltr]">
                    <span className="text-eyebrow text-accent text-[11px]">Partner Profile</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground mt-3 mb-2 leading-tight">
                      {partner.name}
                    </h2>
                    <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-6">
                      {partner.credentials}
                    </p>
                    <div className="w-14 h-[3px] bg-gradient-gold mb-10 rounded-full" />

                    {/* Specializations */}
                    <div className="mb-10">
                      <h4 className="text-eyebrow text-muted-foreground text-[10px] mb-6">Areas of Specialization</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {partner.specializations.map((spec) => (
                          <div key={spec}
                            className="flex items-start gap-3 p-4 bg-card border border-border/50 rounded-lg hover:border-accent/30 hover:shadow-card transition-all duration-300 group">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm font-sans font-light leading-snug group-hover:text-foreground transition-colors">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* USP */}
                    <div className="bg-gradient-section border border-border/60 rounded-lg p-7 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold rounded-l-lg" />
                      <p className="text-eyebrow text-accent text-[10px] mb-3 pl-5">Unique Selling Point</p>
                      <p className="text-foreground/75 text-base leading-relaxed font-serif font-light italic pl-5">
                        "{partner.usp}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-24 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-[0.05] text-white pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-eyebrow text-accent text-[11px]">Work With Our Partners</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mt-4 mb-6">
              Let's Build Something<br />
              <span className="italic text-white/65">Together</span>
            </h2>
            <p className="text-white/55 mb-10 max-w-xl mx-auto text-lg font-light font-sans leading-relaxed">
              Schedule a consultation to discuss how KAMS & Co. can support your business financial needs.
            </p>
            <Button asChild size="lg"
              className="bg-accent hover:bg-gold-dark text-accent-foreground hover:text-white text-xs uppercase tracking-widest font-bold px-10 py-7 rounded-sm shadow-gold active:scale-[0.98]">
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
