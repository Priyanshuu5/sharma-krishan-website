import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Award, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "CA Mohan Lal Sharma",    credentials: "FCA, M.Com., B.Com.", initials: "MS" },
  { name: "CA Akanksha Tripathi",   credentials: "ACA, B.Com.",          initials: "AT" },
  { name: "CA Komal Sharma",        credentials: "ACA, B.Com.",          initials: "KS" },
  { name: "CA Krishan Kumar Sharma",credentials: "ACA, B.Com.",          initials: "KR" },
];

const stats = [
  { value: 200, suffix: "+", label: "SMEs Served" },
  { value: 12,  suffix: "+", label: "Years Combined" },
  { value: 4,   suffix: "",  label: "Expert Partners" },
  { value: 15,  suffix: "+", label: "Industries Served" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1500;
        const tick = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 4)) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemV = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #00365c 0%, #00487a 50%, #005a96 100%)" }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-100 pointer-events-none" />

      {/* Soft glow orbs */}
      <div className="absolute -top-20 right-0 w-[600px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1a80b8 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8920A 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-44 pb-24 lg:pt-52 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Content */}
          <motion.div
            variants={containerV}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <motion.div variants={itemV} className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded border border-white/20 bg-white/8">
                <Award className="w-3.5 h-3.5" style={{ color: "#E8920A" }} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">
                  ICAI Registered Firm · India
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemV}
              className="font-serif text-white leading-[1.06] mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", letterSpacing: "-0.025em" }}
            >
              KAMS <span style={{ color: "#E8920A" }}>&</span> Co<br />
              <span className="font-light text-white/80">Chartered</span>{" "}
              <span className="font-light italic text-white/65">Accountants</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemV}
              className="text-white/65 leading-relaxed mb-10 max-w-[520px]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 300 }}
            >
              A diverse team of Chartered Accountants delivering world-class advisory in
              taxation, audit, compliance, and strategic planning — helping businesses
              navigate complex financial landscapes with precision and integrity.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemV} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-bold px-9 py-4.5 rounded text-white transition-all active:scale-[0.98] shadow-lg hover:opacity-90"
                style={{ background: "#E8920A", padding: "14px 36px" }}
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest font-bold px-9 py-4.5 rounded text-white border border-white/25 bg-white/8 hover:bg-white/15 transition-all"
                style={{ padding: "14px 36px" }}
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={itemV} className="pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3">
              {["GST & International Tax", "Statutory & Internal Audits", "Offshore & Cross-Border Advisory"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#E8920A" }} />
                  <span className="text-white/60 text-xs font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Partner Cards */}
          <div className="lg:col-span-5 relative">
            {/* Firm Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white/10 border border-white/20 rounded-xl p-5 mb-3 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center font-serif font-bold text-lg text-white shadow-lg flex-shrink-0"
                    style={{ background: "#E8920A" }}>
                    K
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white text-sm tracking-wide">KAMS & Co</p>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold mt-0.5" style={{ color: "#E8920A" }}>Chartered Accountants</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" style={{ color: "#E8920A" }} />
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/60">FCA India</span>
                </div>
              </div>
            </motion.div>

            {/* 4 Partner mini-cards */}
            <div className="space-y-2.5">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 + 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4 }}
                  className="bg-white/8 border border-white/15 rounded-xl p-4 flex items-center gap-4 hover:bg-white/14 hover:border-white/30 transition-all duration-300 group cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 animate-float text-white font-serif font-bold text-sm"
                    style={{
                      background: i % 2 === 0 ? "#E8920A" : "rgba(255,255,255,0.15)",
                      animationDelay: `${i * 0.7}s`,
                    }}
                  >
                    {p.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-semibold text-white text-sm truncate group-hover:text-gold-light transition-colors" style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.80)" }}>
                      {p.name}
                    </p>
                    <p className="text-[10px] text-white/45 font-sans mt-0.5">{p.credentials}</p>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-white/40 flex-shrink-0">Partner</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-y-8"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`${i < 3 ? "md:border-r border-white/10" : ""} md:px-10 first:pl-0 last:pr-0`}>
              <div className="font-serif font-light text-white tabular-nums" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
