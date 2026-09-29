import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function prerender() {
  console.log('🚀 Starting SSG Prerendering Step...');

  const templatePath = path.resolve(rootDir, 'dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found! Run vite build first.');
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const ssrModule = await import(path.resolve(rootDir, 'dist-ssr/main-ssr.js'));

  const routes = [
    {
      url: '/',
      outPath: 'dist/index.html',
      title: 'KAMS & Co. | Chartered Accountants in Noida — Taxation, Audit & Advisory',
      description: 'KAMS & Co. Chartered Accountants — Expert CA services in taxation, audit, GST compliance, corporate advisory, and international financial planning in Noida and worldwide.',
      keywords: 'chartered accountant, CA firm Noida, tax consultant, GST services, RERA compliance, audit services, financial advisory, Noida, Delhi NCR',
      canonicalUrl: 'https://kamsco.in/',
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://kamsco.in/#website",
            "url": "https://kamsco.in/",
            "name": "KAMS & Co. Chartered Accountants",
            "description": "Expert Chartered Accountants providing taxation, audit, GST compliance, corporate advisory, and financial advisory services worldwide.",
            "publisher": { "@id": "https://kamsco.in/#organization" },
            "inLanguage": "en-US"
          },
          {
            "@type": "AccountingService",
            "@id": "https://kamsco.in/#organization",
            "name": "KAMS & Co. Chartered Accountants",
            "alternateName": "Kamsco",
            "url": "https://kamsco.in/",
            "logo": "https://kamsco.in/ca-logo.webp",
            "image": "https://kamsco.in/ca-logo.webp",
            "telephone": "+91-97823-13223",
            "email": "info@kamsco.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 18",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.6139,
              "longitude": 77.3149
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "10:00",
                "closes": "14:00"
              }
            ],
            "areaServed": ["Noida", "Delhi NCR", "India", "Worldwide"],
            "priceRange": "$$",
            "founders": [
              { "@type": "Person", "name": "CA Mohan Lal Sharma", "jobTitle": "Partner, FCA" },
              { "@type": "Person", "name": "CA Akanksha Tripathi", "jobTitle": "Partner, ACA" },
              { "@type": "Person", "name": "CA Komal Sharma", "jobTitle": "Partner, ACA" },
              { "@type": "Person", "name": "CA Krishan Kumar Sharma", "jobTitle": "Partner, ACA" }
            ]
          }
        ]
      }
    },
    {
      url: '/services',
      outPath: 'dist/services/index.html',
      title: 'Services | KAMS & Co. Chartered Accountants',
      description: 'Comprehensive CA services from KAMS & Co.: Audit & Assurance, Corporate Advisory, Taxation Services, and Compliance & Regulatory management for businesses worldwide.',
      keywords: 'audit services, tax planning, corporate advisory, GST registration, Ind AS compliance, internal audit, Noida CA',
      canonicalUrl: 'https://kamsco.in/services',
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://kamsco.in/services/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kamsco.in/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kamsco.in/services" }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://kamsco.in/services/#webpage",
            "url": "https://kamsco.in/services",
            "name": "Services | KAMS & Co. Chartered Accountants",
            "description": "Comprehensive CA services: Audit & Assurance, Corporate Advisory, Taxation, and Compliance & Regulatory services for businesses worldwide.",
            "breadcrumb": { "@id": "https://kamsco.in/services/#breadcrumb" }
          },
          {
            "@type": "OfferCatalog",
            "@id": "https://kamsco.in/services/#catalog",
            "name": "Chartered Accountancy & Advisory Services",
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Audit & Assurance Services",
                "description": "Statutory audits, internal audits, compliance reviews, risk assessment, and fraud prevention frameworks.",
                "provider": { "@id": "https://kamsco.in/#organization" }
              },
              {
                "@type": "Service",
                "name": "Corporate Advisory & Strategic Planning",
                "description": "M&A advisory, business structuring, fundraising, IPO readiness, and cross-border consulting.",
                "provider": { "@id": "https://kamsco.in/#organization" }
              },
              {
                "@type": "Service",
                "name": "Taxation Services",
                "description": "Income tax planning, corporate tax compliance, GST advisory, and international tax structuring.",
                "provider": { "@id": "https://kamsco.in/#organization" }
              },
              {
                "@type": "Service",
                "name": "Compliance & Regulatory Services",
                "description": "ROC filings, Ind AS and US GAAP compliance, regulatory reporting, and offshore banking advisory.",
                "provider": { "@id": "https://kamsco.in/#organization" }
              }
            ]
          }
        ]
      }
    },
    {
      url: '/team',
      outPath: 'dist/team/index.html',
      title: 'Our Expert CA Team | KAMS & Co. Chartered Accountants',
      description: 'Meet the four expert Chartered Accountant partners at KAMS & Co. — CA Mohan Lal Sharma, CA Akanksha Tripathi, CA Komal Sharma, and CA Krishan Kumar Sharma.',
      keywords: 'CA Mohan Lal Sharma, CA Akanksha Tripathi, CA Komal Sharma, CA Krishan Kumar Sharma, CA partners Noida',
      canonicalUrl: 'https://kamsco.in/team',
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://kamsco.in/team/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kamsco.in/" },
              { "@type": "ListItem", "position": 2, "name": "Our Team", "item": "https://kamsco.in/team" }
            ]
          },
          {
            "@type": "AboutPage",
            "@id": "https://kamsco.in/team/#webpage",
            "url": "https://kamsco.in/team",
            "name": "Our Expert CA Team | KAMS & Co. Chartered Accountants",
            "description": "Meet the Chartered Accountant partners at KAMS & Co. — CA Mohan Lal Sharma, CA Akanksha Tripathi, CA Komal Sharma, and CA Krishan Kumar Sharma.",
            "breadcrumb": { "@id": "https://kamsco.in/team/#breadcrumb" }
          },
          {
            "@type": "Person",
            "name": "CA Mohan Lal Sharma",
            "jobTitle": "Partner, FCA",
            "worksFor": { "@id": "https://kamsco.in/#organization" },
            "telephone": "+91-97823-13223",
            "knowsAbout": ["GST Consultancy", "Accounting Advisory", "Income Tax Planning", "Tax Authority Representation"]
          },
          {
            "@type": "Person",
            "name": "CA Akanksha Tripathi",
            "jobTitle": "Partner, ACA",
            "worksFor": { "@id": "https://kamsco.in/#organization" },
            "telephone": "+91-98872-22002",
            "knowsAbout": ["Financial Auditing", "Financial Statement Preparation", "Cost Controlling", "Internal Control Systems"]
          },
          {
            "@type": "Person",
            "name": "CA Komal Sharma",
            "jobTitle": "Partner, ACA",
            "worksFor": { "@id": "https://kamsco.in/#organization" },
            "knowsAbout": ["International Taxation", "Cross-Border Accounting", "Offshore Account Management"]
          },
          {
            "@type": "Person",
            "name": "CA Krishan Kumar Sharma",
            "jobTitle": "Partner, ACA",
            "worksFor": { "@id": "https://kamsco.in/#organization" },
            "knowsAbout": ["Corporate Tax Compliance", "Financial Advisory", "Business Structuring", "Regulatory Compliance"]
          }
        ]
      }
    },
    {
      url: '/help-center',
      outPath: 'dist/help-center/index.html',
      title: 'Document Upload Center | Secure Support — KAMS & Co.',
      description: 'Securely upload your documentation for audits, tax filing, and GST compliance reviews. KAMS & Co. handles client documents with strict privacy.',
      keywords: 'document submission, CA help center, secure document upload, tax documents upload',
      canonicalUrl: 'https://kamsco.in/help-center',
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://kamsco.in/help-center/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kamsco.in/" },
              { "@type": "ListItem", "position": 2, "name": "Help Center", "item": "https://kamsco.in/help-center" }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://kamsco.in/help-center/#webpage",
            "url": "https://kamsco.in/help-center",
            "name": "Document Upload Center & Support | KAMS & Co. Chartered Accountants",
            "description": "Securely submit your financial documents, receipts, tax statements, and audit reports to the KAMS & Co. compliance team.",
            "breadcrumb": { "@id": "https://kamsco.in/help-center/#breadcrumb" }
          }
        ]
      }
    },
    {
      url: '/contact',
      outPath: 'dist/contact/index.html',
      title: 'Contact KAMS & Co. | CA Firm in Sector 18, Noida',
      description: 'Contact KAMS & Co. Chartered Accountants in Sector 18, Noida. Call +91-97823-13223 or email info@kamsco.in for expert taxation, GST, and audit consulting.',
      keywords: 'contact CA Noida, Chartered Accountant Sector 18 Noida, CA phone number Noida, CA office Noida',
      canonicalUrl: 'https://kamsco.in/contact',
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://kamsco.in/contact/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kamsco.in/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://kamsco.in/contact" }
            ]
          },
          {
            "@type": "ContactPage",
            "@id": "https://kamsco.in/contact/#webpage",
            "url": "https://kamsco.in/contact",
            "name": "Contact Us | Sector 18 Noida — KAMS & Co. Chartered Accountants",
            "description": "Get in touch with KAMS & Co. Call +91-97823-13223 or email info@kamsco.in for expert taxation, GST, and audit consulting in Sector 18, Noida.",
            "breadcrumb": { "@id": "https://kamsco.in/contact/#breadcrumb" },
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
      }
    },
    {
      url: '/privacy',
      outPath: 'dist/privacy/index.html',
      title: 'Privacy Policy | KAMS & Co. Chartered Accountants',
      description: 'Privacy policy for KAMS & Co. Chartered Accountants. We protect client financial data, audit records, and tax documentation under strict confidentiality.',
      keywords: 'privacy policy, client confidentiality, CA firm data privacy',
      canonicalUrl: 'https://kamsco.in/privacy',
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://kamsco.in/privacy/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kamsco.in/" },
              { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://kamsco.in/privacy" }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://kamsco.in/privacy/#webpage",
            "url": "https://kamsco.in/privacy",
            "name": "Privacy Policy | KAMS & Co. Chartered Accountants",
            "description": "Privacy policy for KAMS & Co. Chartered Accountants detailing client confidentiality, data handling, and regulatory compliance standards.",
            "breadcrumb": { "@id": "https://kamsco.in/privacy/#breadcrumb" }
          }
        ]
      }
    },
    {
      url: '/terms',
      outPath: 'dist/terms/index.html',
      title: 'Terms of Service | KAMS & Co. Chartered Accountants',
      description: 'Terms of Service for KAMS & Co. Chartered Accountants detailing professional service terms, engagement scopes, and website usage.',
      keywords: 'terms of service, CA engagement terms, legal terms',
      canonicalUrl: 'https://kamsco.in/terms',
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://kamsco.in/terms/#breadcrumb",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kamsco.in/" },
              { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://kamsco.in/terms" }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://kamsco.in/terms/#webpage",
            "url": "https://kamsco.in/terms",
            "name": "Terms of Service | KAMS & Co. Chartered Accountants",
            "description": "Terms of Service for KAMS & Co. Chartered Accountants governing professional engagement, site usage, and advisory services.",
            "breadcrumb": { "@id": "https://kamsco.in/terms/#breadcrumb" }
          }
        ]
      }
    }
  ];

  for (const route of routes) {
    const renderedApp = ssrModule.render(route.url);

    let html = template;

    // Replace <div id="root"></div> with rendered markup
    html = html.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);

    // Replace <title>
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // Replace meta title, description, keywords
    html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);
    html = html.replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${route.keywords}" />`);

    // Replace robots directive
    if (html.includes('<meta name="robots"')) {
      html = html.replace(/<meta name="robots" content=".*?" \/>/, `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`);
    } else {
      html = html.replace('</head>', `  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />\n  </head>`);
    }

    // Replace OpenGraph meta tags
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonicalUrl}" />`);

    // Replace Twitter meta tags
    html = html.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${route.title}" />`);
    html = html.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${route.description}" />`);
    html = html.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${route.canonicalUrl}" />`);

    // Replace canonical link
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonicalUrl}" />`);

    // Inject JSON-LD Schema
    const schemaScript = `  <script type="application/ld+json" id="static-schema-jsonld">\n${JSON.stringify(route.schema, null, 2)}\n  </script>`;
    html = html.replace('</head>', `${schemaScript}\n  </head>`);

    const fullOutPath = path.resolve(rootDir, route.outPath);
    const dir = path.dirname(fullOutPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullOutPath, html, 'utf-8');
    console.log(`  ✓ Generated static prerendered HTML: ${route.outPath}`);
  }

  // Cleanup temporary SSR dist
  fs.rmSync(path.resolve(rootDir, 'dist-ssr'), { recursive: true, force: true });
  console.log('🎉 SSG Prerendering complete for all public 200 OK routes!');
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
