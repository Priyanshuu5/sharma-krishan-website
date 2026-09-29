import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Globe, Target, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutPoints = [
  {
    icon: Users,
    title: "Diverse Expert Team",
    description: "A diverse team of Chartered Accountants with combined experience in finance, taxation, compliance, advisory, and cost management — each partner bringing unique depth.",
  },
  {
    icon: Star,
    title: "Unique Specializations",
    description: "From statutory audits and offshore accounting to GST advisory, international taxation, and cross-border structuring — we cover every financial dimension.",
  },
  {
    icon: Globe,
    title: "World-Class Services",
    description: "Our goal is to provide world-class services to clients worldwide, helping businesses navigate complex financial, taxation, and compliance challenges.",
  },
  {
    icon: Target,
    title: "Results-Driven Commitment",
    description: "A commitment to delivering results, ensuring regulatory compliance, and driving sustainable business success — every client, every engagement.",
  },
];

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemV = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function AboutSection() {
  return (
    <section className="py-28 lg:py-36 bg-background border-b border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: editorial heading ── */}
          <motion.div
            variants={containerV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <motion.span variants={itemV} className="text-eyebrow text-accent text-[11px]">
              About KAMS & Co
            </motion.span>

            <motion.h2 variants={itemV} className="text-headline font-serif text-foreground mt-4 mb-6">
              Who We Are
            </motion.h2>

            <motion.div variants={itemV} className="w-16 h-[3px] bg-gradient-gold mb-8 rounded-full" />

            <motion.p variants={itemV} className="text-muted-foreground text-lg font-light leading-relaxed mb-10 max-w-md">
              KAMS & Co is a firm built on a singular belief: that every business deserves expert financial guidance that is strategic, transparent, and deeply personal.
            </motion.p>

            <motion.div variants={itemV}>
              <Button asChild size="lg"
                className="bg-primary hover:bg-navy-light text-primary-foreground text-xs uppercase tracking-widest font-bold px-8 py-7 rounded-sm active:scale-[0.98] shadow-md">
                <Link to="/team">
                  Meet Our Partners <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: 4-point grid + mission box ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {/* 4 About Points in 2-col grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {aboutPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group bg-card border border-border/60 rounded-lg p-7 hover:border-accent/40 hover:shadow-card-hover transition-all duration-350 spotlight-border"
                >
                  <div className="w-10 h-10 rounded bg-accent/8 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:border-accent transition-all duration-300 flex-shrink-0">
                    <point.icon className="w-4.5 h-4.5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h4 className="font-sans font-semibold text-foreground text-base mb-2 leading-snug">{point.title}</h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission statement block */}
            <div className="bg-primary rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {[
                    "Navigate complex tax challenges",
                    "Full regulatory compliance",
                    "Drive measurable growth",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/70 text-xs font-sans leading-none hidden sm:inline">{pt}</span>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-2 border-accent pl-5">
                  <p className="text-primary-foreground/80 text-base italic font-serif font-light leading-relaxed">
                    "A commitment to delivering results, ensuring regulatory compliance, and driving business success — for every client, every engagement."
                  </p>
                  <footer className="mt-3">
                    <span className="text-eyebrow text-accent text-[10px]">— KAMS & Co, Core Philosophy</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
