import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "GlitchLabs - Digital Brutalism & Creative Code Solutions",
  description = "Elite hacker collective specializing in digital brutalism, creative coding, and cutting-edge web experiences. Custom development with controlled chaos and precision.",
  keywords = "digital brutalism, creative coding, web development, glitch effects, custom development, hacker collective, TypeScript, React, avant-garde design",
  image = "https://theglitchlabs.xyz/og-image.jpg",
  path = "",
}) => {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const fullUrl = `https://theglitchlabs.xyz${currentPath}`;

  useEffect(() => {
    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    updateMeta("description", description);
    updateMeta("keywords", keywords);

    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:image", image, true);
    updateMeta("og:url", fullUrl, true);

    updateMeta("twitter:title", title, true);
    updateMeta("twitter:description", description, true);
    updateMeta("twitter:image", image, true);
    updateMeta("twitter:url", fullUrl, true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [title, description, keywords, image, fullUrl]);

  return null;
};

export default SEO;
