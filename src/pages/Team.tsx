import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "CA Krishan Kumar Sharma",
    role: "Founder & Managing Partner",
    expertise: "Taxation & Financial Consulting",
    initials: "KS",
    bio: "With over 18 years of experience, CA Krishan Kumar Sharma leads the firm with expertise in taxation, financial planning, and regulatory compliance. A Fellow member of ICAI with specialization in Information Systems Audit.",
    qualifications: ["B.Com", "FCA", "DISA"],
    isFounder: true,
  },
  {
    name: "Priyanshu Sharma",
    role: "Website & AI Automator",
    expertise: "Web Development & Automation",
    initials: "PS",
    bio: "Responsible for the firm's digital presence and implementing AI-powered automation solutions to enhance client services and operational efficiency.",
    qualifications: ["Tech Expert"],
    isFounder: false,
  },
  {
    name: "CA Rajesh Gupta",
    role: "Senior Partner",
    expertise: "GST & Corporate Taxation",
    initials: "RG",
    bio: "Specializes in GST compliance, corporate taxation, and business advisory with a focus on helping businesses optimize their tax structure.",
    qualifications: ["B.Com", "CA"],
    isFounder: false,
  },
  {
    name: "CA Meera Joshi",
    role: "Senior Partner",
    expertise: "Audit & Assurance",
    initials: "MJ",
    bio: "Expert in statutory audits, internal audits, and assurance services with extensive experience in various industries including manufacturing and services.",
    qualifications: ["M.Com", "CA"],
    isFounder: false,
  },
  {
    name: "Amit Kumar",
    role: "Assistant - Accounts & Operations",
    expertise: "Documentation & Support",
    initials: "AK",
    bio: "Assists with accounts management, documentation, and day-to-day operations ensuring smooth client service delivery.",
    qualifications: ["B.Com"],
    isFounder: false,
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Meet Our Experts
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              Our Professional Team
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              A dedicated team of qualified professionals committed to delivering 
              excellence in every engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-navy rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center border-4 border-gold/30">
                    <span className="font-serif text-gold text-5xl font-bold">KS</span>
                  </div>
                  <div className="flex justify-center gap-2 mb-4">
                    {team[0].qualifications.map((q) => (
                      <span key={q} className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>

            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Founder
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2">
                {team[0].name}
              </h2>
              <p className="text-accent font-medium mb-4">{team[0].role}</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {team[0].bio}
              </p>
              <p className="text-foreground font-medium mb-4">
                Expertise: {team[0].expertise}
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:krishan@sharmakrishanandco.com"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
            >
              Our Team Members
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.slice(1).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-serif text-accent text-2xl font-bold">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">{member.expertise}</p>
                  <div className="flex justify-center gap-1 flex-wrap">
                    {member.qualifications.map((q) => (
                      <span
                        key={q}
                        className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented professionals to join our growing team.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-navy-light text-primary-foreground">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
