import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://kamsco.in/contact/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kamsco.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://kamsco.in/contact"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://kamsco.in/contact/#webpage",
      "url": "https://kamsco.in/contact",
      "name": "Contact Us | Sector 18 Noida — KAMS & Co. Chartered Accountants",
      "description": "Get in touch with KAMS & Co. Call +91-97823-13223 or email info@kamsco.in for expert taxation, GST, and audit consulting in Sector 18, Noida.",
      "breadcrumb": {
        "@id": "https://kamsco.in/contact/#breadcrumb"
      },
      "mainEntity": {
        "@type": "AccountingService",
        "name": "KAMS & Co. Chartered Accountants",
        "telephone": "+91-97823-13223",
        "email": "info@kamsco.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 18",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        }
      }
    }
  ]
};
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Sector 18, Noida", "Uttar Pradesh - 201301, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 97823-13223 (CA Mohan Lal Sharma)", "+91 98872-22002 (CA Akanksha Tripathi)"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@kamsco.in"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <Layout>
      <SEO
        title="Contact KAMS & Co. | CA Firm in Sector 18, Noida"
        description="Contact KAMS & Co. Chartered Accountants in Sector 18, Noida. Call +91-97823-13223 or email info@kamsco.in for expert taxation, GST, and audit consulting."
        schemaMarkup={contactSchema}
      />
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-hero relative overflow-hidden">
        {/* Background Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60h60V0zM1 59V1h58v58H1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
              Direct Assistance
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mt-4 mb-6 leading-tight">
              Connect With Our Practice
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg leading-relaxed font-sans font-light">
              Reach out directly to arrange an in-person briefing at our Sector 18 Noida office or set up a secure virtual consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Info (Columns 1-4) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <span className="text-accent font-semibold text-[10px] uppercase tracking-[0.25em] block mb-2">Practice Details</span>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-8">
                Office Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-accent/5 border border-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-foreground mb-2">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-xs font-light font-sans leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Grayscale Map Container */}
              <div className="mt-10 rounded border border-border/60 overflow-hidden filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566339693907!2d77.31488327612924!3d28.613939984210715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </motion.div>

            {/* Contact Form (Columns 5-12) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="bg-card border border-border/60 rounded p-8 md:p-10 shadow-sm">
                <h2 className="font-serif text-2xl font-normal text-foreground mb-2">
                  Send Advisory Request
                </h2>
                <p className="text-muted-foreground text-sm font-light mb-8">
                  Submit your message below. A principal partner will evaluate and contact you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      Briefing Request Logged
                    </h3>
                    <p className="text-muted-foreground text-sm font-light mb-8 max-w-sm mx-auto">
                      Thank you. We have recorded your submission and will reach out shortly.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="text-xs uppercase tracking-wider font-semibold rounded-sm"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">First Name *</Label>
                        <Input id="firstName" required placeholder="John" className="rounded-sm border-border/70 focus:border-accent text-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Last Name *</Label>
                        <Input id="lastName" required placeholder="Doe" className="rounded-sm border-border/70 focus:border-accent text-sm" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="rounded-sm border-border/70 focus:border-accent text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" className="rounded-sm border-border/70 focus:border-accent text-sm" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Subject *</Label>
                      <Input id="subject" required placeholder="E.g. Statutory Audit Requirement" className="rounded-sm border-border/70 focus:border-accent text-sm" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Advisory Requirements *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Detail your company structure and regulatory needs..."
                        rows={5}
                        className="rounded-sm border-border/70 focus:border-accent text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-navy-light text-primary-foreground text-xs uppercase tracking-wider font-semibold py-6 rounded-sm active:scale-[0.98] transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Transmitting..."
                      ) : (
                        <>
                          Transmit Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Urgent Assist */}
      <section className="py-20 bg-secondary border-t border-border/40 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="font-serif text-2xl font-light text-foreground mb-2">
            Urgent Briefing Requirements?
          </h2>
          <p className="text-muted-foreground text-sm font-light mb-6 font-sans">
            Connect immediately with our direct director line
          </p>
          <a
            href="tel:+919782313223"
            className="inline-flex items-center gap-2 text-accent font-semibold text-lg hover:underline transition-all"
          >
            <Phone className="w-5 h-5" />
            +91 97823-13223
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
