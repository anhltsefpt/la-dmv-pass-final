import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

/**
 * Dynamically sets <title>, meta description, OG tags, canonical URL,
 * and injects a JSON-LD <script> for structured data.
 */
const useSEO = ({ title, description, canonical, schema }: SEOProps) => {
  useEffect(() => {
    // --- Title ---
    document.title = title;

    // --- Helper: upsert a <meta> tag ---
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr.split("=")[0], attr.split("=")[1] ?? attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]',        'name=description',        description);
    setMeta('meta[property="og:title"]',       'property=og:title',       title);
    setMeta('meta[property="og:description"]', 'property=og:description', description);
    setMeta('meta[name="twitter:title"]',      'name=twitter:title',      title);
    setMeta('meta[name="twitter:description"]','name=twitter:description',description);

    // --- Canonical ---
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // --- JSON-LD structured data ---
    const SCHEMA_ID = "dynamic-schema-org";
    const existing = document.getElementById(SCHEMA_ID);
    if (existing) existing.remove();

    if (schema) {
      const script = document.createElement("script");
      script.id = SCHEMA_ID;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById(SCHEMA_ID);
      if (s) s.remove();
    };
  }, [title, description, canonical, schema]);
};

export default useSEO;
