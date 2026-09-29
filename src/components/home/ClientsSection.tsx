import { motion } from "framer-motion";

const clients = [
  "POWERCON VENTURES PRIVATE LIMITED",
  "HOTEL HIGHWAY",
  "BRAHMKING FOODS PRIVATE LIMITED",
  "BHANDARI HOSPITALS PRIVATE LIMITED",
  "RAMA EYECARE HOSPITAL PRIVATE LIMITED",
  "GBG COLONIZERS PRIVATE LIMITED",
  "CURRENT INFRAPROJECTS LIMITED",
  "SOLARITHM ENERGY SOLUTIONS PRIVATE LIMITED",
  "SURDHAN CREATIONS (MIRAYAZ GROUP)",
  "SWASTIK SALES CORPORATION",
  "CODENOVA.AI PRIVATE LIMITED",
  "SHRI HARI BHOOMI DEVELOPERS",
  "AROGYALAXMI HEALTHCARE PRIVATE LIMITED",
  "AIRWAY HEALTHCARE",
  "ACADEMY OF DESIGNERS",
  "SRD GROUP",
];

const row1 = [...clients, ...clients];
const row2 = [...clients.slice(6), ...clients.slice(0, 6), ...clients.slice(6), ...clients.slice(0, 6)];

export function ClientsSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden border-b border-border/10">
      {/* Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-[0.05] text-white pointer-events-none" />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-eyebrow text-accent text-[11px]">Proven Client Partnerships</span>
            <h2 className="text-headline font-serif text-white mt-4">
              Trusted by<br />
              <span className="italic font-light text-white/70">Leading Businesses</span>
            </h2>
          </div>
          <div className="md:max-w-sm">
            <div className="w-12 h-[3px] bg-gradient-gold mb-5 rounded-full" />
            <p className="text-white/55 text-base font-light leading-relaxed">
              From healthcare to infrastructure, energy to education — we serve 200+ businesses across India and beyond.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee Container ── */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        {/* Row 1 — forward */}
        <div className="mb-5 overflow-hidden py-2">
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{ animation: "marquee 42s linear infinite" }}
          >
            {row1.map((client, i) => (
              <div key={`r1-${i}`} className="flex items-center flex-shrink-0">
                <span className="text-sm font-sans font-semibold uppercase tracking-[0.14em] text-white/50 hover:text-accent transition-colors cursor-default px-6">
                  {client}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0 mx-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — reverse, slightly larger text */}
        <div className="overflow-hidden py-2">
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{ animation: "marqueeReverse 52s linear infinite" }}
          >
            {row2.map((client, i) => (
              <div key={`r2-${i}`} className="flex items-center flex-shrink-0">
                <span className="text-base font-sans font-bold uppercase tracking-[0.12em] text-white/35 hover:text-accent transition-colors cursor-default px-6">
                  {client}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent/35 flex-shrink-0 mx-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Client Count Badge + CTA ── */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10"
        >
          {/* Client count display */}
          <div className="flex items-center gap-6">
            <div>
              <div className="text-5xl font-serif font-light text-white">200<span className="text-accent">+</span></div>
              <div className="text-eyebrow text-white/40 text-[10px] mt-1">SMEs Served Across India</div>
            </div>
            <div className="w-px h-14 bg-white/15" />
            <div>
              <div className="text-5xl font-serif font-light text-white">16<span className="text-accent">+</span></div>
              <div className="text-eyebrow text-white/40 text-[10px] mt-1">Featured Partners Listed</div>
            </div>
            <div className="w-px h-14 bg-white/15 hidden sm:block" />
            <p className="text-white/40 text-sm font-light italic hidden sm:block max-w-[200px]">
              "And many more businesses across diverse industries..."
            </p>
          </div>

          {/* "And many more" pill */}
          <span className="inline-block text-eyebrow text-accent border border-accent/35 px-6 py-3 rounded-sm text-[10px] hover:bg-accent/8 transition-colors cursor-default">
            And Many More...
          </span>
        </motion.div>
      </div>
    </section>
  );
}
