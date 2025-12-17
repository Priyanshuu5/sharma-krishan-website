import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className={cn(
              "font-serif text-xl font-bold transition-colors",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}>
              Sharma Krishan & Co.
            </span>
            <span className={cn(
              "text-xs tracking-wider transition-colors",
              isScrolled ? "text-accent" : "text-gold-light"
            )}>
              Chartered Accountants
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === link.href
                    ? "text-accent"
                    : isScrolled
                    ? "text-foreground"
                    : "text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-dark shadow-gold">
              <Link to="/contact">Consult Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium transition-colors hover:bg-muted rounded-md",
                    location.pathname === link.href
                      ? "text-accent bg-muted"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-gold-dark">
                  <Link to="/contact">Consult Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
