import { motion } from "framer-motion";
import { Users, TrendingUp, Heart, Layers } from "lucide-react";

const pillars = [
  {
    icon: Users,
    number: "01",
    title: "Highly Skilled & Experienced Team",
    description: "A unique blend of skills across audit, accounting, offshore banking, taxation, and corporate advisory — giving you comprehensive expertise under one roof.",
    stat: "4 Expert Partners",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Proven Track Record",
    description: "Trusted advisors to 200+ SMEs across diverse industries. Our clients' sustained success is our most compelling credential.",
    stat: "200+ SMEs Served",
  },
  {
    icon: Heart,
    number: "03",
    title: "Client-Centric Approach",
    description: "Tailored solutions for businesses of all sizes, ensuring maximum value and efficiency. Deep commitment to ethical practices and absolute client satisfaction.",
    stat: "Ethics-First Always",
  },
  {
    icon: Layers,
    number: "04",
    title: "End-to-End Financial Solutions",
    description: "All-in-one financial and compliance management — from incorporation to international taxation. Every financial dimension of your business, handled expertly.",
    stat: "Full-Spectrum Service",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-28 lg:py-36 bg-background border-b border-border/40 relative overflow-hidden">
      {/* Soft ambient gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header — horizontal editorial split */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div>
            <span className="text-eyebrow text-accent text-[11px]">Why KAMS & Co.</span>
            <h2 className="text-headline font-serif text-foreground mt-4">
              Why Choose<br />
              <span className="italic font-light text-foreground/60">Our Firm?</span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <div className="w-12 h-[3px] bg-gradient-gold mb-5 rounded-full" />
            <p className="text-muted-foreground text-base font-light leading-relaxed">
              Four reasons that set KAMS & Co. apart from the field — and why 200+ businesses trust us.
            </p>
          </div>
        </motion.div>

        {/* 4 Pillars — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card border border-border/60 rounded-lg p-8 lg:p-10 hover:border-accent/40 hover:shadow-card-hover transition-all duration-350 spotlight-border overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-mono text-6xl font-light text-foreground/4 select-none pointer-events-none leading-none">
                {pillar.number}
              </span>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded border border-accent/20 bg-accent/6 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <pillar.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-light mb-5">
                    {pillar.description}
                  </p>
                  <span className="inline-block text-eyebrow text-accent border border-accent/25 px-4 py-2 rounded-sm text-[10px] bg-accent/4 group-hover:bg-accent/8 transition-colors">
                    {pillar.stat}
                  </span>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
