import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Rocket, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    name: "Mohan Lal Sharma",
    title: "Partner, FCA",
    phone: "+91-97823-13223",
    href: "tel:+919782313223",
    initials: "MS",
    image: "/mohan.jpg",
    dark: true,
  },
  {
    name: "Akanksha Tripathi",
    title: "Partner, ACA",
    phone: "+91-98872-22002",
    href: "tel:+919887222002",
    initials: "AT",
    image: "/akanksha.jpg",
    dark: false,
  },
];

export function CTASection() {
  return (
    <section className="py-28 lg:py-36 bg-background border-t border-border/40 relative overflow-hidden">
      {/* Subtle warm pattern */}
      <div className="absolute inset-0 pattern-dots opacity-[0.025] text-foreground pointer-events-none" />
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated icon */}
            <div className="flex justify-center mb-10">
              <div className="w-16 h-16 rounded-full bg-accent/8 border border-accent/20 flex items-center justify-center"
                style={{ animation: "pulseGold 2.5s ease-in-out infinite" }}>
                <Rocket className="w-7 h-7 text-accent" />
              </div>
            </div>

            <span className="text-eyebrow text-accent text-[11px]">Looking Forwards</span>

            <h2 className="text-headline font-serif text-foreground mt-5 mb-6">
              Excited About the<br />
              <span className="italic font-light text-foreground/60">Potential for Mutual Growth</span>
            </h2>

            <div className="w-16 h-[3px] bg-gradient-gold mx-auto mb-8 rounded-full" />

            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              We are excited about the potential for mutual growth, shared success, and the opportunity to offer unparalleled services to our clients worldwide. Together, we can achieve great things.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg"
                className="bg-primary hover:bg-navy-light text-primary-foreground text-xs uppercase tracking-widest font-bold px-10 py-7 rounded-sm shadow-lg active:scale-[0.98]">
                <Link to="/contact">
                  Start the Conversation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="border-border/80 text-foreground hover:bg-secondary hover:border-accent/40 text-xs uppercase tracking-widest font-bold px-10 py-7 rounded-sm">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Contact Cards */}
            <div className="pt-12 border-t border-border/50">
              <p className="text-eyebrow text-muted-foreground text-[10px] mb-8">
                Reach Our Partners Directly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {contacts.map((contact) => (
                  <motion.a
                    key={contact.name}
                    href={contact.href}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="flex items-center gap-5 p-6 bg-card border border-border/60 rounded-xl hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 group text-left min-w-[240px]"
                  >
                    {"image" in contact && contact.image ? (
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-border/40 shadow-sm"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-gold ${
                        contact.dark ? "bg-gradient-gold" : "bg-primary"
                      }`}>
                        <span className="font-serif font-bold text-base text-white">{contact.initials}</span>
                      </div>
                    )}
                    <div>
                      <p className="text-eyebrow text-muted-foreground text-[9px] mb-1">{contact.title}</p>
                      <p className="text-base font-semibold text-foreground font-sans group-hover:text-accent transition-colors leading-tight">
                        {contact.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-accent flex-shrink-0" />
                        {contact.phone}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Email CTA */}
              <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@kamsco.in" className="hover:text-accent transition-colors font-sans">
                  info@kamsco.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
