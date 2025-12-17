import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  FileText, 
  ClipboardCheck, 
  Building2, 
  Briefcase, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "taxation",
    icon: Calculator,
    title: "Income Tax Services",
    description: "Comprehensive income tax planning, filing, and compliance services for individuals and businesses.",
    features: [
      "Tax planning and advisory",
      "Income tax return filing",
      "Tax audit and assessment",
      "Appeal representation",
      "TDS compliance and returns",
      "Advance tax calculations"
    ]
  },
  {
    id: "gst",
    icon: FileText,
    title: "GST Services",
    description: "End-to-end GST registration, compliance, and advisory services to ensure seamless operations.",
    features: [
      "GST registration",
      "Monthly/quarterly GST returns",
      "GST audit and reconciliation",
      "E-way bill compliance",
      "Input tax credit optimization",
      "GST refund claims"
    ]
  },
  {
    id: "audit",
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description: "Professional statutory and internal audit services with detailed analysis and reporting.",
    features: [
      "Statutory audit",
      "Internal audit",
      "Tax audit",
      "Stock audit",
      "Concurrent audit",
      "Management audit"
    ]
  },
  {
    id: "rera",
    icon: Building2,
    title: "RERA Compliance",
    description: "Specialized Real Estate Regulatory Authority compliance services for developers and agents.",
    features: [
      "RERA project registration",
      "Quarterly compliance reports",
      "Annual audit reports",
      "Agent registration",
      "Documentation support",
      "Regulatory advisory"
    ]
  },
  {
    id: "registration",
    icon: Briefcase,
    title: "Company Registration",
    description: "Complete company incorporation and registration services with ongoing compliance support.",
    features: [
      "Private limited company",
      "LLP registration",
      "Partnership firm",
      "Proprietorship registration",
      "Trust & society registration",
      "ROC compliance"
    ]
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Strategic financial planning and consulting services to drive business growth and stability.",
    features: [
      "Business valuation",
      "Financial planning",
      "Investment advisory",
      "Project finance",
      "Working capital management",
      "Due diligence"
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Professional Financial Services
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              From taxation to compliance, we offer comprehensive financial services 
              tailored to meet your personal and business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-dark shadow-gold">
                    <Link to="/contact">
                      Get Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                        <service.icon className="w-12 h-12 text-accent" />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Every business is unique. Contact us to discuss your specific requirements 
            and get a tailored solution.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-navy-light text-primary-foreground">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
