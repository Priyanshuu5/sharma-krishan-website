import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const services = [
  { name: "Audit & Assurance", href: "/services#audit-assurance" },
  { name: "Taxation Services", href: "/services#taxation-services" },
  { name: "Corporate Advisory", href: "/services#corporate-advisory" },
  { name: "Compliance & Regulatory", href: "/services#compliance-regulatory" },
];

const quickLinks = [
  { name: "About / Team", href: "/team" },
  { name: "Our Services", href: "/services" },
  { name: "Help Center", href: "/help-center" },
  { name: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/10">
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 px-2 py-1 bg-white rounded flex items-center justify-center border border-white/20 shadow-sm">
                <img src="/ca-logo.png" alt="CA India Emblem" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold tracking-wider leading-none text-primary-foreground">
                  KAMS & Co.
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-accent mt-0.5">
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs font-sans">
              A diverse team of Chartered Accountants delivering world-class financial services with expertise in taxation, audit, and compliance advisory.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-6 font-sans">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-sans"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-6 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-6 font-sans">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-primary-foreground/40 mb-1">
                    Mohan Lal Sharma
                  </p>
                  <a
                    href="tel:+919782313223"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-sans"
                  >
                    +91-97823-13223
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-primary-foreground/40 mb-1">
                    Akanksha Tripathi
                  </p>
                  <a
                    href="tel:+919887222002"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-sans"
                  >
                    +91-98872-22002
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@kamsco.in"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-sans"
                >
                  info@kamsco.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-xs font-sans">
              © {new Date().getFullYear()} KAMS & Co Chartered Accountants. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                to="/privacy"
                className="text-primary-foreground/40 hover:text-accent text-xs font-sans transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/40 hover:text-accent text-xs font-sans transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
