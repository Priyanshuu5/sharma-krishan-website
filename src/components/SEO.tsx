import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  schemaMarkup?: object;
}

export function SEO({
  title,
  description,
  ogType = "website",
  ogImage = "https://kamsco.in/og-image.jpg",
  schemaMarkup,
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://kamsco.in${location.pathname}`;

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper function to set or create meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Primary & Open Graph & Twitter Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", ogImage);

    setMetaTag("property", "twitter:card", "summary_large_image");
    setMetaTag("property", "twitter:title", title);
    setMetaTag("property", "twitter:description", description);
    setMetaTag("property", "twitter:image", ogImage);
    setMetaTag("property", "twitter:url", canonicalUrl);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 4. Schema JSON-LD Injection
    let schemaScript = document.getElementById("dynamic-schema-jsonld");
    if (schemaMarkup) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        schemaScript.setAttribute("id", "dynamic-schema-jsonld");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaMarkup);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }
  }, [title, description, ogType, ogImage, canonicalUrl, schemaMarkup]);

  return null;
}
