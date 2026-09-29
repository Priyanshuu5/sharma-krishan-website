import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const helpCenterSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://kamsco.in/help-center/#breadcrumb",
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
          "name": "Help Center",
          "item": "https://kamsco.in/help-center"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://kamsco.in/help-center/#webpage",
      "url": "https://kamsco.in/help-center",
      "name": "Document Upload Center & Support | KAMS & Co. Chartered Accountants",
      "description": "Securely submit your financial documents, receipts, tax statements, and audit reports to the KAMS & Co. compliance team.",
      "breadcrumb": {
        "@id": "https://kamsco.in/help-center/#breadcrumb"
      }
    }
  ]
};
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceTypes = [
  "Income Tax Filing",
  "GST Registration/Filing",
  "Audit Services",
  "RERA Compliance",
  "Company Registration",
  "Financial Advisory",
  "Other",
];

const HelpCenter = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const validFiles = newFiles.filter((file) => {
        const validTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/jpeg",
          "image/png",
        ];
        const maxSize = 10 * 1024 * 1024; // 10MB
        return validTypes.includes(file.type) && file.size <= maxSize;
      });

      if (validFiles.length !== newFiles.length) {
        toast({
          title: "Some files were skipped",
          description: "Only PDF, DOC, DOCX, JPG, and PNG files under 10MB are allowed.",
          variant: "destructive",
        });
      }

      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Documents Submitted Successfully!",
      description: "We will review your documents and get back to you within 24-48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <SEO
          title="Submission Successful | Document Upload Center - Kamsco"
          description="Your documents have been securely uploaded to Kamsco. We will review and contact you shortly."
          schemaMarkup={helpCenterSchema}
        />
        <section className="pt-32 pb-20 min-h-screen bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
                Submission Successful!
              </h1>
              <p className="text-muted-foreground mb-8">
                Thank you for submitting your documents. Our team will review them and 
                contact you within 24-48 business hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="bg-accent text-accent-foreground hover:bg-gold-dark">
                Submit Another Request
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="Document Upload Center | Secure Support - Kamsco"
        description="Securely upload your documentation for audits, tax filing, and GST compliance reviews. Kamsco handles client documents with strict privacy."
        schemaMarkup={helpCenterSchema}
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
              Secure Support
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mt-4 mb-6 leading-tight">
              Document Transmission
            </h1>
            <p className="text-primary-foreground/75 text-base md:text-lg leading-relaxed font-sans font-light">
              Securely transmit your corporate financial statements, invoices, and audit ledgers directly to our compliance desk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto">
            {/* Info Alert */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent/5 border border-accent/20 rounded p-4 mb-10 flex gap-3"
            >
              <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground font-serif font-semibold text-sm mb-1">Encrypted Advisory Transmission</p>
                <p className="text-muted-foreground text-xs font-light font-sans leading-relaxed">
                  All files are stored inside encrypted repositories and processed with strict client-attorney privilege. <br />
                  Permitted formats: PDF, DOC, DOCX, JPG, PNG (Max size: 10MB per file)
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border/60 rounded p-8 space-y-6 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Full Name *</Label>
                  <Input id="name" required placeholder="Enter your name" className="rounded-sm border-border/70 focus:border-accent text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Email Address *</Label>
                  <Input id="email" type="email" required placeholder="your@email.com" className="rounded-sm border-border/70 focus:border-accent text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Phone Number *</Label>
                  <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="rounded-sm border-border/70 focus:border-accent text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Service Type *</Label>
                  <Select required>
                    <SelectTrigger className="rounded-sm border-border/70 focus:border-accent text-sm">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Description *</Label>
                <Textarea
                  id="description"
                  required
                  placeholder="Detail the contents of your documentation and specific audit parameters..."
                  rows={4}
                  className="rounded-sm border-border/70 focus:border-accent text-sm"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-3">
                <Label className="text-xs uppercase tracking-wider text-foreground/80 font-semibold font-sans">Upload Documents</Label>
                <div className="border border-dashed border-border/80 bg-secondary/30 rounded p-8 text-center hover:border-accent/50 hover:bg-accent/[0.02] transition-colors duration-300">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer block">
                    <Upload className="w-8 h-8 mx-auto text-accent mb-3" />
                    <p className="text-foreground text-sm font-serif font-medium mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-muted-foreground text-xs font-sans font-light">
                      PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
                    </p>
                  </label>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-secondary/80 rounded-sm p-3 border border-border/40"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-accent" />
                          <div>
                            <p className="text-foreground text-xs font-semibold">{file.name}</p>
                            <p className="text-muted-foreground text-[10px] font-sans font-light">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1"
                          aria-label="Remove file"
                        >
                          <AlertCircle className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-navy-light text-primary-foreground text-xs uppercase tracking-wider font-semibold py-6 rounded-sm active:scale-[0.98] transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Transmitting..." : "Submit Documents"}
              </Button>

              <p className="text-muted-foreground text-[10px] text-center font-sans font-light">
                By submitting, you consent to our secure client data policy and terms of service.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HelpCenter;
