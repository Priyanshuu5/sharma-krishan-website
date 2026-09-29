import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/help-center", label: "Help Center" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — like dhirenshahandco.com */}
      <div
        className="hidden lg:block"
        style={{ background: "#00365c" }}
      >
        <div className="container mx-auto px-6 max-w-7xl py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="mailto:info@kamsco.in"
              className="flex items-center gap-2 text-white/75 hover:text-white text-xs transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-light" />
              info@kamsco.in
            </a>
            <a href="tel:+919782313223"
              className="flex items-center gap-2 text-white hover:text-gold-light text-sm font-bold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-light" />
              +91 97823-13223
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/50 text-[10px] uppercase tracking-widest font-medium">ICAI Registered Firm</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={cn(
        "transition-all duration-400",
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/98 border-b border-gray-100 py-4"
      )}>
        <div className="container mx-auto px-6 max-w-7xl">
          <nav className="flex items-center justify-between">

            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded flex items-center justify-center font-serif font-bold text-lg text-white transition-all duration-300 shadow-md"
                style={{ background: "#00365c" }}>
                K
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[15px] font-extrabold tracking-wide leading-none text-teal" style={{ color: "#00365c" }}>
                  KAMS & Co
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold mt-0.5" style={{ color: "#E8920A" }}>
                  Chartered Accountants
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 relative py-2 hover:text-teal",
                      isActive ? "text-teal" : "text-foreground/65"
                    )}
                    style={{ ...(isActive ? { color: "#00365c" } : {}) }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: "#00365c" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="text-[11px] uppercase tracking-widest font-bold px-7 py-3.5 rounded text-white transition-all active:scale-[0.98] shadow-md hover:opacity-90"
                style={{ background: "#00365c" }}
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{ color: "#00365c" }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mt-3 bg-white border border-gray-100 rounded-lg p-5 shadow-xl"
              >
                <div className="space-y-1 mb-5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={cn(
                          "block px-4 py-3 text-[11px] uppercase tracking-wider font-bold rounded-lg transition-colors",
                          isActive
                            ? "text-white"
                            : "text-foreground hover:text-teal hover:bg-secondary"
                        )}
                        style={isActive ? { background: "#00365c", color: "white" } : {}}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <a href="tel:+919782313223"
                    className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-2"
                    style={{ color: "#00365c" }}>
                    <Phone className="w-4 h-4" />
                    +91 97823-13223
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full text-center text-xs uppercase tracking-widest font-bold py-3.5 rounded text-white"
                    style={{ background: "#00365c" }}
                  >
                    Free Consultation
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
