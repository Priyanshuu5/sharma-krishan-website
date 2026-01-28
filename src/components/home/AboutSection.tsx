import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Expert team of qualified Chartered Accountants",
  "Personalized attention to every client",
  "Transparent and competitive pricing",
  "8+ years of industry experience",
  "100% compliance and accuracy guaranteed",
  "End-to-end financial solutions",
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Decorative Background */}
              <div className="aspect-[4/3] bg-gradient-navy rounded-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="font-serif text-gold text-4xl font-bold">KS</span>
                    </div>
                    <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-2">
                      CA Krishan Kumar Sharma
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">Founder & Managing Partner</p>
                    <div className="mt-4 flex justify-center gap-2">
                      <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">B.Com</span>
                      <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">FCA</span>
                      <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">DISA</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-8 -right-4 lg:right-8 bg-card shadow-xl rounded-xl p-4 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-serif text-accent text-xl font-bold">18+</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Years of</p>
                  <p className="text-muted-foreground text-sm">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Financial Partners
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded by CA Krishan Kumar Sharma, our firm has been providing exceptional 
              financial services since 2017. We combine deep expertise with a client-centric 
              approach to deliver solutions that drive success and ensure compliance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of qualified professionals specializes in taxation, audit, RERA compliance, 
              and financial advisory services. We take pride in building lasting relationships 
              with our clients based on trust, transparency, and excellence.
            </p>

            {/* Features List */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark shadow-gold">
              <Link to="/team">
                Meet Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
