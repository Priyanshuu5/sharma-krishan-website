import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText, 
  Calculator, 
  Building2, 
  ClipboardCheck, 
  Briefcase, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calculator,
    title: "Income Tax Services",
    description: "Expert tax planning, filing, and compliance services for individuals and businesses.",
    href: "/services#taxation",
  },
  {
    icon: FileText,
    title: "GST Services",
    description: "Complete GST registration, filing, and advisory services to ensure compliance.",
    href: "/services#gst",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description: "Comprehensive statutory and internal audits with detailed reporting.",
    href: "/services#audit",
  },
  {
    icon: Building2,
    title: "RERA Compliance",
    description: "Specialized services for real estate regulatory compliance and documentation.",
    href: "/services#rera",
  },
  {
    icon: Briefcase,
    title: "Company Registration",
    description: "End-to-end company incorporation and registration services.",
    href: "/services#registration",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Strategic financial planning and consulting for business growth.",
    href: "/services#advisory",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions tailored to meet your personal and business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={service.href}
                className="group block h-full bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <span className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-navy-light text-primary-foreground">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
