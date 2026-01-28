import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { 
  Calculator, 
  FileText, 
  ClipboardCheck, 
  Building2, 
  Briefcase, 
  TrendingUp,
  ArrowRight,
  Globe,
  Users,
  Landmark,
  Sprout,
  User,
  Handshake,
  Utensils,
  Plane,
  Heart,
  ShieldCheck,
  Copyright,
  PenTool,
  Lightbulb,
  FileCheck,
  BookOpen,
  Scale,
  LineChart,
  Coins,
  PieChart
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    title: "Business Registrations",
    description: "Start your journey with the right legal structure.",
    items: [
      { icon: Globe, title: "Foreign Company Registration", description: "For setting up a foreign company to establish business as a subsidiary in India." },
      { icon: Building2, title: "Private Limited Company", description: "The most popular form of corporate legal entity in India for Startups." },
      { icon: Users, title: "Public Limited Company", description: "Suitable for businesses that want to raise equity capital from the public." },
      { icon: Handshake, title: "LLP Registration", description: "An ideal approach for small business in the unorganized sector having multiple promoters." },
      { icon: Landmark, title: "Nidhi Company", description: "Develop the habit of economizing by collecting deposits and lending to members." },
      { icon: Sprout, title: "Producer Company", description: "Ideal for starting the company for farmers for agri purpose with 10 members." },
      { icon: User, title: "One Person Company", description: "Business Entity ideal for single entrepreneurs aiming to start business with limited liability." },
      { icon: Users, title: "Partnership Registration", description: "Ideal for like-minded people for forming an entity with less procedural compliances." },
      { icon: FileText, title: "GST Registration", description: "GST Registration is applicable on goods (Turnover: 40 lakhs) and services (Turnover: 20 lakh)." },
      { icon: Utensils, title: "FSSAI Food License", description: "Food License for food entrepreneurs as a basic, state or Central License." },
      { icon: Plane, title: "Import Export Code (IEC)", description: "Entrepreneurs/Entities planning to work overseas need to have Import Export Code." },
      { icon: Building2, title: "RERA Registrations", description: "Commercial or residential land of over 500sq m or having more than 8 apartments." },
    ]
  },
  {
    title: "NGO & Trust Services",
    description: "Legal support for non-profit and charitable organizations.",
    items: [
      { icon: Heart, title: "Trust Registration", description: "A Trust is an arrangement where owner transfers the property to a trustee." },
      { icon: Users, title: "Society Registration", description: "Group of people working together to promote charitable activities like sports, music, culture, etc." },
      { icon: Briefcase, title: "Section-8 Company", description: "Company formed with an object to promote commerce, art, science, charity, etc." },
      { icon: Globe, title: "FCRA Registration", description: "Foreign contributions or income from nations outside of India are governed by FCRA." },
    ]
  },
  {
    title: "Intellectual Property Rights",
    description: "Protect your brand, inventions, and creative works.",
    items: [
      { icon: ShieldCheck, title: "Trademark Registration", description: "Register your brand name/logo and create your goodwill in the market." },
      { icon: Copyright, title: "Copyright Registration", description: "Copyright is the legal right to ownership and enjoyment entitled to creators." },
      { icon: PenTool, title: "Design Registration", description: "Protect any newly created shape, configuration, patterns and composition of lines or colours." },
      { icon: Lightbulb, title: "Patent Registration", description: "Secured invention or the special right given to an inventor to manufacture, sell or use invention." },
    ]
  },
  {
    title: "Audit & Tax Management",
    description: "Comprehensive compliance and assurance services.",
    items: [
      { icon: FileCheck, title: "ITR Filing", description: "Filing information about Income and tax payable to the Income Tax Department." },
      { icon: BookOpen, title: "ROC Filing", description: "Annual General Meeting conduct and annual return filing for companies." },
      { icon: FileText, title: "GST Return", description: "Mandatory filing of GST returns for all businesses registered under GST." },
      { icon: Calculator, title: "TDS Return", description: "Quarterly statement to be submitted to the IT department by the Deductor." },
      { icon: ClipboardCheck, title: "GST Audit", description: "Examination of the returns, records and other important documents maintained by taxable individuals." },
      { icon: Landmark, title: "Bank Audit", description: "Monitoring and reviewing huge amounts of public deposits and savings." },
      { icon: Heart, title: "NGO Audit", description: "Audit for non-profits raising funds from members, donors or contributors." },
      { icon: Scale, title: "Tax Audit", description: "Various types of audits under different laws such as company audit, statutory audit, etc." },
    ]
  },
  {
    title: "Financial Advisory",
    description: "Strategic planning to drive business growth and stability.",
    items: [
      { icon: TrendingUp, title: "Business Valuation", description: "Determining the economic value of a business or company unit." },
      { icon: LineChart, title: "Financial Planning", description: "Comprehensive strategies for long-term financial health and growth." },
      { icon: Coins, title: "Investment Advisory", description: "Expert guidance on investment opportunities and portfolio management." },
      { icon: PieChart, title: "Project Finance", description: "Funding of long-term infrastructure and industrial projects." },
      { icon: Briefcase, title: "Due Diligence", description: "Detailed audit of a potential investment or product to confirm facts." },
    ]
  }
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // slight delay to ensure layout/anchors are present
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // for accessibility, move focus
          // @ts-ignore
          if (typeof el.focus === 'function') el.focus();
        }, 60);
      }
    }
  }, [location]);

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
              Comprehensive Professional Services
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              From company incorporation and intellectual property to complex audits and financial advisory, we offer end-to-end solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <div className="bg-background">
        {serviceCategories.map((category, catIndex) => {
          // create a URL-safe slug (remove special chars, collapse dashes)
          const slug = category.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/(^-|-$)/g, '');
          return (
          <section id={slug} key={category.title} tabIndex={-1} style={{ scrollMarginTop: '6rem' }} className={`py-16 ${catIndex % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          )
        })}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 mix-blend-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            Connect with our experts to discuss your specific requirements and find the perfect solution for your business.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground shadow-lg shadow-gold/20">
            <Link to="/contact">
              Get Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;